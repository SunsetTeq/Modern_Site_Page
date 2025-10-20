import React from 'react';
import { navList } from '@constants/constants';
import { ButtonUniversal } from '@ui/ButtonUniversal';
import { AnimatePresence, motion } from 'framer-motion';
import type { BurgerContentProps } from '../model/types';
import { EASE, ITEM_VARIANTS } from '../config/constants';

export const BurgerContent = ({
  open,
  DURATION,
  LIST_DELAY,
  STAGGER,
}: BurgerContentProps) => {
  const listVariants = React.useMemo(
    () => ({
      closed: {
        transition: { staggerChildren: STAGGER, staggerDirection: -1 },
      },
      open: {
        transition: { delayChildren: LIST_DELAY, staggerChildren: STAGGER },
      },
    }),
    [LIST_DELAY, STAGGER],
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="area-menu"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: '400px', opacity: 1 }}
          transition={{ duration: DURATION, ease: EASE }}
          exit={{
            height: 0,
            opacity: 0,
            transition: { duration: DURATION, ease: EASE },
          }}
          className="transform-gpu overflow-hidden"
          style={{
            contain: 'layout paint',
            willChange: 'height, opacity',
          }}
        >
          <motion.ul
            className="pt-4"
            variants={listVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {navList.map((item) => (
              <motion.li
                key={item}
                variants={ITEM_VARIANTS}
                className="text-link transform-gpu will-change-transform"
              >
                <div className="bg-divider h-[1px] w-full" />
                <div className="py-[30px]">
                  <span className="hover:text-accent6 cursor-pointer transition-colors duration-200">
                    {item}
                  </span>
                </div>
              </motion.li>
            ))}
            <motion.div className="w-fit pt-2" variants={ITEM_VARIANTS}>
              <ButtonUniversal isBright title="Learn More" />
            </motion.div>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
