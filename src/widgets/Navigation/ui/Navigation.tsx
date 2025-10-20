import React from 'react';
import { useReducedMotion } from 'framer-motion';
import { IconButton } from './IconButton';
import { BurgerContent } from './BurgerContent';

export const Navigation = () => {
  const [open, setOpen] = React.useState(false);
  const reduce = useReducedMotion();

  const DURATION = reduce ? 0 : 0.28;
  const LIST_DELAY = reduce ? 0 : 0.07;
  const STAGGER = reduce ? 0 : 0.06; // интервал между пунктами

  return (
    <>
      <div className="min-h-[129px]" />

      <nav
        aria-expanded={open}
        className={`fixed z-50 flex min-h-[78px] w-full rounded-b-3xl bg-white px-[20px] pt-[20px] pb-[22px] shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-shadow`}
      >
        <div className="flex w-full flex-col">
          <div className="flex max-h-[100px] items-start">
            <div className="flex-1 text-[1.875rem] font-medium tracking-[-0.05em]">
              Area
            </div>
            <IconButton open={open} setOpen={setOpen} DURATION={DURATION} />
          </div>
          <BurgerContent
            open={open}
            DURATION={DURATION}
            LIST_DELAY={LIST_DELAY}
            STAGGER={STAGGER}
          />
        </div>
      </nav>
    </>
  );
};
