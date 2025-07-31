import { ref, watch } from "vue";
import Claims from "./claims";
import language, { type Language } from "./language";
import CounterClaims from "./counterClaims";
import { texts } from "./texts";

const content = ref(getLocaleContent("de"));

/** localized claims and counterClaims */
function getLocaleContent(lang: Language) {
    const newContent = {
        title: texts.title[lang],
        subtitle: texts.subtitle[lang],
        texts: Object.fromEntries(
            Object.entries(texts.texts).map(([key, value]) => [key, value[lang]])
        ),
        buttonTexts: {
            originalPatentLink: texts.buttonTexts.originalPatentLink[lang],
            showOriginalClaim: texts.buttonTexts.showOriginalClaim[lang],
            showCounterClaims: texts.buttonTexts.showCounterClaims[lang],
        },
        snippets: Object.fromEntries(
            Object.entries(texts.snippets).map(([key, value]) => [key, value[lang]])
        ),
        claims: Claims.map(({ id, ...locales }) => ({
            id,
            ...locales[lang],
        })),
        counterClaims: CounterClaims.map(({ summary, ...details }) => ({
            ...details,
            summary: summary[lang],
        })),
    };
    return newContent;
}

watch(
    language,
    (newLang) => {
        content.value = getLocaleContent(newLang);
    },
    { immediate: true }
);

export default content;
