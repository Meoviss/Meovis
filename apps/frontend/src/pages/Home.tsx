import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Eye, Zap, GitCompare, BarChart3, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Visual Performance",
      description: "Interactive confusion matrices, ROC curves, and precision-recall visualizations"
    },
    {
      icon: Eye,
      title: "SHAP Explanations",
      description: "Understand feature importance and model decisions with visual SHAP analysis"
    },
    {
      icon: GitCompare,
      title: "Model Comparison",
      description: "Compare multiple models side-by-side with detailed metrics and visualizations"
    },
    {
      icon: Zap,
      title: "Fast & Interactive",
      description: "Real-time analysis with modern, responsive interface built for speed"
    },
    {
      icon: Brain,
      title: "Advanced Analytics",
      description: "Deep insights into model performance with actionable recommendations"
    },
    {
      icon: Sparkles,
      title: "Export Ready",
      description: "Generate beautiful reports in PDF or PNG for presentations"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero -z-10" />
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Open Source ML Visualization
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
              Understand Your ML Models, Visually
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              An interactive visual assistant for explaining, comparing, and presenting your machine learning models with clarity
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" asChild className="shadow-glow">
                <Link to="/demo">Try Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Animated Mascot Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 mx-auto max-w-4xl"
          >
            <Card className="p-8 shadow-glow border-primary/20 bg-gradient-card">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-primary flex items-center justify-center animate-float">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Meet Echo</h3>
                <p className="text-muted-foreground">
                  Your curious companion on the journey to understanding ML models
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to visualize, explain, and compare your machine learning models
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-glow transition-shadow border-border/50 bg-card/50 backdrop-blur">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-12 text-center shadow-glow border-primary/20 bg-gradient-card">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Try the interactive demo to see how Meovis can help you understand your models better
              </p>
              <Button size="lg" asChild className="shadow-glow">
                <Link to="/demo">Explore Demo</Link>
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
