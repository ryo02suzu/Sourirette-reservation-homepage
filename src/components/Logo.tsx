type LogoProps = {
  size?: number;
  showText?: boolean;
  textClassName?: string;
  light?: boolean;
};

/** Arche（プロダクト）ロゴ。エメラルドの角丸スクエア＋白の歯型アイコン。 */
export function Logo({ size = 30, showText = true, textClassName = "text-[19px]", light = false }: LogoProps) {
  const inner = Math.round(size * 0.52);
  return (
    <span className="flex items-center gap-2.5 shrink-0">
      <span
        className="grid place-items-center rounded-[9px]"
        style={{ width: size, height: size, backgroundImage: "linear-gradient(140deg,#34d399 0%,#059669 100%)" }}
      >
        <svg width={inner} height={inner} viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M8 2C5.5 2 4 3.8 4 5.5C4 7 4.8 8.2 5.5 9C6.2 9.8 6.5 10.5 6.5 11.5C6.5 12.3 7.1 13 8 13C8.9 13 9.5 12.3 9.5 11.5C9.5 10.5 9.8 9.8 10.5 9C11.2 8.2 12 7 12 5.5C12 3.8 10.5 2 8 2Z"
            fill="white"
          />
        </svg>
      </span>
      {showText && (
        <span className={`font-bold tracking-tight ${textClassName} ${light ? "text-white" : "text-ink"}`}>Arche</span>
      )}
    </span>
  );
}

/** Sourirette（会社）ロゴ。ほほえみ（smile）を表す弧のマーク＋ワードマーク。 */
export function SouriretteLogo({ size = 26, showText = true, textClassName = "text-[18px]", light = false }: LogoProps) {
  return (
    <span className="flex items-center gap-2.5 shrink-0">
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="8.5" cy="9" r="1.3" fill="#059669" />
        <circle cx="15.5" cy="9" r="1.3" fill="#059669" />
        <path d="M6 13.5C7.5 16.5 16.5 16.5 18 13.5" stroke="#059669" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      {showText && (
        <span className={`font-semibold tracking-tight ${textClassName} ${light ? "text-white" : "text-ink"}`}>
          Sourirette
        </span>
      )}
    </span>
  );
}
