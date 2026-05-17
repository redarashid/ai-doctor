import { translateSymptom } from "./translations";

interface SymptomListProps {
  symptoms: string[];
  selectedSymptoms: string[];
  isAR: boolean;
  onToggle: (symptom: string) => void;
}

export default function SymptomList({
  symptoms,
  selectedSymptoms,
  isAR,
  onToggle,
}: SymptomListProps) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {symptoms.map((symptom) => {
        const active = selectedSymptoms.includes(symptom);

        return (
          <button
            key={symptom}
            onClick={() => onToggle(symptom)}
            className={
              "rounded-2xl border px-4 py-3 text-start text-base font-medium transition-all duration-200 " +
              (active
                ? "border-blue-500 bg-blue-50 text-blue-700 shadow-sm"
                : "border-gray-200 bg-white text-[#111827] hover:border-blue-300 hover:bg-blue-50 hover:-translate-y-1")
            }>
            {translateSymptom(symptom, isAR)}
          </button>
        );
      })}
    </div>
  );
}
