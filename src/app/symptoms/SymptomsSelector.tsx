import { useMemo } from "react";
import { Search } from "lucide-react";
import { symptomsData } from "./data";
import { getTranslations, translateCategory } from "./translations";
import type { Category } from "./types";
import SelectedSymptoms from "./SelectedSymptoms";
import AnalyzeButton from "./AnalyzeButton";
import InfoNote from "./InfoNote";

interface SymptomsSelectorProps {
  selectedCategory: Category;
  selectedSymptoms: string[];
  search: string;
  isAR: boolean;
  onToggleSymptom: (symptom: string) => void;
  setSearch: (value: string) => void;
  onClearAll: () => void;
}

export default function SymptomsSelector({
  selectedCategory,
  selectedSymptoms,
  search,
  isAR,
  onToggleSymptom,
  setSearch,
  onClearAll,
}: SymptomsSelectorProps) {
  const t = getTranslations(isAR);

  const filteredSymptoms = useMemo(
    () =>
      symptomsData[selectedCategory].filter((s) =>
        s.toLowerCase().includes(search.toLowerCase()),
      ),
    [selectedCategory, search],
  );

  return (
    <div className="mt-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#111827] md:text-2xl">
            {t.selectSymptoms}
          </h2>

          <p className="text-xs text-gray-500">
            {t.relatedTo} {translateCategory(selectedCategory, isAR)}
          </p>
        </div>

        {selectedSymptoms.length > 0 && (
          <button
            onClick={onClearAll}
            className="text-xs font-medium text-blue-600 hover:underline">
            {t.clearAll}
          </button>
        )}
      </div>

      <div className="relative mb-5">
        <Search
          className={
            "absolute top-1/2 size-4 -translate-y-1/2 text-gray-400 " +
            (isAR ? "right-4" : "left-4")
          }
        />

        <input
          type="text"
          placeholder={t.searchPlaceholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={
            "h-[50px] w-full rounded-2xl border border-gray-200 bg-white text-sm shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100 " +
            (isAR ? "pl-4 pr-12" : "pl-12 pr-4")
          }
        />
      </div>

      <SelectedSymptoms
        symptoms={filteredSymptoms}
        selectedSymptoms={selectedSymptoms}
        isAR={isAR}
        onToggle={onToggleSymptom}
      />

      <AnalyzeButton count={selectedSymptoms.length} label={t.analyze} />

      <InfoNote note={t.note} noteText={t.noteText} />
    </div>
  );
}
