export const apiData = {
  expirationDate: "2025-11-30",
  lastUpdate: "2024-12-14T08:00:00Z",
  websiteName: "Ascension",
  domain: "ascension",
  domainExtension: ".com.mx",
  affiliatedEmails: [
    {
      email: "info@ascension.com",
      lastUpdate: "2024-12-13T11:00:00Z",
      personName: "Carlos López",
    },
  ],
  daysLeft: 15,
  whatsappChat: false,
  color: "#757575",
  visibility: {
    showCarousel: true,
    showAboutUs: true,
    showProducts: true,
    showServices: true,
    showGallery: false,
    showVideos: false,
    showClients: false,
    showDocuments: false,
    showLocation: true,
    showPrivacyNotice: true,
    showContact: true,
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
      { name: "Ubicación", id: "location" },
      { name: "Contacto", id: "contact" },
    ],
    socialLinks: {
      facebookUrl: "https://facebook.com/ascension",
      instagramUrl: "https://instagram.com/ascension",
      linkedinUrl: "https://linkedin.com/company/ascension",
      whatsappUrl: "https://wa.me/4610000999",
    },
  },

  home: {
    elements: 2,
    carousel: [
      {
        id: 1,
        image: {
          ext: "image/jpeg",
          b64: "",
        },
        description: "Bienvenido a Ascension",
      },
    ],
    companyInfo: {
      aboutUs: {
        title: "Nosotros",
        description:
          "En nuestra plataforma de seguros encontrarás una variedad de coberturas diseñadas para brindarte protección en los momentos que más importan. Nuestro equipo te asesora para que elijas la opción más adecuada según tu situación, brindándote información clara y acompañamiento en todo momento. La seguridad, la tranquilidad y tu bienestar son nuestra prioridad.",
      },
    },
  },
  products: {
    header: {
      title: "Productos",
    },
    categories: [
      {
        id: 1,
        title: "Categoría 1",
        products: [
          {
            id: 1,
            title: "Producto 1",
            description: "Descripción del producto 1.",
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
    elements: 2,
    header: {
      title: "Servicios",
    },
    categories: [
      {
        id: 1,
        title: "Seguros",
        services: [
          {
            id: 1,
            title: "Seguros de Vida",
            description:
              "Nuestra consulta médica ofrece una atención personalizada para evaluar tu estado de salud.",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            id: 2,
            title: "Seguro de Auto",
            description:
              "Nuestra consulta médica ofrece una atención personalizada para evaluar tu estado de salud.",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
        ],
      },
    ],
  },
  gallery: {
    elements: 0,
    header: {},
    categories: [],
  },
  videos: {
    elements: 0,
    header: {},
    videos: [],
  },
  documents: {
    elements: 0,
    header: {},
    documents: [],
  },
  location: {
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
      "Ascension valora y respeta la privacidad de nuestros usuarios. Este aviso de privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que nos proporcionas a través de nuestro sitio web.\n\nRecopilamos datos como tu nombre, correo electrónico y teléfono cuando nos contactas a través de los formularios o te suscribes a nuestro boletín.\n\nUsamos tu información solo para responder a tus consultas, ofrecerte nuestros servicios y, si lo autorizas, para enviarte información relevante sobre nuestras consultorías.\n\nTus datos personales no serán transferidos a terceros sin tu consentimiento, salvo en los casos que la ley lo permita o requiera.\n\nTienes el derecho a acceder, corregir o eliminar tu información en cualquier momento. Solo tienes que escribirnos a: r.cortes@cormaconsulting.com\n\nEste aviso de privacidad puede sufrir modificaciones o actualizaciones. Te notificaremos de cualquier cambio a través de nuestra página web.Te invitamos a revisar este aviso periódicamente.",
  },
  contact: {
    elements: 1,
    phone: "461-0000-999",
    whatsapp: "461-0000-999",
    email: "r.cortes@ascencion.com",
    whatsappUrl: "https://wa.me/4610000999",
    emailUrl: "mailto:r.cortes@ascencion.com",
  },
};
