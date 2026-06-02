/** ダーク背景に浮かぶ、ぼかしたエメラルド/ライムの光（オーロラ）。 */
export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute -top-1/3 left-1/4 h-[520px] w-[520px] rounded-full bg-emerald-500/25 blur-[120px] animate-auroraA" />
      <div className="absolute top-1/4 -right-20 h-[440px] w-[440px] rounded-full bg-teal-400/20 blur-[120px] animate-auroraB" />
      <div className="absolute -bottom-1/4 left-1/3 h-[420px] w-[420px] rounded-full bg-lime-400/10 blur-[120px] animate-auroraA" />
    </div>
  );
}
