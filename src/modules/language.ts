import { ref } from "vue";

export const LANGUAGES = ["de", "en"] as const;
export type Language = (typeof LANGUAGES)[number];
const language = ref<Language>("de");

export function switchLanguage(newLang?: Language) {
  newLang ??= language.value === "de" ? "en" : "de";
  language.value = newLang;
}

export default language;
