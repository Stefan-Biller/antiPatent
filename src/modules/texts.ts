/** This could be loaded from a localization file or db */

import type { Language } from "./language";

export const texts = {
  title: {
    de: "Patent DE: 10 2019 109 781.9",
    en: "Patent DE: 10 2019 109 781.9",
  },
  subtitle: {
    de: "Eine Sammlung von Gegenansprüchen um den Tod der digitalen Orthopädietechnik zu verhindern.",
    en: "A collection of counter claims in opposition, to prevent the death of digital orthopedics.",
  },
  texts: {
    intro1: {
      de: `Am 08.05.2025 wurde das Patent DE102019109781 gewährt und veröffentlicht.
      Das Patent betrifft -jeden- Arbeitsablauf, in dem eine druckbare Orthese auf einem 3D-Modell eines Körperteils erstellt wird. `,
      en: `On 08.05.2025, the patent DE102019109781 was granted and published.
      The patent concerns -every- workflow in which a printable orthosis is created based on a 3D model of a body part.`,
    },
    intro2: {
      de: `Falls das Patent in der jetzigen Form bestehen bleibt wäre es in Deutschland für die nächsten 15 Jahre kaum möglich im Bereich 3D-gedruckte Orthopädie zu arbeiten.
    Innerhalb von 9 Monaten nach Veröffentlichung (bis 08.02.2026) ist der vereinfachte Einspruch ohne ein aufwändiges Nichtichkeitsverfahren möglich.`,
      en: `If the patent remains in its current form, it would be nearly impossible to work in the field of 3D-printed orthopedics in Germany for the next 15 years.
    A simplified opposition can be filed within 9 months of publication (until 08.02.2026) without the need for a complex nullity procedure.`,
    },
    intro3: {
      en: `Please consider filing an opposition to this patent, adding to the collection of counter claims, or supporting our efforts.`,
      de: `Bitte unterstützen Sie uns indem Sie gegen dieses Patent Einspruch erheben oder die Sammlung von Gegenansprüchen erweitern.`,
    },
  },
} satisfies {
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  texts: {
    [k: string]: Record<Language, string>;
  };
};
