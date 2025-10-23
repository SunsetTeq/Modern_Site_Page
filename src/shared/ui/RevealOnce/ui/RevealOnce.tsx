// components/RevealOnce.tsx
import React from 'react';
import { motion, useReducedMotion, useInView } from 'framer-motion';

type Props = React.PropsWithChildren<{
  y?: number;
  delay?: number;
}>;

export const RevealOnce: React.FC<Props> = ({
  children,
  y = 24,
  delay = 0,
}) => {
  const reduce = useReducedMotion();
  const initial = reduce ? { opacity: 0 } : { opacity: 0, y };
  const shown = reduce ? { opacity: 1 } : { opacity: 1, y: 0 };

  const ref = React.useRef<HTMLDivElement | null>(null);
  const ioSeen = useInView(ref, { amount: 'some' }); // без once — Safari

  const [seen, setSeen] = React.useState(false);

  // 1) Если блок уже в кадре при загрузке — помечается seen
  React.useEffect(() => {
    if (seen) return;
    const el = ref.current;
    if (!el) return;

    const tick = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh && r.bottom > 0) setSeen(true);
    };

    // микро-таймаут для Safari/DevTools
    tick();
    const id = setTimeout(tick, 50);

    window.addEventListener('load', tick);
    window.addEventListener('resize', tick);
    window.addEventListener('orientationchange', tick);

    return () => {
      clearTimeout(id);
      window.removeEventListener('load', tick);
      window.removeEventListener('resize', tick);
      window.removeEventListener('orientationchange', tick);
    };
  }, [seen]);

  // 2) Как только IO увидел пересечение — тоже seen
  React.useEffect(() => {
    if (ioSeen) setSeen(true);
  }, [ioSeen]);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={seen ? shown : initial}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
};
