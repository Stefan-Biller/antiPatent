/** This could be loaded from a localization file or db */

import type { Language } from "./language";

type LocalizedText = Record<Language, string>;

export const texts = {
  title: {
    de: "Patent DE: 10 2019 109 781.9",
    en: "Patent DE: 10 2019 109 781.9",
    fr: "Brevet DE: 10 2019 109 781.9",
    it: "Brevetto DE: 10 2019 109 781.9",
    es: "Patente DE: 10 2019 109 781.9",
  },
  subtitle: {
    de:
      "Eine open source Opposition gegen ein übergriffiges Patent in der digitalen Orthopädie.",
    en:
      "An open source opposition to an overreaching patent in digital orthopedics.",
    fr:
      "Une opposition open source à un brevet envahissant dans l'orthopédie numérique.",
    it:
      "Un'opposizione open source a un brevetto invasivo nell'ortopedia digitale.",
    es:
      "Una oposición de código abierto a una patente invasiva en ortopedia digital.",
  },
  texts: {
    intro1: {
      de:
        `Am 08.05.2025 wurde das Patent DE102019109781 gewährt und veröffentlicht.
      Das Patent betrifft -jeden- Arbeitsablauf, in dem eine druckbare Orthese auf einem 3D-Modell eines Körperteils erstellt wird. `,
      en: `On 08.05.2025, the patent DE102019109781 was granted and published.
      The patent concerns -every- workflow in which a printable orthosis is created based on a 3D model of a body part.`,
      fr: `Le 08.05.2025, le brevet DE102019109781 a été accordé et publié.
      Le brevet concerne -chaque- flux de travail dans lequel une orthèse imprimable est créée à partir d'un modèle 3D d'une partie du corps.`,
      it:
        `Il 08.05.2025 è stato concesso e pubblicato il brevetto DE102019109781.
      Il brevetto riguarda -ogni- flusso di lavoro in cui viene creata un'ortesi stampabile basata su un modello 3D di una parte del corpo.`,
      es: `El 08.05.2025 se concedió y publicó la patente DE102019109781.
      La patente se refiere a -cualquier- flujo de trabajo en el que se crea una ortesis imprimible a partir de un modelo 3D de una parte del cuerpo.`,
    },
    intro2: {
      de:
        `Falls das Patent in der jetzigen Form bestehen bleibt wäre es in Deutschland für die nächsten 15 Jahre kaum möglich im Bereich 3D-gedruckte Orthopädie zu arbeiten.
    Innerhalb von 9 Monaten nach Veröffentlichung (bis 08.02.2026) ist der vereinfachte Einspruch ohne ein aufwändiges Nichtichkeitsverfahren möglich.`,
      en:
        `If the patent remains in its current form, it would be nearly impossible to work in the field of 3D-printed orthopedics in Germany for the next 15 years.
    A simplified opposition can be filed within 9 months of publication (until 08.02.2026) without the need for a complex nullity procedure.`,
      fr:
        `Si le brevet reste dans sa forme actuelle, il serait presque impossible de travailler dans le domaine de l'orthopédie imprimée en 3D en Allemagne pendant les 15 prochaines années.
    Une opposition simplifiée peut être déposée dans les 9 mois suivant la publication (jusqu'au 08.02.2026) sans avoir besoin d'une procédure de nullité complexe.`,
      it:
        `Se il brevetto rimane nella sua forma attuale, sarebbe quasi impossibile lavorare nel campo dell'ortopedia stampata in 3D in Germania per i prossimi 15 anni.
    Un'opposizione semplificata può essere presentata entro 9 mesi dalla pubblicazione (fino al 08.02.2026) senza la necessità di una complessa procedura di nullità.`,
      es:
        `Si la patente permanece en su forma actual, sería casi imposible trabajar en el campo de la ortopedia impresa en 3D en Alemania durante los próximos 15 años.
    Una oposición simplificada puede presentarse dentro de 9 meses de la publicación (hasta el 08.02.2026) sin necesidad de un procedimiento de nulidad complejo.`,
    },
    intro3: {
      en:
        `Please consider filing an opposition to this patent, adding to the collection of counter claims, or supporting our efforts.`,
      de:
        `Bitte unterstützen Sie uns indem Sie gegen dieses Patent Einspruch erheben oder die Sammlung von Gegenansprüchen erweitern.`,
      fr:
        `Veuillez envisager de déposer une opposition à ce brevet, d'ajouter à la collection de contre-arguments ou de soutenir nos efforts.`,
      it:
        `Si prega di considerare la presentazione di un'opposizione a questo brevetto, l'aggiunta alla collezione di contro-rivendicazioni o il sostegno ai nostri sforzi.`,
      es:
        `Por favor considere presentar una oposición a esta patente, agregar a la colección de contra-reivindicaciones o apoyar nuestros esfuerzos.`,
    },
    summaryTitle: {
      de: "Zusammenfassung der Patentansprüche:",
      en: "Summary of Patent Claims:",
      fr: "Résumé des revendications du brevet :",
      it: "Riepilogo delle rivendicazioni del brevetto:",
      es: "Resumen de las reivindicaciones de la patente:",
    },
    translationNotice: {
      de: "*Übersetzungen automatisch erstellt",
      en: "*Translations automatically generated",
      fr: "*Traductions générées automatiquement",
      it: "*Traduzioni generate automaticamente",
      es: "*Traducciones generadas automáticamente",
    },
  },
  buttonTexts: {
    originalPatentLink: {
      de: "Original Patent: DPMA-Webseite",
      en: "Original Patent: DPMA Website",
      fr: "Brevet original : site Web du DPMA",
      it: "Brevetto originale: sito web del DPMA",
      es: "Patente original: sitio web del DPMA",
    },
    showOriginalClaim: {
      de: "Originalanspruch anzeigen",
      en: "Show original",
      fr: "Afficher l'original",
      it: "Mostra l'originale",
      es: "Mostrar original",
    },
    showCounterClaims: {
      de: "Gegenansprüche anzeigen",
      en: "Show counter claims",
      fr: "Afficher les contre-arguments",
      it: "Mostra contro-rivendicazioni",
      es: "Mostrar contra-reivindicaciones",
    },
  },
  snippets: {
    opposes: {
      de: "Opposition",
      en: "Opposition",
      fr: "Opposition",
      it: "Opposizione",
      es: "Oposición",
    },
  },
} as const satisfies {
  title: LocalizedText;
  subtitle: LocalizedText;
  texts: {
    [k: string]: LocalizedText;
  };
  buttonTexts: {
    originalPatentLink: LocalizedText;
    showOriginalClaim: LocalizedText;
    showCounterClaims: LocalizedText;
  };
  snippets: {
    [k: string]: {
      [lang in Language]: string;
    };
  };
};
