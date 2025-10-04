import { Card } from "@/components/ui/card";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from "recharts";
import { CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";

export const ModelComparison = () => {
  const comparisonData = [
    { metric: "Accuracy", modelA: 87.5, modelB: 85.2, modelC: 89.1 },
    { metric: "Precision", modelA: 87.0, modelB: 86.5, modelC: 88.5 },
    { metric: "Recall", modelA: 88.5, modelB: 84.0, modelC: 89.8 },
    { metric: "F1 Score", modelA: 87.7, modelB: 85.2, modelC: 89.1 },
    { metric: "AUC", modelA: 92.4, modelB: 90.1, modelC: 93.2 },
    { metric: "Speed", modelA: 78.0, modelB: 95.0, modelC: 65.0 }
  ];

  const models = [
    {
      name: "Random Forest",
      color: "hsl(var(--primary))",
      accuracy: "87.5%",
      speed: "Medium",
      pros: ["Good accuracy", "Handles non-linear data", "Feature importance"],
      cons: ["Slower inference", "Memory intensive"]
    },
    {
      name: "Gradient Boosting",
      color: "hsl(var(--accent))",
      accuracy: "89.1%",
      speed: "Slow",
      pros: ["Highest accuracy", "Robust to outliers", "Excellent performance"],
      cons: ["Slower training", "Risk of overfitting"]
    },
    {
      name: "Logistic Regression",
      color: "hsl(var(--primary-glow))",
      accuracy: "85.2%",
      speed: "Fast",
      pros: ["Very fast", "Interpretable", "Low memory"],
      cons: ["Lower accuracy", "Assumes linearity"]
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Model Performance Comparison</h2>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={comparisonData}>
            <PolarGrid stroke="hsl(var(--border))" />
            <PolarAngleAxis dataKey="metric" />
            <PolarRadiusAxis angle={90} domain={[0, 100]} />
            <Radar 
              name="Random Forest" 
              dataKey="modelA" 
              stroke={models[0].color}
              fill={models[0].color}
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Radar 
              name="Gradient Boosting" 
              dataKey="modelC" 
              stroke={models[1].color}
              fill={models[1].color}
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Radar 
              name="Logistic Regression" 
              dataKey="modelB" 
              stroke={models[2].color}
              fill={models[2].color}
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        {models.map((model, index) => (
          <motion.div
            key={model.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-4 h-4 rounded-full" 
                  style={{ backgroundColor: model.color }}
                />
                <h3 className="text-xl font-bold">{model.name}</h3>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Accuracy</span>
                  <span className="font-semibold">{model.accuracy}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Speed</span>
                  <span className="font-semibold">{model.speed}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-primary">Advantages</h4>
                  <ul className="space-y-1">
                    {model.pros.map((pro) => (
                      <li key={pro} className="text-sm flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-destructive">Limitations</h4>
                  <ul className="space-y-1">
                    {model.cons.map((con) => (
                      <li key={con} className="text-sm flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="p-6 bg-muted/30">
        <h3 className="font-semibold mb-2">Recommendation</h3>
        <p className="text-sm text-muted-foreground">
          For production deployment, <strong className="text-foreground">Gradient Boosting</strong> is recommended 
          due to its superior accuracy (89.1%). However, if inference speed is critical, 
          <strong className="text-foreground"> Logistic Regression</strong> offers a good balance with acceptable accuracy 
          and significantly faster prediction times.
        </p>
      </Card>
    </div>
  );
};
