/**
 * Arche ロゴ。エメラルドのグラデ角丸スクエア＋白の歯型アイコン、Space Grotesk のワードマーク。
 */
export function Logo({
  size = 34,
  showText = true,
  textClassName = "text-[20px]",
  light = true,
}: {
  size?: number;
  showText?: boolean;
  textClassName?: string;
  light?: boolean;
}) {
  const inner = Math.round(size * 0.52);
  return (
    <span className="flex items-center gap-2.5 shrink-0">
      <span
        className="relative grid place-items-center rounded-[10px]"
        style={{
          width: size,
          height: size,
          backgroundImage: "linear-gradient(140deg,#6ee7b7 0%,#10b981 55%,#047857 100%)",
          boxShadow: "0 0 0 1px rgba(52,211,153,0.4), 0 8px 22px -8px rgba(16,185,129,0.9)",
        }}
      >
        <svg width={inner} height={inner} viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M8 2C5.5 2 4 3.8 4 5.5C4 7 4.8 8.2 5.5 9C6.2 9.8 6.5 10.5 6.5 11.5C6.5 12.3 7.1 13 8 13C8.9 13 9.5 12.3 9.5 11.5C9.5 10.5 9.8 9.8 10.5 9C11.2 8.2 12 7 12 5.5C12 3.8 10.5 2 8 2Z"
            fill="#05080a"
          />
        </svg>
      </span>
      {showText && (
        <span
          className={`font-display font-bold tracking-tight ${textClassName} ${light ? "text-white" : "text-night-950"}`}
        >
          Arche
        </span>
      )}
    </span>
  );
}
