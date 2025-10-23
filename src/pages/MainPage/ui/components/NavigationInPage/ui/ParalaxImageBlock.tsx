import { useMediaQuery } from '@hooks/useMediaQuery';
import {
  useScroll,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  animate,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef } from 'react';

import desktopIpad from '@assets/img/desktop_Ipad.png';
import mobileIphone from '@assets/img/mobile_iphone.png';
import { useParallax } from '@hooks/useParalax';

export const ParalaxImageBlock = ({ isMobile }: { isMobile: boolean }) => {
  const isTablet = useMediaQuery('(min-width: 800px) and (max-width: 1279px)');
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // плавное вытягивание при появлении
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.01 });
  const yReveal = useMotionValue<number>(reduce ? 0 : 50);

  useEffect(() => {
    if (reduce) {
      yReveal.set(0);
      return;
    }
    if (inView) {
      const controls = animate(yReveal, 0, { duration: 1, ease: 'easeOut' });
      return () => controls.stop();
    }
  }, [inView, reduce, yReveal]);

  const start = isMobile ? 100 : isTablet ? 100 : 200;
  const end = isMobile ? 75 : isTablet ? 30 : 100;

  const yParallax = useParallax(scrollYProgress, start, end);

  const y = useTransform<number, number>(
    [yParallax, yReveal],
    (values) => values[0] + values[1],
  );

  return (
    <div
      ref={ref}
      className="mt-[-35px] grid overflow-hidden rounded-3xl md:mt-[9px] xl:mt-[-70px]"
    >
      <div className="bg-accent3 h-[362px] w-full self-end rounded-3xl [grid-area:1/1]" />
      <motion.img
        src={isMobile ? mobileIphone : desktopIpad}
        alt="Dashboard preview"
        style={{ y }}
        className={`z-10 -mx-px block justify-self-center [grid-area:1/1] ${!isMobile ? 'md:w-[min(720px,92vw)] xl:w-[min(947px,92vw)]' : 'w-[min(270px,92vw)]'} object-cover object-center`}
      />
    </div>
  );
};
