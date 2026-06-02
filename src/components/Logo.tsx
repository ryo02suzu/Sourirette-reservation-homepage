/**
 * Arche ロゴ。エメラルドのグラデーション角丸スクエアに白の歯型アイコン。
 * 旧（Replit版）のネイビー×ベージュとは別意匠。
 */
export function Logo({
  size = 34,
  showText = true,
  textClassName = "text-[20px]",
  onDark = false,
}: {
  size?: number;
  showText?: boolean;
  textClassName?: string;
  onDark?: boolean;
}) {
  const inner = Math.round(size * 0.52);
  return (
    <span className="flex items-center gap-2.5 shrink-0">
      <span
        className="relative grid place-items-center rounded-[10px] shadow-[0_6px_16px_-6px_rgba(5,150,105,0.7)]"
        style={{
          width: size,
          height: size,
          backgroundImage: "linear-gradient(140deg,#10b981 0%,#059669 55%,#047857 100%)",
        }}
      >
        <svg width={inner} height={inner} viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M8 2C5.5 2 4 3.8 4 5.5C4 7 4.8 8.2 5.5 9C6.2 9.8 6.5 10.5 6.5 11.5C6.5 12.3 7.1 13 8 13C8.9 13 9.5 12.3 9.5 11.5C9.5 10.5 9.8 9.8 10.5 9C11.2 8.2 12 7 12 5.5C12 3.8 10.5 2 8 2Z"
            fill="white"
          />
        </svg>
      </span>
      {showText && (
        <span
          className={`font-extrabold tracking-tight ${textClassName} ${onDark ? "text-white" : "text-ink"}`}
        >
          Arche
        </span>
      )}
    </span>
  );
}
