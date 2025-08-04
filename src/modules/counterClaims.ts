import type { Language } from "./language";

type CounterClaim = {
    title: string;
    author: string;
    publication?: string;
    date: string;
    /** references to original claims by their id / number */
    referencesClaims: number[];
    link?: string;
    summary: Record<Language, string>;
};

const counterClaims: (CounterClaim & { id: number })[] = [
    {
        id: 1,
        title: "US6968246 - Method for automated design of orthotic and prosthetic devices",
        author: "Keith Watson, Marvin Fourroux",
        date: "2002",
        referencesClaims: [1, 2],
        link: "https://patents.google.com/patent/US6968246B2/",
        summary: {
            de: "Computerbasiertes Verfahren zum 3D-Scannen von Gliedmaßen, algorithmischer Modifikation digitaler Modelle (Volumenreduktion bis 12%), automatischer Erkennung anatomischer Merkmale und Datenübertragung an Fertigungsanlagen für Prothesen/Orthesen.",
            en: "Computer-based method for 3D scanning limbs, algorithmically modifying digital models (reducing volume up to 12%), automatically detecting anatomical features, and transmitting data to manufacturing facilities for prosthetic/orthotic devices.",
            fr: "Méthode informatisée pour scanner en 3D les membres, modifier algorithmiquement les modèles numériques (réduction de volume jusqu'à 12%), détecter automatiquement les caractéristiques anatomiques et transmettre les données aux installations de fabrication pour appareils prothétiques/orthétiques.",
            es: "Método informatizado para escanear extremidades en 3D, modificar algorítmicamente modelos digitales (reduciendo volumen hasta 12%), detectar automáticamente características anatómicas y transmitir datos a instalaciones de fabricación para dispositivos protésicos/ortésicos.",
            it: "Metodo informatizzato per scansione 3D degli arti, modifica algoritmica dei modelli digitali (riduzione volume fino al 12%), rilevamento automatico delle caratteristiche anatomiche e trasmissione dati agli impianti di produzione per dispositivi protesici/ortesici.",
        },
    },
    {
        id: 2,
        title: "WO2011031971A2 - Process and system for manufacturing a customized orthosis",
        author: "Steven J. Stanhope, Elisa Schrank",
        date: "2010",
        referencesClaims: [1, 2, 3],
        link: "https://patents.google.com/patent/WO2011031971A2",
        summary: {
            de: "Patent beschreibt Herstellung maßgeschneiderter Orthesen durch digitale Erfassung anatomischer Landmarken, Generierung eines digitalen Modells und Fertigung mittels computergestützter Fertigung (3D-Druck). Ermöglicht präzise Personalisierung mit Gelenkausrichtung und Steifigkeitsabstimmung.",
            en: "Patent outlines a method for creating customized orthoses by digitally capturing anatomical landmarks, generating a digital model, and fabricating the device via computer-aided manufacturing (3D printing). Enables precise personalization including joint alignment and stiffness tuning.",
            fr: "Brevet décrit une méthode pour créer des orthèses personnalisées en capturant numériquement des repères anatomiques, générant un modèle numérique et fabriquant l'appareil via la fabrication assistée par ordinateur (impression 3D). Permet une personnalisation précise avec alignement des articulations.",
            es: "Patente describe un método para crear ortesis personalizadas mediante captura digital de puntos de referencia anatómicos, generando un modelo digital y fabricando el dispositivo a través de manufactura asistida por computadora (impresión 3D). Permite personalización precisa con alineación articular.",
            it: "Brevetto delinea un metodo per creare ortesi personalizzate catturando digitalmente punti di riferimento anatomici, generando un modello digitale e fabbricando il dispositivo tramite manifattura assistita da computer (stampa 3D). Consente personalizzazione precisa con allineamento articolare.",
        },
    },
    {
        id: 3,
        title: "US20090306801A1 - Patient specific ankle-foot orthotic device",
        author: "Mark L. Sivak, Richard G. Ranky, Joseph A. DiPisa, Alyssa Leigh Caddle, Kara Lyn Gilhooly, Lauren Chiara Govoni, Seth John Siva, kMichael Lancia, Paolo Bonato, Constantinos Mavroidis",
        date: "2007",
        referencesClaims: [1, 2, 3],
        link: "https://patents.google.com/patent/US20090306801A1",
        summary: {
            de: "Vollständig digitale, computergesteuerte Methode zur Herstellung patientenspezifischer orthopädischer Geräte. Umfasst 3D-Bildgebung zur Erzeugung einer Punktwolke, Manipulation zu einem digitalen Modell mit optionalen eingebetteten Komponenten und Umwandlung in Fertigungsanweisungen für automatisierte Produktion (3D-Druck).",
            en: "Fully digital, computer-controlled method for fabricating patient-specific orthotic devices. Involves 3D imaging to generate a point cloud, manipulating data into a digital model with optional embedded components, and converting it into fabrication instructions for automated production (3D printing).",
            fr: "Méthode entièrement numérique et contrôlée par ordinateur pour fabriquer des dispositifs orthopédiques spécifiques au patient. Implique l'imagerie 3D pour générer un nuage de points, manipuler les données en modèle numérique avec composants intégrés optionnels et convertir en instructions de fabrication pour production automatisée.",
            es: "Método completamente digital y controlado por computadora para fabricar dispositivos ortopédicos específicos del paciente. Involucra imágenes 3D para generar una nube de puntos, manipular datos en modelo digital con componentes integrados opcionales y convertir en instrucciones de fabricación para producción automatizada.",
            it: "Metodo completamente digitale e controllato da computer per fabbricare dispositivi ortopedici specifici per il paziente. Coinvolge imaging 3D per generare nuvola di punti, manipolare dati in modello digitale con componenti integrati opzionali e convertire in istruzioni di fabbricazione per produzione automatizzata.",
        },
    },
    {
        id: 4,
        title: "US20170216078A1 - 3d printed splint and cast",
        author: "Michael Rivlin, Pedro Beredjiklian, Alexander R. Vaccaro, Michael J. Sileski, Emilia Pollnow, Mary Grace Maggiano, Cynthia Watkins",
        date: "2017",
        referencesClaims: [1, 2, 3],
        link: "https://patents.google.com/patent/US20170216078A1",
        summary: {
            en: "Discloses a 3D-printed cast or splint made from rigid polymeric materials, consisting of first and second shell portions that conform to a patient’s body part and interlock via integrated engagement mechanisms. Features include customizable venting holes, reinforcement structures, bone stimulation ports, and the potential for embedded symbolic designs or logos. The cast is designed for efficient digital fabrication and ergonomic fit.",
            de: "Offenbart einen 3D-gedruckten Gips oder eine Schiene aus starren polymeren Materialien, bestehend aus ersten und zweiten Schalenteilen, die sich an einen Körperteil des Patienten anpassen und über integrierte Verriegelungsmechanismen ineinandergreifen. Zu den Merkmalen gehören anpassbare Lüftungslöcher, Verstärkungsstrukturen, Knochenstimulationsöffnungen und die Möglichkeit für eingebettete symbolische Designs oder Logos. Der Gips ist für eine effiziente digitale Fertigung und ergonomische Passform ausgelegt.",
            fr: "Divulgue un plâtre ou une attelle imprimé en 3D fabriqué à partir de matériaux polymères rigides, composé de premières et deuxièmes parties de coque qui s'adaptent à une partie du corps du patient et s'emboîtent via des mécanismes d'engagement intégrés. Les caractéristiques incluent des trous de ventilation personnalisables, des structures de renforcement, des ports de stimulation osseuse et la possibilité d'intégrer des motifs symboliques ou des logos. Le plâtre est conçu pour une fabrication numérique efficace et un ajustement ergonomique.",
            es: "Divulga un yeso o férula impreso en 3D hecho de materiales poliméricos rígidos, que consta de primeras y segundas partes de carcasa que se ajustan a una parte del cuerpo del paciente y se entrelazan a través de mecanismos de acoplamiento integrados. Las características incluyen orificios de ventilación personalizables, estructuras de refuerzo, puertos de estimulación ósea y la posibilidad de diseños simbólicos o logotipos incrustados. El yeso está diseñado para una fabricación digital eficiente y un ajuste ergonómico.",
            it: "Rivela un gesso o una stecca stampata in 3D realizzata con materiali polimerici rigidi, composta da una prima e una seconda parte di guscio che si adattano a una parte del corpo del paziente e si incastrano tramite meccanismi di aggancio integrati. Le caratteristiche includono fori di ventilazione personalizzabili, strutture di rinforzo, porte di stimolazione ossea e la possibilità di design simbolici o loghi incorporati. Il gesso è progettato per una fabbricazione digitale efficiente e una vestibilità ergonomica.",
        },
    },
    {
        id: 5,
        title: "WO2018170600A1 - Custom foot orthotic and system and method for designing of a custom foot orthotic",
        author: "Steven Miller, Todd MCLEAN, Patrick Connor",
        date: "2018",
        referencesClaims: [1, 2, 3],
        link: "https://patents.google.com/patent/WO2018170600A1",
        summary: {
            en: "System for designing custom foot orthotics using patient-specific data. Combines 3D foot scanning and plantar pressure mapping to generate a digital orthotic model with variable internal density for target pressure distribution. Model outputs for 3D printing enable personalized and biomechanically optimized devices.",
            de: "System zur Entwicklung maßgeschneiderter Fußorthesen unter Verwendung patientenspezifischer Daten. Kombiniert 3D-Fußscannen und plantare Druckmessung zur Generierung eines digitalen Orthesenmodells mit variabler interner Dichte für Zieldruckverteilung. Modellausgaben für 3D-Druck ermöglichen personalisierte und biomechanisch optimierte Geräte.",
            fr: "Système pour concevoir des orthèses plantaires personnalisées utilisant des données spécifiques au patient. Combine numérisation 3D du pied et cartographie de pression plantaire pour générer un modèle d'orthèse numérique avec densité interne variable pour distribution de pression cible. Exportation pour impression 3D permet dispositifs personnalisés et optimisés biomécaniquement.",
            es: "Sistema para diseñar ortesis plantares personalizadas utilizando datos específicos del paciente. Combina escaneo 3D del pie y mapeo de presión plantar para generar modelo de ortesis digital con densidad interna variable para distribución de presión objetivo. Exportación para impresión 3D permite dispositivos personalizados y optimizados biomecánicamente.",
            it: "Sistema per progettare ortesi plantari personalizzate utilizzando dati specifici del paziente. Combina scansione 3D del piede e mappatura pressione plantare per generare modello di ortesi digitale con densità interna variabile per distribuzione pressione target. Esportazione per stampa 3D consente dispositivi personalizzati e ottimizzati biomeccanicamente.",
        },
    },
    {
        id: 6,
        title: "Parametric Design of Custom Foot Orthotic Model",
        author: "Samuel J. Lochner, Jan P. Huissoon, Sanjeev S. Bedi; University of Waterloo",
        publication:
            "Computer Aided Design and Applications, Vol 9, 2012, DOI: 10.3722/cadaps.2012.1-11",
        date: "2012",
        referencesClaims: [1, 2],
        link: "https://www.cad-journal.net/files/vol_9/CAD_9(1)_2012_1-11.pdf",
        summary: {
            en: "Algorithmic method for designing digital foot orthotics using parametric inputs from 3D scanned foot models. Translates traditional plaster-cast techniques into digital process through landmark selection, foot alignment correction, and creation of orthotic surface geometries. Emphasizes control over orthotic geometry through adjustable parameters.",
            de: "Algorithmische Methode zur Gestaltung digitaler Fußorthesen unter Verwendung parametrischer Eingaben aus 3D-gescannten Fußmodellen. Übersetzt traditionelle Gipsabguss-Techniken in digitalen Prozess durch Landmarken-Auswahl, Fußausrichtungskorrektur und Erstellung von Orthesen-Oberflächengeometrien. Betont Kontrolle über Orthesen-Geometrie durch einstellbare Parameter.",
            fr: "Méthode algorithmique pour concevoir des orthèses plantaires numériques utilisant des entrées paramétriques de modèles de pied scannés en 3D. Traduit les techniques de moulage en plâtre en processus numérique par sélection de repères, correction d'alignement et création de géométries orthétiques. Met l'accent sur le contrôle par paramètres ajustables.",
            es: "Método algorítmico para diseñar ortesis plantares digitales utilizando entradas paramétricas de modelos de pie escaneados en 3D. Traduce técnicas de moldeado en yeso a proceso digital mediante selección de puntos de referencia, corrección de alineación y creación de geometrías ortésicas. Enfatiza control por parámetros ajustables.",
            it: "Metodo algoritmico per progettare ortesi plantari digitali utilizzando input parametrici da modelli di piede scansionati in 3D. Traduce tecniche di colata in gesso in processo digitale attraverso selezione di punti di riferimento, correzione allineamento e creazione geometrie ortesiche. Enfatizza controllo tramite parametri regolabili.",
        },
    },
    {
        id: 7,
        title: "The use of 3D surface scanning for the measurement and assessment of the human foot",
        author: "Scott Telfer, James Woodburn",
        publication: "Journal of Foot and Ankle Research volume 3, Article number: 19 (2010)",
        date: "2010",
        referencesClaims: [1],
        link: "https://jfootankleres.biomedcentral.com/articles/10.1186/1757-1146-3-19",
        summary: {
            en: "Review documenting that 3D surface scanning systems for foot measurement were commercially available by 2010, with widespread use in orthotic design and footwear development. Reviews 38 studies showing established technologies for digitally capturing foot shape and integrating with computer-aided manufacturing for custom orthotics.",
            de: "Übersicht, die dokumentiert, dass 3D-Oberflächenscanning-Systeme für Fußmessungen bis 2010 kommerziell verfügbar waren, mit weit verbreiteter Nutzung in Orthesendesign und Schuhentwicklung. Überprüft 38 Studien, die etablierte Technologien zur digitalen Erfassung der Fußform und Integration mit computergestützter Fertigung zeigen.",
            fr: "Revue documentant que les systèmes de numérisation de surface 3D pour la mesure du pied étaient commercialement disponibles en 2010, avec utilisation répandue dans la conception d'orthèses et développement de chaussures. Examine 38 études montrant des technologies établies pour capturer numériquement la forme du pied.",
            es: "Revisión que documenta que los sistemas de escaneo de superficie 3D para medición del pie estaban disponibles comercialmente para 2010, con uso generalizado en diseño de ortesis y desarrollo de calzado. Revisa 38 estudios mostrando tecnologías establecidas para capturar digitalmente la forma del pie.",
            it: "Revisione che documenta come i sistemi di scansione di superficie 3D per la misurazione del piede fossero commercialmente disponibili entro il 2010, con uso diffuso nella progettazione di ortesi e sviluppo di calzature. Esamina 38 studi mostrando tecnologie consolidate per catturare digitalmente la forma del piede.",
        },
    },
    {
        id: 8,
        title: "A digital approach for design and fabrication by rapid prototyping of orthosis for developmental dysplasia of the hip",
        author: "Munhoz, M. et al.",
        publication: "Res. Biomed. Eng. 32 (1), Jan-Mar 2016",
        date: "2016",
        referencesClaims: [1, 2, 3],
        link: "https://www.scielo.br/j/reng/a/JfDqTS3TgxN3HbtDgvd4VWJ/?lang=en",
        summary: {
            en: "Complete digital workflow for custom orthotic design using smartphone photogrammetry for 3D surface reconstruction, automated CAD modeling, and 3D printing. Demonstrates automatic generation of digital models from 3D body scans and integration with automated fabrication systems achieving good accuracy.",
            de: "Vollständiger digitaler Arbeitsablauf für maßgeschneidertes Orthesendesign unter Verwendung von Smartphone-Photogrammetrie für 3D-Oberflächenrekonstruktion, automatisierte CAD-Modellierung und 3D-Druck. Demonstriert automatische Generierung digitaler Modelle aus 3D-Körperscans und Integration mit automatisierten Fertigungssystemen.",
            fr: "Flux de travail numérique complet pour conception d'orthèses personnalisées utilisant photogrammétrie smartphone pour reconstruction 3D, modélisation CAO automatisée et impression 3D. Démontre génération automatique de modèles numériques à partir de scans corporels et intégration avec systèmes de fabrication automatisés.",
            es: "Flujo de trabajo digital completo para diseño de ortesis personalizadas usando fotogrametría smartphone para reconstrucción 3D, modelado CAD automatizado e impresión 3D. Demuestra generación automática de modelos digitales desde escaneos corporales e integración con sistemas de fabricación automatizados.",
            it: "Flusso di lavoro digitale completo per progettazione di ortesi personalizzate utilizzando fotogrammetria smartphone per ricostruzione 3D, modellazione CAD automatizzata e stampa 3D. Dimostra generazione automatica di modelli digitali da scansioni corporee e integrazione con sistemi di fabbricazione automatizzati.",
        },
    },
    {
        id: 9,
        title: "Ankle-Foot Orthosis Made by 3D Printing Technique and Automated Design Software",
        author: "Yong Ho Cha, Keun Ho Lee, Hong Jong Ryu, Il Won Joo, Anna Seo, Dong-Hyeon Kim, Sang Jun Kim",
        publication:
            "Appl Bionics Biomech. 2017:2017:9610468. doi: 10.1155/2017/9610468. Epub 2017 Jul 30.",
        date: "2017",
        referencesClaims: [1, 2, 3],
        link: "https://pubmed.ncbi.nlm.nih.gov/28827977/",
        summary: {
            en: "Automated orthosis design software that creates STL files from 3D scanned body models with minimal manual input. Uses automated anatomical landmark detection, preprogrammed orthotic templates, and automatic axis adjustment to generate digital AFO models. Workflow includes 3D scanning, automated CAD modeling, and direct 3D printing.",
            de: "Automatisierte Orthesen-Design-Software, die STL-Dateien aus 3D-gescannten Körpermodellen mit minimaler manueller Eingabe erstellt. Verwendet automatisierte anatomische Landmarken-Erkennung, vorprogrammierte Orthesen-Vorlagen und automatische Achsenanpassung zur Generierung digitaler AFO-Modelle. Arbeitsablauf umfasst 3D-Scannen, automatisierte CAD-Modellierung und direkten 3D-Druck.",
            fr: "Logiciel de conception d'orthèse automatisé qui crée des fichiers STL à partir de modèles corporels scannés en 3D avec saisie manuelle minimale. Utilise détection automatisée de repères anatomiques, modèles orthétiques préprogrammés et ajustement automatique d'axes. Flux de travail comprend numérisation 3D, modélisation CAO automatisée et impression 3D directe.",
            es: "Software de diseño de ortesis automatizado que crea archivos STL desde modelos corporales escaneados en 3D con entrada manual mínima. Usa detección automatizada de puntos de referencia anatómicos, plantillas ortésicas preprogramadas y ajuste automático de ejes. Flujo de trabajo incluye escaneo 3D, modelado CAD automatizado e impresión 3D directa.",
            it: "Software di progettazione ortesi automatizzato che crea file STL da modelli corporei scansionati 3D con input manuale minimo. Utilizza rilevamento automatizzato di punti di riferimento anatomici, modelli ortesici preprogrammati e regolazione automatica degli assi. Flusso di lavoro include scansione 3D, modellazione CAD automatizzata e stampa 3D diretta.",
        },
    },
    {
        id: 10,
        title: "A CAD-based Procedure for Designing 3D Printable Arm-Wrist-Hand Cast",
        author: "Francesco Buonamici, Rocco Furferi, Lapo Governi, Simone Lazzeri, Kathleen S. McGreevy, Michaela Servi, Emiliano Talanti, Francesca Uccheddu, Yary Volpe",
        publication: "Computer-Aided Design & Applications, 16(1), 2019",
        date: "2019",
        referencesClaims: [1, 2, 3],
        link: "https://www.cad-journal.net/files/vol_16/CAD_16(1)_2019_25-34.pdf",
        summary: {
            en: "Systematic five-step CAD procedure for designing custom 3D printable orthotic casts using reverse engineering from 3D scanned anatomy. Automated workflow includes mesh processing, solid loft operations with 4mm wall thickness, two-shell design with zip-tie mechanisms, and ventilation patterns. Demonstrates complete digital fabrication pipeline from 3D scanning to STL generation.",
            de: "Systematisches fünfstufiges CAD-Verfahren zur Gestaltung maßgeschneiderter 3D-druckbarer Orthesen-Gipse unter Verwendung von Reverse Engineering aus 3D-gescannter Anatomie. Automatisierter Arbeitsablauf umfasst Mesh-Verarbeitung, Solid-Loft-Operationen mit 4mm Wandstärke, Zwei-Schalen-Design mit Kabelbinder-Mechanismen und Lüftungsmuster. Demonstriert vollständige digitale Fertigungspipeline vom 3D-Scannen zur STL-Generierung.",
            fr: "Procédure CAO systématique en cinq étapes pour concevoir des plâtres orthétiques personnalisés imprimables en 3D utilisant l'ingénierie inverse d'anatomie scannée 3D. Flux automatisé comprend traitement de maillage, opérations de lissage solide avec épaisseur 4mm, conception à deux coques avec mécanismes à colliers et motifs de ventilation. Démontre pipeline de fabrication numérique complet du scan 3D à la génération STL.",
            es: "Procedimiento CAD sistemático de cinco pasos para diseñar yesos ortésicos personalizados imprimibles en 3D usando ingeniería inversa desde anatomía escaneada 3D. Flujo automatizado incluye procesamiento de malla, operaciones de modelado sólido con grosor 4mm, diseño de dos cascos con mecanismos de bridas y patrones de ventilación. Demuestra tubería de fabricación digital completa desde escaneo 3D hasta generación STL.",
            it: "Procedura CAD sistematica in cinque fasi per progettare gessi ortesici personalizzati stampabili in 3D utilizzando ingegneria inversa da anatomia scansionata 3D. Flusso automatizzato include elaborazione mesh, operazioni di modellazione solida con spessore 4mm, design a due gusci con meccanismi a fascette e pattern di ventilazione. Dimostra pipeline di fabbricazione digitale completa dalla scansione 3D alla generazione STL.",
        },
    },
    {
        id: 11,
        title: "Design and Rapid Manufacturing of a customized foot orthosis: A first methodological study.",
        author: "M Fantini, F De Crescenzio, L Brognara, N Baldini",
        publication: "Advances on Mechanics, Design Engineering and Manufacturing, Springer",
        date: "2016",
        referencesClaims: [1, 2, 3],
        link: "https://doi.org/10.1007/978-3-319-45781-9_46",
        summary: {
            en: "Complete design-manufacturing process for customized foot orthosis using digital technologies including Reverse Engineering, Generative Design, and Additive Manufacturing. Demonstrates workflow from 3D scanning of human foot anatomy to direct fabrication of customized orthosis using user-friendly semi-automatic modeling with low-cost 3D laser scanning and 3D printing devices.",
            de: "Vollständiger Design-Fertigungsprozess für maßgeschneiderte Fußorthesen unter Verwendung digitaler Technologien einschließlich Reverse Engineering, Generativem Design und Additiver Fertigung. Demonstriert Arbeitsablauf vom 3D-Scannen der menschlichen Fußanatomie bis zur direkten Fertigung maßgeschneiderter Orthesen mit benutzerfreundlicher halbautomatischer Modellierung unter Verwendung kostengünstiger 3D-Laserscanning- und 3D-Druckgeräte.",
            fr: "Processus complet de conception-fabrication pour orthèse plantaire personnalisée utilisant des technologies numériques incluant Ingénierie Inverse, Conception Générative et Fabrication Additive. Démontre le flux de travail de la numérisation 3D de l'anatomie du pied humain à la fabrication directe d'orthèses personnalisées avec modélisation semi-automatique conviviale utilisant des dispositifs de numérisation laser 3D et d'impression 3D à bas coût.",
            es: "Proceso completo de diseño-fabricación para ortesis plantar personalizada utilizando tecnologías digitales incluyendo Ingeniería Inversa, Diseño Generativo y Manufactura Aditiva. Demuestra flujo de trabajo desde escaneo 3D de anatomía del pie humano hasta fabricación directa de ortesis personalizada con modelado semiautomático amigable usando dispositivos de escaneo láser 3D e impresión 3D de bajo costo.",
            it: "Processo completo di progettazione-fabbricazione per ortesi plantare personalizzata utilizzando tecnologie digitali inclusa Ingegneria Inversa, Progettazione Generativa e Manifattura Additiva. Dimostra flusso di lavoro dalla scansione 3D dell'anatomia del piede umano alla fabbricazione diretta di ortesi personalizzata con modellazione semi-automatica user-friendly utilizzando dispositivi di scansione laser 3D e stampa 3D a basso costo.",
        },
    },
    {
        id: 12,
        title: "Korsettfertigung - aktueller Stand der CAD-Technik",
        author: "F. Hoeltzel",
        publication: "Orthopädie Technik, 2016; 67 (2): 36–38",
        date: "2016",
        referencesClaims: [1, 2, 3],
        link: "https://360-ot.de/korsettfertigung-aktueller-stand-der-cad-technik/",
        summary: {
            en: "Describes evolution of CAD technology for corset design and construction using virtual modular systems and 3D libraries. Documents progression from 1995 C95 system with overlay regions through C2000 pre-modulated models to current 3D patient scanning integrated with library forms. Demonstrates complete CAD-CAM workflow from 3D scanning to CNC milling of PU foam models for thermoforming fabrication.",
            de: "Beschreibt die Entwicklung der CAD-Technik für Korsett-Design und -Konstruktion unter Verwendung virtueller Baukastensysteme und 3D-Bibliotheken. Dokumentiert den Fortschritt vom C95-System von 1995 mit Overlay-Regionen über C2000-vormodulierte Modelle bis hin zur aktuellen 3D-Patientenscanning-Integration mit Bibliotheksformen. Demonstriert vollständigen CAD-CAM-Arbeitsablauf vom 3D-Scannen bis zum CNC-Fräsen von PU-Schaummodellen für die Tiefzieh-Fertigung.",
            fr: "Décrit l'évolution de la technologie CAO pour la conception et construction de corsets utilisant des systèmes modulaires virtuels et bibliothèques 3D. Documente la progression du système C95 de 1995 avec régions overlay via les modèles pré-modulés C2000 jusqu'à l'actuelle numérisation 3D de patients intégrée avec formes de bibliothèque. Démontre flux de travail CAO-FAO complet du scan 3D au fraisage CNC de modèles en mousse PU pour fabrication par thermoformage.",
            es: "Describe la evolución de la tecnología CAD para diseño y construcción de corsés usando sistemas modulares virtuales y bibliotecas 3D. Documenta la progresión desde el sistema C95 de 1995 con regiones overlay a través de modelos pre-modulados C2000 hasta el actual escaneo 3D de pacientes integrado con formas de biblioteca. Demuestra flujo de trabajo CAD-CAM completo desde escaneo 3D hasta fresado CNC de modelos de espuma PU para fabricación por termoformado.",
            it: "Descrive l'evoluzione della tecnologia CAD per progettazione e costruzione di corsetti utilizzando sistemi modulari virtuali e librerie 3D. Documenta la progressione dal sistema C95 del 1995 con regioni overlay attraverso modelli pre-modulati C2000 fino all'attuale scansione 3D di pazienti integrata con forme di libreria. Dimostra flusso di lavoro CAD-CAM completo dalla scansione 3D alla fresatura CNC di modelli in schiuma PU per fabbricazione tramite termoformatura.",
        },
    },
    {
        id: 13,
        title: "Potenziale additiver Fertigungsverfahren für die Orthopädie-Technik",
        author: "J. Breuninger, U. Daub, R. Werder, U. Schneider",
        publication: "Orthopädie Technik, 2015; 66 (6): 22–27",
        date: "2015",
        referencesClaims: [1, 2, 3, 8],
        link: "https://360-ot.de/potenziale-additiver-fertigungsverfahren-fuer-die-orthopaedie-technik/",
        summary: {
            en: "Digital process chain for orthopedic technology using 3D printing. Documents workflow from 3D scanning through CAD construction to direct fabrication of prosthetics and orthotics. Includes selective laser sintering (SLS), fused deposition modeling (FDM), topology optimization, and finite element analysis. Demonstrates lightweight orthoses, custom prosthetic feet, and saltwater-resistant swimming prosthetics.",
            de: "Digitale Prozesskette für die Orthopädie-Technik unter Verwendung von 3D-Druck. Dokumentiert Arbeitsablauf vom 3D-Scannen über CAD-Konstruktion bis zur direkten Fertigung von Prothesen und Orthesen. Umfasst Selektives Lasersintern (SLS), Fused Deposition Modeling (FDM), Topologieoptimierung und Finite-Elemente-Analyse. Demonstriert leichtbauoptimierte Orthesen, maßgeschneiderte Prothesenfüße und salzwasserfeste Badeprothesen.",
            fr: "Chaîne de processus numérique pour la technologie orthopédique utilisant l'impression 3D. Documente le flux de travail de la numérisation 3D à travers la construction CAO jusqu'à la fabrication directe de prothèses et orthèses. Inclut frittage laser sélectif (SLS), modélisation par dépôt de fil fondu (FDM), optimisation topologique et analyse par éléments finis. Démontre orthèses légères, pieds prothétiques personnalisés et prothèses de natation résistantes à l'eau salée.",
            es: "Cadena de proceso digital para tecnología ortopédica usando impresión 3D. Documenta flujo de trabajo desde escaneo 3D a través de construcción CAD hasta fabricación directa de prótesis y ortesis. Incluye sinterizado láser selectivo (SLS), modelado por deposición fundida (FDM), optimización topológica y análisis de elementos finitos. Demuestra ortesis ligeras, pies protésicos personalizados y prótesis de natación resistentes al agua salada.",
            it: "Catena di processo digitale per la tecnologia ortopedica utilizzando stampa 3D. Documenta flusso di lavoro dalla scansione 3D attraverso costruzione CAD fino alla fabbricazione diretta di protesi e ortesi. Include sinterizzazione laser selettiva (SLS), modellazione a deposizione fusa (FDM), ottimizzazione topologica e analisi agli elementi finiti. Dimostra ortesi leggere, piedi protesici personalizzati e protesi da nuoto resistenti all'acqua salata.",
        },
    },
    {
        id: 14,
        title: "Generative Fertigungsverfahren in der Orthopädie-Technik",
        author: "J. Pröbsting, N. Günther",
        publication: "Orthopädie Technik, 2014; 65 (1): 16–19",
        date: "2014",
        referencesClaims: [1, 2, 3],
        link: "https://360-ot.de/generative-fertigungsverfahren-in-der-orthopaedie-technik/",
        summary: {
            en: "CAD-based construction with generative manufacturing using Selective Laser Sintering (SLS) for orthopedic devices. Documents complete digital workflow from patient-specific coordinate systems through digitization of fit and alignment to direct SLS fabrication. Demonstrates prosthetic sockets with flexible pressure relief areas, waterproof swimming prosthetics, orthotic shells with modular systems, and integrated joint mechanisms manufactured in single print runs.",
            de: "CAD-basierte Konstruktion mit generativer Fertigung mittels Selektivem Laser-Sintern (SLS) für orthopädische Hilfsmittel. Dokumentiert vollständige digitale Prozesskette von patientenspezifischen Koordinatensystemen über Digitalisierung von Passform und Ausrichtung bis zur direkten SLS-Fertigung. Demonstriert Prothesenschäfte mit flexiblen Druckentlastungsbereichen, wasserfeste Badeprothesen, Orthesenschalen mit Baukastensystemen und integrierte Gelenkmechanismen in einem Druckvorgang.",
            fr: "Construction basée CAO avec fabrication générative utilisant frittage laser sélectif (SLS) pour dispositifs orthopédiques. Documente flux de travail numérique complet des systèmes de coordonnées spécifiques au patient à travers numérisation d'ajustement et alignement jusqu'à fabrication SLS directe. Démontre emboîtures prothétiques avec zones de décompression flexibles, prothèses de natation étanches, coques orthétiques avec systèmes modulaires et mécanismes articulaires intégrés fabriqués en une seule impression.",
            es: "Construcción basada en CAD con fabricación generativa usando sinterizado láser selectivo (SLS) para dispositivos ortopédicos. Documenta flujo de trabajo digital completo desde sistemas de coordenadas específicos del paciente a través de digitalización de ajuste y alineación hasta fabricación SLS directa. Demuestra encajes protésicos con áreas de alivio de presión flexibles, prótesis de natación impermeables, carcasas ortésicas con sistemas modulares y mecanismos articulares integrados fabricados en una sola impresión.",
            it: "Costruzione basata su CAD con fabbricazione generativa utilizzando sinterizzazione laser selettiva (SLS) per dispositivi ortopedici. Documenta flusso di lavoro digitale completo da sistemi di coordinate specifici del paziente attraverso digitalizzazione di vestibilità e allineamento fino a fabbricazione SLS diretta. Dimostra invasature protesiche con aree di scarico pressione flessibili, protesi da nuoto impermeabili, gusci ortesici con sistemi modulari e meccanismi articolari integrati fabbricati in una singola stampa.",
        },
    },
    {
        id: 15,
        title: "Digitale Orthetik – Design- und Machbarkeitsstudie zur Potentialanalyse",
        author: "Andreas Mühlenberend",
        publication:
            "Merseburger Herbstforum - „Möglichkeiten des 3D-Druckes für Unternehmen in Mitteldeutschland“ am 7. November 2018 im Ständehaus Merseburg",
        date: "2018",
        referencesClaims: [1, 2, 3, 8, 10],
        link: "http://dx.doi.org/10.25673/13673",
        summary: {
            en: "Fully integrated digital design and manufacturing workflow for patient-specific ankle-foot orthoses (AFOs) using CAD environment Rhinoceros and Grasshopper programming plugin. Documents complete digital process chain from 3D scanning and digital manipulation to SLS fabrication with integrated closures, breathable functional zones, and manipulable effect zones. Demonstrates open structures with partial reinforcements, adaptive meshes with controllable density variations, and force-line based geometries enabling individualized stiffness control.",
            de: "Vollständig integrierter digitaler Design- und Herstellungsworkflow für patientenspezifische Knöchel-Fuß-Orthesen (AFOs) unter Verwendung der CAD-Umgebung Rhinoceros und Grasshopper-Programmier-Plugin. Dokumentiert vollständige digitale Prozesskette vom 3D-Scannen und digitaler Manipulation bis zur SLS-Fertigung mit integrierten Verschlüssen, atmungsaktiven Funktionszonen und manipulierbaren Wirkungszonen. Demonstriert offene Strukturen mit partiellen Verstärkungen, adaptive Netze mit kontrollierbaren Dichtevariationen und kraftlinienbasierte Geometrien zur individualisierten Steifigkeitskontrolle.",
            fr: "Flux de travail de conception et fabrication numérique entièrement intégré pour orthèses cheville-pied (AFO) spécifiques au patient utilisant l'environnement CAO Rhinoceros et plugin de programmation Grasshopper. Documente chaîne de processus numérique complète de la numérisation 3D et manipulation numérique à la fabrication SLS avec fermetures intégrées, zones fonctionnelles respirantes et zones d'effet manipulables. Démontre structures ouvertes avec renforcements partiels, maillages adaptatifs avec variations de densité contrôlables et géométries basées sur lignes de force permettant contrôle de rigidité individualisé.",
            es: "Flujo de trabajo de diseño y fabricación digital completamente integrado para ortesis tobillo-pie (AFO) específicas del paciente usando entorno CAD Rhinoceros y plugin de programación Grasshopper. Documenta cadena de proceso digital completa desde escaneo 3D y manipulación digital hasta fabricación SLS con cierres integrados, zonas funcionales transpirables y zonas de efecto manipulables. Demuestra estructuras abiertas con refuerzos parciales, mallas adaptativas con variaciones de densidad controlables y geometrías basadas en líneas de fuerza permitiendo control de rigidez individualizado.",
            it: "Flusso di lavoro di progettazione e fabbricazione digitale completamente integrato per ortesi caviglia-piede (AFO) specifiche del paziente utilizzando ambiente CAD Rhinoceros e plugin di programmazione Grasshopper. Documenta catena di processo digitale completa dalla scansione 3D e manipolazione digitale alla fabbricazione SLS con chiusure integrate, zone funzionali traspiranti e zone di effetto manipolabili. Dimostra strutture aperte con rinforzi parziali, reti adattive con variazioni di densità controllabili e geometrie basate su linee di forza permettendo controllo rigidità individualizzato.",
        },
    },
    {
        id: 16,
        title: "Locating Anatomical Landmarks for Prosthetics Design using Ensemble Neural Networks",
        author: "Daniel Jiménez, Thomas Dam, Bill Rogers, Nicolas Walsh",
        publication: "IEEE Engineering in Medicine and Biology Society Conference, 1997",
        date: "1997",
        referencesClaims: [1, 2, 3],
        link: "https://ieeexplore.ieee.org/document/757078",
        summary: {
            en: "Automated anatomical landmark detection method for computer-aided prosthetic socket design using ensemble neural networks trained on 120 digitized residual limb shapes from laser scanning. Automatically locates critical anatomical landmarks (midpoint of patellar tendon, distal end of tibia, head of fibula) on 3D digitized limb shapes with accuracy equal to trained prosthetists. Supports computer-aided prosthetic socket modification workflow where digitized limb shapes are modified for biomechanically correct socket design and computer-controlled milling fabrication.",
            de: "Automatisierte anatomische Landmarken-Erkennungsmethode für computergestütztes Prothesenschaften-Design unter Verwendung von Ensemble-Neuronalen-Netzwerken, trainiert auf 120 digitalisierten Stumpfformen aus Laserscanning. Lokalisiert automatisch kritische anatomische Landmarken (Mittelpunkt der Patellasehne, distales Ende der Tibia, Fibulaköpfchen) auf 3D-digitalisierten Stumpfformen mit Genauigkeit gleich ausgebildeten Orthopädietechnikern. Unterstützt computergestützten Prothesenschaften-Modifikations-Arbeitsablauf, bei dem digitalisierte Stumpfformen für biomechanisch korrektes Schaftendesign und computergesteuerte Fräsfertigung modifiziert werden.",
            fr: "Méthode de détection automatisée de repères anatomiques pour conception d'emboîtures prothétiques assistée par ordinateur utilisant des réseaux de neurones d'ensemble entraînés sur 120 formes de membres résiduels numérisées par balayage laser. Localise automatiquement les repères anatomiques critiques (point médian du tendon patellaire, extrémité distale du tibia, tête du péroné) sur des formes de membres numérisées 3D avec une précision égale aux prothésistes formés. Supporte le flux de travail de modification d'emboîtures prothétiques assistée par ordinateur où les formes de membres numérisées sont modifiées pour conception biomécanique correcte et fabrication par fraisage contrôlé par ordinateur.",
            es: "Método automatizado de detección de puntos de referencia anatómicos para diseño de encajes protésicos asistido por computadora usando redes neuronales de conjunto entrenadas en 120 formas de miembros residuales digitalizadas por escaneo láser. Localiza automáticamente puntos de referencia anatómicos críticos (punto medio del tendón patelar, extremo distal de tibia, cabeza del peroné) en formas de miembros digitalizadas 3D con precisión igual a protesistas entrenados. Soporta flujo de trabajo de modificación de encajes protésicos asistido por computadora donde formas de miembros digitalizadas son modificadas para diseño biomecánico correcto y fabricación por fresado controlado por computadora.",
            it: "Metodo automatizzato di rilevamento di punti di riferimento anatomici per progettazione di invasature protesiche assistita da computer utilizzando reti neurali d'insieme addestrate su 120 forme di arti residui digitalizzate da scansione laser. Localizza automaticamente punti di riferimento anatomici critici (punto medio del tendine rotuleo, estremità distale della tibia, testa del perone) su forme di arti digitalizzate 3D con precisione pari a protesisti addestrati. Supporta flusso di lavoro di modifica invasature protesiche assistito da computer dove forme di arti digitalizzate vengono modificate per progettazione biomeccanica corretta e fabbricazione tramite fresatura controllata da computer.",
        },
    },
    {
        id: 17,
        title: "Paralympics in Peking: Michael Teuber radelt mit Wunderschuh zu Silber - Orthopädietechniker entwickeln High-Tech-Orthesen mittels Laser-Sinter-Verfahren",
        author: "Deutsche Handwerks Zeitung, Ortema GmbH, Junior&Tacke, EOS",
        publication: "Deutsche Handwerks Zeitung, 4. Dezember 2014",
        date: "2014",
        referencesClaims: [1, 2, 3],
        link: "https://www.deutsche-handwerks-zeitung.de/paralympics-in-peking-michael-teuber-radelt-mit-wunderschuh-zu-silber-152122",
        summary: {
            de: "Dokumentiert reale kommerzielle Umsetzung einer vollständigen digitalen Prozesskette: Exakter Gipsabdruck → 3D-Computermodell (Ingenieurbüro Junior&Tacke) → automatische Laser-Sinter-Fertigung (EOS) mit schichtweiser Laserbearbeitung aus Kunststoffblock. Millimetergenaue anatomische Anpassung für Paralympics-Orthesen durch Drei-Unternehmen-Kooperation (Ortema, Junior&Tacke, EOS) zeigt etablierte Industriepraxis der automatisierten Orthesen-Herstellung bereits 2014.",
            en: "Documents real commercial implementation of complete digital process chain: Exact plaster cast → 3D computer model (Junior&Tacke engineering) → automated laser sintering fabrication (EOS) with layer-by-layer laser processing from plastic block. Millimeter-precise anatomical fitting for Paralympic orthoses through three-company collaboration (Ortema, Junior&Tacke, EOS) demonstrates established industry practice of automated orthotic manufacturing as early as 2014.",
            fr: "Documente la mise en œuvre commerciale réelle d'une chaîne de processus numérique complète : Moulage en plâtre exact → Modèle informatique 3D (ingénierie Junior&Tacke) → Fabrication automatisée par frittage laser (EOS) avec traitement laser couche par couche à partir d'un bloc de plastique. Ajustement anatomique au millimètre près pour orthèses paralympiques grâce à collaboration tripartite (Ortema, Junior&Tacke, EOS) démontre pratique industrielle établie de fabrication d'orthèses automatisée dès 2014.",
            es: "Documenta implementación comercial real de cadena de proceso digital completa: Molde de yeso exacto → Modelo computacional 3D (ingeniería Junior&Tacke) → Fabricación automatizada por sinterizado láser (EOS) con procesamiento láser capa por capa desde bloque plástico. Ajuste anatómico de precisión milimétrica para ortesis paralímpicas mediante colaboración de tres empresas (Ortema, Junior&Tacke, EOS) demuestra práctica industrial establecida de manufactura ortésica automatizada desde 2014.",
            it: "Documenta implementazione commerciale reale di catena di processo digitale completa: Calco in gesso esatto → Modello informatico 3D (ingegneria Junior&Tacke) → Fabbricazione automatizzata tramite sinterizzazione laser (EOS) con lavorazione laser strato per strato da blocco plastico. Adattamento anatomico di precisione millimetrica per ortesi paralimpiche attraverso collaborazione tre-aziende (Ortema, Junior&Tacke, EOS) dimostra pratica industriale consolidata di manifattura ortesica automatizzata già nel 2014.",
        },
    },
];

/** Check unique IDs for counter claims */
console.assert(
    counterClaims.length === new Set(counterClaims.map((cc) => cc.id)).size,
    "CounterClaims IDs must be unique"
);

export default counterClaims;
