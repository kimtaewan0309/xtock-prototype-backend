"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`/analysis/${encodeURIComponent(trimmed)}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full">
      <input
        type="text"
        placeholder="기업명, 인물명 또는 티커 (예: $TSLA, Elon Musk)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="rounded-xl bg-blue-600 hover:bg-blue-500 px-5 py-2 text-sm font-semibold"
      >
        분석 시작
      </button>
    </div>
  );
}
