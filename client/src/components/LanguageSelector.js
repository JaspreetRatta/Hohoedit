import React from 'react';
import { useTranslation } from 'react-i18next';


function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('th')}>ไทย</button>
    </div>
  );
}

export default LanguageSelector;
