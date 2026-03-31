import { translations } from "../i18n/translations";

function copyEmailToClipboard() {
    const email = "gustavosilva712493@gmail.com";
    navigator.clipboard.writeText(email);
}

function changeButtonText(span, text) {
    const originalText = span.textContent;
    span.textContent = text;
    span.parentElement.disabled = true;
    setTimeout(() => {
        span.textContent = originalText;
        span.parentElement.disabled = false;
    }, 2000);
}

export function setupEmailButton() {   
    const button = document.querySelector("#contact button .button-text-content");
    const locale = localStorage.getItem("locale") || "pt";
    console.log(translations[locale]['contact']['copied']);
    copyEmailToClipboard();
    changeButtonText(button, translations[locale]['contact']['copied']);
}