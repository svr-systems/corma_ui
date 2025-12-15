export const apiData = {
  expirationDate: "2025-12-31",
  lastUpdate: "2024-12-15T10:00:00Z",
  websiteName: "CORMA Consulting",
  domain: "corma",
  domainExtension: ".com.mx",
  affiliatedEmails: [
    {
      email: "admin@corma.com",
      lastUpdate: "2024-12-10T09:00:00Z",
      personName: "Juan Pérez",
    },
    {
      email: "support@corma.com",
      lastUpdate: "2024-12-12T14:30:00Z",
      personName: "María García",
    },
  ],
  daysLeft: 16,
  whatsappChat: true,
  color: "#667eea",
  visibility: {
    showCarousel: true,
    showAboutUs: true,
    showCompanyInfo: true,
    showServices: true,
    showGallery: true,
    showVideos: true,
    showDocuments: true,
    showProducts: true,
    showLocation: true,
    showClients: true,
    showContact: true,
    showPrivacyNotice: true,
  },
  navbar: {
    backgroudColor: {
      hexa: "#757575",
    },
    logoUrl: {
      ext: "image/jpeg",
      b64: "",
    },
    navLinks: [
      { name: "Inicio", id: "home" },
      { name: "Nosotros", id: "aboutus" },
      { name: "Productos", id: "products" },
      { name: "Servicios", id: "services" },
      { name: "Galería", id: "galery" },
      { name: "Videos", id: "videos" },
      { name: "Documentos", id: "documents" },
      { name: "Clientes", id: "clients" },
      { name: "Ubicación", id: "location" },
      { name: "Contacto", id: "contact" },
    ],
    socialLinks: {
      facebookUrl: "https://facebook.com/corma.consulting",
      instagramUrl: "https://instagram.com/corma.consulting",
      linkedinUrl: "https://linkedin.com/company/corma-consulting",
      whatsappUrl: "https://wa.me/5215512345678",
    },
  },

  home: {
    elements: 7,
    carousel: [
      {
        id: "1",
        image: {
          ext: "image/jpeg",
          b64: "",
        },
        description: "Bienvenido a CORMA Consulting",
      },
      {
        id: "2",
        image: {
          ext: "image/jpeg",
          b64: "",
        },
        description: "Test 1",
      },
      {
        id: "3",
        image: {
          ext: "image/jpeg",
          b64: "",
        },
        description: "Test 2",
      },
    ],
    companyInfo: {
      mission: {
        title: "Misión",
        description:
          "Guiar a las personas y empresas a desarrollar su máximo potencial a través de una consultoría, capacitación y entrenamiento honestos y efectivos, construyendo relaciones de confianza que impulsen su crecimiento.",
      },
      vision: {
        title: "Visión",
        description:
          "Ser la mejor empresa, reconocida por nuestra calidad humana y profesional, convirtiendo a cada cliente en un socio estratégico de largo plazo y creando un impacto positivo y duradero en la comunidad empresarial.",
      },
      values: {
        title: "Valores",
        description:
          "<strong>Confianza:</strong> Creemos que el éxito se basa en la confianza mutua. Mantenemos una comunicación transparente y actuamos con integridad en cada interacción. \n\n<strong>Compromiso:</strong> Nos involucramos de manera personal en el crecimiento de nuestros clientes, entendiendo sus necesidades como si fueran propias. \n\n<strong>Unidad:</strong> Operamos como un equipo, y extendemos ese sentido de familia a nuestros clientes. Nos apoyamos mutuamente para lograr los mejores resultados. \n\n<strong>Bienestar Integral:</strong> Nos comprometemos a fomentar un ambiente de trabajo saludable y a ofrecer herramientas que apoyen la salud mental y emocional de las personas y los equipos, entendiendo que una mente sana es la base del éxito sostenible. \n\n<strong>Adaptabilidad:</strong> Fomentamos el desarrollo de habilidades emocionales y psicológicas que permiten a las personas y a las organizaciones para adaptarse al cambio de manera saludable.",
      },
      history: {
        title: "Historia",
        description:
          "<strong>Un legado que creamos juntos</strong> \n\nEn el año 2022, mi esposa e hijos nos sentamos a la mesa con una idea: ¿y si llevábamos nuestra pasión por ayudar a otros a crecer al siguiente nivel? No éramos solo socios; éramos familia. Y teníamos la convicción de que podíamos construir algo auténtico, basado en la confianza y el apoyo mutuo. Así, entre café y notas dispersas, nació CORMA Consulting. \n\nEl proyecto no fue solo una estrategia de negocios, sino un compromiso personal. Cada noche, después de nuestras jornadas de trabajo, nos reuníamos para pulir la idea, para entender cómo podíamos ofrecer la mejor consultoría, el entrenamiento más efectivo y la capacitación más significativa. Queríamos que cada cliente se sintiera como parte de nuestra propia historia. \n\nHoy, tres años después, seguimos operando con la misma filosofía que nos unió en ese entonces. Creemos firmemente que el verdadero éxito se construye con personas, con el desarrollo de su potencial y con una guía honesta y directa. Cuando te unes a nosotros, no estás contratando un servicio; te conviertes en un socio en nuestro camino.",
      },
    },
  },
  products: {
    elements: 2,
    header: {
      title: "Productos",
    },
    categories: [
      {
        id: "categoria1",
        title: "Categoría 1",
        products: [
          {
            id: "1",
            title: "Producto 1",
            description: "Descripción del producto 1.",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            id: "2",
            title: "Producto 2",
            description: "Descripción del producto 2.",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
        ],
      },
    ],
  },
  services: {
    elements: 12,
    header: {
      title: "Servicios",
    },
    categories: [
      {
        id: "consultoria",
        title: "Consultoría",
        services: [
          {
            id: "1",
            title: "Gerenciamiento de proyectos",
            description:
              "Planificar, ejecutar y controlar el trabajo de un equipo para lograr objetivos específicos en un tiempo determinado.",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            id: "2",
            title: "Asesoramiento en proyectos",
            description:
              "Orientación experta que se brinda a una persona, equipo u organización para que puedan gestionar sus propios proyectos de manera exitosa.",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            id: "3",
            title: "Desarrollo organizacional",
            description:
              "Mejorar la eficacia y la salud de una organización, ayudándola a adaptarse y prosperar en un entorno en constante cambio.",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            id: "4",
            title: "Procesos de reclutamiento y selección",
            description:
              "Mejorar los procesos de identificación, atracción y contratación del talento humano que necesita la organización para alcanzar sus objetivos.",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            id: "5",
            title: "Estructura organizacional",
            description:
              "Definir como se organizan, dividen y coordinan las tareas y responsabilidades dentro de una empresa para lograr sus objetivos, así como roles y responsabilidades.",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            id: "6",
            title: "Estandarización e implementación de procesos",
            description:
              "Políticas, Reglamentos, Comunicación Interna, Inducción y Onboarding, Indicadores de Desempeño (KPIs).",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
        ],
      },
      {
        id: "capacitacion",
        title: "Capacitación",
        services: [
          {
            id: "7",
            title: "Administración de proyectos",
            description:
              "Planeación, seguimiento y control de proyectos, riesgos, alcance, tiempo, costo, calidad, recursos, comunicaciones, adquisiciones e integración. Basados en las mejores practicas del PMBOK del Project Management Institute (PMI)",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            id: "8",
            title: "Microsoft project",
            description:
              "Herramienta para la planeación, seguimiento y control de proyectos, nivel básico, intermedio y avanzado.",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            id: "9",
            title: "Metodología objetivos SMART",
            description:
              "Establecer los criterios para asegurar que los objetivos que se establecen sean claros, alcanzables y útiles para el éxito.",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            id: "10",
            title: "Planeación estratégica",
            description:
              "Mapa que permite a una empresa navegar por la incertidumbre del mercado y avanzar con propósito y dirección, asegurando que cada paso que se da contribuye al éxito a largo plazo.",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
        ],
      },
      {
        id: "entrenamiento",
        title: "Entrenamiento",
        services: [
          {
            id: "11",
            title: "Administración de proyectos",
            description:
              "Implementación de los procesos de planeación, seguimiento y control de proyectos, riesgos, alcance, tiempo, costo, calidad, recursos, comunicaciones, adquisiciones e integración. Basados en las mejores prácticas del PMBOK del Project Management Institute (PMI) a través del estudio de casos prácticos en las organizaciones.",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            id: "12",
            title: "Microsoft project",
            description:
              "Implementación en sitio sobre los procesos de planeación, seguimiento y control de proyectos, nivel básico, intermedio y avanzado a través del estudio de casos prácticos en las organizaciones.",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
        ],
      },
    ],
  },
  contactType: "form",
  contact: {
    elements: 1,
    phone: "461-3139-026",
    whatsapp: "461-3139-026",
    email: "r.cortes@cormaconsulting.com",
    whatsappUrl: "https://wa.me/524613139026",
    emailUrl: "mailto:r.cortes@cormaconsulting.com",
  },
  location: {
    elements: 1,
    address: {
      displayAddress:
        "Circuito Misión de San Pablo 169, Fracc. La Misión, C.P. 38015, Celaya, Gto.",
    },
    map: {
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.005565704185!2d-100.83898292387242!3d20.54695318098445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cbadb01e0fa65%3A0x7594ef63d918a5d8!2sMisi%C3%B3n%20de%20San%20Pablo%20169%2C%20La%20Mision%2C%2038015%20Celaya%2C%20Gto.!5e0!3m2!1ses!2smx!4v1762552233832!5m2!1ses!2smx",
      directionsUrl:
        "https://www.google.com/maps/place/Misi%C3%B3n+de+San+Pablo+169,+La+Mision,+38015+Celaya,+Gto./@20.5469532,-100.836408,17z/data=!3m1!4b1!4m6!3m5!1s0x842cbadb01e0fa65:0x7594ef63d918a5d8!8m2!3d20.5469532!4d-100.836408!16s%2Fg%2F11fnrrsv14?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D",
    },
  },

  privacyNotice: {
    description:
      "CORMA Consulting valora y respeta la privacidad de nuestros usuarios.Este aviso de privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que nos proporcionas a través de nuestro sitio web.\n\nRecopilamos datos como tu nombre, correo electrónico y teléfono cuando nos contactas a través de los formularios o te suscribes a nuestro boletín.\n\nUsamos tu información solo para responder a tus consultas, ofrecerte nuestros servicios y, si lo autorizas, para enviarte información relevante sobre nuestras consultorías.\n\nTus datos personales no serán transferidos a terceros sin tu consentimiento, salvo en los casos que la ley lo permita o requiera.\n\nTienes el derecho a acceder, corregir o eliminar tu información en cualquier momento. Solo tienes que escribirnos a: r.cortes@cormaconsulting.com\n\nEste aviso de privacidad puede sufrir modificaciones o actualizaciones. Te notificaremos de cualquier cambio a través de nuestra página web.Te invitamos a revisar este aviso periódicamente.",
  },

  gallery: {
    elements: 6,
    header: {
      title: "Galería",
    },
    categories: [
      {
        id: "eventos",
        title: "Eventos",
        images: [
          {
            id: "1",
            name: "Evento 1",
            description: "Descripción del evento 1.",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            id: "2",
            name: "Evento 2",
            description: "Descripción del evento 2.",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
        ],
      },
      {
        id: "instalaciones",
        title: "Instalaciones",
        images: [
          {
            id: "3",
            name: "Oficina 1",
            description: "Vista de la oficina principal.",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            id: "4",
            name: "Oficina 2",
            description: "Sala de reuniones.",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
        ],
      },
      {
        id: "equipo",
        title: "Equipo",
        images: [
          {
            id: "5",
            name: "Equipo de trabajo",
            description: "Nuestro equipo colaborando.",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
        ],
      },
    ],
  },
  videos: {
    elements: 3,
    header: {
      title: "Videos",
    },
    videos: [
      {
        id: "video1",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        addedAt: "2024-12-15T10:00:00Z",
        updatedAt: "2024-12-15T10:00:00Z",
      },
      {
        id: "video2",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        addedAt: "2024-12-14T15:30:00Z",
        updatedAt: "2024-12-14T15:30:00Z",
      },
      {
        id: "video3",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        addedAt: "2024-12-13T12:00:00Z",
        updatedAt: "2024-12-13T12:00:00Z",
      },
    ],
  },
  documents: {
    elements: 3,
    header: {
      title: "Documentos",
    },
    documents: [
      {
        id: "1",
        title: "Catálogo de Servicios",
        statement_b64: {
          cnt: "",
          ext: "pdf",
          statement_path: "catalogo_servicios.pdf",
        },
      },
      {
        id: "2",
        title: "Manual de Usuario",
        statement_b64: {
          cnt: "",
          ext: "pdf",
          statement_path: "manual_usuario.pdf",
        },
      },
      {
        id: "3",
        title: "Política de Privacidad",
        statement_b64: {
          cnt: "",
          ext: "pdf",
          statement_path: "politica_privacidad.pdf",
        },
      },
    ],
  },
  clients: {
    elements: 27,
    logos: [
      { id: "1", name: "uvm", logoUrl: { ext: "image/jpeg", b64: "" }, addedAt: "2024-01-15T10:00:00Z", updatedAt: "2024-01-15T10:00:00Z" },
      { id: "2", name: "upg", logoUrl: { ext: "image/jpeg", b64: "" }, addedAt: "2024-02-10T14:30:00Z", updatedAt: "2024-02-10T14:30:00Z" },
      { id: "3", name: "itesi", logoUrl: { ext: "image/jpeg", b64: "" }, addedAt: "2024-03-05T09:15:00Z", updatedAt: "2024-03-05T09:15:00Z" },
      { id: "4", name: "cmic", logoUrl: { ext: "image/jpeg", b64: "" }, addedAt: "2024-04-20T16:45:00Z", updatedAt: "2024-04-20T16:45:00Z" },
      { id: "5", name: "caeq", logoUrl: { ext: "image/jpeg", b64: "" }, addedAt: "2024-05-12T11:20:00Z", updatedAt: "2024-05-12T11:20:00Z" },
      { id: "6", name: "cc", logoUrl: { ext: "image/jpeg", b64: "" }, addedAt: "2024-06-08T13:10:00Z", updatedAt: "2024-06-08T13:10:00Z" },
      { id: "7", name: "ci", logoUrl: { ext: "image/jpeg", b64: "" }, addedAt: "2024-07-22T15:55:00Z", updatedAt: "2024-07-22T15:55:00Z" },
      { id: "8", name: "cicq", logoUrl: { ext: "image/jpeg", b64: "" }, addedAt: "2024-08-14T08:40:00Z", updatedAt: "2024-08-14T08:40:00Z" },
      { id: "9", name: "ceicig", logoUrl: { ext: "image/jpeg", b64: "" }, addedAt: "2024-09-03T12:25:00Z", updatedAt: "2024-09-03T12:25:00Z" },
      { id: "10", name: "piasa", logoUrl: { ext: "image/jpeg", b64: "" }, addedAt: "2024-10-18T17:30:00Z", updatedAt: "2024-10-18T17:30:00Z" },
      { id: "11", name: "advance", logoUrl: { ext: "image/jpeg", b64: "" }, addedAt: "2024-11-07T10:50:00Z", updatedAt: "2024-11-07T10:50:00Z" },
      { id: "12", name: "mabe", logoUrl: { ext: "image/jpeg", b64: "" }, addedAt: "2024-12-01T14:15:00Z", updatedAt: "2024-12-01T14:15:00Z" },
      { id: "13", name: "coneprosa", logoUrl: { ext: "image/jpeg", b64: "" }, addedAt: "2024-01-25T16:05:00Z", updatedAt: "2024-01-25T16:05:00Z" },
      { id: "14", name: "purina", logoUrl: { ext: "image/jpeg", b64: "" }, addedAt: "2024-02-19T09:35:00Z", updatedAt: "2024-02-19T09:35:00Z" },
      { id: "15", name: "vafer", logoUrl: { ext: "image/jpeg", b64: "" }, addedAt: "2024-03-14T11:45:00Z", updatedAt: "2024-03-14T11:45:00Z" },
      { id: "16", name: "getrag", logoUrl: { ext: "image/jpeg", b64: "" }, addedAt: "2024-04-09T13:55:00Z", updatedAt: "2024-04-09T13:55:00Z" },
      { id: "17", name: "cidesi", logoUrl: { ext: "image/jpeg", b64: "" }, addedAt: "2024-05-28T15:20:00Z", updatedAt: "2024-05-28T15:20:00Z" },
      { id: "18", name: "indu", logoUrl: { ext: "image/jpeg", b64: "" }, addedAt: "2024-06-16T08:10:00Z", updatedAt: "2024-06-16T08:10:00Z" },
      { id: "19", name: "ubsa", logoUrl: { ext: "image/jpeg", b64: "" }, addedAt: "2024-07-11T12:40:00Z", updatedAt: "2024-07-11T12:40:00Z" },
      { id: "20", name: "gto", logoUrl: { ext: "image/jpeg", b64: "" }, addedAt: "2024-08-05T17:25:00Z", updatedAt: "2024-08-05T17:25:00Z" },
      { id: "21", name: "moresa", logoUrl: { ext: "image/jpeg", b64: "" }, addedAt: "2024-09-20T10:30:00Z", updatedAt: "2024-09-20T10:30:00Z" },
      { id: "22", name: "nuoh", logoUrl: { ext: "image/jpeg", b64: "" }, addedAt: "2024-10-14T14:50:00Z", updatedAt: "2024-10-14T14:50:00Z" },
      { id: "23", name: "agrojize", logoUrl: { ext: "image/jpeg", b64: "" }, addedAt: "2024-11-08T16:15:00Z", updatedAt: "2024-11-08T16:15:00Z" },
      { id: "24", name: "robertson industries", logoUrl: { ext: "" }, addedAt: "2024-12-02T09:05:00Z", updatedAt: "2024-12-02T09:05:00Z" },
      { id: "25", name: "itt", logoUrl: { ext: "image/jpeg", b64: "" }, addedAt: "2024-01-30T11:35:00Z", updatedAt: "2024-01-30T11:35:00Z" },
      { id: "26", name: "joyson", logoUrl: { ext: "image/jpeg", b64: "" }, addedAt: "2024-02-24T13:45:00Z", updatedAt: "2024-02-24T13:45:00Z" },
      { id: "27", name: "quality house", logoUrl: { ext: "image/jpeg", b64: "" }, addedAt: "2024-03-19T15:55:00Z", updatedAt: "2024-03-19T15:55:00Z" },
    ],
  },
};
