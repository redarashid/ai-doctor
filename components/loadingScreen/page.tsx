import { useState, useEffect } from "react";
import { Brain, Sparkles } from "lucide-react";
import { Progress } from "../../components/ui/progress";

const steps = [
  "Processing symptoms",
  "Analyzing patterns",
  "Generating insights",
];

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  const activeStep = progress > 66 ? 2 : progress > 33 ? 1 : 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 0.5;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      {/* Brain Icon */}
      <div className="relative mb-10">
        <div className="absolute inset-0 rounded-full bg-accent blur-2xl scale-150 opacity-60" />
        <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-primary/15">
            <div className="relative">
              <Brain className="h-12 w-12 text-primary" strokeWidth={1.5} />
              <Sparkles className="absolute -top-2 -left-2 h-5 w-5 text-primary animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        Analyzing Your Symptoms
      </h1>
      <p className="mb-10 text-muted-foreground">
        Our AI is processing your information...
      </p>

      {/* Steps */}
      <div className="mb-10 space-y-4">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-3">
            <div
              className={`h-2.5 w-2.5 rounded-full transition-colors duration-500 ${
                i <= activeStep ? "bg-primary" : "bg-muted-foreground/30"
              }`}
            />
            <span
              className={`text-base transition-colors duration-500 ${
                i <= activeStep
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              }`}>
              {step}
            </span>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-lg">
        <Progress value={progress} className="h-2.5" />
      </div>
    </div>
  );
};

export default LoadingScreen;
