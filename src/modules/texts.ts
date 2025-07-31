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
        de: "Eine open source Opposition gegen einen Showstopper der digitalen Orthopädie.",
        en: "An open source opposition against a showstopper in digital orthopedics.",
        fr: "Une opposition open source contre un obstacle majeur de l'orthopédie numérique.",
        it: "Un'opposizione open source contro un ostacolo critico nell'ortopedia digitale.",
        es: "Una oposición de código abierto contra un obstáculo crítico en la ortopedia digital.",
    },
    texts: {
        intro1: {
            de: `Am 08.05.2025 wurde das Patent DE102019109781 gewährt und veröffentlicht.
      Das Patent betrifft -jeden- Arbeitsablauf, in dem eine druckbare Orthese auf einem 3D-Modell eines Körperteils erstellt wird. `,
            en: `On 08.05.2025, the patent DE102019109781 was granted and published.
      The patent concerns -every- workflow in which a printable orthosis is created based on a 3D model of a body part.`,
            fr: `Le 08.05.2025, le brevet DE102019109781 a été accordé et publié.
      Le brevet concerne -chaque- flux de travail dans lequel une orthèse imprimable est créée à partir d'un modèle 3D d'une partie du corps.`,
            it: `Il 08.05.2025 è stato concesso e pubblicato il brevetto DE102019109781.
      Il brevetto riguarda -ogni- flusso di lavoro in cui viene creata un'ortesi stampabile basata su un modello 3D di una parte del corpo.`,
            es: `El 08.05.2025 se concedió y publicó la patente DE102019109781.
      La patente se refiere a -cualquier- flujo de trabajo en el que se crea una ortesis imprimible a partir de un modelo 3D de una parte del cuerpo.`,
        },
        intro2: {
            de: `Falls das Patent in der jetzigen Form bestehen bleibt wäre es in Deutschland für die nächsten 15 Jahre kaum möglich im Bereich 3D-gedruckte Orthopädie zu arbeiten.
    Innerhalb von 9 Monaten nach Veröffentlichung (bis 08.02.2026) ist der vereinfachte Einspruch ohne ein aufwändiges Nichtichkeitsverfahren möglich.`,
            en: `If the patent remains in its current form, it would be nearly impossible to work in the field of 3D-printed orthopedics in Germany for the next 15 years.
    A simplified opposition can be filed within 9 months of publication (until 08.02.2026) without the need for a complex nullity procedure.`,
            fr: `Si le brevet reste dans sa forme actuelle, il serait presque impossible de travailler dans le domaine de l'orthopédie imprimée en 3D en Allemagne pendant les 15 prochaines années.
    Une opposition simplifiée peut être déposée dans les 9 mois suivant la publication (jusqu'au 08.02.2026) sans avoir besoin d'une procédure de nullité complexe.`,
            it: `Se il brevetto rimane nella sua forma attuale, sarebbe quasi impossibile lavorare nel campo dell'ortopedia stampata in 3D in Germania per i prossimi 15 anni.
    Un'opposizione semplificata può essere presentata entro 9 mesi dalla pubblicazione (fino al 08.02.2026) senza la necessità di una complessa procedura di nullità.`,
            es: `Si la patente permanece en su forma actual, sería casi imposible trabajar en el campo de la ortopedia impresa en 3D en Alemania durante los próximos 15 años.
    Una oposición simplificada puede presentarse dentro de 9 meses de la publicación (hasta el 08.02.2026) sin necesidad de un procedimiento de nulidad complejo.`,
        },
        intro3: {
            en: `Please file an opposition to this patent, expand the collection of counter claims, or share this opposition.`,
            de: `Bitte erheben Sie gegen dieses Patent Einspruch, erweitern Sie die Sammlung von Gegenansprüchen oder teilen Sie diese Opposition.`,
            fr: `Veuillez déposer une opposition à ce brevet, étendre la collection de contre-arguments ou partager cette opposition.`,
            it: `Si prega di presentare un'opposizione a questo brevetto, ampliare la collezione di contro-rivendicazioni o condividere questa opposizione.`,
            es: `Por favor presente una oposición a esta patente, amplíe la colección de contra-reivindicaciones o comparta esta oposición.`,
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
            de: "Original Patent auf der DPMA-Webseite",
            en: "Original patent on the DPMA Website",
            fr: "Brevet original sur le site Web du DPMA",
            it: "Brevetto originale sul sito web del DPMA",
            es: "Patente original en el sitio web de la DPMA",
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
        addSourcesViaGithub: {
            en: "Add sources via GitHub:",
            de: "Quellen auf GitHub hinzufügen:",
            fr: "Ajouter des sources via GitHub :",
            it: "Aggiungi fonti tramite GitHub:",
            es: "Agregar fuentes a través de GitHub:",
        },
        contactByMail: {
            en: "Or contact us by mail",
            de: "Oder kontaktieren Sie uns per Mail",
            fr: "Ou contactez-nous par e-mail",
            it: "O contattaci via email",
            es: "O contáctenos por correo electrónico",
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
        claims: {
            de: "Ansprüche",
            en: "Claims",
            fr: "Revendiquer",
            it: "Rivendicazioni",
            es: "Reivindicaciones",
        },
    },
} as const satisfies {
    title: LocalizedText;
    subtitle: LocalizedText;
    texts: { [k: string]: LocalizedText };
    buttonTexts: { [k: string]: LocalizedText };
    snippets: { [k: string]: LocalizedText };
};
