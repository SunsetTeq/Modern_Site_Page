import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { DefaultLayout } from '@ui/layouts/DefaultLayout';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DefaultLayout />
  </StrictMode>,
);
