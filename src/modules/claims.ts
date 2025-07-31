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
            title: "Claim 1*",
            summary:
                "A volume model and the required manufacturing data for an orthopedic device are automatically generated from a digital 3D model of a body part.",
            originalText: `Method for creating manufacturing data for producing an orthopedic device, which can be manufactured using the generated manufacturing data in an automated production process, characterized in that the method comprises the following steps:  
      
      - Providing a digital template in a data processing system, wherein the digital template includes a 3D body part model (20) of a body part for which the orthopedic device is intended,  

      - Automatically creating a digital volume model of the orthopedic device to be produced based on the 3D body part model (20) of the provided digital template using the data processing system, and  

      - Generating the digital manufacturing data from the digital volume model using the data processing system.`,
        },
        fr: {
            title: "Revendication 1*",
            summary:
                "Un modèle volumique et les données de fabrication requises pour un dispositif orthopédique sont générés automatiquement à partir d'un modèle 3D numérique d'une partie du corps.",
            originalText: `Procédé de création de données de fabrication pour produire un dispositif orthopédique, qui peut être fabriqué en utilisant les données de fabrication générées dans un processus de production automatisé, caractérisé en ce que le procédé comprend les étapes suivantes :

      - Fournir un modèle numérique dans un système de traitement de données, où le modèle numérique inclut un modèle 3D de partie du corps (20) d'une partie du corps pour laquelle le dispositif orthopédique est destiné,

      - Créer automatiquement un modèle volumique numérique du dispositif orthopédique à produire basé sur le modèle 3D de partie du corps (20) du modèle numérique fourni en utilisant le système de traitement de données, et

      - Générer les données de fabrication numériques à partir du modèle volumique numérique en utilisant le système de traitement de données.`,
        },
        es: {
            title: "Reclamación 1*",
            summary:
                "Un modelo volumétrico y los datos de fabricación requeridos para un dispositivo ortopédico se generan automáticamente a partir de un modelo 3D digital de una parte del cuerpo.",
            originalText: `Método para crear datos de fabricación para producir un dispositivo ortopédico, que puede fabricarse utilizando los datos de fabricación generados en un proceso de producción automatizado, caracterizado porque el método comprende los siguientes pasos:

      - Proporcionar una plantilla digital en un sistema de procesamiento de datos, donde la plantilla digital incluye un modelo 3D de parte del cuerpo (20) de una parte del cuerpo para la cual el dispositivo ortopédico está destinado,

      - Crear automáticamente un modelo volumétrico digital del dispositivo ortopédico a producir basado en el modelo 3D de parte del cuerpo (20) de la plantilla digital proporcionada utilizando el sistema de procesamiento de datos, y

      - Generar los datos de fabricación digitales del modelo volumétrico digital utilizando el sistema de procesamiento de datos.`,
        },
        it: {
            title: "Rivendicazione 1*",
            summary:
                "Un modello volumetrico e i dati di fabbricazione richiesti per un dispositivo ortopedico vengono generati automaticamente da un modello 3D digitale di una parte del corpo.",
            originalText: `Metodo per creare dati di fabbricazione per produrre un dispositivo ortopedico, che può essere fabbricato utilizzando i dati di fabbricazione generati in un processo di produzione automatizzato, caratterizzato dal fatto che il metodo comprende i seguenti passaggi:

      - Fornire un modello digitale in un sistema di elaborazione dati, dove il modello digitale include un modello 3D di parte del corpo (20) di una parte del corpo per la quale il dispositivo ortopedico è destinato,

      - Creare automaticamente un modello volumetrico digitale del dispositivo ortopedico da produrre basato sul modello 3D di parte del corpo (20) del modello digitale fornito utilizzando il sistema di elaborazione dati, e

      - Generare i dati di fabbricazione digitali dal modello volumetrico digitale utilizzando il sistema di elaborazione dati.`,
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
            title: "Claim 2*",
            summary:
                "Based on a 3D model of a body part and a boundary definition, a digital surface model is created (inner side of the orthopedic device). Based on this, a volume model with a predefined material thickness is automatically generated.",
            originalText:
                "Method according to Claim 1, characterized in that a digital surface model of the orthopedic device to be produced is created by the data processing system based on the 3D body part model of the provided digital template and a predefined boundary of the orthopedic device on the 3D body part model. The surface model forms the inner side of the future orthopedic device, and the digital volume model of the orthopedic device to be produced is automatically created by the data processing system based on the digital surface model and a predefined material thickness of the orthopedic device to be produced.",
        },
        fr: {
            title: "Revendication 2*",
            summary:
                "Basé sur un modèle 3D d'une partie du corps et une définition de limite, un modèle de surface numérique est créé (côté intérieur du dispositif orthopédique). Sur cette base, un modèle volumique avec une épaisseur de matériau prédéfinie est généré automatiquement.",
            originalText:
                "Procédé selon la revendication 1, caractérisé en ce qu'un modèle de surface numérique du dispositif orthopédique à produire est créé par le système de traitement de données basé sur le modèle 3D de partie du corps du modèle numérique fourni et une limite prédéfinie du dispositif orthopédique sur le modèle 3D de partie du corps. Le modèle de surface forme le côté intérieur du futur dispositif orthopédique, et le modèle volumique numérique du dispositif orthopédique à produire est créé automatiquement par le système de traitement de données basé sur le modèle de surface numérique et une épaisseur de matériau prédéfinie du dispositif orthopédique à produire.",
        },
        es: {
            title: "Reclamación 2*",
            summary:
                "Basado en un modelo 3D de una parte del cuerpo y una definición de límites, se crea un modelo de superficie digital (lado interior del dispositivo ortopédico). Con base en esto, se genera automáticamente un modelo volumétrico con un grosor de material predefinido.",
            originalText:
                "Método según la Reclamación 1, caracterizado porque un modelo de superficie digital del dispositivo ortopédico a producir es creado por el sistema de procesamiento de datos basado en el modelo 3D de parte del cuerpo de la plantilla digital proporcionada y un límite predefinido del dispositivo ortopédico en el modelo 3D de parte del cuerpo. El modelo de superficie forma el lado interior del futuro dispositivo ortopédico, y el modelo volumétrico digital del dispositivo ortopédico a producir se crea automáticamente por el sistema de procesamiento de datos basado en el modelo de superficie digital y un grosor de material predefinido del dispositivo ortopédico a producir.",
        },
        it: {
            title: "Rivendicazione 2*",
            summary:
                "Basato su un modello 3D di una parte del corpo e una definizione di confini, viene creato un modello di superficie digitale (lato interno del dispositivo ortopedico). Su questa base, viene generato automaticamente un modello volumetrico con uno spessore di materiale predefinito.",
            originalText:
                "Metodo secondo la Rivendicazione 1, caratterizzato dal fatto che un modello di superficie digitale del dispositivo ortopedico da produrre viene creato dal sistema di elaborazione dati basato sul modello 3D di parte del corpo del modello digitale fornito e un confine predefinito del dispositivo ortopedico sul modello 3D di parte del corpo. Il modello di superficie forma il lato interno del futuro dispositivo ortopedico, e il modello volumetrico digitale del dispositivo ortopedico da produrre viene creato automaticamente dal sistema di elaborazione dati basato sul modello di superficie digitale e uno spessore di materiale predefinito del dispositivo ortopedico da produrre.",
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
            title: "Claim 3*",
            summary:
                "The digital surface model and/or volume model is automatically created taking into account various functional areas, such as padding areas, areas with varying wall thicknesses, reinforcements, perforations, joint areas, and integration areas for additional components.",
            originalText:
                "Method according to any of the preceding claims, characterized in that the digital surface model and/or the digital volume model is additionally created by the data processing system taking into account at least one predefined padding area, area of varying wall thickness, reinforcement area, perforation area, flaring area, joint area, and/or an area intended for the integration of additional components or semi-finished products.",
        },
        fr: {
            title: "Revendication 3*",
            summary:
                "Le modèle de surface numérique et/ou le modèle volumique est créé automatiquement en tenant compte de diverses zones fonctionnelles, telles que les zones de rembourrage, les zones d'épaisseurs de paroi variables, les renforts, les perforations, les zones articulaires et les zones d'intégration pour des composants supplémentaires.",
            originalText:
                "Procédé selon l'une des revendications précédentes, caractérisé en ce que le modèle de surface numérique et/ou le modèle volumique numérique est en outre créé par le système de traitement de données en tenant compte d'au moins une zone de rembourrage prédéfinie, zone d'épaisseur de paroi variable, zone de renforcement, zone de perforation, zone d'évasement, zone articulaire et/ou une zone destinée à l'intégration de composants supplémentaires ou de produits semi-finis.",
        },
        es: {
            title: "Reclamación 3*",
            summary:
                "El modelo de superficie digital y/o el modelo volumétrico se crea automáticamente teniendo en cuenta varias áreas funcionales, como áreas de acolchado, áreas con grosores de pared variables, refuerzos, perforaciones, áreas articulares y áreas de integración para componentes adicionales.",
            originalText:
                "Método según cualquiera de las reclamaciones anteriores, caracterizado porque el modelo de superficie digital y/o el modelo volumétrico digital se crea adicionalmente por el sistema de procesamiento de datos teniendo en cuenta al menos un área de acolchado predefinida, área de grosor de pared variable, área de refuerzo, área de perforación, área de ensanchamiento, área articular y/o un área destinada a la integración de componentes adicionales o productos semiacabados.",
        },
        it: {
            title: "Rivendicazione 3*",
            summary:
                "Il modello di superficie digitale e/o il modello volumetrico viene creato automaticamente tenendo conto di varie aree funzionali, come aree di imbottitura, aree con spessori di parete variabili, rinforzi, perforazioni, aree articolari e aree di integrazione per componenti aggiuntivi.",
            originalText:
                "Metodo secondo qualsiasi delle rivendicazioni precedenti, caratterizzato dal fatto che il modello di superficie digitale e/o il modello volumetrico digitale viene creato aggiuntivamente dal sistema di elaborazione dati tenendo conto di almeno un'area di imbottitura predefinita, area di spessore di parete variabile, area di rinforzo, area di perforazione, area di allargamento, area articolare e/o un'area destinata all'integrazione di componenti aggiuntivi o prodotti semilavorati.",
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
            title: "Claim 4*",
            summary:
                "The various functional areas (padding, wall thicknesses, reinforcements, perforations, joints, integration areas) are manually defined and specified on the 3D body part model.",
            originalText:
                "Method according to Claim 3, characterized in that at least one padding area (16), area of varying wall thickness, reinforcement area, perforation area (15), flaring area (18), joint area, and/or an area for the integration of additional components or semi-finished products is manually defined on the 3D body part model (20).",
        },
        fr: {
            title: "Revendication 4*",
            summary:
                "Les diverses zones fonctionnelles (rembourrage, épaisseurs de paroi, renforts, perforations, articulations, zones d'intégration) sont définies et spécifiées manuellement sur le modèle 3D de partie du corps.",
            originalText:
                "Procédé selon la revendication 3, caractérisé en ce qu'au moins une zone de rembourrage (16), zone d'épaisseur de paroi variable, zone de renforcement, zone de perforation (15), zone d'évasement (18), zone articulaire et/ou une zone pour l'intégration de composants supplémentaires ou de produits semi-finis est définie manuellement sur le modèle 3D de partie du corps (20).",
        },
        es: {
            title: "Reclamación 4*",
            summary:
                "Las diversas áreas funcionales (acolchado, grosores de pared, refuerzos, perforaciones, articulaciones, áreas de integración) se definen y especifican manualmente en el modelo 3D de parte del cuerpo.",
            originalText:
                "Método según la Reclamación 3, caracterizado porque al menos un área de acolchado (16), área de grosor de pared variable, área de refuerzo, área de perforación (15), área de ensanchamiento (18), área articular y/o un área para la integración de componentes adicionales o productos semiacabados se define manualmente en el modelo 3D de parte del cuerpo (20).",
        },
        it: {
            title: "Rivendicazione 4*",
            summary:
                "Le varie aree funzionali (imbottitura, spessori di parete, rinforzi, perforazioni, articolazioni, aree di integrazione) vengono definite e specificate manualmente sul modello 3D di parte del corpo.",
            originalText:
                "Metodo secondo la Rivendicazione 3, caratterizzato dal fatto che almeno un'area di imbottitura (16), area di spessore di parete variabile, area di rinforzo, area di perforazione (15), area di allargamento (18), area articolare e/o un'area per l'integrazione di componenti aggiuntivi o prodotti semilavorati viene definita manualmente sul modello 3D di parte del corpo (20).",
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
            title: "Claim 5*",
            summary:
                "The functional areas are automatically defined by the system based on markers on the 3D model and/or automatically detected anatomical features.",
            originalText:
                "Method according to Claim 3 or 4, characterized in that at least one padding area (16), area of varying wall thickness, reinforcement area, perforation area (15), flaring area (18), joint area, and/or an area for the integration of additional components or semi-finished products is automatically defined by the data processing system (30) based on one or more markers (11, 12) and/or based on anatomical features automatically detected by the data processing system (30) from the 3D body part model (20).",
        },
        fr: {
            title: "Revendication 5*",
            summary:
                "Les zones fonctionnelles sont automatiquement définies par le système basé sur des marqueurs sur le modèle 3D et/ou des caractéristiques anatomiques détectées automatiquement.",
            originalText:
                "Procédé selon la revendication 3 ou 4, caractérisé en ce qu'au moins une zone de rembourrage (16), zone d'épaisseur de paroi variable, zone de renforcement, zone de perforation (15), zone d'évasement (18), zone articulaire et/ou une zone pour l'intégration de composants supplémentaires ou de produits semi-finis est automatiquement définie par le système de traitement de données (30) basé sur un ou plusieurs marqueurs (11, 12) et/ou basé sur des caractéristiques anatomiques automatiquement détectées par le système de traitement de données (30) à partir du modèle 3D de partie du corps (20).",
        },
        es: {
            title: "Reclamación 5*",
            summary:
                "Las áreas funcionales se definen automáticamente por el sistema basado en marcadores en el modelo 3D y/o características anatómicas detectadas automáticamente.",
            originalText:
                "Método según la Reclamación 3 o 4, caracterizado porque al menos un área de acolchado (16), área de grosor de pared variable, área de refuerzo, área de perforación (15), área de ensanchamiento (18), área articular y/o un área para la integración de componentes adicionales o productos semiacabados se define automáticamente por el sistema de procesamiento de datos (30) basado en uno o más marcadores (11, 12) y/o basado en características anatómicas automáticamente detectadas por el sistema de procesamiento de datos (30) del modelo 3D de parte del cuerpo (20).",
        },
        it: {
            title: "Rivendicazione 5*",
            summary:
                "Le aree funzionali vengono definite automaticamente dal sistema basato su marcatori sul modello 3D e/o caratteristiche anatomiche rilevate automaticamente.",
            originalText:
                "Metodo secondo la Rivendicazione 3 o 4, caratterizzato dal fatto che almeno un'area di imbottitura (16), area di spessore di parete variabile, area di rinforzo, area di perforazione (15), area di allargamento (18), area articolare e/o un'area per l'integrazione di componenti aggiuntivi o prodotti semilavorati viene definita automaticamente dal sistema di elaborazione dati (30) basato su uno o più marcatori (11, 12) e/o basato su caratteristiche anatomiche rilevate automaticamente dal sistema di elaborazione dati (30) dal modello 3D di parte del corpo (20).",
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
            title: "Claim 6*",
            summary:
                "The digital surface model and/or volume model is additionally created automatically using a predefined base model.",
            originalText:
                "Method according to any of the preceding claims, characterized in that a digital surface model (14) and/or the digital volume model (19) of the orthopedic device (100) to be produced is additionally generated automatically based on a predefined base model.",
        },
        fr: {
            title: "Revendication 6*",
            summary:
                "Le modèle de surface numérique et/ou le modèle volumique est en outre créé automatiquement en utilisant un modèle de base prédéfini.",
            originalText:
                "Procédé selon l'une des revendications précédentes, caractérisé en ce qu'un modèle de surface numérique (14) et/ou le modèle volumique numérique (19) du dispositif orthopédique (100) à produire est en outre généré automatiquement basé sur un modèle de base prédéfini.",
        },
        es: {
            title: "Reclamación 6*",
            summary:
                "El modelo de superficie digital y/o el modelo volumétrico se crea adicionalmente automáticamente utilizando un modelo base predefinido.",
            originalText:
                "Método según cualquiera de las reclamaciones anteriores, caracterizado porque un modelo de superficie digital (14) y/o el modelo volumétrico digital (19) del dispositivo ortopédico (100) a producir se genera adicionalmente automáticamente basado en un modelo base predefinido.",
        },
        it: {
            title: "Rivendicazione 6*",
            summary:
                "Il modello di superficie digitale e/o il modello volumetrico viene creato aggiuntivamente automaticamente utilizzando un modello base predefinito.",
            originalText:
                "Metodo secondo qualsiasi delle rivendicazioni precedenti, caratterizzato dal fatto che un modello di superficie digitale (14) e/o il modello volumetrico digitale (19) del dispositivo ortopedico (100) da produrre viene generato aggiuntivamente automaticamente basato su un modello base predefinito.",
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
            title: "Claim 7*",
            summary:
                "The predefined base model is automatically selected from a plurality of base models based on the 3D body part model.",
            originalText:
                "Method according to Claim 6, characterized in that the predefined base model is automatically selected by the data processing system (30) from a plurality of base models based on the 3D body part model (20).",
        },
        fr: {
            title: "Revendication 7*",
            summary:
                "Le modèle de base prédéfini est automatiquement sélectionné parmi une pluralité de modèles de base basé sur le modèle 3D de partie du corps.",
            originalText:
                "Procédé selon la revendication 6, caractérisé en ce que le modèle de base prédéfini est automatiquement sélectionné par le système de traitement de données (30) parmi une pluralité de modèles de base basé sur le modèle 3D de partie du corps (20).",
        },
        es: {
            title: "Reclamación 7*",
            summary:
                "El modelo base predefinido se selecciona automáticamente de una pluralidad de modelos base basado en el modelo 3D de parte del cuerpo.",
            originalText:
                "Método según la Reclamación 6, caracterizado porque el modelo base predefinido se selecciona automáticamente por el sistema de procesamiento de datos (30) de una pluralidad de modelos base basado en el modelo 3D de parte del cuerpo (20).",
        },
        it: {
            title: "Rivendicazione 7*",
            summary:
                "Il modello base predefinito viene selezionato automaticamente da una pluralità di modelli base basato sul modello 3D di parte del corpo.",
            originalText:
                "Metodo secondo la Rivendicazione 6, caratterizzato dal fatto che il modello base predefinito viene selezionato automaticamente dal sistema di elaborazione dati (30) da una pluralità di modelli base basato sul modello 3D di parte del corpo (20).",
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
            title: "Claim 8*",
            summary:
                "The digital surface model and/or volume model is additionally created automatically based on a predefined medical indication or desired support effect.",
            originalText:
                "Method according to any of the preceding claims, characterized in that a digital surface model (14) and/or the digital volume model (19) of the orthopedic device (100) to be produced is additionally generated automatically based on a predefined medical indication or the desired support effect.",
        },
        fr: {
            title: "Revendication 8*",
            summary:
                "Le modèle de surface numérique et/ou le modèle volumique est en outre créé automatiquement basé sur une indication médicale prédéfinie ou l'effet de support désiré.",
            originalText:
                "Procédé selon l'une des revendications précédentes, caractérisé en ce qu'un modèle de surface numérique (14) et/ou le modèle volumique numérique (19) du dispositif orthopédique (100) à produire est en outre généré automatiquement basé sur une indication médicale prédéfinie ou l'effet de support désiré.",
        },
        es: {
            title: "Reclamación 8*",
            summary:
                "El modelo de superficie digital y/o el modelo volumétrico se crea adicionalmente automáticamente basado en una indicación médica predefinida o el efecto de soporte deseado.",
            originalText:
                "Método según cualquiera de las reclamaciones anteriores, caracterizado porque un modelo de superficie digital (14) y/o el modelo volumétrico digital (19) del dispositivo ortopédico (100) a producir se genera adicionalmente automáticamente basado en una indicación médica predefinida o el efecto de soporte deseado.",
        },
        it: {
            title: "Rivendicazione 8*",
            summary:
                "Il modello di superficie digitale e/o il modello volumetrico viene creato aggiuntivamente automaticamente basato su un'indicazione medica predefinita o l'effetto di supporto desiderato.",
            originalText:
                "Metodo secondo qualsiasi delle rivendicazioni precedenti, caratterizzato dal fatto che un modello di superficie digitale (14) e/o il modello volumetrico digitale (19) del dispositivo ortopedico (100) da produrre viene generato aggiuntivamente automaticamente basato su un'indicazione medica predefinita o l'effetto di supporto desiderato.",
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
            title: "Claim 9*",
            summary:
                "The orthopedic device is an orthosis (foot, hand, knee, trunk, or head orthosis), a prosthesis, or an exoskeleton.",
            originalText:
                "Method according to any of the preceding claims, characterized in that the orthopedic device (100) is an orthosis, in particular a foot orthosis, hand orthosis, knee orthosis, trunk orthosis or head orthosis, a prosthesis or an exoskeleton.",
        },
        fr: {
            title: "Revendication 9*",
            summary:
                "Le dispositif orthopédique est une orthèse (orthèse de pied, main, genou, tronc ou tête), une prothèse ou un exosquelette.",
            originalText:
                "Procédé selon l'une des revendications précédentes, caractérisé en ce que le dispositif orthopédique (100) est une orthèse, en particulier une orthèse de pied, orthèse de main, orthèse de genou, orthèse de tronc ou orthèse de tête, une prothèse ou un exosquelette.",
        },
        es: {
            title: "Reclamación 9*",
            summary:
                "El dispositivo ortopédico es una ortosis (ortosis de pie, mano, rodilla, tronco o cabeza), una prótesis o un exoesqueleto.",
            originalText:
                "Método según cualquiera de las reclamaciones anteriores, caracterizado porque el dispositivo ortopédico (100) es una ortosis, en particular una ortosis de pie, ortosis de mano, ortosis de rodilla, ortosis de tronco u ortosis de cabeza, una prótesis o un exoesqueleto.",
        },
        it: {
            title: "Rivendicazione 9*",
            summary:
                "Il dispositivo ortopedico è un'ortesi (ortesi per piede, mano, ginocchio, tronco o testa), una protesi o un esoscheletro.",
            originalText:
                "Metodo secondo qualsiasi delle rivendicazioni precedenti, caratterizzato dal fatto che il dispositivo ortopedico (100) è un'ortesi, in particolare un'ortesi per piede, ortesi per mano, ortesi per ginocchio, ortesi per tronco o ortesi per testa, una protesi o un esoscheletro.",
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
            title: "Claim 10*",
            summary:
                "The digital template is provided by scanning the body part and subsequently generating the 3D body part model.",
            originalText:
                "Method according to any of the preceding claims, characterized in that the digital template (10) is provided by scanning the body part using a scanning device and then generating the 3D body part model (20) based on this scan.",
        },
        fr: {
            title: "Revendication 10*",
            summary:
                "Le modèle numérique est fourni en scannant la partie du corps et en générant ensuite le modèle 3D de partie du corps.",
            originalText:
                "Procédé selon l'une des revendications précédentes, caractérisé en ce que le modèle numérique (10) est fourni en scannant la partie du corps au moyen d'un dispositif de balayage et en générant ensuite le modèle 3D de partie du corps (20) basé sur ce balayage.",
        },
        es: {
            title: "Reclamación 10*",
            summary:
                "La plantilla digital se proporciona escaneando la parte del cuerpo y generando posteriormente el modelo 3D de parte del cuerpo.",
            originalText:
                "Método según cualquiera de las reclamaciones anteriores, caracterizado porque la plantilla digital (10) se proporciona escaneando la parte del cuerpo mediante un dispositivo de escaneo y luego generando el modelo 3D de parte del cuerpo (20) basado en este escaneo.",
        },
        it: {
            title: "Rivendicazione 10*",
            summary:
                "Il modello digitale viene fornito scansionando la parte del corpo e generando successivamente il modello 3D di parte del corpo.",
            originalText:
                "Metodo secondo qualsiasi delle rivendicazioni precedenti, caratterizzato dal fatto che il modello digitale (10) viene fornito scansionando la parte del corpo mediante un dispositivo di scansione e poi generando il modello 3D di parte del corpo (20) basato su questa scansione.",
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
            title: "Claim 11*",
            summary:
                "Computer program for performing the method according to any of claims 1 to 9 on a data processing system.",
            originalText:
                "Computer program with program code means configured to perform the method according to any of claims 1 to 9, when the computer program is executed on a data processing system (30).",
        },
        fr: {
            title: "Revendication 11*",
            summary:
                "Programme informatique pour exécuter le procédé selon l'une des revendications 1 à 9 sur un système de traitement de données.",
            originalText:
                "Programme informatique avec des moyens de code de programme configurés pour exécuter le procédé selon l'une des revendications 1 à 9, lorsque le programme informatique est exécuté sur un système de traitement de données (30).",
        },
        es: {
            title: "Reclamación 11*",
            summary:
                "Programa informático para realizar el método según cualquiera de las reclamaciones 1 a 9 en un sistema de procesamiento de datos.",
            originalText:
                "Programa informático con medios de código de programa configurados para realizar el método según cualquiera de las reclamaciones 1 a 9, cuando el programa informático se ejecuta en un sistema de procesamiento de datos (30).",
        },
        it: {
            title: "Rivendicazione 11*",
            summary:
                "Programma informatico per eseguire il metodo secondo qualsiasi delle rivendicazioni da 1 a 9 su un sistema di elaborazione dati.",
            originalText:
                "Programma informatico con mezzi di codice programma configurati per eseguire il metodo secondo qualsiasi delle rivendicazioni da 1 a 9, quando il programma informatico viene eseguito su un sistema di elaborazione dati (30).",
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
            title: "Claim 12*",
            summary:
                "Complete manufacturing method: Creating manufacturing data according to claims 1-10, then supplying it to an automated manufacturing facility to produce the orthopedic device.",
            originalText: `Method for manufacturing an orthopedic device (100), wherein the method comprises the following steps:

Creating manufacturing data (40) for the orthopedic device (100) using the method according to any of claims 1 to 10,
Supplying the manufacturing data (40) to an automated manufacturing facility (50), which produces the orthopedic device (100) in an automated manufacturing process using the generated manufacturing data (40).`,
        },
        fr: {
            title: "Revendication 12*",
            summary:
                "Méthode de fabrication complète : Création des données de fabrication selon les revendications 1-10, puis transmission à une installation de fabrication automatisée pour produire le dispositif orthopédique.",
            originalText: `Procédé de fabrication d'un dispositif orthopédique (100), le procédé comprenant les étapes suivantes :
- Création de données de fabrication (40) pour le dispositif orthopédique (100) en utilisant le procédé selon l'une des revendications 1 à 10,
- Transmission des données de fabrication (40) à une installation de fabrication automatisée (50), qui produit le dispositif orthopédique (100) dans un processus de fabrication automatisé en utilisant les données de fabrication générées (40).`,
        },
        es: {
            title: "Reclamación 12*",
            summary:
                "Método de fabricación completo: Creación de datos de fabricación según las reclamaciones 1-10, luego suministro a una instalación de fabricación automatizada para producir el dispositivo ortopédico.",
            originalText: `Método para fabricar un dispositivo ortopédico (100), donde el método comprende los siguientes pasos:
- Crear datos de fabricación (40) para el dispositivo ortopédico (100) utilizando el método según cualquiera de las reclamaciones 1 a 10,
- Suministrar los datos de fabricación (40) a una instalación de fabricación automatizada (50), que produce el dispositivo ortopédico (100) en un proceso de fabricación automatizado utilizando los datos de fabricación generados (40).`,
        },
        it: {
            title: "Rivendicazione 12*",
            summary:
                "Metodo di fabbricazione completo: Creazione di dati di fabbricazione secondo le rivendicazioni 1-10, poi fornitura a un impianto di produzione automatizzato per produrre il dispositivo ortopedico.",
            originalText: `Metodo per fabbricare un dispositivo ortopedico (100), dove il metodo comprende i seguenti passaggi:
- Creare dati di fabbricazione (40) per il dispositivo ortopedico (100) utilizzando il metodo secondo qualsiasi delle rivendicazioni da 1 a 10,
- Fornire i dati di fabbricazione (40) a un impianto di produzione automatizzato (50), che produce il dispositivo ortopedico (100) in un processo di fabbricazione automatizzato utilizzando i dati di fabbricazione generati (40).`,
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
            title: "Claim 13*",
            summary:
                "Method according to Claim 12, where the orthopedic device is actually manufactured by the automated manufacturing facility based on the supplied manufacturing data.",
            originalText:
                "Method according to Claim 12, characterized by manufacturing the orthopedic device (100) through the automated manufacturing process using the automated manufacturing facility (50) based on the supplied manufacturing data (40).",
        },
        fr: {
            title: "Revendication 13*",
            summary:
                "Procédé selon la Revendication 12, où le dispositif orthopédique est effectivement fabriqué par l'installation de fabrication automatisée basée sur les données de fabrication fournies.",
            originalText:
                "Procédé selon la Revendication 12, caractérisé par la fabrication du dispositif orthopédique (100) par le processus de fabrication automatisé utilisant l'installation de fabrication automatisée (50) basée sur les données de fabrication fournies (40).",
        },
        es: {
            title: "Reclamación 13*",
            summary:
                "Método según la Reclamación 12, donde el dispositivo ortopédico se fabrica realmente por la instalación de fabricación automatizada basada en los datos de fabricación suministrados.",
            originalText:
                "Método según la Reclamación 12, caracterizado por fabricar el dispositivo ortopédico (100) mediante el proceso de fabricación automatizado utilizando la instalación de fabricación automatizada (50) basada en los datos de fabricación suministrados (40).",
        },
        it: {
            title: "Rivendicazione 13*",
            summary:
                "Metodo secondo la Rivendicazione 12, dove il dispositivo ortopedico viene effettivamente fabbricato dall'impianto di produzione automatizzato basato sui dati di fabbricazione forniti.",
            originalText:
                "Metodo secondo la Rivendicazione 12, caratterizzato dal fabbricare il dispositivo ortopedico (100) mediante il processo di fabbricazione automatizzato utilizzando l'impianto di produzione automatizzato (50) basato sui dati di fabbricazione forniti (40).",
        },
    },
];

export default claims;
