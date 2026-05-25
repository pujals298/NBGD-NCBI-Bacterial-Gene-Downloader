// ============================================
// TEXTOS / Texts - EDIT THIS FILE
// ============================================
// Edita los textos aquí directamente.
// Edit texts here directly.

const i18n = {
    es: {
        nav: {
            logo: "NBD",
            documentation: "Documentación",
            objective: "Objetivo",
            pipeline: "Pipeline",
            howItWorks: "Cómo funciona",
            gettingStarted: "Inicio rápido",
            concepts: "Conceptos clave",
            faq: "FAQ",
            reference: "Referencia técnica"
        },
        theme: {
            dark: "Modo oscuro",
            light: "Modo claro"
        },
        objective: {
            title: "Objetivo del Proyecto",
            description: "Este pipeline automatiza el proceso de análisis filogenético para genes de cualquier organismo desde NCBI RefSeq, permitiendo estudios de diversidad genética y evolución.",
            whatIsPhylogeny: "¿Qué es la filogenia?",
            phylogenyDescription: "La filogenia es el estudio de las relaciones evolutivas entre organismos. Los árboles filogenéticos muestran cómo diferentes cepas o especies comparten ancestros comunes, permitiendo entender la evolución y propagación de genes.",
            purpose: "¿Para qué sirve?",
            purposeItems: [
                "Analizar la diversidad genética de cualquier organismo",
                "Identificar patrones de evolución de genes",
                "Comparar secuencias de genes específicos entre cepas o especies",
                "Generar árboles filogenéticos para publicaciones científicas"
            ]
        },
        pipeline: {
            title: "Resumen del Pipeline",
            description: "El pipeline consiste en dos pasos consecutivos que transforman datos crudos de NCBI en análisis filogenéticos listos para interpretar.",
            step1Title: "Buscar Genes",
            step1Desc: "Descarga secuencias de NCBI RefSeq",
            step2Title: "Alinear → Podar → Árbol",
            step2Desc: "Construye árbol filogenético",
            conceptTitle: "Concepto: Pipeline",
            conceptDescription: "Un pipeline es una serie de programas que se ejecutan en secuencia, donde la salida de cada paso es la entrada del siguiente. Esto automatiza tareas repetitivas y garantiza consistencia en los resultados."
        },
        howItWorks: {
            title: "Cómo Funciona",
            step1Title: "Paso 1: Búsqueda y Extracción de Genes",
            step1Script: "refseq.py",
            step1Description: "Este script se conecta a la base de datos NCBI RefSeq y:",
            step1Items: [
                "Busca genomas de cualquier organismo usando TaxID o nombre",
                "Extrae secuencias de genes específicos (por nombre de gen o producto)",
                "Guarda los resultados en formato FASTA",
                "Genera un archivo Excel con información de control de calidad"
            ],
            step2Title: "Paso 2: Alineamiento, Poda y Árbol Filogenético",
            step2Script: "aln_trim_tree.py",
            step2Description: "Este script procesa las secuencias descargadas:",
            step2Items: [
                "Alinea las secuencias usando MUSCLE (alineamiento múltiple)",
                "Poda las regiones problemáticas usando ClipKIT",
                "Construye un árbol filogenético usando IQ-TREE"
            ],
            table: {
                tool: "Herramienta",
                function: "Función",
                input: "Entrada",
                output: "Salida",
                muscle: { function: "Alineamiento múltiple de secuencias", input: "FASTA (secuencias no alineadas)", output: "FASTA (alineado)" },
                clipkit: { function: "Poda de alineamientos", input: "FASTA alineado", output: "FASTA podado" },
                iqtree: { function: "Construcción de árboles filogenéticos", input: "FASTA podado", output: "Árbol (.treefile), estadísticas" }
            }
        },
        gettingStarted: {
            title: "Inicio Rápido",
            description: "Sigue estos pasos para ejecutar el pipeline en tu computadora.",
            step1Title: "Configurar el entorno",
            step1Code: "# Linux/Mac\nbash ./setting.sh\n\n# Windows\npowershell -ExecutionPolicy Bypass -File .\\setting.ps1",
            step1Desc: "Esto crea un entorno virtual de Python e instala las dependencias necesarias.",
            step2Title: "Ejecutar el pipeline",
            step2Code: "python run.py",
            step2Desc: "El script te preguntará qué quieres hacer:",
            step2Options: ["1 → Solo Paso 1 (descargar genes)", "2 → Solo Paso 2 (alinear/árbol)", "3 → Ambos pasos seguidos"],
            step3Title: "Proporcionar los datos requeridos",
            step3Desc: "El pipeline te pidió:",
            step3Items: ["Email para NCBI (obligatorio)", "Clave API de NCBI (opcional, pero recomendado)", "Nombre del gen a buscar (ej: 16S rRNA, cox1)", "TaxID del organismo a estudiar (ej: 9606 para Homo sapiens)"],
            tip: { title: "Consejo", content: "Obtén una clave API de NCBI en tu cuenta de NCBI. Es gratuita y permite descargas más rápidas." }
        },
        concepts: {
            title: "Conceptos Clave",
            description: "Glosario de términos importantes para entender el pipeline y el análisis filogenético.",
            refSeq: { title: "RefSeq", description: "Base de datos de referencia de NCBI con secuencias curadas y de alta calidad. Es el \"estándar oficial\" para análisis genéticos." },
            fasta: { title: "FASTA", description: "Formato de texto para almacenar secuencias de ADN/proteínas. Cada secuencia comienza con una línea de descripción seguida de las letras de la secuencia." },
            cds: { title: "CDS (Coding Sequence)", description: "Secuencia de codificación: la parte del ADN que codifica para una proteína. Contiene la información genética real." },
            alignment: { title: "Alineamiento", description: "Proceso de organizar secuencias para identificar posiciones homologas (heredadas de un ancestro común). Revela similitudes y diferencias." },
            trimming: { title: "Poda (Trimming)", description: "Eliminar columnas dudosas o con muchos huecos del alineamiento para mejorar la calidad del árbol filogenético." },
            phylogeneticTree: { title: "Árbol Filogenético", description: "Diagma que muestra las relaciones evolutivas entre secuencias. Los nodos representan ancestros comunes y las ramas muestran divergencia." },
            bootstrap: { title: "Bootstrap", description: "Método estadístico que mide la confianza de cada rama del árbol. Valores altos (>70%) indican ramas fiables." },
            entrez: { title: "Entrez", description: "Sistema de búsqueda de NCBI que permite acceder programáticamente a sus bases de datos biológicas." },
            taxId: { title: "TaxID", description: "Identificador numérico único para organismos en NCBI. Por ejemplo, Homo sapiens = 9606." },
            homology: { title: "Homología", description: "Secuencias que descienden de un ancestro común. Puede ser ortología (especies diferentes) o paralogía (mismo genoma)." }
        },
        faq: {
            title: "Preguntas Frecuentes",
            questions: [
                { question: "¿Qué es NCBI y por qué necesito un email?", answer: "NCBI (National Center for Biotechnology Information) es la principal base de datos de información biológica. Requiere un email para rastrear el uso y cumplir con sus términos de servicio. Es gratuito y no spam." },
                { question: "¿Cómo obtengo el TaxID de un organismo?", answer: "Busca el organismo en NCBI Taxonomy Browser. El TaxID aparece en la URL (ej: txid1280) o en la página del organismo." },
                { question: "¿Qué genes debería buscar para mi organismo?", answer: "Los genes a buscar dependen de tu organismo y objetivo de estudio. Algunos genes comunes en análisis filogenéticos:", items: ["Genes ribosomal (16S rRNA, 18S rRNA) - para relaciones evolutivas profundas", "Genes housekeeping (cox1, cytb, GAPDH) - evolución molecular", "Genes de resistencia - para estudios de epidemiología genética"] },
                { question: "¿El pipeline funciona en Windows?", answer: "Sí. Ejecuta .\\setting.ps1 en PowerShell. Los ejecutables de MUSCLE e IQ-TREE están incluidos para Windows en la carpeta del proyecto." },
                { question: "¿Qué hacer si el pipeline falla?", answer: "Verifica los siguientes puntos:", items: ["Verifica tu conexión a internet", "Confirma que tu email de NCBI es válido", "Revisa el nombre del gen - algunos nombres pueden variar", "Intenta reducir el número de genomas a escanear", "Revisa los mensajes de error en la consola"] }
            ]
        },
        reference: {
            title: "Referencia Técnica",
            structureTitle: "Estructura del Proyecto",
            structure: "ncbi-beginner-downloader/\n├── run.py                          # Punto de entrada del pipeline\n├── setting.sh / setting.ps1       # Scripts de configuración\n├── requirements.txt                # Dependencias de Python\n├── 1 SEARCH GENES/\n│   └── refseq.py                   # Paso 1: Descarga de NCBI\n└── 2 ALN_TRIM_TREE/\n    ├── aln_trim_tree.py            # Paso 2: Alineamiento y árbol\n    ├── muscle-win64.v5.3.exe       # MUSCLE para Windows\n    └── bin/iqtree2.exe             # IQ-TREE para Windows",
            dependenciesTitle: "Dependencias",
            dependencies: ["Python 3.12+ - Intérprete", "Biopython - Manipulación de secuencias biológicas", "OpenPyXL - Generación de archivos Excel", "Certifi - Certificados SSL para NCBI", "ClipKIT - Poda de alineamientos"],
            externalToolsTitle: "Herramientas Externas",
            externalTools: ["MUSCLE - Alinear secuencias (instalar con sudo apt install muscle en Linux)", "IQ-TREE - Construir árboles (instalar con sudo apt install iqtree en Linux)"],
            cliArgsTitle: "Argumentos de Línea de Comandos",
            cliScript: "aln_trim_tree.py",
            cliExample: "python aln_trim_tree.py --input input.fasta [opciones]\n\n--input FILE         Archivo FASTA de entrada (requerido)\n--aligned FILE      Archivo de salida alineado (opcional)\n--trimmed FILE      Archivo de salida podado (opcional)\n--clipkit-mode MODE Modo de poda: smart-gap, gappy, kpic (default: smart-gap)\n--outgroup NAME     Nombre del outgroup para el árbol (opcional)",
            outputFormatsTitle: "Formatos de Salida",
            step1OutputTitle: "Paso 1 - Archivos generados:",
            step1Outputs: [".fasta - Secuencias extraídas", "_code.fasta - Versión con códigos (si se solicita)", ".xlsx - Control de calidad en Excel"],
            step2OutputTitle: "Paso 2 - Archivos generados:",
            step2Outputs: ["_aligned.fasta - Secuencias alineadas", "_aligned_trimmed.fasta - Alineamiento podado", "iqtree_results/ - Directorio con:", "    .treefile - Árbol filogenético (formato Newick)", "    .iqtree - Archivo con estadísticas"]
        },
        footer: { text: "NCBI Beginner Downloader (NBD) - Proyecto de Grado" }
    },
    en: {
        nav: {
            logo: "NBD",
            documentation: "Documentation",
            objective: "Objective",
            pipeline: "Pipeline",
            howItWorks: "How it works",
            gettingStarted: "Getting started",
            concepts: "Key concepts",
            faq: "FAQ",
            reference: "Technical reference"
        },
        theme: { dark: "Dark mode", light: "Light mode" },
        objective: {
            title: "Project Objective",
            description: "This pipeline automates the phylogenetic analysis process for genes of any organism from NCBI RefSeq, enabling genetic diversity and evolution studies.",
            whatIsPhylogeny: "What is phylogeny?",
            phylogenyDescription: "Phylogeny is the study of evolutionary relationships between organisms. Phylogenetic trees show how different strains or species share common ancestors, allowing us to understand gene evolution and spread.",
            purpose: "What is it for?",
            purposeItems: ["Analyze genetic diversity of any organism", "Identify gene evolution patterns", "Compare specific gene sequences between strains or species", "Generate phylogenetic trees for scientific publications"]
        },
        pipeline: {
            title: "Pipeline Overview",
            description: "The pipeline consists of two consecutive steps that transform raw NCBI data into ready-to-interpret phylogenetic analyses.",
            step1Title: "Search Genes", step1Desc: "Download sequences from NCBI RefSeq",
            step2Title: "Align → Trim → Tree", step2Desc: "Build phylogenetic tree",
            conceptTitle: "Concept: Pipeline",
            conceptDescription: "A pipeline is a series of programs that run in sequence, where the output of each step is the input of the next."
        },
        howItWorks: {
            title: "How It Works",
            step1Title: "Step 1: Gene Search and Extraction", step1Script: "refseq.py", step1Description: "This script connects to the NCBI RefSeq database and:",
            step1Items: ["Searches genomes of any organism using TaxID or name", "Extracts specific gene sequences", "Saves results in FASTA format", "Generates an Excel file with quality control information"],
            step2Title: "Step 2: Alignment, Trimming and Phylogenetic Tree", step2Script: "aln_trim_tree.py", step2Description: "This script processes the downloaded sequences:",
            step2Items: ["Aligns sequences using MUSCLE", "Trims problematic regions using ClipKIT", "Builds a phylogenetic tree using IQ-TREE"],
            table: { tool: "Tool", function: "Function", input: "Input", output: "Output", muscle: { function: "Multiple sequence alignment", input: "FASTA (unaligned)", output: "FASTA (aligned)" }, clipkit: { function: "Alignment trimming", input: "Aligned FASTA", output: "Trimmed FASTA" }, iqtree: { function: "Tree construction", input: "Trimmed FASTA", output: "Tree (.treefile)" } }
        },
        gettingStarted: {
            title: "Getting Started", description: "Follow these steps to run the pipeline on your computer.",
            step1Title: "Set up the environment",
            step1Code: "# Linux/Mac\nbash ./setting.sh\n\n# Windows\npowershell -ExecutionPolicy Bypass -File .\\setting.ps1",
            step1Desc: "This creates a Python virtual environment and installs the necessary dependencies.",
            step2Title: "Run the pipeline", step2Code: "python run.py", step2Desc: "The script will ask you what you want to do:",
            step2Options: ["1 → Step 1 only", "2 → Step 2 only", "3 → Both steps"],
            step3Title: "Provide the required data", step3Desc: "The pipeline will ask you for:",
            step3Items: ["Email for NCBI (required)", "NCBI API key (optional)", "Gene name (e.g., 16S rRNA)", "TaxID of the organism"],
            tip: { title: "Tip", content: "Get an API key from your NCBI account. It's free and allows faster downloads." }
        },
        concepts: {
            title: "Key Concepts", description: "Glossary of important terms.",
            refSeq: { title: "RefSeq", description: "NCBI's reference database with curated, high-quality sequences." },
            fasta: { title: "FASTA", description: "Text format for storing DNA/protein sequences." },
            cds: { title: "CDS", description: "Coding sequence: the part of DNA that encodes a protein." },
            alignment: { title: "Alignment", description: "Process of organizing sequences to identify homologous positions." },
            trimming: { title: "Trimming", description: "Removing questionable columns from the alignment." },
            phylogeneticTree: { title: "Phylogenetic Tree", description: "Diagram showing evolutionary relationships between sequences." },
            bootstrap: { title: "Bootstrap", description: "Statistical method measuring confidence in tree branches." },
            entrez: { title: "Entrez", description: "NCBI's search system for programmatic access." },
            taxId: { title: "TaxID", description: "Unique numeric identifier for organisms in NCBI. Homo sapiens = 9606." },
            homology: { title: "Homology", description: "Sequences descending from a common ancestor." }
        },
        faq: {
            title: "Frequently Asked Questions",
            questions: [
                { question: "What is NCBI and why do I need an email?", answer: "NCBI is the primary biological information database. It requires an email to track usage." },
                { question: "How do I get the TaxID of an organism?", answer: "Search for the organism in the NCBI Taxonomy Browser. The TaxID appears in the URL." },
                { question: "What genes should I search?", answer: "Common genes in phylogenetic analyses:", items: ["Ribosomal genes (16S rRNA)", "Housekeeping genes (cox1, GAPDH)", "Resistance genes"] },
                { question: "Does the pipeline work on Windows?", answer: "Yes. Run .\\setting.ps1 in PowerShell." },
                { question: "What to do if the pipeline fails?", answer: "Check:", items: ["Internet connection", "NCBI email validity", "Gene name", "Console error messages"] }
            ]
        },
        reference: {
            title: "Technical Reference",
            structureTitle: "Project Structure",
            structure: "ncbi-beginner-downloader/\n├── run.py\n├── setting.sh / setting.ps1\n├── requirements.txt\n├── 1 SEARCH GENES/\n│   └── refseq.py\n└── 2 ALN_TRIM_TREE/\n    ├── aln_trim_tree.py\n    └── ...",
            dependenciesTitle: "Dependencies",
            dependencies: ["Python 3.12+", "Biopython", "OpenPyXL", "Certifi", "ClipKIT"],
            externalToolsTitle: "External Tools",
            externalTools: ["MUSCLE", "IQ-TREE"],
            cliArgsTitle: "Command Line Arguments",
            cliScript: "aln_trim_tree.py",
            cliExample: "python aln_trim_tree.py --input input.fasta [options]",
            outputFormatsTitle: "Output Formats",
            step1OutputTitle: "Step 1 - Generated files:",
            step1Outputs: [".fasta", "_code.fasta", ".xlsx"],
            step2OutputTitle: "Step 2 - Generated files:",
            step2Outputs: ["_aligned.fasta", "_aligned_trimmed.fasta", "iqtree_results/"]
        },
        footer: { text: "NCBI Beginner Downloader (NBD) - Undergraduate Project" }
    },
    ca: {
        nav: {
            logo: "NBD",
            documentation: "Documentació",
            objective: "Objectiu",
            pipeline: "Pipeline",
            howItWorks: "Com funciona",
            gettingStarted: "Inici ràpid",
            concepts: "Conceptes clau",
            faq: "FAQ",
            reference: "Referència tècnica"
        },
        theme: { dark: "Mode fosc", light: "Mode clar" },
        objective: {
            title: "Objectiu del Projecte",
            description: "Aquest pipeline automatitza el procés d'anàlisi filogenètic per a gens de qualsevol organisme des de NCBI RefSeq.",
            whatIsPhylogeny: "Què és la filogènia?",
            phylogenyDescription: "La filogènia és l'estudi de les relacions evolutives entre organisme.",
            purpose: "Per a què serveix?",
            purposeItems: ["Analitzar la diversitat genètica", "Identificar patrons d'evolució", "Comparar seqüències", "Generar arbres filogenètics"]
        },
        pipeline: {
            title: "Resum del Pipeline",
            description: "El pipeline consisteix en dos passos consecutius.",
            step1Title: "Buscar Gens", step1Desc: "Descarrega seqüències de NCBI RefSeq",
            step2Title: "Alinear → Podar → Arbre", step2Desc: "Construeix arbre filogenètic",
            conceptTitle: "Concepte: Pipeline",
            conceptDescription: "Un pipeline és una sèrie de programes que s'executen en seqüència."
        },
        howItWorks: {
            title: "Com Funciona",
            step1Title: "Pas 1: Cerca i Extracció de Gens", step1Script: "refseq.py", step1Description: "Aquest script es connecta a la base de dades NCBI RefSeq:",
            step1Items: ["Busca genomes de qualsevol organisme", "Extreu seqüències de gens", "Guarda en format FASTA", "Genera un fitxer Excel"],
            step2Title: "Pas 2: Alineament, Poda i Arbre", step2Script: "aln_trim_tree.py", step2Description: "Aquest script processa les seqüències:",
            step2Items: ["Alinea amb MUSCLE", "Poda amb ClipKIT", "Construeix arbre amb IQ-TREE"],
            table: { tool: "Eina", function: "Funció", input: "Entrada", output: "Sortida", muscle: { function: "Alineament múltiple", input: "FASTA", output: "FASTA" }, clipkit: { function: "Poda", input: "FASTA", output: "FASTA" }, iqtree: { function: "Arbre", input: "FASTA", output: "Arbre" } }
        },
        gettingStarted: {
            title: "Inici Ràpid", description: "Segueix aquests passos per executar el pipeline.",
            step1Title: "Configurar l'entorn",
            step1Code: "# Linux/Mac\nbash ./setting.sh\n\n# Windows\npowershell -ExecutionPolicy Bypass -File .\\setting.ps1",
            step1Desc: "Crea un entorn virtual de Python.",
            step2Title: "Executar el pipeline", step2Code: "python run.py", step2Desc: "El script et preguntarà:",
            step2Options: ["1 → Pas 1", "2 → Pas 2", "3 → Ambdós"],
            step3Title: "Proporcionar les dades", step3Desc: "El pipeline et demanarà:",
            step3Items: ["Email per a NCBI", "Clau API (opcional)", "Nom del gen", "TaxID"],
            tip: { title: "Consell", content: "Obtén una clau API del teu compte de NCBI." }
        },
        concepts: {
            title: "Conceptes Clau", description: "Glossari de termes importants.",
            refSeq: { title: "RefSeq", description: "Base de dades de referència de NCBI." },
            fasta: { title: "FASTA", description: "Format de text per a seqüències." },
            cds: { title: "CDS", description: "Seqüència de codificació." },
            alignment: { title: "Alineament", description: "Organitzar seqüències per identificar posicions homòlogues." },
            trimming: { title: "Poda", description: "Eliminar columnes dubtoses." },
            phylogeneticTree: { title: "Arbre Filogenètic", description: "Diagrama de relacions evolutives." },
            bootstrap: { title: "Bootstrap", description: "Mètode estadístic de confiança." },
            entrez: { title: "Entrez", description: "Sistema de cerca de NCBI." },
            taxId: { title: "TaxID", description: "Identificador numèric per a organismes." },
            homology: { title: "Homologia", description: "Seqüències d'un ancestre comú." }
        },
        faq: {
            title: "Preguntes FreqÜents",
            questions: [
                { question: "Què és NCBI?", answer: "NCBI és la principal base de dades biològiques." },
                { question: "Com obtinc el TaxID?", answer: "Busca al NCBI Taxonomy Browser." },
                { question: "Quins gens buscar?", answer: "Gens comuns:", items: ["Gens ribosomals", "Gens housekeeping", "Gens de resistència"] },
                { question: "Funciona a Windows?", answer: "Sí. Executa .\\setting.ps1 a PowerShell." },
                { question: "Què fer si falla?", answer: "Verifica:", items: ["Connexió a internet", "Email de NCBI", "Nom del gen", "Missatges d'error"] }
            ]
        },
        reference: {
            title: "Referència Tècnica",
            structureTitle: "Estructura del Projecte",
            structure: "ncbi-beginner-downloader/\n├── run.py\n├── setting.sh\n├── requirements.txt\n├── 1 SEARCH GENES/\n│   └── refseq.py\n└── 2 ALN_TRIM_TREE/\n    └── ...",
            dependenciesTitle: "Dependències",
            dependencies: ["Python 3.12+", "Biopython", "OpenPyXL", "Certifi", "ClipKIT"],
            externalToolsTitle: "Eines Externes",
            externalTools: ["MUSCLE", "IQ-TREE"],
            cliArgsTitle: "Arguments de Comandes",
            cliScript: "aln_trim_tree.py",
            cliExample: "python aln_trim_tree.py --input input.fasta [opcions]",
            outputFormatsTitle: "Formats de Sortida",
            step1OutputTitle: "Pas 1 - Fitxers:",
            step1Outputs: [".fasta", "_code.fasta", ".xlsx"],
            step2OutputTitle: "Pas 2 - Fitxers:",
            step2Outputs: ["_aligned.fasta", "_aligned_trimmed.fasta", "iqtree_results/"]
        },
        footer: { text: "NCBI Beginner Downloader (NBD) - Treball de Fi de Grau" }
    }
};