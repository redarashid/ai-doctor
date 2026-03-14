import { useEffect, useState } from "react";
import { Brain, Sparkles } from "lucide-react";

const steps = [
  "Processing symptoms",
  "Analyzing patterns",
  "Generating insights",
];

interface LoadingScreenProps {
  onComplete?: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
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

  useEffect(() => {
    if (progress >= 100 && onComplete) {
      const timeout = setTimeout(onComplete, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      {/* AI Icon */}
      <div className="relative mb-10">
        <div className="absolute inset-0 scale-150 rounded-full bg-blue-200 blur-2xl" />

        <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-blue-100 ring-2 ring-blue-300 shadow-xl">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-200 ring-1 ring-blue-300">
            <div className="relative">
              <Brain className="h-12 w-12 text-blue-600" strokeWidth={2} />
              <Sparkles className="absolute -left-2 -top-2 h-5 w-5 animate-pulse text-blue-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Title */}
      <h1 className="mb-2 text-3xl font-bold text-gray-900">
        Analyzing Your Symptoms
      </h1>

      <p className="mb-10 text-gray-500">
        Our AI is processing your information...
      </p>

      {/* Steps */}
      <div className="mb-10 w-full max-w-md space-y-4">
        {steps.map((step, i) => {
          const isDone = i <= activeStep;

          return (
            <div key={step} className="flex items-center gap-3">
              <div
                className={`h-3.5 w-3.5 rounded-full border-2 transition-all duration-300 ${
                  isDone
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300 bg-white"
                }`}
              />

              <span
                className={`text-base transition-colors duration-300 ${
                  isDone ? "font-semibold text-gray-900" : "text-gray-400"
                }`}>
                {step}
              </span>
            </div>
          );
        })}
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-md">
        <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-blue-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-2 text-center text-sm font-medium text-gray-700">
          {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
