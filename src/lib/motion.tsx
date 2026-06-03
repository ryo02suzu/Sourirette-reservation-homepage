import { motion, useInView, useMotionValue, animate, type Variants } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/** スクロールで下からフェードイン（whileInView・1回） */
export function Reveal({
  children, delay = 0, y = 26, className = "",
}: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const staggerChild: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

/** 子要素を連鎖的に出現させるコンテナ */
export function Stagger({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
    >
      {children}
    </motion.div>
  );
}
export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} variants={staggerChild}>{children}</motion.div>;
}

/** ビューに入ったら 0→到達値までカウントアップ */
export function CountUp({ to, className = "", suffix = "" }: { to: number; className?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const mv = useMotionValue(0);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 1.4, ease: "easeOut", onUpdate: (v) => setVal(Math.round(v)) });
    return controls.stop;
  }, [inView, to, mv]);
  return <span ref={ref} className={className}>{val}{suffix}</span>;
}
