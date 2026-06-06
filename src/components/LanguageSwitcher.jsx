import { useState } from "react";
import { useLanguage } from "../context/useLanguage";

function LanguageSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    const chooseLanguage = (value) => {
        setLanguage(value);
        setIsOpen(false);
    };

    return (
        <div className="language-switcher">
            <button
                className="language-trigger icon-action"
                type="button"
                aria-label="Change language"
                onClick={() => setIsOpen(true)}
            >
                <img src="/icons/globe.svg" alt="" />
                <strong>{language}</strong>
            </button>

            {isOpen && (
                <div className="language-modal">
                    <div className="language-modal-card">
                        <button
                            className="language-close"
                            type="button"
                            onClick={() => setIsOpen(false)}
                        >
                            ×
                        </button>

                        <p className="eyebrow">{t.language.eyebrow}</p>
                        <h2>{t.language.title}</h2>
                        <p>{t.language.body}</p>

                        <div className="language-options">
                            <button
                                className={language === "EN" ? "active" : ""}
                                type="button"
                                onClick={() => chooseLanguage("EN")}
                            >
                                <span>EN</span>
                                {t.language.english}
                            </button>

                            <button
                                className={language === "ES" ? "active" : ""}
                                type="button"
                                onClick={() => chooseLanguage("ES")}
                            >
                                <span>ES</span>
                                {t.language.spanish}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LanguageSwitcher;