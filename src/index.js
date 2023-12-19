import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import language resources
import translationEN from './_il8n/_en/en.json';
import translationAR from './_il8n/_ar/ar.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      ar: {
        translation: translationAR,
      },
    },
    lng: 'ar', // Default language
    fallbackLng: 'en', // Fallback language if the selected one isn't available
    interpolation: {
      escapeValue: false,
    },
  });


ReactDOM.render(<React.StrictMode>
    <App />
</React.StrictMode>, document.getElementById('root'));

// serviceWorker.unregister();

