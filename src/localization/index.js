import en from "./en";
import fa from "./fa";

const direction = {
    fa: "rtl",
    en: "ltr"
}
const lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "fa";
export { lang }

function getDirection() {
    return direction[lang]
}
export { getDirection }

const fonts = {
    fa: "IRANSans",
    en: "Muli"
}

function getFonts() {
    return fonts[lang]
}
export { getFonts }

const translates = {
    fa: fa,
    en: en
}

function getTranslates() {
    return translates[lang]
}

export { getTranslates }

function changeLang(newLang) {
    if (newLang === lang) {
        return
    }
    localStorage.setItem("lang", newLang)
    window.location.reload()
}
export { changeLang }
