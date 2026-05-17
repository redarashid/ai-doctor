import { categoriesEN } from "./types";
import type { Category } from "./types";
import CategoryCard from "./CategoryCard";

interface CategoryGridProps {
  selectedCategory: Category | "";
  isAR: boolean;
  onSelect: (category: Category) => void;
}

export default function CategoryGrid({
  selectedCategory,
  isAR,
  onSelect,
}: CategoryGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {categoriesEN.map((category) => (
        <CategoryCard
          key={category}
          category={category}
          active={selectedCategory === category}
          isAR={isAR}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
