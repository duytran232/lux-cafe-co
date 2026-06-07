import { useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../context/useLanguage";

function AuthModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [mode, setMode] = useState("login");
    const { t } = useLanguage();

    const modal = (
        <div className="auth-modal">
            <div className="auth-card">
                <button className="auth-close" type="button" onClick={() => setIsOpen(false)}>
                    ×
                </button>

                <p className="eyebrow">{t.auth.eyebrow}</p>
                <h2>{mode === "login" ? t.auth.login : t.auth.signUp}</h2>

                <div className="auth-tabs">
                    <button type="button" className={mode === "login" ? "active" : ""} onClick={() => setMode("login")}>
                        {t.auth.login}
                    </button>

                    <button type="button" className={mode === "signup" ? "active" : ""} onClick={() => setMode("signup")}>
                        {t.auth.signUp}
                    </button>
                </div>

                <form className="auth-form">
                    {mode === "signup" && <input type="text" placeholder={t.auth.fullName} />}
                    <input type="email" placeholder={t.auth.email} />
                    <input type="password" placeholder={t.auth.password} />

                    <button type="button" className="btn btn-primary">
                        {mode === "login" ? t.auth.login : t.auth.signUp}
                    </button>
                </form>
            </div>
        </div>
    );

    return (
        <>
            <button className="account-button icon-action" type="button" onClick={() => setIsOpen(true)}>
                <img src="/icons/user.svg" alt="" />
            </button>

            {isOpen && createPortal(modal, document.body)}
        </>
    );
}

export default AuthModal;