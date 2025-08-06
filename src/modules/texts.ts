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

        patentSummaryIntro: {
            de: "Das Patent umfasst folgende Ansprüche (ausführlichere Zusammenfassungen unten):",
            en: "The patent encompasses the following claims (more detailed summaries below):",
            fr: "Le brevet englobe les revendications suivantes (résumés plus détaillés ci-dessous) :",
            it: "Il brevetto comprende le seguenti rivendicazioni (riassunti più dettagliati di seguito):",
            es: "La patente abarca las siguientes reivindicaciones (resúmenes más detallados a continuación):",
        },

        patentSummary: {
            de: `Automatisierte Erstellung von Fertigungsdaten (1) eines Hilfsmittels, Orthesen, Prothesen, Exoskelette (9), bzw. 3D-Volumenmodells mit Randkurven (2) und funktionalen Bereichen (3).
Bereiche können manuell (4) oder automatisch per Markierungen definiert werden (5).
Erstellung basiert optional auf einem Grundmodell (6), auch automatisch ausgewählt nach 3D-Modell (7) oder Indikation (8).
Umfasst das Erstellen einer Zweckform aus Körperscan (10), dem Computerprogramm zur Durchführung (11), Fertigungsanlagen-Integration (12) und den kompletten Prozess inklusive automatisierter Fertigung (13).`,
            en: `Automated creation of manufacturing data (1) for assistive devices, orthoses, prostheses, exoskeletons (9), or 3D volume model with boundary curves (2) and functional areas (3).
Areas can be defined manually (4) or automatically via markings (5).
Creation optionally based on a basic model (6), also automatically selected according to 3D model (7) or indication (8).
Includes creating a functional form from body scan (10), computer program for implementation (11), manufacturing facility integration (12), and complete process including automated manufacturing (13).`,
            fr: `Création automatisée de données de fabrication (1) pour dispositifs d'assistance, orthèses, prothèses, exosquelettes (9), ou modèle de volume 3D avec courbes de contour (2) et zones fonctionnelles (3).
Les zones peuvent être définies manuellement (4) ou automatiquement via marquages (5).
Création optionnellement basée sur un modèle de base (6), aussi automatiquement sélectionné selon modèle 3D (7) ou indication (8).
Comprend la création d'une forme fonctionnelle à partir de scan corporel (10), programme informatique pour implémentation (11), intégration d'installations de fabrication (12), et processus complet incluant fabrication automatisée (13).`,
            it: `Creazione automatizzata di dati di produzione (1) per dispositivi di assistenza, ortesi, protesi, esoscheletri (9), o modello di volume 3D con curve di contorno (2) e aree funzionali (3).
Le aree possono essere definite manualmente (4) o automaticamente tramite marcatori (5).
Creazione opzionalmente basata su modello di base (6), anche automaticamente selezionato secondo modello 3D (7) o indicazione (8).
Include la creazione di forma funzionale da scansione corporea (10), programma per computer per implementazione (11), integrazione impianti di produzione (12), e processo completo inclusa produzione automatizzata (13).`,
            es: `Creación automatizada de datos de fabricación (1) para dispositivos de asistencia, órtesis, prótesis, exoesqueletos (9), o modelo de volumen 3D con curvas de contorno (2) y áreas funcionales (3).
Las áreas pueden definirse manualmente (4) o automáticamente mediante marcadores (5).
Creación opcionalmente basada en modelo básico (6), también seleccionado automáticamente según modelo 3D (7) o indicación (8).
Incluye crear forma funcional a partir de escáner corporal (10), programa de computadora para implementación (11), integración instalaciones de fabricación (12), y proceso completo incluyendo fabricación automatizada (13).`,
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
