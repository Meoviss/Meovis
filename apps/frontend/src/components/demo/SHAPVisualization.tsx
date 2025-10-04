import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { motion } from "framer-motion";

export const SHAPVisualization = () => {
  const shapData = [
    { feature: "Feature A", importance: 0.28, impact: "positive" },
    { feature: "Feature B", importance: 0.22, impact: "positive" },
    { feature: "Feature C", importance: -0.18, impact: "negative" },
    { feature: "Feature D", importance: 0.15, impact: "positive" },
    { feature: "Feature E", importance: -0.12, impact: "negative" },
    { feature: "Feature F", importance: 0.08, impact: "positive" },
    { feature: "Feature G", importance: -0.05, impact: "negative" }
  ];

  return (
    <Card className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">SHAP Feature Importance</h2>
        <p className="text-muted-foreground">
          Understanding how each feature contributes to model predictions
        </p>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={shapData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
          <XAxis type="number" domain={[-0.3, 0.3]} />
          <YAxis dataKey="feature" type="category" width={100} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "hsl(var(--card))", 
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px"
            }}
            formatter={(value: number) => value.toFixed(3)}
          />
          <Bar dataKey="importance" radius={[0, 4, 4, 0]}>
            {shapData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.impact === "positive" ? "hsl(var(--primary))" : "hsl(var(--destructive))"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-6 space-y-4">
        <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            Top Positive Contributors
          </h3>
          <p className="text-sm text-muted-foreground">
            Features A and B have the strongest positive impact on predictions, contributing significantly to the model's decision-making process.
          </p>
        </div>

        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            Top Negative Contributors
          </h3>
          <p className="text-sm text-muted-foreground">
            Feature C shows negative impact, potentially indicating inverse relationships with the target variable.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-4 bg-muted/30 rounded-lg"
        >
          <h3 className="font-semibold mb-2">Interpretation Guide</h3>
          <p className="text-sm text-muted-foreground">
            SHAP values represent each feature's contribution to pushing the model output from the base value (average prediction) to the actual prediction. 
            Positive values increase the prediction, while negative values decrease it.
          </p>
        </motion.div>
      </div>
    </Card>
  );
};
