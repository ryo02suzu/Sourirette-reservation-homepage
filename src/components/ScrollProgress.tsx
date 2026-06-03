import { motion, useScroll, useSpring } from "framer-motion";

/** 上部のスクロール進捗バー（IT企業らしい小演出） */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-brand via-accent to-emerald-400"
    />
  );
}
