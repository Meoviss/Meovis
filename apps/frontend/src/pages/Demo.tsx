import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, BarChart3, TrendingUp, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { ConfusionMatrix } from "@/components/demo/ConfusionMatrix";
import { MetricsDisplay } from "@/components/demo/MetricsDisplay";
import { SHAPVisualization } from "@/components/demo/SHAPVisualization";
import { ModelComparison } from "@/components/demo/ModelComparison";

const Demo = () => {
  const [activeTab, setActiveTab] = useState("metrics");

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">Interactive Demo</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Explore ML model visualizations with sample data
          </p>

          {/* Upload Section */}
          <Card className="p-6 mb-8 border-dashed border-2 hover:border-primary/50 transition-colors cursor-pointer">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Upload className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Upload Your Model & Data</h3>
                <p className="text-sm text-muted-foreground">
                  Drop your .pkl/.joblib model and .csv dataset here
                </p>
              </div>
              <Button variant="outline">Browse Files</Button>
            </div>
          </Card>
        </motion.div>

        {/* Visualization Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
            <TabsTrigger value="metrics" className="gap-2">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Metrics</span>
            </TabsTrigger>
            <TabsTrigger value="confusion" className="gap-2">
              <Layers className="w-4 h-4" />
              <span className="hidden sm:inline">Confusion Matrix</span>
            </TabsTrigger>
            <TabsTrigger value="shap" className="gap-2">
              <TrendingUp className="w-4 h-4" />
              <span className="hidden sm:inline">SHAP Analysis</span>
            </TabsTrigger>
            <TabsTrigger value="compare" className="gap-2">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Compare Models</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="metrics" className="space-y-6">
            <MetricsDisplay />
          </TabsContent>

          <TabsContent value="confusion" className="space-y-6">
            <ConfusionMatrix />
          </TabsContent>

          <TabsContent value="shap" className="space-y-6">
            <SHAPVisualization />
          </TabsContent>

          <TabsContent value="compare" className="space-y-6">
            <ModelComparison />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Demo;
