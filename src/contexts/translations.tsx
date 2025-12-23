export type Language = "fr" | "en" | "es";

export const translations = {
  fr: {
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.education": "Formation",
    "nav.experience": "Expériences",
    "nav.projects": "Projets",
    "nav.interests": "Centres d'intérêt",
    "nav.contact": "Contact",

    "about.title": "Ingénieur matériaux et procédés – aéronautique & ferroviaire",
    "about.description":
    "Actuellement étudiant en 2ᵉ année de CPGE TSI (classé parmi les deux premiers de ma promotion), j’ai été admis à l’IMT Mines Albi en filière Ingénieur Généraliste à partir de la rentrée 2026, avec une spécialisation en matériaux et procédés avancés pour l’aéronautique, l’aérospatial et le ferroviaire. Je recherche un contrat d’apprentissage de 3 ans afin de mettre ma rigueur scientifique et mon expertise en matériaux et procédés au service de l’optimisation de la performance, de l’allègement et de la décarbonation.",
    "about.cta": "Me contacter",
    "skills.title": "Compétences",
    "skills.languages": "Langues",
    "skills.technical": "Compétences techniques",
    "skills.technical.list": [
      "Gestion de projets industriels",
      "Pack Office",
      "Optimisation des processus",
      "Automatisation","Optimisation supply chain",
      "CAO/Conception 3D",
      "Impression 3D",
      "MATLAB",
      "Python",
      "SQL (bases de données)",
      "Analyse de données",
      "Simulation & Modélisation", 
      


    ],
    "skills.certifications": "Certifications",
    "skills.soft.title": "Soft Skills", 
    
    "skills.soft.list": [
        "Résilience",
        "Travail en équipe",
        "Capacité d'apprentissage",
        "Adaptabilité",
        "Résolution de problèmes",
        "Gestion du temps",
        "Esprit d’initiative",
        "Sens de l’organisation",
      ],
  

    // Certifications
    "cert.additive.title": "Spécialisation Fabrication Additive",
    "cert.additive.description":
      "Arizona State University (Coursera).\n- Étude des six catégories de procédés 3D, du workflow CAO → pièce finale.\n- Inclut le procédé Material Extrusion.",
    "cert.additive.status": "Certifié",

    "cert.airbus.title": "Spécialiste de la Supply Chain Airbus",
    "cert.airbus.description":
      "Certificat professionnel (Coursera).\n- Compréhension des enjeux logistiques et de la chaîne de valeur du secteur aéronautique.\n- Apprentissage des concepts clés de la planification, gestion des stocks et optimisation de la supply chain.",
    "cert.airbus.status": "En cours de validation",
    // Langues
    "lang.fr": "Français",
    "lang.es": "Espagnol",
    "lang.en": "Anglais",
    "lang.natif": "Natif",
    "lang.c1": "C1",
    "contact.namePlaceholder": "Ton nom",
    "contact.emailPlaceholder": "ton.email@exemple.com",
    "contact.messagePlaceholder": "Écris-moi quelque chose...",
     "projects.title": "Projets",
   
    projects: [
      {
        key: "tipe2025",
        title: "TIPE 2025-2026 — Jet-ski Hybride Intelligent (CPGE)",
        desc: "Étude d’un jet-ski hybride intelligent : optimisation énergétique inspirée du cycle vertueux auto-hybride, réduction du bruit sous-marin (anti-cavitation), amélioration hydrodynamique (hydrofoils) et cartographie intelligente. ",
        technologies: [
          "Hybridation",
          "Hydrodynamique",
          "Biomimétisme",
          "Cartographie GPS",
          "Optimisation énergétique",
        ],
      },
      {
        key: "tipe2024",
        title: "TIPE 2024-2025 — Détection de Nids par IA (CPGE)",
        desc: "Détection automatique de nids d’oiseaux dans les champs agricoles grâce à l’IA + levage mécanique automatisé pour préserver la faune. Système embarqué, traitement d’images, GPS et application mobile. ",
        technologies: [
          "IA",
          "Vision par ordinateur",
          "GPS",
          "Mécanique",
          "Traitement de signal",
        ],
      },
      {
        key: "croixrouge",
        title: "Programme d’Inclusion Numérique – Croix Rouge (2020-2021)",
        desc: "Programme d’alphabétisation numérique pour réfugiés : apprentissage de l’utilisation d’un ordinateur (souris, clavier), logiciels de base (Word, Paint), navigation, ainsi que l’initiation à Linux pour favoriser l’autonomie numérique. Cours donnés à des adultes n’ayant jamais utilisé d’ordinateur.",
        technologies: ["Pédagogie", "Bureautique", "Linux", "Inclusion numérique", "Accompagnement social"],
      },
      {
        key: "or",
        title: "Récupération d’Or dans les Composants Informatiques (2020)",
        desc: "Projet de récupération de métaux précieux (or) dans les CPU et composants d’ordinateurs récupérés. Analyse de la faisabilité économique et des impacts techniques et chimiques : les acides et procédés utilisés étaient plus coûteux que l’or récupéré, offrant une leçon concrète sur la valeur des matériaux et la viabilité des projets de recyclage technologique.",
        technologies: ["Recyclage électronique", "Chimie analytique", "Analyse économique", "Matériaux électroniques", "Gestion de projet"],
      },
      {
        key: "arduino",
        title: "Concours de Robotique Arduino",
        desc: "Création d’un jeu de basket interactif avec Arduino : compteur de paniers, affichage du score via LEDs et gestion du jeu avec code Arduino. Présentation devant jury et public, impression 3D des pièces. Classé 3ᵉ sur 10 projets présentés.",
        technologies: ["Arduino", "Impression 3D", "Électronique", "Programmation", "Présentation publique"],
      },
    ],
  



    "interests.title": "Centres d'intérêt",
    "interests.powerlifting.title": "Powerlifting",
    "interests.powerlifting.desc": "Pratique intensive du powerlifting (squat, bench, deadlift) : renforcement de la force brute, discipline mentale et résilience. Participation à des compétitions nationales.",
    "interests.recycling.title": "ONG Recyclage Technologique – Huesca, Espagne",
    "interests.recycling.desc": "Membre actif depuis 2017 → Collecte, diagnostic, réparation et reconditionnement d’ordinateurs usagés pour familles et écoles défavorisées. Gestion et optimisation complète du flux logistique et technique.",


    // Expériences
    "experience.title": "Expériences professionnelles",
    "experience.job1.title": "Réparateur, technicien et chargé de clientèle\nHuesca, Espagne",
    "experience.job1.company": "Réparateurs Huesca",
    "experience.job1.period": "Juillet 2018 - Juillet 2020",
    "experience.job1.desc1": "Réparation d'appareils",
    "experience.job1.desc2": "Conseil client",
    "experience.job1.desc3": "Gestion administrative",
    "education.title": "Formation",  
    "projects.view": "Voir le projet",
    "contact.title": "Me contacter", "contact.subtitle": "N'hésitez pas à me contacter pour toute opportunité ou question", "contact.name": "Nom", "contact.email": "Email", "contact.message": "Message", "contact.send": "Envoyer", "contact.location": "Localisation", "contact.phone": "Téléphone",

  },

  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.interests": "Interests",
    "nav.contact": "Contact",
    
    "contact.namePlaceholder": "Your Name",
    "contact.emailPlaceholder": "your.email@example.com",
    "contact.messagePlaceholder": "Write me something...",
    "skills.soft.title": "Soft Skills", 
    
    "skills.soft.list": [
        "Resilience",
        "Teamwork",
        "Learning Ability",
        "Adaptability",
        "Troubleshooting",
        "Time Management",
        "Initiative",
        "Organizational Skills",
      ],
  

    "about.title": "Aeronautical Materials and Processes Engineer",
    "about.description":
    "Currently a 2nd-year student in CPGE TSI (ranked among the top two of my class), I have been admitted to IMT Mines Albi in the General Engineering program starting in september 2026, specializing in advanced materials and processes for aeronautics, aerospace and the railway sector. I am seeking a 3-year apprenticeship to apply my scientific rigor and expertise in material and process quality to enhance performance, reduce weight, and support decarbonization.",
    "about.cta": "Contact Me",
    "interests.title": "Interests",
    "interests.powerlifting.title": "Powerlifting",
    "interests.powerlifting.desc": "Intensive powerlifting practice (squat, bench, deadlift): building raw strength, mental discipline, and resilience. Participation in national competitions.",
    "interests.recycling.title": "Tech Recycling NGO – Huesca, Spain",
    "interests.recycling.desc": "Active member since 2017 → Collection, diagnosis, repair, and refurbishment of used computers for disadvantaged families and schools. Full logistical and technical flow management.",

      "projects.title": "Projects",
    "skills.title": "Skills",
    "skills.languages": "Languages",
    "skills.technical": "Technical Skills",
    "skills.technical.list": [
      "Industrial Project Management",
      "Microsoft Office",
      "Learning Ability",
      "Process Optimization",
      "Supply Chain Optimization",
      "CAD/3D Design",
      "3D Printing",
      "MATLAB","Python",
      "SQL (Databases)",
      "Data Analysis",
      "Simulation & Modeling",
      "Automation",
    ],
    
  

    
    "skills.certifications": "Certifications",
    projects: [
      {
        key: "tipe2025",
        title: "TIPE 2025-2026 — Intelligent Hybrid Jet-ski (CPGE)",
        desc: "Study of an intelligent hybrid jet-ski: energy optimization inspired by the self-hybrid virtuous cycle, underwater noise reduction (anti-cavitation), hydrodynamic improvement (hydrofoils), and intelligent mapping.",
        technologies: [
          "Hybridization", "Hydrodynamics", "Biomimicry", "GPS Mapping", "Energy Optimization",
        ],
      },
      {
        key: "tipe2024",
        title: "TIPE 2024-2025 — AI Nest Detection (CPGE)",
        desc: "Automatic detection of bird nests in agricultural fields using AI + automated mechanical lifting to preserve wildlife. Embedded system, image processing, GPS, and mobile application. ",
        technologies: [
          "AI", "Computer Vision", "GPS", "Mechanics", "Signal Processing",
        ],
      },
      {
        key: "croixrouge",
        title: "Digital Inclusion Program – Red Cross (2020-2021)",
        desc: "Digital literacy program for refugees: learning computer usage (mouse, keyboard), basic software (Word, Paint), navigation, and introduction to Linux for digital autonomy. Classes given to adults with no prior computer experience.",
        technologies: ["Pedagogy", "Office Software", "Linux", "Digital Inclusion", "Social Support"],
      },
      {
        key: "or",
        title: "Gold Recovery in Computer Components (2020)",
        desc: "Project on recovering precious metals (gold) from CPUs and computer components. Analysis of economic feasibility and technical/chemical impacts: acids and processes used were more expensive than the gold recovered, giving a practical lesson on material value and recycling project viability.",
        technologies: ["Electronic Recycling", "Analytical Chemistry", "Economic Analysis", "Electronic Materials", "Project Management"],
      },
      {
        key: "arduino",
        title: "Arduino Robotics Competition (2018)",
        desc: "Created an interactive basketball game with Arduino: basket counter, score display via LEDs, game logic coded in Arduino. Presented in front of jury and public, 3D printed parts. Ranked 3rd out of 10 projects.",
        technologies: ["Arduino", "3D Printing", "Electronics", "Programming", "Public Presentation"],
      },
    ],
    // Certifications
    "cert.additive.title": "Additive Manufacturing Specialization",
    "cert.additive.description":
      "Arizona State University (Coursera).\n- Study of the six categories of 3D printing processes, from CAD workflow to final part.\n- Includes the Material Extrusion process.",
    "cert.additive.status": "Certified",

    "cert.airbus.title": "Airbus Supply Chain Specialist",
    "cert.airbus.description":
      "Professional Certificate (Coursera).\n- Understanding the logistics challenges and value chain of the aerospace sector.\n- Learned key concepts in planning, inventory management, and supply chain optimization.",
    "cert.airbus.status": "In progress",
    // Languages
    "lang.fr": "French",
    "lang.es": "Spanish",
    "lang.en": "English",
    "lang.natif": "Native",
    "lang.c1": "C1",

    // Experiences
    "experience.title": "Professional Experience",
    "experience.job1.title": "Repairer, Technician & Customer Service\nHuesca, Spain",
    "experience.job1.company": "Repair Huesca",
    "experience.job1.period": "July 2018 - July 2020",
    "experience.job1.desc1": "Device repair",
    "experience.job1.desc2": "Customer advice",
    "experience.job1.desc3": "Administrative management",
    "education.title": "Education", "projects.view": "View Project", "contact.title": "Contact Me", "contact.subtitle": "Feel free to reach out for any opportunity or question", "contact.name": "Name", "contact.email": "Email", "contact.message": "Message", "contact.send": "Send", "contact.location": "Location", "contact.phone": "Phone",

  },

  es: {
    "nav.about": "Acerca de",
    "nav.skills": "Habilidades",
    "nav.education": "Formación",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.interests": "Intereses",
    "nav.contact": "Contacto",

    "about.title": "Ingeniero de materiales y procesos aeronáuticos",
    "about.description":
    "Actualmente soy estudiante de 2º año de CPGE TSI (clasificado entre los dos primeros de mi clase) y he sido admitido en IMT Mines Albi en el programa de Ingeniería General, que comienza en septiembre 2026, especializándome en materiales y procesos avanzados para aeronáutica, aeroespacial y ferroviario. Busco un contrato de aprendizaje de 3 años para aplicar mi rigor científico en la calidad de materiales y procesos, con el fin de mejorar el rendimiento, reducir el peso y contribuir a la descarbonización.",
    "about.cta": "Contáctame",

    "skills.title": "Habilidades",
    "skills.languages": "Idiomas",
    "skills.technical": "Habilidades técnicas",
    "skills.technical.list": [
      "Gestión de proyectos industriales",
      "Pack Office",
      "Capacidad de aprendizaje",
      "Optimización de procesos",
      "Optimización de la cadena de suministro",
      "CAD/Diseño 3D",
      "Impresión 3D",
      "MATLAB","Python",
      "SQL (Bases de datos)",
      "Análisis de datos",
      "Simulación & Modelado", 
      "Automatización",

    ],
    "contact.namePlaceholder": "Tu Nombre",
    "contact.emailPlaceholder": "tu.correo@ejemplo.com",
    "contact.messagePlaceholder": "Escríbeme algo...", 

    "skills.certifications": "Certificaciones",
    "interests.title": "Intereses",
    "interests.powerlifting.title": "Powerlifting",
    "interests.powerlifting.desc": "Práctica intensiva de powerlifting (sentadilla, press de banca, peso muerto): desarrollo de fuerza, disciplina mental y resiliencia. Participación en competiciones nacionales.",
    "interests.recycling.title": "ONG Reciclaje Tecnológico – Huesca, España",
    "interests.recycling.desc": "Miembro activo desde 2017 → Recogida, diagnóstico, reparación y reacondicionamiento de ordenadores usados para familias y escuelas desfavorecidas. Gestión y optimización completa del flujo logístico y técnico.",
    
        // Languages
    "lang.fr": "Francés",
    "lang.es": "Español",
    "lang.en": "Inglés",
    "lang.natif": "Nativo",
    "lang.c1": "C1",
    "skills.soft.title": "Habilidades Blandas", 
    
    "skills.soft.list": [
        "Resiliencia",
        "Trabajo en equipo",
        "Capacidad de aprendizaje",
        "Adaptabilidad",
        "Solución de problemas",
        "Gestión del tiempo",
        "Iniciativa",
        "Capacidad de organización",
      ],
    
    
  

    "projects.title": "Proyectos",
    projects: [
      {
        key: "tipe2025",
        title: "TIPE 2025-2026 — Jet-ski Híbrido Inteligente (CPGE)",
        desc: "Estudio de un jet-ski híbrido inteligente: optimización energética inspirada en el ciclo virtuoso auto-híbrido, reducción del ruido submarino (anti-cavitación), mejora hidrodinámica (hydrofoils) y mapeo inteligente.",
        technologies: [
          "Hibridación", "Hidrodinámica", "Biomimética", "Cartografía GPS", "Optimización energética"],
      },
      {
        key: "tipe2024",
        title: "TIPE 2024-2025 — Detección de Nidos por IA (CPGE)",
        desc: "Detección automática de nidos de aves en campos agrícolas mediante IA + levantamiento mecánico automatizado para preservar la fauna. Sistema embebido, procesamiento de imágenes, GPS y aplicación móvil.",
        technologies: [
          "IA", "Visión por Computadora", "GPS", "Mecánica", "Procesamiento de Señal"],
      },
      {
        key: "croixrouge",
        title: "Programa de Inclusión Digital – Cruz Roja (2020-2021)",
        desc: "Programa de alfabetización digital para refugiados: aprendizaje del uso del ordenador (ratón, teclado), software básico (Word, Paint), navegación e introducción a Linux para fomentar la autonomía digital. Clases impartidas a adultos sin experiencia previa en informática.",
        technologies: ["Pedagogía", "Ofimática", "Linux", "Inclusión Digital", "Apoyo Social"],
      },
      {
        key: "or",
        title: "Recuperación de Oro en Componentes Informáticos (2020)",
        desc: "Proyecto de recuperación de metales preciosos (oro) en CPUs y componentes de ordenadores. Análisis de viabilidad económica y de los impactos técnicos y químicos: los ácidos y procesos usados eran más caros que el oro recuperado, ofreciendo una lección concreta sobre el valor de los materiales y la viabilidad de proyectos de reciclaje tecnológico.",
        technologies: ["Reciclaje Electrónico", "Química Analítica", "Análisis Económico", "Materiales Electrónicos", "Gestión de Proyectos"
],
      },
      {
        key: "arduino",
        title: "Concurso de Robótica Arduino (2018)",
        desc: "Creación de un juego de baloncesto interactivo con Arduino: contador de canastas, visualización del puntaje mediante LEDs y gestión del juego con código Arduino. Presentación ante jurado y público, piezas impresas en 3D. Clasificado 3° de 10 proyectos.",
        technologies: ["Arduino", "Impresión 3D", "Electrónica", "Programación", "Presentación Pública"
],
      },
    ],
    // Certifications
    "cert.additive.title": "Especialización en Fabricación Aditiva",
    "cert.additive.description":
      "Arizona State University (Coursera).\n- Estudio de las seis categorías de procesos 3D, desde el flujo de trabajo CAD hasta la pieza final.\n- Incluye el proceso de Material Extrusion.",
    "cert.additive.status": "Certificado",

    "cert.airbus.title": "Especialista en Supply Chain de Airbus",
    "cert.airbus.description":
      "Certificado profesional (Coursera).\n- Comprensión de los desafíos logísticos y de la cadena de valor del sector aeroespacial.\n- Aprendizaje de conceptos clave en planificación, gestión de inventarios y optimización de la cadena de suministro.",
    "cert.airbus.status": "En curso",

    // Experiences
    "experience.title": "Experiencia profesional",
    "experience.job1.title": "Reparador, Técnico y Atención al Cliente\nHuesca, España",
    "experience.job1.company": "Reparadores Huesca",
    "experience.job1.period": "Julio 2018 - Julio 2020",
    "experience.job1.desc1": "Reparación de dispositivos",
    "experience.job1.desc2": "Asesoramiento al cliente",
    "experience.job1.desc3": "Gestión administrativa",
    "education.title": "Formación", "projects.view": "Ver proyecto", "contact.title": "Contáctame", "contact.subtitle": "No dudes en contactarme para cualquier oportunidad o pregunta", "contact.name": "Nombre", "contact.email": "Correo electrónico", "contact.message": "Mensaje", "contact.send": "Enviar", "contact.location": "Ubicación", "contact.phone": "Teléfono",
  },
  } as const;
