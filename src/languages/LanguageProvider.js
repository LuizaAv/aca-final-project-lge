import React, { useState } from 'react';
import propTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { LanguageContext } from './languageContext';
import EN from './translations/en.json';
import HY from './translations/hy.json';
import RU from './translations/ru.json';

const translation = { EN, HY, RU };

export default function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('EN');
  const [messages, setMessages] = useState(translation.EN);

  const setLanguage = (e) => {
    const selectedLanguage = e.target.value;
    setMessages(translation[selectedLanguage]);
    setLocale(selectedLanguage);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
}

LanguageProvider.propTypes = {
  children: propTypes.node.isRequired,
};
