/** This could be loaded from a localization file or db */

import type { Language } from "./language";

export type Claim = {
  title: string;
  summary: string;
  originalText: string;
};

const claims: ({
  id: number;
} & Record<Language, Claim>)[] = [
  {
    id: 1,
    de: {
      title: "Anspruch 1",
      summary: `Aus einem digitalen 3D-Modell eines Körperteils werden ein Volumenmodell und die nötigen Fertigungsdaten eines Hilfsmittels automatisch erstellt.`,
      originalText: `Verfahren zum Erstellen von Fertigungsdaten zur Fertigung einer orthopädietechnischen Einrichtung, die unter Anwendung der erstellten Fertigungsdaten in einem automatisierten Fertigungsverfahren herstellbar ist, dadurch gekennzeichnet, dass das Verfahren die folgenden Schritte umfasst:

      - Bereitstellen einer digitalen Zweckform in einer Datenverarbeitungsanlage, wobei die digitale Zweckform ein 3D-Körperteilmodell (20) eines Körperteils beinhaltet, für das die orthopädietechnischen Einrichtung bestimmt ist,

      - automatisches Erstellen eines digitalen Volumenmodells der zu fertigenden orthopädietechnischen Einrichtung basierend auf dem 3DKörperteilmodell (20) der bereitgestellten digitalen Zweckform mittels der Datenverarbeitungsanlage, und

      - Generieren der digitalen Fertigungsdaten aus dem digitalen Volumenmodell mittels der Datenverarbeitungsanlage.`,
    },
    en: {
      title: "Claim 1 [automatically translated]",
      summary:
        "A volume model and the required manufacturing data for an orthopedic device are automatically generated from a digital 3D model of a body part.",
      originalText: `Method for creating manufacturing data for producing an orthopedic device, which can be manufactured using the generated manufacturing data in an automated production process, characterized in that the method comprises the following steps:  
- Providing a digital template in a data processing system, wherein the digital template includes a 3D body part model (20) of a body part for which the orthopedic device is intended,  
- Automatically creating a digital volume model of the orthopedic device to be produced based on the 3D body part model (20) of the provided digital template using the data processing system, and  
- Generating the digital manufacturing data from the digital volume model using the data processing system.`,
    },
  },
  {
    id: 2,
    de: {
      title: "Anspruch 2",
      summary:
        "Aus einem 3D-Modell eines Körperteils und einer Randbegrenzung wird ein digitales Oberflächenmodell erstellt (Innenseite des Hilfsmittels). Daraus wird automatisch ein Volumenmodell mit vorgegebener Materialstärke generiert.",
      originalText:
        "Verfahren nach Anspruch 1, dadurch gekennzeichnet, dass ein digitales Oberflächenmodell der zu fertigenden orthopädietechnischen Einrichtung basierend auf dem 3D-Körperteilmodell der bereitgestellten digitalen Zweckform und einer auf dem 3D-Körperteilmodell vorgegebenen Randbegrenzung der orthopädietechnischen Einrichtung mittels der Datenverarbeitungsanlage erstellt wird, wobei das Oberflächenmodell die Innenseite der späteren orthopädietechnischen Einrichtung bildet und wobei das digitale Volumenmodell der zu fertigenden orthopädietechnischen Einrichtung basierend auf dem digitalen Oberflächenmodell und einer vorgegebenen Materialstärke der zu fertigenden orthopädietechnischen Einrichtung mittels der Datenverarbeitungsanlage automatisch erstellt wird.",
    },
    en: {
      title: "Claim 2 [automatically translated]",
      summary:
        "Based on a 3D model of a body part and a boundary definition, a digital surface model is created (inner side of the orthopedic device). Based on this, a volume model with a predefined material thickness is automatically generated.",
      originalText:
        "Method according to Claim 1, characterized in that a digital surface model of the orthopedic device to be produced is created by the data processing system based on the 3D body part model of the provided digital template and a predefined boundary of the orthopedic device on the 3D body part model. The surface model forms the inner side of the future orthopedic device, and the digital volume model of the orthopedic device to be produced is automatically created by the data processing system based on the digital surface model and a predefined material thickness of the orthopedic device to be produced.",
    },
  },
  {
    id: 3,
    de: {
      title: "Anspruch 3",
      summary:
        "Das digitale Oberflächenmodell und/oder Volumenmodell wird automatisch unter Berücksichtigung verschiedener funktionaler Bereiche erstellt, wie z.B. Polsterbereiche, Bereiche mit unterschiedlichen Wandstärken, Verstärkungen, Perforationen, Gelenkbereiche und Integrationsbereiche für weitere Bauteile.",
      originalText:
        "Verfahren nach einem der vorhergehenden Ansprüche, dadurch gekennzeichnet, dass ein digitales Oberflächenmodell und/oder das digitale Volumenmodell weiterhin unter Berücksichtigung wenigstens eines vorgegebenen Polsterbereiches, Bereiches variierender Wandstärke, Verstärkungsbereiches, Perforationsbereiches, Austulpungsbereiches, Gelenkbereiches und/oder eines Bereiches, der zur Integration weiterer Bauteile oder Halbzeuge vorgesehen ist, mittels der Datenverarbeitungsanlage erstellt wird.",
    },
    en: {
      title: "Claim 3 [automatically translated]",
      summary:
        "The digital surface model and/or volume model is automatically created taking into account various functional areas, such as padding areas, areas with varying wall thicknesses, reinforcements, perforations, joint areas, and integration areas for additional components.",
      originalText:
        "Method according to any of the preceding claims, characterized in that the digital surface model and/or the digital volume model is additionally created by the data processing system taking into account at least one predefined padding area, area of varying wall thickness, reinforcement area, perforation area, flaring area, joint area, and/or an area intended for the integration of additional components or semi-finished products.",
    },
  },
  {
    id: 4,
    de: {
      title: "Anspruch 4",
      summary:
        "Die verschiedenen funktionalen Bereiche (Polster, Wandstärken, Verstärkungen, Perforationen, Gelenke, Integrationsbereiche) werden manuell am 3D-Körperteilmodell definiert und vorgegeben.",
      originalText:
        "Verfahren nach Anspruch 3, dadurch gekennzeichnet, dass der wenigstens eine Polsterbereich (16), Bereich variierender Wandstärke, Verstärkungsbereich, Perforationsbereich (15), Austulpungsbereich (18), Gelenkbereich und/oder eine Bereich zur Integration weiterer Bauteile oder Halbzeuge manuell an dem 3D-Körperteilmodell (20) vorgegeben wird.",
    },
    en: {
      title: "Claim 4 [automatically translated]",
      summary:
        "The various functional areas (padding, wall thicknesses, reinforcements, perforations, joints, integration areas) are manually defined and specified on the 3D body part model.",
      originalText:
        "Method according to Claim 3, characterized in that at least one padding area (16), area of varying wall thickness, reinforcement area, perforation area (15), flaring area (18), joint area, and/or an area for the integration of additional components or semi-finished products is manually defined on the 3D body part model (20).",
    },
  },
  {
    id: 5,
    de: {
      title: "Anspruch 5",
      summary:
        "Die funktionalen Bereiche werden automatisch durch das System basierend auf Markierungen am 3D-Modell und/oder automatisch erkannten anatomischen Merkmalen definiert.",
      originalText:
        "Verfahren nach Anspruch 3 oder 4, dadurch gekennzeichnet, dass mittels der Datenverarbeitungsanlage (30) der wenigstens eine Polsterbereich (16), Bereich variierender Wandstärke, Verstärkungsbereich, Perforationsbereich (15), Austulpungsbereich (18), Gelenkbereich und/oder eine Bereich zur Integration weiterer Bauteile oder Halbzeuge in Abhängigkeit von einer oder mehreren Markierungen (11, 12) automatisch vorgegeben wird und/oder in Abhängigkeit von durch die Datenverarbeitungsanlage (30) basierend auf dem 3D-Körperteilmodell (20) erkannten anatomischen Merkmalen automatisch vorgegeben wird.",
    },
    en: {
      title: "Claim 5 [automatically translated]",
      summary:
        "The functional areas are automatically defined by the system based on markers on the 3D model and/or automatically detected anatomical features.",
      originalText:
        "Method according to Claim 3 or 4, characterized in that at least one padding area (16), area of varying wall thickness, reinforcement area, perforation area (15), flaring area (18), joint area, and/or an area for the integration of additional components or semi-finished products is automatically defined by the data processing system (30) based on one or more markers (11, 12) and/or based on anatomical features automatically detected by the data processing system (30) from the 3D body part model (20).",
    },
  },
  {
    id: 6,
    de: {
      title: "Anspruch 6",
      summary:
        "Das digitale Oberflächenmodell und/oder Volumenmodell wird zusätzlich unter Verwendung eines vorgegebenen Grundmodells automatisch erstellt.",
      originalText:
        "Verfahren nach einem der vorhergehenden Ansprüche, dadurch gekennzeichnet, dass ein digitales Oberflächenmodell (14) und/oder das digitale Volumenmodell (19) der zu fertigenden orthopädietechnischen Einrichtung (100) weiterhin unter Kenntnis eines vorgegebenen Grundmodells automatisch erstellt wird.",
    },
    en: {
      title: "Claim 6 [automatically translated]",
      summary:
        "The digital surface model and/or volume model is additionally created automatically using a predefined base model.",
      originalText:
        "Method according to any of the preceding claims, characterized in that a digital surface model (14) and/or the digital volume model (19) of the orthopedic device (100) to be produced is additionally generated automatically based on a predefined base model.",
    },
  },
  {
    id: 7,
    de: {
      title: "Anspruch 7",
      summary:
        "Das vorgegebene Grundmodell wird automatisch aus einer Vielzahl von Grundmodellen basierend auf dem 3D-Körperteilmodell ausgewählt.",
      originalText:
        "Verfahren nach Anspruch 6, dadurch gekennzeichnet, dass das vorgegebene Grundmodell in Abhängigkeit von dem 3D-Körperteilmodell (20) automatisch aus einer Vielzahl von Grundmodellen durch die Datenverarbeitungsanlage (30) ausgewählt wird.",
    },
    en: {
      title: "Claim 7 [automatically translated]",
      summary:
        "The predefined base model is automatically selected from a plurality of base models based on the 3D body part model.",
      originalText:
        "Method according to Claim 6, characterized in that the predefined base model is automatically selected by the data processing system (30) from a plurality of base models based on the 3D body part model (20).",
    },
  },
  {
    id: 8,
    de: {
      title: "Anspruch 8",
      summary:
        "Das digitale Oberflächenmodell und/oder Volumenmodell wird zusätzlich basierend auf einer medizinischen Indikation oder gewünschten Unterstützungswirkung automatisch erstellt.",
      originalText:
        "Verfahren nach einem der vorhergehenden Ansprüche, dadurch gekennzeichnet, dass ein digitales Oberflächenmodell (14) und/oder das digitale Volumenmodell (19) der zu fertigenden orthopädietechnischen Einrichtung (100) weiterhin unter Kenntnis einer vorgegebenen medizinischen Indikation oder gewünschten Unterstützungswirkung automatisch erstellt wird.",
    },
    en: {
      title: "Claim 8 [automatically translated]",
      summary:
        "The digital surface model and/or volume model is additionally created automatically based on a predefined medical indication or desired support effect.",
      originalText:
        "Method according to any of the preceding claims, characterized in that a digital surface model (14) and/or the digital volume model (19) of the orthopedic device (100) to be produced is additionally generated automatically based on a predefined medical indication or the desired support effect.",
    },
  },
  {
    id: 9,
    de: {
      title: "Anspruch 9",
      summary:
        "Die orthopädietechnische Einrichtung ist eine Orthese (Fuß-, Hand-, Knie-, Rumpf- oder Kopforthese), eine Prothese oder ein Exoskelett.",
      originalText:
        "Verfahren nach einem der vorhergehenden Ansprüche, dadurch gekennzeichnet, dass die orthopädietechnische Einrichtung (100) eine Orthese, insbesondere eine Fußorthese, Handorthese, Knieorthese, Rumpforthese oder Kopforthese ist, eine Prothese oder ein Exoskelett ist.",
    },
    en: {
      title: "Claim 9 [automatically translated]",
      summary:
        "The orthopedic device is an orthosis (foot, hand, knee, trunk, or head orthosis), a prosthesis, or an exoskeleton.",
      originalText:
        "Method according to any of the preceding claims, characterized in that the orthopedic device (100) is an orthosis, in particular a foot orthosis, hand orthosis, knee orthosis, trunk orthosis or head orthosis, a prosthesis or an exoskeleton.",
    },
  },
  {
    id: 10,
    de: {
      title: "Anspruch 10",
      summary:
        "Die digitale Zweckform wird durch Scannen des Körperteils und anschließende Erzeugung des 3D-Körperteilmodells bereitgestellt.",
      originalText:
        "Verfahren nach einem der vorhergehenden Ansprüche, dadurch gekennzeichnet, dass die digitale Zweckform (10) bereitgestellt wird, indem das Körperteil mittels einer Scanvorrichtung gescannt und in Abhängigkeit davon dann das 3D-Körperteilmodell (20) erzeugt wird.",
    },
    en: {
      title: "Claim 10 [automatically translated]",
      summary:
        "The digital template is provided by scanning the body part and subsequently generating the 3D body part model.",
      originalText:
        "Method according to any of the preceding claims, characterized in that the digital template (10) is provided by scanning the body part using a scanning device and then generating the 3D body part model (20) based on this scan.",
    },
  },
  {
    id: 11,
    de: {
      title: "Anspruch 11",
      summary:
        "Computerprogramm zur Durchführung des Verfahrens nach einem der Ansprüche 1 bis 9 auf einer Datenverarbeitungsanlage.",
      originalText:
        "Computerprogramm mit Programmcodemitteln eingerichtet zur Durchführung des Verfahrens nach einem der Ansprüche 1 bis 9, wenn das Computerprogramm auf einer Datenverarbeitungsanlage (30) ausgeführt wird.",
    },
    en: {
      title: "Claim 11 [automatically translated]",
      summary:
        "Computer program for performing the method according to any of claims 1 to 9 on a data processing system.",
      originalText:
        "Computer program with program code means configured to perform the method according to any of claims 1 to 9, when the computer program is executed on a data processing system (30).",
    },
  },
  {
    id: 12,
    de: {
      title: "Anspruch 12",
      summary:
        "Vollständiges Fertigungsverfahren: Erstellen der Fertigungsdaten nach Ansprüchen 1-10, dann Zuführung zu einer automatisierten Fertigungsanlage zur Herstellung der orthopädietechnischen Einrichtung.",
      originalText: `Verfahren zur Fertigung einer orthopädietechnischen Einrichtung (100), wobei das Verfahren die folgenden Schritte umfasst:
- Erstellen von Fertigungsdaten (40) für die orthopädietechnische Einrichtung (100) mit dem Verfahren nach einem der Ansprüche 1 bis 10,
- Zuführen der Fertigungsdaten (40) zu einer automatisierten Fertigungsanlage (50), die unter Anwendung der erstellten Fertigungsdaten (40) in einem automatisierten Fertigungsverfahren die orthopädietechnische Einrichtung (100) herstellt.`,
    },
    en: {
      title: "Claim 12 [automatically translated]",
      summary:
        "Complete manufacturing method: Creating manufacturing data according to claims 1-10, then supplying it to an automated manufacturing facility to produce the orthopedic device.",
      originalText: `Method for manufacturing an orthopedic device (100), wherein the method comprises the following steps:

Creating manufacturing data (40) for the orthopedic device (100) using the method according to any of claims 1 to 10,
Supplying the manufacturing data (40) to an automated manufacturing facility (50), which produces the orthopedic device (100) in an automated manufacturing process using the generated manufacturing data (40).`,
    },
  },
  {
    id: 13,
    de: {
      title: "Anspruch 13",
      summary:
        "Verfahren nach Anspruch 12, bei dem die orthopädietechnische Einrichtung tatsächlich durch die automatisierte Fertigungsanlage basierend auf den zugeführten Fertigungsdaten hergestellt wird.",
      originalText:
        "Verfahren nach Anspruch 12, gekennzeichnet durch Herstellen der orthopädietechnischen Einrichtung (100) durch das automatisierte Fertigungsverfahren mittels der automatisierten Fertigungsanlage (50) in Abhängigkeit von den zugeführten Fertigungsdaten (40).",
    },
    en: {
      title: "Claim 13 [automatically translated]",
      summary:
        "Method according to Claim 12, where the orthopedic device is actually manufactured by the automated manufacturing facility based on the supplied manufacturing data.",
      originalText:
        "Method according to Claim 12, characterized by manufacturing the orthopedic device (100) through the automated manufacturing process using the automated manufacturing facility (50) based on the supplied manufacturing data (40).",
    },
  },
];

export default claims;
