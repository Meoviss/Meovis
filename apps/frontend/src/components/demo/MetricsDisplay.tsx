import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from "recharts";
import { TrendingUp, Target, Zap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const MetricsDisplay = () => {
  const classMetrics = [
    { name: "Class A", precision: 85, recall: 88, f1: 86.5 },
    { name: "Class B", precision: 92, recall: 89, f1: 90.5 },
    { name: "Class C", precision: 88, recall: 91, f1: 89.5 },
    { name: "Class D", precision: 83, recall: 86, f1: 84.5 }
  ];

  const rocData = Array.from({ length: 20 }, (_, i) => ({
    fpr: i * 0.05,
    tpr: Math.min(1, i * 0.05 + Math.random() * 0.3)
  })).sort((a, b) => a.fpr - b.fpr);

  const metrics = [
    { icon: Target, label: "Accuracy", value: "87.5%", color: "text-primary" },
    { icon: TrendingUp, label: "Precision", value: "87.0%", color: "text-accent" },
    { icon: Zap, label: "Recall", value: "88.5%", color: "text-primary" },
    { icon: CheckCircle2, label: "F1 Score", value: "87.7%", color: "text-accent" }
  ];

  return (
    <div className="space-y-6">
      {/* Key Metrics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-glow transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${metric.color}`} />
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">{metric.label}</span>
                </div>
                <div className="text-3xl font-bold">{metric.value}</div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Per-Class Metrics */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Per-Class Performance</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={classMetrics}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px"
              }}
            />
            <Bar dataKey="precision" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
            <Bar dataKey="recall" fill="hsl(var(--accent))" radius={[8, 8, 0, 0]} />
            <Bar dataKey="f1" fill="hsl(var(--primary-glow))" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* ROC Curve */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">ROC Curve</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={rocData}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
            <XAxis 
              dataKey="fpr" 
              label={{ value: "False Positive Rate", position: "insideBottom", offset: -5 }}
            />
            <YAxis 
              label={{ value: "True Positive Rate", angle: -90, position: "insideLeft" }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px"
              }}
              formatter={(value: number) => value.toFixed(3)}
            />
            <Area 
              type="monotone" 
              dataKey="tpr" 
              stroke="hsl(var(--primary))" 
              fill="hsl(var(--primary))"
              fillOpacity={0.2}
              strokeWidth={2}
            />
            <Line 
              type="linear" 
              dataKey="fpr" 
              stroke="hsl(var(--muted-foreground))" 
              strokeDasharray="5 5"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
        <p className="text-sm text-muted-foreground mt-4">
          AUC Score: 0.924 - Excellent discrimination between classes
        </p>
      </Card>
    </div>
  );
};
