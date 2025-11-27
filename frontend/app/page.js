import SearchBar from "@/components/SearchBar.jsx";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-10 bg-slate-950 text-slate-100">
      <header className="w-full max-w-4xl flex flex-col items-center gap-2 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          XTock Xignal
        </h1>
        <p className="text-sm md:text-base text-slate-300 text-center">
          트윗(X)과 뉴스 기반으로 &quot;다음날 주가 반응&quot;을 시각적으로
          보여주는 시장 반응 학습 도구
        </p>
      </header>

      <section className="w-full max-w-2xl bg-slate-900/60 border border-slate-700 rounded-2xl p-6 shadow-lg">
        <h2 className="text-lg font-semibold mb-3">기업 / 인물 검색</h2>
        <p className="text-xs text-slate-400 mb-4">
          예: <span className="font-mono">$TSLA</span>,{" "}
          <span className="font-mono">$NVDA</span>, Elon Musk, NVIDIA 등
        </p>
        <SearchBar />
      </section>
    </main>
  );
}
