import { COLORS } from "@/lib/site";

/**
 * Arche ロゴ。ネイビーの角丸スクエアにベージュの歯型アイコン。
 * dental-reservation-app の landing と同一意匠。
 */
export function Logo({
  size = 30,
  showText = true,
  textClassName = "text-[18px]",
}: {
  size?: number;
  showText?: boolean;
  textClassName?: string;
}) {
  const inner = Math.round(size / 2);
  return (
    <span className="flex items-center gap-2 shrink-0">
      <span
        className="rounded-[7px] flex items-center justify-center"
        style={{ width: size, height: size, backgroundColor: COLORS.navy }}
      >
        <svg width={inner} height={inner} viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M8 2C5.5 2 4 3.8 4 5.5C4 7 4.8 8.2 5.5 9C6.2 9.8 6.5 10.5 6.5 11.5C6.5 12.3 7.1 13 8 13C8.9 13 9.5 12.3 9.5 11.5C9.5 10.5 9.8 9.8 10.5 9C11.2 8.2 12 7 12 5.5C12 3.8 10.5 2 8 2Z"
            fill={COLORS.brand}
          />
        </svg>
      </span>
      {showText && (
        <span
          className={`font-black tracking-tight ${textClassName}`}
          style={{ color: COLORS.navy }}
        >
          Arche
        </span>
      )}
    </span>
  );
}
