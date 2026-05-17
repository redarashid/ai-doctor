import { categoryIcons } from "./data";
import { translateCategory } from "./translations";
import type { Category } from "./types";

interface CategoryCardProps {
  category: Category;
  active: boolean;
  isAR: boolean;
  onSelect: (category: Category) => void;
}

export default function CategoryCard({
  category,
  active,
  isAR,
  onSelect,
}: CategoryCardProps) {
  const Icon = categoryIcons[category];

  return (
    <button
      onClick={() => onSelect(category)}
      className={
        "flex min-h-[120px] items-center rounded-[22px] border bg-white p-5 text-start transition-all duration-300 " +
        (active
          ? "scale-[1.01] border-blue-500 bg-blue-50 shadow-sm"
          : "border-gray-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-sm")
      }>
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-blue-50 p-2">
          <Icon className="size-6 text-blue-500" />
        </div>

        <h2 className="text-[20px] font-semibold text-[#111827]">
          {translateCategory(category, isAR)}
        </h2>
      </div>
    </button>
  );
}
