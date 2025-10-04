import { Card } from "@/components/ui/card";
import { Brain, Eye, GitCompare, Upload, FileText, Shield, Zap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Model Interpretation",
      description: "Deep dive into how your models make decisions with comprehensive visualizations and explanations.",
      details: ["Feature importance analysis", "Decision boundary visualization", "Prediction confidence scores"]
    },
    {
      icon: Eye,
      title: "SHAP Integration",
      description: "Leverage SHAP values to understand feature contributions and model behavior.",
      details: ["Summary plots", "Dependence plots", "Force plots", "Waterfall charts"]
    },
    {
      icon: GitCompare,
      title: "Model Comparison",
      description: "Compare multiple models side-by-side with interactive metrics and visualizations.",
      details: ["Performance metrics comparison", "ROC curve overlay", "Metric benchmarking"]
    },
    {
      icon: Upload,
      title: "Easy Upload",
      description: "Simple file upload system supporting various model and data formats.",
      details: [".pkl and .joblib models", "CSV datasets", "Automatic validation"]
    },
    {
      icon: FileText,
      title: "Export & Reports",
      description: "Generate publication-ready reports and visualizations.",
      details: ["PDF export", "PNG export", "Customizable templates"]
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data stays secure with local processing and optional authentication.",
      details: ["JWT authentication", "Encrypted storage", "Privacy-first design"]
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description: "Optimized backend with async support for quick analysis.",
      details: ["FastAPI backend", "Redis caching", "Parallel processing"]
    },
    {
      icon: Sparkles,
      title: "Modern UI",
      description: "Beautiful, responsive interface built with the latest web technologies.",
      details: ["Dark/Light mode", "Interactive charts", "Smooth animations"]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Features
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools for visualizing, explaining, and understanding your machine learning models
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
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
                <Card className="p-8 h-full hover:shadow-glow transition-all border-border/50 bg-gradient-card">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow flex-shrink-0">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-[72px]">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <Card className="p-12 bg-gradient-card shadow-glow">
            <h2 className="text-3xl font-bold mb-8 text-center">Built With Modern Tech</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Frontend</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Next.js 14 + TypeScript</li>
                  <li>• Tailwind CSS + Shadcn/ui</li>
                  <li>• Recharts + D3.js</li>
                  <li>• Framer Motion</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Backend</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• FastAPI + Python</li>
                  <li>• scikit-learn + SHAP</li>
                  <li>• PostgreSQL + Redis</li>
                  <li>• JWT Authentication</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">DevOps</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Docker + Docker Compose</li>
                  <li>• GitHub Actions CI/CD</li>
                  <li>• Vercel + Railway</li>
                  <li>• Sentry Monitoring</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
