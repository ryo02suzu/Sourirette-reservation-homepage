import { ImageIcon } from "lucide-react";

/**
 * 画像の差し替え用プレースホルダー枠。
 * 実画像が用意できたら src を渡すだけで表示に切り替わる。
 * （= ロゴ・写真の「載せる場所」を確保するための部品）
 */
export function Placeholder({
  label,
  src,
  alt = "",
  className = "",
  rounded = "rounded-2xl",
  ratio,
}: {
  label: string;
  src?: string;
  alt?: string;
  className?: string;
  rounded?: string;
  ratio?: string; // 例 "3 / 4"
}) {
  if (src) {
    return <img src={src} alt={alt} className={`w-full h-full object-cover ${rounded} ${className}`} loading="lazy" />;
  }
  return (
    <div
      className={`grid place-items-center text-center bg-slate-100 border-2 border-dashed border-slate-300 text-slate-400 ${rounded} ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <div className="px-4">
        <ImageIcon className="w-7 h-7 mx-auto mb-2 opacity-70" />
        <p className="text-[12px] font-medium leading-snug">{label}</p>
        <p className="text-[10.5px] mt-0.5 opacity-70">画像が入ります（後日差し替え）</p>
      </div>
    </div>
  );
}
