window.PROJECTS=[
  {
    "id": "ccps",
    "status": "done",
    "cover": "assets/images/ccps/open-webui.webp",
    "title": [
      "CCPS Lab Assistant",
      "CCPS Lab Assistant",
      "مساعد مختبر CCPS"
    ],
    "tag": [
      "Assistant IA local sur Raspberry Pi 5 : comparaison de modèles et de configurations, dont le RAG.",
      "Local AI assistant on Raspberry Pi 5: model and configuration benchmarking, including RAG.",
      "مساعد ذكاء اصطناعي محلي على Raspberry Pi 5 مع مقارنة النماذج والإعدادات."
    ],
    "context": [
      "Les utilisateurs du laboratoire CCPS de l'ENSAM Casablanca doivent retrouver et comprendre des informations dispersées dans la documentation, parfois avec une connexion Internet limitée. Le projet explore une approche Edge AI : tout fonctionne en local sur un Raspberry Pi 5 (16 Go de RAM).",
      "Users of the CCPS lab at ENSAM Casablanca need to find and understand information spread across the documentation, sometimes with limited Internet access. The project explores an Edge AI approach: everything runs locally on a Raspberry Pi 5 (16 GB RAM).",
      "يبحث المشروع في تشغيل مساعد محلي على Raspberry Pi 5 بذاكرة 16 جيجابايت لتسهيل الوصول إلى وثائق المختبر."
    ],
    "detail": [
      [
        [
          "Pourquoi un assistant local ?",
          "Why a local assistant?"
        ],
        [
          "La documentation du laboratoire est volumineuse et répartie dans plusieurs documents. Un assistant qui répond en langage naturel fait gagner du temps, mais un service en ligne dépend de la connexion Internet. Ici, le modèle et les documents restent sur le Raspberry Pi.",
          "The lab documentation is large and spread across many documents. A natural-language assistant saves time, but an online service depends on Internet access. Here, the model and the documents stay on the Raspberry Pi."
        ]
      ],
      [
        [
          "Approche explorée : RAG",
          "Approach explored: RAG",
          "نهج الاسترجاع المعزز"
        ],
        [
          "Les documents sont organisés en collections. À chaque question, le système retrouve les passages les plus proches dans ces collections, puis les transmet au modèle Gemma 3 4B quantifié, exécuté par Ollama, qui rédige la réponse. Open WebUI fournit l'interface de discussion.",
          "Documents are organized in collections. For each question, the system retrieves the closest passages from these collections and passes them to the quantized Gemma 3 4B model, run by Ollama, which writes the answer. Open WebUI provides the chat interface."
        ]
      ],
      [
        [
          "Pourquoi l'Edge AI ?",
          "Why Edge AI?"
        ],
        [
          "Un Raspberry Pi 5 de 16 Go offre des ressources limitées. Le projet cherche à savoir si un assistant utile peut tourner sur une carte à faible coût, et à quel prix en latence, mémoire, CPU et température.",
          "A 16 GB Raspberry Pi 5 has limited resources. The project asks whether a useful assistant can run on a low-cost board, and at what cost in latency, memory, CPU and temperature."
        ]
      ],
      [
        [
          "Protocole d'évaluation",
          "Evaluation protocol"
        ],
        [
          "Un banc d'essai automatisé exécute une série de 36 cas de test et enregistre, pour chaque cas, des scores de qualité (correspondance exacte, ROUGE, mots-clés, similarité sémantique), la latence, le débit en tokens/s, l'utilisation du CPU, la RAM et la température.",
          "An automated benchmark runs a series of 36 test cases and records, for each case, quality scores (exact match, ROUGE, keywords, semantic similarity), latency, tokens/s, CPU usage, RAM and temperature."
        ]
      ]
    ],
    "goals": [
      [
        "Répondre aux questions techniques à partir de la documentation du laboratoire",
        "Answer technical questions from the lab documentation"
      ],
      [
        "Fonctionner hors ligne ou avec une connexion limitée",
        "Work offline or with limited connectivity"
      ],
      [
        "Évaluer la faisabilité sur une carte à faible coût",
        "Assess feasibility on a low-cost board"
      ]
    ],
    "arch": [
      [
        "Documentation",
        "Documentation"
      ],
      [
        "Collections",
        "Collections"
      ],
      [
        "Recherche RAG",
        "RAG retrieval"
      ],
      [
        "Gemma 3 4B · Ollama",
        "Gemma 3 4B · Ollama"
      ],
      [
        "Open WebUI",
        "Open WebUI"
      ]
    ],
    "tech": [
      "Raspberry Pi 5 (16 Go)",
      "Ollama",
      "Open WebUI",
      "Gemma 3 4B (quantifié)",
      "RAG"
    ],
    "steps": [
      [
        "done",
        [
          "Documentation organisée en collections",
          "Documentation organized in collections"
        ]
      ],
      [
        "done",
        [
          "Assistant local : Ollama + Open WebUI + Gemma 3 4B",
          "Local assistant: Ollama + Open WebUI + Gemma 3 4B"
        ]
      ],
      [
        "done",
        [
          "Banc d'essai de modèles locaux (essais intermédiaires avec gemma3:1b et qwen2.5:3b) : qualité, latence, RAM, CPU, température. Modèle retenu pour la version finale : Gemma 3 4B",
          "Benchmark of local models (intermediate runs with gemma3:1b and qwen2.5:3b): quality, latency, RAM, CPU, temperature. Model kept for the final version: Gemma 3 4B"
        ]
      ]
    ],
    "planned": [
      [
        "Qualité des réponses",
        "Answer quality"
      ],
      [
        "Latence",
        "Latency"
      ],
      [
        "Mémoire RAM",
        "RAM usage"
      ],
      [
        "Utilisation CPU",
        "CPU usage"
      ],
      [
        "Température du Raspberry Pi",
        "Raspberry Pi temperature"
      ]
    ],
    "results": [
      [
        "36 cas de test ; configuration retenue : Gemma 3 4B en few-shot sans RAG.",
        "36 test cases; selected configuration: Gemma 3 4B, few-shot without RAG.",
        "36 حالة اختبار؛ الإعداد المختار Gemma 3 4B بأمثلة قليلة دون RAG."
      ]
    ],
    "note": [
      "Le RAG fait partie des approches étudiées. Les vidéos et captures de benchmark illustrent les essais intermédiaires, pas une démonstration finale.",
      "RAG was one of the approaches studied. Benchmark videos and screenshots illustrate intermediate tests, not the final demonstration.",
      "تمت دراسة RAG ضمن عدة مناهج. الصور والفيديوهات توثق الاختبارات الوسيطة لا العرض النهائي."
    ],
    "links": {
      "platform": "",
      "github": "https://github.com/gh-ita/projet_stagiaires_ccps/tree/main/ABDELJALIL_LLM",
      "demo": ""
    },
    "images": [
      {
        "src": "assets/images/ccps/open-webui.webp",
        "alt": [
          "Interface Open WebUI de l'assistant CCPS",
          "Open WebUI interface of the CCPS assistant"
        ]
      },
      {
        "src": "assets/images/ccps/eval-gemma3-1b.webp",
        "alt": [
          "Évaluation intermédiaire (gemma3:1b) : qualité, latence, tokens/s, CPU, RAM, température",
          "Intermediate evaluation (gemma3:1b): quality, latency, tokens/s, CPU, RAM, temperature"
        ]
      },
      {
        "src": "assets/images/ccps/eval-qwen2-5-3b.webp",
        "alt": [
          "Évaluation intermédiaire (qwen2.5:3b)",
          "Intermediate evaluation (qwen2.5:3b)"
        ]
      },
      {
        "src": "assets/projects/edge-ai/images/assistant-response.webp",
        "alt": [
          "Exemple de réponse de l’assistant",
          "Example assistant response",
          "مثال على إجابة المساعد"
        ]
      }
    ],
    "videos": []
  },
  {
    "id": "lorawan",
    "status": "done",
    "cover": "assets/projects/iiot-maintenance/images/rack.webp",
    "title": [
      "IoT industriel LoRaWAN + Edge AI",
      "Industrial IoT LoRaWAN + Edge AI",
      "إنترنت الأشياء الصناعي والصيانة التنبؤية"
    ],
    "tag": [
      "Maintenance prédictive combinant LoRaWAN et Edge AI.",
      "Predictive maintenance combining LoRaWAN and Edge AI.",
      "الصيانة التنبؤية باستخدام LoRaWAN والذكاء الطرفي."
    ],
    "context": [
      "Prototype pédagogique de maintenance prédictive intégrant des capteurs, une chaîne LoRaWAN, la supervision et une inférence locale.",
      "Educational predictive maintenance prototype integrating sensors, LoRaWAN, monitoring and local inference.",
      "نموذج تعليمي للصيانة التنبؤية يجمع المستشعرات وLoRaWAN والمراقبة والاستدلال المحلي."
    ],
    "tech": [
      "ESP32",
      "DHT11",
      "LoRa RF96",
      "LoRaWAN",
      "ChirpStack",
      "MQTT",
      "Node-RED",
      "Raspberry Pi 3",
      "TensorFlow Lite",
      "Flask"
    ],
    "steps": [],
    "results": [],
    "links": {
      "platform": "",
      "github": "",
      "demo": ""
    },
    "images": [
      {
        "src": "assets/projects/iiot-maintenance/images/rack.webp",
        "alt": [
          "Banc de test",
          "Test rig",
          "منصة الاختبار"
        ]
      },
      {
        "src": "assets/projects/iiot-maintenance/images/gateway.webp",
        "alt": [
          "Passerelle",
          "Gateway",
          "البوابة"
        ]
      },
      {
        "src": "assets/projects/iiot-maintenance/images/prototype.webp",
        "alt": [
          "Prototype ESP32",
          "ESP32 prototype",
          "نموذج ESP32"
        ]
      },
      {
        "src": "assets/projects/iiot-maintenance/images/raspberry-pi.webp",
        "alt": [
          "Raspberry Pi 3",
          "Raspberry Pi 3",
          "Raspberry Pi 3"
        ]
      },
      {
        "src": "assets/projects/iiot-maintenance/diagrams/architecture.webp",
        "alt": [
          "Architecture de référence",
          "Reference architecture",
          "البنية المرجعية"
        ]
      },
      {
        "src": "assets/projects/iiot-maintenance/flyer.webp",
        "alt": [
          "Flyer de synthèse",
          "Project overview flyer",
          "ملصق المشروع"
        ]
      }
    ],
    "arch": [
      [
        "Capteurs",
        "Sensors",
        "المستشعرات"
      ],
      [
        "ESP32 + LoRa",
        "ESP32 + LoRa",
        "ESP32 + LoRa"
      ],
      [
        "Passerelle / ChirpStack",
        "Gateway / ChirpStack",
        "البوابة"
      ],
      [
        "MQTT / Node-RED",
        "MQTT / Node-RED",
        "المراقبة"
      ],
      [
        "Raspberry Pi 3 / TinyML",
        "Raspberry Pi 3 / TinyML",
        "الذكاء الطرفي"
      ]
    ],
    "detail": [
      [
        [
          "Acquisition et communication",
          "Acquisition and communication",
          "اكتساب البيانات والاتصال"
        ],
        [
          "Mesures de température et d’humidité transmises par LoRaWAN, avec visualisation Node-RED.",
          "Temperature and humidity readings transmitted over LoRaWAN and visualized in Node-RED.",
          "قياسات الحرارة والرطوبة عبر LoRaWAN وعرضها في Node-RED."
        ]
      ],
      [
        [
          "Inférence embarquée",
          "Embedded inference",
          "الاستدلال المدمج"
        ],
        [
          "Modèle Conv1D TensorFlow Lite sur Raspberry Pi 3, avec états NORMAL, WARNING et DANGER.",
          "Conv1D TensorFlow Lite model on Raspberry Pi 3, with NORMAL, WARNING and DANGER states.",
          "نموذج Conv1D على Raspberry Pi 3 مع ثلاث حالات تشغيل."
        ]
      ]
    ],
    "note": [
      "Prototype pédagogique : température et humidité mesurées ; d’autres signaux sont simulés. Pas de validation en usine.",
      "Educational prototype: temperature and humidity measured; other signals simulated. No factory validation.",
      "نموذج تعليمي: تم قياس الحرارة والرطوبة ومحاكاة إشارات أخرى دون تحقق ميداني."
    ]
  },
  {
    "id": "radar",
    "status": "done",
    "cover": "assets/projects/smart-road/images/dashboard.webp",
    "title": [
      "Radar intelligent",
      "Smart radar",
      "المراقبة الطرقية الذكية"
    ],
    "tag": [
      "Contrôle routier connecté : mesure de vitesse et identification de plaques.",
      "Connected road monitoring: speed estimation and plate identification.",
      "مراقبة الطرق المتصلة وقياس السرعة والتعرف على اللوحات."
    ],
    "context": [
      "Prototype pédagogique utilisant un capteur ultrasonique pour estimer une vitesse, un smartphone pour capturer une image et une chaîne IoT pour afficher les données.",
      "Educational prototype using an ultrasonic sensor to estimate speed, a smartphone for image capture and an IoT pipeline for visualization.",
      "نموذج تعليمي يستخدم مستشعر الموجات فوق الصوتية لتقدير السرعة وهاتفاً لالتقاط الصور وسلسلة إنترنت الأشياء للعرض."
    ],
    "tech": [
      "ESP32",
      "HC-SR04",
      "LoRa P2P",
      "MQTT",
      "Mosquitto",
      "Firebase",
      "OCR",
      "Node-RED"
    ],
    "steps": [],
    "results": [],
    "links": {
      "platform": "",
      "github": "",
      "demo": ""
    },
    "images": [
      {
        "src": "assets/projects/smart-road/images/dashboard.webp",
        "alt": [
          "Tableau de bord de test",
          "Test dashboard",
          "لوحة الاختبار"
        ]
      },
      {
        "src": "assets/projects/smart-road/images/node-red.webp",
        "alt": [
          "Flux Node-RED",
          "Node-RED flow",
          "تدفق Node-RED"
        ]
      },
      {
        "src": "assets/projects/smart-road/flyer.webp",
        "alt": [
          "Flyer de présentation — illustration",
          "Presentation flyer — illustration",
          "ملصق توضيحي"
        ]
      }
    ],
    "role": [
      "Contribution : ESP32 récepteur, LoRa, MQTT et tableau de bord Node-RED.",
      "Contribution: ESP32 receiver, LoRa, MQTT and Node-RED dashboard.",
      "المساهمة: مستقبل ESP32 وLoRa وMQTT ولوحة Node-RED."
    ],
    "arch": [
      [
        "Capteur + caméra",
        "Sensor + camera",
        "المستشعر والكاميرا"
      ],
      [
        "ESP32 / OCR",
        "ESP32 / OCR",
        "ESP32 / OCR"
      ],
      [
        "LoRa",
        "LoRa",
        "LoRa"
      ],
      [
        "MQTT",
        "MQTT",
        "MQTT"
      ],
      [
        "Node-RED",
        "Node-RED",
        "Node-RED"
      ]
    ],
    "note": [
      "Prototype de laboratoire, non homologué pour le contrôle routier réel.",
      "Lab prototype, not approved for real road enforcement.",
      "نموذج مختبري غير معتمد للمراقبة الطرقية الفعلية."
    ]
  },
  {
    "id": "vrar",
    "status": "done",
    "cover": "assets/projects/ar-vr/images/ar/ar-p09-02.webp",
    "title": [
      "VR/AR pour la maintenance industrielle",
      "VR/AR for industrial maintenance",
      "الواقع المعزز والافتراضي"
    ],
    "tag": [
      "Réalité virtuelle et augmentée appliquée à la maintenance industrielle.",
      "Virtual and augmented reality applied to industrial maintenance.",
      "الواقع المعزز والافتراضي للصيانة الصناعية."
    ],
    "context": [
      "Application pédagogique en réalité augmentée pour explorer un moteur asynchrone triphasé, avec vue éclatée des composants et explications audio. La VR est présentée comme activité de formation.",
      "Educational augmented reality application for exploring a three-phase induction motor, with exploded component view and audio explanations. VR is presented as a training activity.",
      "تطبيق تعليمي للواقع المعزز لاستكشاف محرك حثي ثلاثي الطور مع عرض مكونات مفككة وشروح صوتية. الواقع الافتراضي نشاط تدريبي."
    ],
    "tech": [
      "Unity",
      "Vuforia",
      "Image Target",
      "3D",
      "AR",
      "VR"
    ],
    "steps": [],
    "results": [],
    "links": {
      "platform": "",
      "github": "",
      "demo": ""
    },
    "images": [
      {
        "src": "assets/projects/ar-vr/images/ar/ar-p09-02.webp",
        "alt": [
          "Illustration du moteur",
          "Motor illustration",
          "صورة من تقرير المشروع"
        ]
      },
      {
        "src": "assets/projects/ar-vr/images/ar/ar-p15-01.webp",
        "alt": [
          "Scène Unity",
          "Unity scene",
          "صورة من تقرير المشروع"
        ]
      },
      {
        "src": "assets/projects/ar-vr/images/ar/ar-p16-01.webp",
        "alt": [
          "Configuration de l’interactivité",
          "Interactivity setup",
          "صورة من تقرير المشروع"
        ]
      },
      {
        "src": "assets/projects/ar-vr/flyer.webp",
        "alt": [
          "Flyer illustratif",
          "Illustrative flyer",
          "ملصق توضيحي"
        ]
      }
    ],
    "arch": [
      [
        "Marqueur image",
        "Image target",
        "علامة الصورة"
      ],
      [
        "Vuforia",
        "Vuforia",
        "Vuforia"
      ],
      [
        "Unity / modèle 3D",
        "Unity / 3D model",
        "نموذج ثلاثي الأبعاد"
      ],
      [
        "Vue éclatée + audio",
        "Exploded view + audio",
        "عرض مفكك وصوت"
      ]
    ],
    "note": [
      "Tests dans Unity avec webcam ; compilation mobile non confirmée.",
      "Tested in Unity with webcam; mobile build not confirmed.",
      "تم الاختبار في Unity بكاميرا ويب؛ بناء نسخة الهاتف غير مؤكد."
    ]
  },
  {
    "id": "atlas",
    "status": "done",
    "cover": "assets/images/atlas/dashboard.webp",
    "title": [
      "Atlas RH",
      "Atlas RH",
      "Atlas RH — إدارة التدريب"
    ],
    "tag": [
      "Plateforme de gestion, planification et suivi des formations professionnelles.",
      "Platform for managing, scheduling and tracking professional training.",
      "منصة إدارة وتخطيط وتتبع التدريب المهني."
    ],
    "context": [
      "Projet pédagogique de l'ENSAM Casablanca : plan annuel de formation 2027 d'un cas entièrement fictif (Atlas Industrie Maroc), réalisé en équipe de cinq. L'application tourne dans le navigateur, sans serveur : les données sont enregistrées localement.",
      "Educational project at ENSAM Casablanca: 2027 annual training plan for an entirely fictional case (Atlas Industrie Maroc), built by a team of five. The app runs in the browser without a server: data is stored locally.",
      "مشروع تعليمي لخطة تدريب سنوية في شركة افتراضية. يعمل التطبيق محلياً في المتصفح."
    ],
    "detail": [
      [
        [
          "Objectif pédagogique",
          "Educational goal"
        ],
        [
          "Illustrer la structuration d'un plan de formation, le pilotage du budget économique et le suivi prévisionnel, sur le cas fictif Atlas Industrie Maroc (100 collaborateurs : 20 managers, 50 commerciaux, 30 techniciens).",
          "Illustrate how to structure a training plan, manage the economic budget and forecast follow-up, on the fictional Atlas Industrie Maroc case (100 employees: 20 managers, 50 sales, 30 technicians)."
        ]
      ],
      [
        [
          "Budget économique",
          "Economic budget"
        ],
        [
          "Il regroupe la pédagogie (324 900 MAD HT), les frais annexes (41 050 MAD HT) et le temps interne valorisé (335 100 MAD). Ce n'est pas une facture HT unique. Les scénarios S0 à S4 comparent des hypothèses : ce sont des simulations.",
          "It combines training fees (324,900 MAD excl. VAT), ancillary costs (41,050 MAD excl. VAT) and valued internal time (335,100 MAD). It is not a single invoice. Scenarios S0 to S4 compare hypotheses: they are simulations."
        ]
      ],
      [
        [
          "Architecture sans serveur",
          "Serverless architecture"
        ],
        [
          "HTML, CSS et JavaScript natif, avec un générateur XLSX intégré sans dépendance externe. L'application fonctionne hors ligne en ouvrant simplement index.html ; elle est aussi déployée sur Cloudflare Workers depuis GitHub.",
          "Plain HTML, CSS and JavaScript, with a built-in XLSX generator and no external dependency. The app works offline by simply opening index.html; it is also deployed on Cloudflare Workers from GitHub."
        ]
      ],
      [
        [
          "Limites assumées",
          "Stated limits"
        ],
        [
          "La sauvegarde est locale au navigateur et non synchronisée entre utilisateurs. Le planning ne contrôle pas les disponibilités réelles des salles et formateurs, et les évaluations ne prouvent pas une causalité formation → performance.",
          "Saving is local to the browser and not synced between users. Scheduling does not check real room and trainer availability, and evaluations do not prove a training → performance causality."
        ]
      ]
    ],
    "feat": [
      [
        "Tableau de bord : indicateurs, effectifs, coûts pédagogiques, budget économique",
        "Dashboard: indicators, workforce, training costs, economic budget"
      ],
      [
        "Plan de formation : catégories, groupes, formations, durées, tarifs, scénarios S0 à S4",
        "Training plan: categories, groups, courses, durations, rates, scenarios S0 to S4"
      ],
      [
        "Planification : calendrier prévisionnel des sessions",
        "Scheduling: forecast calendar of sessions"
      ],
      [
        "Suivi et évaluations : présences, statuts, résultats avant/après, satisfaction",
        "Follow-up and evaluations: attendance, status, before/after results, satisfaction"
      ],
      [
        "Export Excel (6 feuilles), CSV, sauvegarde et import JSON",
        "Excel export (6 sheets), CSV, JSON save and import"
      ]
    ],
    "tech": [
      "HTML5",
      "CSS3",
      "JavaScript natif",
      "Export XLSX intégré",
      "GitHub",
      "Cloudflare Workers"
    ],
    "steps": [
      [
        "done",
        [
          "Application complète : tableau de bord, plan, planification, suivi",
          "Complete app: dashboard, plan, scheduling, follow-up"
        ]
      ],
      [
        "done",
        [
          "Exports Excel, CSV et JSON",
          "Excel, CSV and JSON exports"
        ]
      ],
      [
        "done",
        [
          "Tests de calcul et d'export Excel",
          "Calculation and Excel export tests"
        ]
      ],
      [
        "done",
        [
          "Déploiement en ligne (Cloudflare Workers)",
          "Online deployment (Cloudflare Workers)"
        ]
      ]
    ],
    "results": [
      [
        "Cas fictif : 100 collaborateurs, 6 actions de formation, 16 sessions",
        "Fictional case: 100 employees, 6 training actions, 16 sessions"
      ],
      [
        "Simulation : budget économique de 701 050 MAD (S0) contre 634 310 MAD (S4 optimisé)",
        "Simulation: economic budget of 701,050 MAD (S0) versus 634,310 MAD (optimized S4)"
      ]
    ],
    "note": [
      "Données entièrement fictives. Les scénarios sont des simulations, pas des économies constatées. La sauvegarde reste dans le navigateur : n'importez pas de données personnelles réelles.",
      "Entirely fictional data. Scenarios are simulations, not observed savings. Data stays in the browser: do not import real personal data."
    ],
    "links": {
      "platform": "https://atlas-rh-formation.abdeljalil-kad.workers.dev/",
      "github": "https://github.com/KADIRI-ABDELJALIL/atlas-rh-formation",
      "demo": ""
    },
    "images": [
      {
        "src": "assets/images/atlas/dashboard.webp",
        "alt": [
          "Tableau de bord d'Atlas RH (données fictives)",
          "Atlas RH dashboard (fictional data)"
        ]
      },
      {
        "src": "assets/projects/atlas-rh/images/planning.webp",
        "alt": [
          "Planification (données fictives)",
          "Scheduling (fictional data)",
          "بيانات افتراضية"
        ]
      },
      {
        "src": "assets/projects/atlas-rh/images/followup.webp",
        "alt": [
          "Suivi (données fictives)",
          "Follow-up (fictional data)",
          "بيانات افتراضية"
        ]
      },
      {
        "src": "assets/projects/atlas-rh/flyer.webp",
        "alt": [
          "Flyer illustratif",
          "Illustrative flyer",
          "ملصق توضيحي"
        ]
      }
    ]
  },
  {
    "id": "qualivision",
    "status": "progress",
    "cover": "assets/projects/qualivision/concepts/flyer.webp",
    "title": [
      "QualiVision AI",
      "QualiVision AI",
      "QualiVision AI"
    ],
    "tag": [
      "Plateforme web de contrôle qualité par détection d'anomalies visuelles non supervisée.",
      "Web platform for quality control using unsupervised visual anomaly detection.",
      "منصة ويب لمراقبة الجودة عبر كشف الشذوذ البصري."
    ],
    "context": [
      "Les défauts industriels sont rares et difficiles à annoter. QualiVision apprend sur des pièces saines et localise les défauts par une carte de chaleur. Le projet s'appuie sur des jeux de données publics (MVTec AD, VisA) et prévoit de comparer PatchCore, PaDiM et EfficientAD.",
      "Industrial defects are rare and hard to annotate. QualiVision learns from healthy parts and locates defects with a heatmap. It relies on public datasets (MVTec AD, VisA) and plans to compare PatchCore, PaDiM and EfficientAD.",
      "مشروع قيد التطوير لكشف العيوب الصناعية عبر التعلم من الصور السليمة ومقارنة PatchCore وPaDiM وEfficientAD."
    ],
    "detail": [
      [
        [
          "Le problème",
          "The problem"
        ],
        [
          "En production, les pièces défectueuses sont rares : réunir une base d'images de défauts annotées est long et coûteux. Une approche non supervisée évite d'avoir à annoter chaque type de défaut.",
          "In production, defective parts are rare: building an annotated defect image set is slow and costly. An unsupervised approach avoids annotating every defect type."
        ]
      ],
      [
        [
          "L'approche",
          "The approach"
        ],
        [
          "Le modèle apprend à quoi ressemble une pièce saine. Face à une nouvelle image, il calcule un score d'anomalie et produit une carte de chaleur qui localise l'écart. Les jeux publics MVTec AD et VisA servent de base d'expérimentation ; PatchCore, PaDiM et EfficientAD sont prévus pour la comparaison.",
          "The model learns what a healthy part looks like. For a new image, it computes an anomaly score and produces a heatmap locating the deviation. The public MVTec AD and VisA datasets are the experimentation base; PatchCore, PaDiM and EfficientAD are planned for comparison."
        ]
      ],
      [
        [
          "La plateforme web",
          "The web platform"
        ],
        [
          "Une application Streamlit gère des lots d'inspection stockés dans une base SQLite. L'opérateur voit le score, le verdict et la carte de chaleur, puis agit sur le résultat. Les erreurs sont gérées côté interface.",
          "A Streamlit application manages inspection batches stored in a SQLite database. The operator sees the score, verdict and heatmap, then acts on the result. Errors are handled in the interface."
        ]
      ],
      [
        [
          "État actuel",
          "Current status"
        ],
        [
          "Le développement est en cours. Les résultats seront publiés après les tests.",
          "Development is ongoing. Results will be published after testing.",
          "التطوير مستمر وستنشر النتائج بعد الاختبارات."
        ]
      ]
    ],
    "role": [
      "Ma contribution (équipe de cinq) : interface Streamlit, module d'inférence, affichage du score, du verdict et de la carte de chaleur, actions de l'opérateur, gestion des erreurs.",
      "My contribution (team of five): Streamlit interface, inference module, display of score, verdict and heatmap, operator actions, error handling."
    ],
    "arch": [
      [
        "Images saines",
        "Healthy images"
      ],
      [
        "Nouvelle image",
        "New image"
      ],
      [
        "Modèle IA",
        "AI model"
      ],
      [
        "Verdict + carte de chaleur",
        "Verdict + heatmap"
      ],
      [
        "Décision de l'opérateur",
        "Operator decision"
      ]
    ],
    "tech": [
      "Python",
      "Streamlit",
      "SQLite",
      "Anomalib",
      "MVTec AD",
      "VisA"
    ],
    "steps": [
      [
        "progress",
        [
          "Développement et intégration",
          "Development and integration",
          "التطوير والدمج"
        ]
      ],
      [
        "todo",
        [
          "Évaluation des modèles et résultats",
          "Model evaluation and results",
          "تقييم النماذج والنتائج"
        ]
      ]
    ],
    "results": [],
    "note": [
      "Projet en cours. Toutes les images de cette galerie sont des références ou maquettes temporaires, non des résultats de notre équipe.",
      "Work in progress. All gallery images are temporary references or mockups, not results from our team.",
      "مشروع قيد التطوير. جميع الصور مراجع أو نماذج مؤقتة وليست نتائج فريقنا."
    ],
    "links": {
      "platform": "",
      "github": "",
      "demo": ""
    },
    "images": [
      {
        "src": "assets/projects/qualivision/concepts/flyer.webp",
        "alt": [
          "Visuel conceptuel — flyer",
          "Concept image — flyer",
          "صورة توضيحية مؤقتة"
        ]
      },
      {
        "src": "assets/projects/qualivision/concepts/bottle.webp",
        "alt": [
          "Visuel conceptuel — bouchon",
          "Concept image — bottle cap",
          "صورة توضيحية مؤقتة"
        ]
      },
      {
        "src": "assets/projects/qualivision/concepts/interface.webp",
        "alt": [
          "Visuel conceptuel — exemple d’interface",
          "Concept image — sample interface",
          "صورة توضيحية مؤقتة"
        ]
      },
      {
        "src": "assets/projects/qualivision/concepts/anomaly-map.webp",
        "alt": [
          "Visuel conceptuel — localisation",
          "Concept image — localization",
          "صورة توضيحية مؤقتة"
        ]
      }
    ]
  }
];
