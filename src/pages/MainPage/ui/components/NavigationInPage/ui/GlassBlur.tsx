// GlassBlur.tsx
import React from 'react';
import { createPortal } from 'react-dom';

type Props = {
  rect: DOMRect | null;
  radius?: number; // px, скругление
  blur?: number; // px
  tint?: string; // подложка
  zIndex?: number;
};

export const GlassBlur: React.FC<Props> = ({
  rect,
  radius = 50,
  blur = 12,
  tint = 'rgba(255,255,255,0.40)',
  zIndex = 9999,
}) => {
  if (!rect) return null;

  const top = Math.max(0, rect.top);
  const left = Math.max(0, rect.left);
  const right = Math.max(0, window.innerWidth - rect.right);
  const bottom = Math.max(0, window.innerHeight - rect.bottom);

  const clip = `inset(${top}px ${right}px ${bottom}px ${left}px round ${radius}px)`;

  return createPortal(
    <div style={{ position: 'fixed', inset: 0, zIndex, pointerEvents: 'none' }}>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
          clipPath: clip,
          background: tint,
        }}
      />
    </div>,
    document.body,
  );
};
