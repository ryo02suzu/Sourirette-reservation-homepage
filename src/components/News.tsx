import { ChevronRight } from "lucide-react";
import { NEWS, CONTACT_MAILTO } from "@/lib/site";

export function News() {
  return (
    <section id="news" className="max-w-site mx-auto px-6 py-16 lg:py-20">
      <div className="grid lg:grid-cols-[260px_1fr] gap-8 lg:gap-12">
        <div>
          <p className="sect-label">News</p>
          <h2 className="mt-2 sect-title text-[24px]">ニュース</h2>
          <a href={CONTACT_MAILTO} className="arrow-link mt-4 hidden lg:inline-flex">
            一覧を見る <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <ul className="border-t border-line">
          {NEWS.map((nw) => (
            <li key={nw.title} className="border-b border-line">
              <a href={CONTACT_MAILTO} className="group flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-5 py-5 hover:bg-mist/60 transition-colors px-1">
                <span className="font-en text-[13px] text-sub tabular-nums shrink-0 w-[88px]">{nw.date}</span>
                <span className="shrink-0 inline-flex items-center justify-center text-[11px] font-bold text-brand border border-brand/40 rounded-sm px-2.5 py-0.5 w-fit">
                  {nw.cat}
                </span>
                <span className="text-[14.5px] text-ink group-hover:text-brand transition-colors leading-snug">
                  {nw.title}
                </span>
                <ChevronRight className="w-4 h-4 text-line group-hover:text-brand ml-auto hidden sm:block shrink-0" />
              </a>
            </li>
          ))}
        </ul>

        <a href={CONTACT_MAILTO} className="arrow-link lg:hidden">
          一覧を見る <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
