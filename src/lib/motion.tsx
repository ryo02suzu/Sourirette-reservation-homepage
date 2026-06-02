import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/** 要素がビューポートに入ったら一度だけ true を返す。 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  rootMargin = "0px 0px -10% 0px",
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (prefersReduced) {
      setInView(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            ob.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin },
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, [rootMargin]);
  return { ref, inView };
}

/** スクロールで下からフェードイン。delay で stagger。 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  y = 22,
}: {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
  y?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : `translateY(${y}px)`,
        transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}

/** ビューに入ったら 0 から目標値までカウントアップ。 */
export function CountUp({
  to,
  duration = 1400,
  className = "",
  suffix = "",
}: {
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (prefersReduced) {
      setVal(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return (
    <span ref={ref} className={className}>
      {val}
      {suffix}
    </span>
  );
}

/** 見出し内で単語を入れ替えるキネティック・タイポ。 */
export function RotatingWord({
  words,
  className = "",
  interval = 2200,
}: {
  words: string[];
  className?: string;
  interval?: number;
}) {
  const [i, setI] = useState(0);
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (prefersReduced) return;
    const t = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setI((v) => (v + 1) % words.length);
        setShow(true);
      }, 320);
    }, interval);
    return () => clearInterval(t);
  }, [words.length, interval]);
  return (
    <span
      className={`inline-block ${className}`}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(0.35em)",
        transition: "opacity 0.32s ease, transform 0.32s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {words[i]}
    </span>
  );
}
