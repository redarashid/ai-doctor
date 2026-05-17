interface AnalyzeButtonProps {
  count: number;
  label: string;
}

export default function AnalyzeButton({ count, label }: AnalyzeButtonProps) {
  return (
    <button
      disabled={count === 0}
      className={
        "mt-7 h-[56px] w-full rounded-2xl text-base font-semibold text-white transition-all duration-300 " +
        (count > 0
          ? "bg-gradient-to-r from-blue-500 to-cyan-400 hover:shadow-lg hover:scale-[1.01]"
          : "cursor-not-allowed bg-gray-300")
      }>
      {label} ({count})
    </button>
  );
}
