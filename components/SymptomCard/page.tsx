// components/SymptomCard.tsx

interface Props {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export const SymptomCard = ({ label, isSelected, onClick }: Props) => (
  <button
    onClick={onClick}
    className={`p-4 border rounded-lg text-left transition-all ${
      isSelected
        ? "border-blue-500 bg-blue-50 text-blue-700 font-medium"
        : "border-gray-200 hover:bg-gray-50 text-gray-700"
    }`}>
    {label}
  </button>
);
