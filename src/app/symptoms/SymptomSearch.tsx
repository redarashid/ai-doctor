import { Search } from "lucide-react";

interface SymptomSearchProps {
  search: string;
  setSearch: (value: string) => void;
  placeholder: string;
  isAR: boolean;
}

export default function SymptomSearch({
  search,
  setSearch,
  placeholder,
  isAR,
}: SymptomSearchProps) {
  return (
    <div className="relative mb-5">
      <Search
        className={
          "absolute top-1/2 size-4 -translate-y-1/2 text-gray-400 " +
          (isAR ? "right-4" : "left-4")
        }
      />

      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={
          "h-[50px] w-full rounded-2xl border border-gray-200 bg-white text-sm shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100 " +
          (isAR ? "pl-4 pr-12" : "pl-12 pr-4")
        }
      />
    </div>
  );
}
