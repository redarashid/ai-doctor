import { useMemo } from "react";
import { symptomsData } from "./data";
import { getTranslations, translateCategory } from "./translations";
import type { Category } from "./types";
import SymptomSearch from "./SymptomSearch";
import SymptomList from "./SymptomList";
import AnalyzeButton from "./AnalyzeButton";
import NoteBox from "./NoteBox";

interface SymptomsSectionProps {
  selectedCategory: Category;
  selectedSymptoms: string[];
  search: string;
  isAR: boolean;
  onToggleSymptom: (symptom: string) => void;
  setSearch: (value: string) => void;
  onClearAll: () => void;
}

export default function SymptomsSection({
  selectedCategory,
  selectedSymptoms,
  search,
  isAR,
  onToggleSymptom,
  setSearch,
  onClearAll,
}: SymptomsSectionProps) {
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

      <SymptomSearch
        search={search}
        setSearch={setSearch}
        placeholder={t.searchPlaceholder}
        isAR={isAR}
      />

      <SymptomList
        symptoms={filteredSymptoms}
        selectedSymptoms={selectedSymptoms}
        isAR={isAR}
        onToggle={onToggleSymptom}
      />

      <AnalyzeButton count={selectedSymptoms.length} label={t.analyze} />

      <NoteBox note={t.note} noteText={t.noteText} />
    </div>
  );
}
