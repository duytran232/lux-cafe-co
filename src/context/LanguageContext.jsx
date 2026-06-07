import { useState } from "react";
import { translations } from "../i18n/translations";
import { LanguageContext } from "./LanguageContextBase";

const DEFAULT_LANGUAGE = "EN";

function getInitialLanguage() {
  try {
    return localStorage.getItem("lux-language") || DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage);

  const setLanguage = (value) => {
    const nextLanguage = translations[value] ? value : DEFAULT_LANGUAGE;
    setLanguageState(nextLanguage);

    try {
      localStorage.setItem("lux-language", nextLanguage);
    } catch {
      // localStorage may be blocked in some browser modes.
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language] || translations[DEFAULT_LANGUAGE],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}