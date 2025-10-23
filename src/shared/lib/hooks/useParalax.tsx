import { useTransform, type MotionValue } from 'framer-motion';

export const useParallax = (
  value: MotionValue<number>,
  start: number,
  end: number,
) => {
  return useTransform(value, [0, 1], [start, end]);
};
