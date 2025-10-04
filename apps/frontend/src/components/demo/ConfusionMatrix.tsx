import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export const ConfusionMatrix = () => {
  // Sample confusion matrix data
  const matrix = [
    [85, 3, 2, 10],
    [4, 92, 3, 1],
    [2, 5, 88, 5],
    [8, 2, 7, 83]
  ];
  
  const classes = ["Class A", "Class B", "Class C", "Class D"];
  const maxValue = Math.max(...matrix.flat());

  const getColorIntensity = (value: number) => {
    const intensity = (value / maxValue) * 100;
    return `hsl(245 58% ${100 - intensity * 0.5}%)`;
  };

  return (
    <Card className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Confusion Matrix</h2>
        <p className="text-muted-foreground">
          Visualize classification performance across all classes
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          <div className="flex gap-2 mb-2 pl-24">
            <div className="text-sm font-semibold text-center mb-4 w-full col-span-4">
              Predicted Label
            </div>
          </div>
          
          <div className="flex gap-2">
            <div className="flex flex-col justify-center gap-2 mr-2">
              <div className="text-sm font-semibold -rotate-90 whitespace-nowrap h-full flex items-center">
                True Label
              </div>
            </div>
            
            <div className="flex-1">
              <div className="grid grid-cols-5 gap-2">
                <div />
                {classes.map((cls) => (
                  <div key={cls} className="text-sm font-semibold text-center p-2">
                    {cls}
                  </div>
                ))}
                
                {matrix.map((row, i) => (
                  <>
                    <div key={`label-${i}`} className="text-sm font-semibold flex items-center justify-end pr-2">
                      {classes[i]}
                    </div>
                    {row.map((value, j) => (
                      <motion.div
                        key={`${i}-${j}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: (i * 4 + j) * 0.05 }}
                        className="aspect-square rounded-lg flex items-center justify-center text-lg font-bold shadow-sm hover:shadow-glow transition-shadow cursor-pointer"
                        style={{
                          backgroundColor: getColorIntensity(value),
                          color: value > maxValue * 0.6 ? "white" : "hsl(var(--foreground))"
                        }}
                      >
                        {value}
                      </motion.div>
                    ))}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold mb-2">Interpretation</h3>
        <p className="text-sm text-muted-foreground">
          The confusion matrix shows strong diagonal values, indicating good classification performance. 
          Some misclassification occurs between Class A and Class D, suggesting potential feature overlap.
        </p>
      </div>
    </Card>
  );
};
