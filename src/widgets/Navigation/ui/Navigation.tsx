import OpenIcon from '@assets/icons/open_burger.svg?react';
import CloseIcon from '@assets/icons/close_burger.svg?react';
import React from 'react';
import { navList } from '@constants/constants';
import { ButtonUniversal } from '@ui/ButtonUniversal';
import { motion, useReducedMotion } from 'framer-motion';

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

  // элементы списка появляются справа
  const itemVariants = {
    closed: { opacity: 0, x: 10 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      {open && <div className="h-[129px]" />}

      <nav
        aria-expanded={open}
        className={`${
          open ? 'fixed min-h-[78px]' : 'sticky top-0 mb-[42px] min-h-[78px]'
        } z-50 flex w-full rounded-3xl bg-white px-[20px] pt-[20px] pb-[22px] shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-shadow`}
      >
        <div className="flex w-full flex-col">
          <div className="flex max-h-[100px] items-start">
            <div className="flex-1 text-[1.875rem] font-medium tracking-[-0.05em]">
              Area
            </div>

            <button
              aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
              onClick={() => setOpen((v) => !v)}
              className="relative grid h-10 w-10 cursor-pointer place-items-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-black/20"
            >
              {/* анимация иконок */}
              <motion.span
                className="absolute inset-0 grid place-items-center"
                initial={false}
                animate={
                  open ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }
                }
                transition={{ duration: DURATION, ease: 'easeOut' }}
              >
                <OpenIcon />
              </motion.span>
              <motion.span
                className="absolute inset-0 grid place-items-center"
                initial={false}
                animate={
                  open ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                }
                transition={{ duration: DURATION, ease: 'easeOut' }}
              >
                <CloseIcon />
              </motion.span>
            </button>
          </div>

          {open && (
            <motion.div
              key="menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
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
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: DURATION,
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
