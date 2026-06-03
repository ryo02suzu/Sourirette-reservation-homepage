/* 緑基調のフラットなイラスト図解（自作インラインSVG）。写真と併用して“作り込み”感を出す。 */

const G = { deep: "#0b3d2e", brand: "#0a8f5b", mid: "#34d399", light: "#a7f3d0", pale: "#ecfdf5", amber: "#f59e0b" };

function Base({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 320 240" className="w-full h-auto" role="img">
      {/* 背景のやわらかいブロブ */}
      <ellipse cx="160" cy="130" rx="130" ry="100" fill={G.pale} />
      <circle cx="60" cy="50" r="6" fill={G.light} />
      <circle cx="270" cy="40" r="4" fill={G.mid} />
      <circle cx="280" cy="200" r="7" fill={G.light} />
      {children}
    </svg>
  );
}

/** オンライン予約：スマホ＋カレンダー＋流入ドット */
export function IllustBooking() {
  return (
    <Base>
      {/* スマホ */}
      <rect x="118" y="55" width="84" height="150" rx="14" fill="#fff" stroke={G.light} strokeWidth="2" />
      <rect x="118" y="55" width="84" height="26" rx="14" fill={G.brand} />
      <rect x="118" y="69" width="84" height="12" fill={G.brand} />
      <circle cx="160" cy="68" r="3" fill="#fff" />
      {/* カレンダーグリッド */}
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2, 3].map((c) => (
          <rect key={`${r}-${c}`} x={128 + c * 17} y={90 + r * 17} width="12" height="12" rx="3"
            fill={r === 1 && c === 2 ? G.brand : G.pale} stroke={G.light} strokeWidth="1" />
        )),
      )}
      <rect x="128" y="162" width="64" height="12" rx="6" fill={G.light} />
      <rect x="128" y="180" width="44" height="10" rx="5" fill={G.pale} stroke={G.light} />
      {/* 流入ドット */}
      <circle cx="60" cy="120" r="10" fill={G.mid} />
      <circle cx="84" cy="150" r="7" fill={G.light} />
      <path d="M70 120 Q100 110 116 118" stroke={G.brand} strokeWidth="2.5" fill="none" strokeDasharray="3 5" strokeLinecap="round" />
      {/* チェックチップ */}
      <g transform="translate(196 150)">
        <rect x="0" y="0" width="56" height="30" rx="15" fill={G.brand} />
        <circle cx="16" cy="15" r="7" fill="#fff" />
        <path d="M12 15l3 3 6-6" stroke={G.brand} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="28" y="11" width="20" height="8" rx="4" fill="#fff" opacity="0.85" />
      </g>
    </Base>
  );
}

/** リマインダー：ベル＋3経路の吹き出し */
export function IllustReminder() {
  return (
    <Base>
      {/* ベル */}
      <g transform="translate(150 78)">
        <path d="M0 0c-16 0-26 12-26 28 0 18-8 24-8 24h68s-8-6-8-24C26 12 16 0 0 0Z" fill={G.brand} />
        <circle cx="0" cy="62" r="7" fill={G.deep} />
        <circle cx="20" cy="-6" r="7" fill={G.amber} />
      </g>
      {/* 吹き出し3つ（メール/SMS/LINE） */}
      {[
        { x: 60, y: 150, label: "M", c: G.brand },
        { x: 132, y: 168, label: "S", c: G.mid },
        { x: 206, y: 150, label: "L", c: "#06C755" },
      ].map((b) => (
        <g key={b.label} transform={`translate(${b.x} ${b.y})`}>
          <rect x="0" y="0" width="54" height="38" rx="10" fill="#fff" stroke={G.light} strokeWidth="2" />
          <path d="M14 38l8 10 8-10Z" fill="#fff" stroke={G.light} strokeWidth="2" />
          <circle cx="16" cy="19" r="9" fill={b.c} />
          <text x="16" y="23" fontSize="10" fontWeight="700" fill="#fff" textAnchor="middle">{b.label}</text>
          <rect x="30" y="12" width="16" height="5" rx="2.5" fill={G.light} />
          <rect x="30" y="21" width="12" height="5" rx="2.5" fill={G.pale} />
        </g>
      ))}
    </Base>
  );
}

/** 口コミ・分析：星＋上昇グラフ */
export function IllustReview() {
  function Star({ x, y, r, fill }: { x: number; y: number; r: number; fill: string }) {
    const pts = Array.from({ length: 5 }, (_, i) => {
      const a = (Math.PI / 180) * (-90 + i * 72);
      const a2 = a + (Math.PI / 180) * 36;
      return `${x + r * Math.cos(a)},${y + r * Math.sin(a)} ${x + r * 0.45 * Math.cos(a2)},${y + r * 0.45 * Math.sin(a2)}`;
    }).join(" ");
    return <polygon points={pts} fill={fill} />;
  }
  return (
    <Base>
      {/* グラフカード */}
      <rect x="96" y="78" width="128" height="104" rx="14" fill="#fff" stroke={G.light} strokeWidth="2" />
      {[
        [112, 150, 18], [134, 138, 30], [156, 146, 22], [178, 122, 46], [200, 108, 60],
      ].map(([x, y, h], i) => (
        <rect key={i} x={x} y={y} width="12" height={h} rx="3" fill={i === 4 ? G.brand : G.light} />
      ))}
      <path d="M112 150 L200 108" stroke={G.brand} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="200" cy="108" r="4" fill={G.brand} />
      {/* 星 */}
      <g>
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} x={108 + i * 26} y={60} r={11} fill={G.amber} />
        ))}
      </g>
    </Base>
  );
}
