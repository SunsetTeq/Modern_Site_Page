import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import OpenIcon from '@assets/icons/open_burger.svg?react';
import CloseIcon from '@assets/icons/close_burger.svg?react';
import type { IconButtonProps } from '../model/types';

export const IconButton = React.memo(
  ({ open, setOpen, DURATION }: IconButtonProps) => {
    return (
      <button
        type="button"
        aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={open}
        aria-controls="area-menu"
        onPointerDown={(e) => {
          if (e.button !== 0) return;
          setOpen((v) => !v);
        }}
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
                />
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </button>
    );
  },
);
