import { ref, watch } from "vue";
import Claims from "./claims";
import language, { type Language } from "./language";
import CounterClaims from "./counterClaims";
import { texts } from "./texts";

const content = ref(getLocaleContent("de"));

/** localized claims and counterClaims */
function getLocaleContent(lang: Language) {
  const headerTexts = Object.fromEntries(
    Object.entries(texts.texts).map(([key, value]) => [key, value[lang]])
  );
  const newContent = {
    title: texts.title[lang],
    subtitle: texts.subtitle[lang],
    texts: headerTexts,
    claims: Claims.map((c) => ({
      id: c.id,
      details: c[lang],
    })),
    counterClaims: CounterClaims.map((cc) => ({
      id: cc.id,
      author: cc.author,
      date: cc.date,
      referencesClaims: cc.referencesClaims,
      link: cc.link,
      details: cc[lang],
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
