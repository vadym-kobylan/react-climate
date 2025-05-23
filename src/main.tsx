import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'https://d81f60ed530354107e89544c0820b5ef@o4509373665705984.ingest.de.sentry.io/4509373691134032',
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
