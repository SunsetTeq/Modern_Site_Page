import OpenIcon from '@assets/icons/open_burger.svg?react';
import CloseIcon from '@assets/icons/close_burger.svg?react';
import React from 'react';
import { navList } from '@constants/constants';
import { ButtonUniversal } from '@ui/ButtonUniversal';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

export const Navigation = () => {
  const [open, setOpen] = React.useState(false);
  const reduce = useReducedMotion();

  const DURATION = reduce ? 0 : 0.18;
  const LIST_DELAY = reduce ? 0 : 0.06;
  const STAGGER = reduce ? 0 : 0.06; // интервал между пунктами

  const listVariants = {
    closed: { transition: { staggerChildren: 0, staggerDirection: -1 } },
    open: {
      transition: { delayChildren: LIST_DELAY, staggerChildren: STAGGER },
    },
  };

  // элементы списка плавно появляются
  const itemVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  return (
    <>
      {open && <div className="min-h-[120px]" />}

      <nav
        aria-expanded={open}
        className={`${
          open ? 'fixed min-h-[78px]' : 'sticky top-0 mb-[42px] max-h-[78px]'
        } z-50 flex w-full rounded-b-3xl bg-white px-[20px] pt-[20px] pb-[22px] shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-shadow`}
      >
        <div className="flex w-full flex-col">
          <div className="flex max-h-[100px] items-start">
            <div className="flex-1 text-[1.875rem] font-medium tracking-[-0.05em]">
              Area
            </div>

            <button
              type="button"
              aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
              onClick={() => setOpen((v) => !v)}
              className="relative mt-2.5 grid h-6 w-6 cursor-pointer place-items-center"
            >
              <div className="relative h-6 w-6">
                <AnimatePresence mode="wait" initial={false}>
                  {open ? (
                    <motion.span
                      key="close"
                      className="absolute inset-0 grid transform-gpu place-items-center will-change-transform"
                      initial={{ opacity: 0, scale: 0.01 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{
                        opacity: 0,
                        scale: 0.01,
                        transition: { duration: DURATION / 2, ease: 'easeIn' },
                      }}
                      transition={{ duration: DURATION / 2, ease: 'easeOut' }}
                      style={{
                        transformOrigin: '50% 50%',
                        backfaceVisibility: 'hidden',
                      }}
                    >
                      <CloseIcon
                        className="h-6 w-6"
                        vectorEffect="non-scaling-stroke"
                        shapeRendering="geometricPrecision"
                      />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="open"
                      className="absolute inset-0 grid transform-gpu place-items-center will-change-transform"
                      initial={{ opacity: 0, scale: 0.01 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{
                        opacity: 0,
                        scale: 0.01,
                        transition: { duration: DURATION / 2, ease: 'easeIn' },
                      }}
                      transition={{ duration: DURATION / 2, ease: 'easeOut' }}
                      style={{
                        transformOrigin: '50% 50%',
                        backfaceVisibility: 'hidden',
                      }}
                    >
                      <OpenIcon
                        className="h-6 w-6"
                        vectorEffect="non-scaling-stroke"
                        shapeRendering="geometricPrecision"
                      />
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </button>
          </div>

          {open && (
            <motion.div
              key="menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: '400px', opacity: 1 }}
              transition={{ duration: DURATION, ease: 'easeOut' }}
              className="overflow-hidden"
            >
              <motion.ul
                className="text-link pt-4"
                variants={listVariants}
                initial="closed"
                animate="open"
              >
                {navList.map((item, idx) => (
                  <motion.li
                    key={idx}
                    variants={itemVariants}
                    className="transform-gpu will-change-transform"
                  >
                    <div className="bg-divider h-[1px] w-full" />
                    <div className="py-[30px]">{item}</div>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                className="w-fit pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: DURATION * 2,
                  ease: 'easeOut',
                  delay: LIST_DELAY,
                }}
              >
                <ButtonUniversal isBright title="Learn More" />
              </motion.div>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};
