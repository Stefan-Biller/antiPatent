import { ref } from "vue";

export const LANGUAGES = ["de", "en", "fr", "es", "it"] as const;
export type Language = (typeof LANGUAGES)[number];

const language = ref<Language>("de");

export const LANGUAGE_STRING_ICONS: Record<Language, string> = {
  de: "🇩🇪",
  en: "🇬🇧",
  fr: "🇫🇷",
  es: "🇪🇸",
  it: "🇮🇹",
} as const;

export function switchLanguage(newLang: Language) {
  language.value = newLang;
}

export function setDefaultLanguageFromBrowserSettings(navigator: Navigator) {
  const browserLang = navigator.language.slice(0, 2) as Language;
  if (LANGUAGES.includes(browserLang)) {
    language.value = browserLang;
  } else {
    language.value = "en"; // Fallback to English if browser language is not supported
  }
}

export default language;
