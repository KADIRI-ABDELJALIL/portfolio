/* ===== PROJETS — pour en ajouter un : copiez un bloc { ... } et modifiez-le =====
   status : "progress" | "planned" | "done" | "toConfirm"
   steps[].state : "done" | "progress" | "todo"
   results : [{label:{fr,en}, value:"..."}] — ne mettre que des mesures réelles.
   images : [{src:"assets/schema.png", alt:{fr:"...", en:"..."}}] */
window.PROJECTS = [
  {
    id: "ccps-lab-assistant",
    featured: true,
    status: "progress",
    tags: ["Edge AI", "LLM", "RAG"],
    tech: ["Raspberry Pi 5 (16 Go)", "Ollama", "Open WebUI", "Gemma 3 4B (quantifié)", "RAG"],
    architecture: ["Documentation du laboratoire", "Collections RAG", "Open WebUI", "Ollama + Gemma 3 4B", "Raspberry Pi 5"],
    images: [],
    results: [],
    links: { github: "", demo: "" },
    fr: {
      title: "CCPS Lab Assistant",
      summary: "Assistant IA local, hors ligne, pour retrouver l'information dans la documentation du laboratoire CCPS (ENSAM Casablanca).",
      context: "Les utilisateurs du laboratoire doivent retrouver rapidement des informations dans une documentation technique, parfois avec une connexion Internet limitée.",
      objectives: ["Répondre aux questions à partir de la documentation du laboratoire", "Fonctionner localement, sans dépendre du cloud", "Explorer une approche Edge AI sur Raspberry Pi 5"],
      evalPlan: ["Qualité des réponses", "Latence", "Utilisation de la RAM", "Utilisation du CPU", "Température du Raspberry Pi", "Comparaison entre plateformes (si mesures disponibles)"],
      resultsNote: "Projet en développement et en cours d'évaluation : aucune mesure n'est publiée pour l'instant."
    },
    en: {
      title: "CCPS Lab Assistant",
      summary: "Local, offline AI assistant to find information in the CCPS laboratory documentation (ENSAM Casablanca).",
      context: "Lab users need to quickly find information in technical documentation, sometimes with limited Internet access.",
      objectives: ["Answer questions from the laboratory documentation", "Run locally, without relying on the cloud", "Explore an Edge AI approach on Raspberry Pi 5"],
      evalPlan: ["Answer quality", "Latency", "RAM usage", "CPU usage", "Raspberry Pi temperature", "Comparison across platforms (when measurements are available)"],
      resultsNote: "Project under development and evaluation: no measurements are published yet."
    },
    steps: [
      { state: "progress", fr: "Mise en place de la pile locale (Raspberry Pi 5, Ollama, Open WebUI, Gemma 3 4B)", en: "Setting up the local stack (Raspberry Pi 5, Ollama, Open WebUI, Gemma 3 4B)" },
      { state: "progress", fr: "Organisation de la documentation en collections RAG", en: "Organizing documentation into RAG collections" },
      { state: "todo", fr: "Évaluation : qualité, latence, RAM, CPU, température", en: "Evaluation: quality, latency, RAM, CPU, temperature" }
    ]
  },
  {
    id: "lorawan-edge-ai",
    status: "toConfirm", tags: ["LoRaWAN", "Edge AI"], tech: ["LoRaWAN", "Edge AI"], architecture: [], images: [], results: [], links: {},
    fr: { title: "IoT industriel LoRaWAN et Edge AI", summary: "Maintenance prédictive combinant LoRaWAN et Edge AI. Fiche à compléter.", context: "", objectives: [], evalPlan: [], resultsNote: "Détails et état réel à confirmer." },
    en: { title: "Industrial IoT with LoRaWAN and Edge AI", summary: "Predictive maintenance combining LoRaWAN and Edge AI. Page to be completed.", context: "", objectives: [], evalPlan: [], resultsNote: "Details and actual status to be confirmed." },
    steps: []
  },
  {
    id: "radar-intelligent",
    status: "toConfirm", tags: ["Radar"], tech: [], architecture: [], images: [], results: [], links: {},
    fr: { title: "Radar intelligent", summary: "Fiche à compléter.", context: "", objectives: [], evalPlan: [], resultsNote: "Détails et état réel à confirmer." },
    en: { title: "Smart radar", summary: "Page to be completed.", context: "", objectives: [], evalPlan: [], resultsNote: "Details and actual status to be confirmed." },
    steps: []
  },
  {
    id: "vr-ar-maintenance",
    status: "toConfirm", tags: ["VR/AR"], tech: [], architecture: [], images: [], results: [], links: {},
    fr: { title: "VR/AR pour la maintenance industrielle", summary: "Fiche à compléter.", context: "", objectives: [], evalPlan: [], resultsNote: "Détails et état réel à confirmer." },
    en: { title: "VR/AR for industrial maintenance", summary: "Page to be completed.", context: "", objectives: [], evalPlan: [], resultsNote: "Details and actual status to be confirmed." },
    steps: []
  }
];
