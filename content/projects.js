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
    status: "done",
    tags: ["LoRaWAN", "Edge AI", "TinyML", "Maintenance prédictive"],
    tech: ["ESP32", "Module LoRa RF96 (868 MHz)", "Capteur DHT11", "Passerelle LoRaWAN", "ChirpStack", "Node-RED", "Raspberry Pi 3", "Flask", "TensorFlow / TensorFlow Lite (INT8)"],
    architecture: [
      { fr: "Télémétrie LoRaWAN", en: "LoRaWAN telemetry", nodes: ["ESP32 + DHT11 + RF96", "Gateway LoRaWAN", "ChirpStack", "Node-RED dashboard"] },
      { fr: "Maintenance prédictive (Edge AI)", en: "Predictive maintenance (Edge AI)", nodes: ["ESP32 : séquence de 10 mesures", "Wi-Fi (HTTP POST, JSON)", "Raspberry Pi 3 : Flask + TFLite", "État + durée de vie restante", "Trame LoRa de 3 octets"] }
    ],
    images: [],
    results: [
      { label: { fr: "Latence d'inférence du modèle sur Raspberry Pi 3 (journaux du serveur)", en: "Model inference latency on Raspberry Pi 3 (server logs)" }, value: "1 – 3 ms" }
    ],
    links: { github: "", demo: "" },
    fr: {
      title: "IoT industriel : télémétrie LoRaWAN et maintenance prédictive Edge AI",
      summary: "Système IoT hybride : télémétrie LoRaWAN (ESP32, ChirpStack, Node-RED) et estimation de l'état de santé d'un équipement par une IA embarquée sur Raspberry Pi. Projet métier ENSAM Casablanca, réalisé en équipe, mars à mai 2026.",
      context: "Surveiller des équipements industriels demande de faire communiquer des capteurs sur de longues distances avec peu d'énergie, et d'analyser localement des données volumineuses comme les vibrations, sans dépendre du Cloud (latence, bande passante, sécurité).",
      objectives: [
        "Concevoir un nœud capteur autonome transmettant température et humidité en LoRaWAN vers ChirpStack et Node-RED (trame de 2 octets)",
        "Estimer l'état d'un équipement (NORMAL, WARNING, DANGER) et sa durée de vie restante avec un modèle embarqué sur Raspberry Pi",
        "Ne transmettre par LoRa que le résultat de l'analyse (trame de 3 octets) pour respecter les contraintes de bande passante et de temps d'émission"
      ],
      evalPlan: [],
      resultsNote: "Température et humidité sont mesurées par un vrai capteur. Les variables de vibration, de régime moteur et de durée de fonctionnement sont simulées côté ESP32 : la validation porte sur toute la chaîne (acquisition, inférence, transmission), pas sur la détection de défauts réels. Aucune précision de classification n'est publiée."
    },
    en: {
      title: "Industrial IoT: LoRaWAN telemetry and Edge AI predictive maintenance",
      summary: "Hybrid IoT system: LoRaWAN telemetry (ESP32, ChirpStack, Node-RED) and equipment health estimation with embedded AI on a Raspberry Pi. ENSAM Casablanca team project, March to May 2026.",
      context: "Monitoring industrial equipment requires long-range, low-power sensor communication, and local analysis of high-volume data such as vibrations, without relying on the Cloud (latency, bandwidth, security).",
      objectives: [
        "Design an autonomous sensor node sending temperature and humidity over LoRaWAN to ChirpStack and Node-RED (2-byte frame)",
        "Estimate equipment state (NORMAL, WARNING, DANGER) and remaining useful life with a model embedded on a Raspberry Pi",
        "Send only the analysis result over LoRa (3-byte frame) to respect bandwidth and airtime constraints"
      ],
      evalPlan: [],
      resultsNote: "Temperature and humidity come from a real sensor. Vibration, motor speed and runtime are simulated on the ESP32: the validation covers the whole chain (acquisition, inference, transmission), not real fault detection. No classification accuracy is published."
    },
    steps: [
      { state: "done", fr: "Cahier des charges et architecture hybride en deux flux", en: "Requirements and two-flow hybrid architecture" },
      { state: "done", fr: "Nœud de télémétrie : ESP32, module LoRa RF96, capteur DHT11, alimentation sur batterie", en: "Telemetry node: ESP32, RF96 LoRa module, DHT11 sensor, battery power" },
      { state: "done", fr: "Passerelle LoRaWAN et serveur ChirpStack configurés (activation ABP), tableau de bord Node-RED", en: "LoRaWAN gateway and ChirpStack server configured (ABP activation), Node-RED dashboard" },
      { state: "done", fr: "Modèle Conv1D d'environ 30 000 paramètres entraîné sur 40 000 échantillons, converti en TensorFlow Lite INT8", en: "Conv1D model of about 30,000 parameters trained on 40,000 samples, converted to TensorFlow Lite INT8" },
      { state: "done", fr: "API Flask sur Raspberry Pi 3 et liaison ESP32 vers Raspberry Pi en Wi-Fi", en: "Flask API on Raspberry Pi 3 and ESP32-to-Raspberry Pi Wi-Fi link" },
      { state: "done", fr: "Retransmission du résultat par LoRa (état + durée de vie restante)", en: "Result relayed over LoRa (state + remaining useful life)" },
      { state: "todo", fr: "Capteurs de vibration réels (accéléromètre) à la place des données simulées", en: "Real vibration sensors (accelerometer) instead of simulated data" },
      { state: "todo", fr: "Activation OTAA et exécution du modèle directement sur l'ESP32 (TinyML)", en: "OTAA activation and running the model directly on the ESP32 (TinyML)" }
    ]
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
