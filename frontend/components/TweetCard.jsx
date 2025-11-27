"use client";

export default function TweetCard({ tweet }) {
  const {
    author,
    handle,
    time,
    text,
    sentiment,
    score,
    nextDayReturn,
  } = tweet;

  const sentimentColor =
    sentiment === "Positive"
      ? "text-emerald-400"
      : sentiment === "Negative"
      ? "text-rose-400"
      : "text-slate-300";

  const returnColor =
    typeof nextDayReturn === "number"
      ? nextDayReturn > 0
        ? "text-emerald-400"
        : nextDayReturn < 0
        ? "text-rose-400"
        : "text-slate-300"
      : "text-slate-300";

  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 flex flex-col gap-2">
      {/* 상단: 작성자 / 시간 */}
      <header className="flex justify-between items-center gap-2 text-xs text-slate-400">
        <div className="flex flex-col">
          <span className="font-semibold text-slate-100">{author}</span>
          <span className="text-slate-500">@{handle}</span>
        </div>
        <span>{time}</span>
      </header>

      {/* 내용 */}
      <p className="text-sm text-slate-100 whitespace-pre-line">{text}</p>

      {/* 하단: 감성 + 수익률 */}
      <footer className="flex justify-between items-center text-xs mt-2 pt-2 border-t border-slate-800">
        <div className="flex flex-col">
          <span className={`font-semibold ${sentimentColor}`}>
            감성: {sentiment}
          </span>
          <span className="text-slate-400">
            점수: {(score * 100).toFixed(1)}%
          </span>
        </div>
        <div className="text-right">
          <span className="text-slate-400 block">익일 수익률</span>
          <span className={`font-semibold ${returnColor}`}>
            {typeof nextDayReturn === "number"
              ? `${nextDayReturn.toFixed(2)}%`
              : "-"}
          </span>
        </div>
      </footer>
    </article>
  );
}
