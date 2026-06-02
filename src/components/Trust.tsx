const stats = [
  { value: "21名", label: "監修した現役開業医" },
  { value: "0円", label: "初期費用" },
  { value: "5-in-1", label: "予約〜経営を統合" },
  { value: "メール/SMS/LINE", label: "3経路の自動通知" },
];

export function Trust() {
  return (
    <section className="relative -mt-2">
      <div className="max-w-site mx-auto px-5 lg:px-8">
        <div className="rounded-3xl border border-emerald-100 bg-white shadow-soft px-6 py-7 lg:px-10 lg:py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 divide-emerald-100 lg:divide-x">
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:px-4">
                <p className="text-[22px] lg:text-[26px] font-extrabold text-emerald-700 leading-none">
                  {s.value}
                </p>
                <p className="mt-2 text-[12px] text-ink-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
