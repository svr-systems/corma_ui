export const apiData = {
  expirationDate: "2026-01-15",
  lastUpdate: "2024-12-13T12:00:00Z",
  websiteName: "A Shop",
  domain: "ashop",
  domainExtension: ".com.mx",
  affiliatedEmails: [
    {
      email: "orders@ashop.com",
      lastUpdate: "2024-12-11T16:00:00Z",
      personName: "Ana Torres",
    },
    {
      email: "sales@ashop.com",
      lastUpdate: "2024-12-14T10:00:00Z",
      personName: "Luis Ramírez",
    },
  ],
  daysLeft: 31,
  whatsappChat: true,
  color: "#263681",
  visibility: {
    showCarousel: true,
    showAboutUs: true,
    showCompanyInfo: true,
    showServices: true,
    showGallery: true,
    showVideos: true,
    showDocuments: true,
    showProducts: true,
    showLocation: false,
    showClients: false,
    showContact: true,
    showPrivacyNotice: true,
  },
  navbar: {
    backgroudColor: {
      hexa: "#263681",
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
      { name: "Contacto", id: "contact" },
    ],
    socialLinks: {
      facebookUrl: "https://facebook.com/ashop",
      instagramUrl: "https://instagram.com/ashop",
      linkedinUrl: "https://linkedin.com/company/ashop",
      whatsappUrl: "https://wa.me/4611400001",
    },
  },

  home: {
    elements: 5,
    carousel: [
      {
        image: {
          ext: "image/jpeg",
          b64: "",
        },
        description: "Bienvenido a A Shop",
      },
    ],
    companyInfo: {
      aboutUs: {
        title: "Nosotros",
        description:
          "A Shop, tú socio confiable en el mundo de las sublimaciones, grabados en diversos materiales (metálicos, madera mdf, acrílicos), variedad de vasos, impresiones en DTF textiles, DTF UV, DTF Gold, lonas, impresiones en vinil, vinil adhesivo con corte. En A Shop, nos enorgullecemos de ofrecer soluciones creativas y de alta calidad para todas las necesidades de personalización y trabajos de maquila en impresión.",
      },
      mission: {
        title: "Misión",
        description:
          "Proveer soluciones creativas y personalizadas en impresión y diseño, superando las expectativas de nuestros clientes mediante la innovación, calidad, y servicio excepcional en el menor tiempo posible.",
      },
      vision: {
        title: "Visión",
        description:
          "Ser reconocidos como líderes en el mercado de impresiones, suministros y diseños textiles personalizados, siendo referentes en creatividad, calidad y compromiso con la satisfacción del cliente.",
      },
      values: {
        title: "Valores",
        description:
          "<strong>Creatividad:</strong> Fomentamos la innovación y la originalidad en cada diseño que creamos. \n\n<strong>Calidad:</strong> Nos comprometemos a ofrecer productos de alta calidad que cumplen con los más altos estándares. \n\n<strong>Compromiso:</strong> Nos dedicamos a brindar un servicio excepcional y a cumplir con las expectativas de nuestros clientes. \n\n<strong>Personalización:</strong> Valoramos la individualidad y nos esforzamos por satisfacer las necesidades únicas de cada cliente. \n\n<strong>Responsabilidad:</strong> Operamos de manera ética y sostenible, cuidando el medio ambiente y contribuyendo positivamente a la comunidad.",
      },
    },
  },
  products: {
    elements: 1,
    header: {
      title: "Productos",
    },
    categories: [
      {
        id: "categoria1",
        title: "Categoría 1",
        products: [
          {
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
    elements: 24,
    header: {
      title: "Servicios",
    },
    categories: [
      {
        id: 1,
        title: "Impresiones",
        services: [
          {
            title: "Lona",
            detaileddescriptionDlg: "Información/Detalle",
            descriptionDlg:
              "Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus. Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus.",
            catalogPdfUrl: "kgkgk",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            title: "DTF Textil",
            detaileddescriptionDlg: "Información/Detalle",
            descriptionDlg:
              "Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus. Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus.",
            catalogPdfUrl: "pdfTest",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            title: "DTF UV",
            detaileddescriptionDlg: "Información/Detalle",
            descriptionDlg:
              "Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus. Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus.",
            catalogPdfUrl: "",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            title: "Sublimación",
            detaileddescriptionDlg: "Información/Detalle",
            descriptionDlg:
              "Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus. Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus.",
            catalogPdfUrl: "",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            title: "Vinil gran formato",
            detaileddescriptionDlg: "Información/Detalle",
            descriptionDlg:
              "Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus. Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus.",
            catalogPdfUrl: "",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
        ],
      },
      {
        id: 2,
        title: "Sublimación",
        services: [
          {
            title: "Tazas",
            detaileddescriptionDlg: "Información/Detalle",
            descriptionDlg:
              "Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus. Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus.",
            catalogPdfUrl: "",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            title: "Playeras",
            detaileddescriptionDlg: "Información/Detalle",
            descriptionDlg:
              "Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus. Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus.",
            catalogPdfUrl: "",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            title: "Termos",
            detaileddescriptionDlg: "Información/Detalle",
            descriptionDlg:
              "Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus. Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus.",
            catalogPdfUrl: "",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            title: "Rompecabezas",
            detaileddescriptionDlg: "Información/Detalle",
            descriptionDlg:
              "Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus. Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus.",
            catalogPdfUrl: "",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
        ],
      },
      {
        id: 3,
        title: "Artículos para Personalizar",
        services: [
          {
            title: "Vasos",
            detaileddescriptionDlg: "Información/Detalle",
            descriptionDlg:
              "Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus. Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus.",
            catalogPdfUrl: "",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            title: "Termos",
            detaileddescriptionDlg: "Información/Detalle",
            descriptionDlg:
              "Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus. Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus.",
            catalogPdfUrl: "",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            title: "Cilindros",
            detaileddescriptionDlg: "Información/Detalle",
            descriptionDlg:
              "Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus. Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus.",
            catalogPdfUrl: "",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            title: "Cobijas",
            detaileddescriptionDlg: "Información/Detalle",
            descriptionDlg:
              "Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus. Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus.",
            catalogPdfUrl: "",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            title: "Depiladores y Plecas",
            detaileddescriptionDlg: "Información/Detalle",
            descriptionDlg:
              "Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus. Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus.",
            catalogPdfUrl: "",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            title: "Gorras",
            detaileddescriptionDlg: "Información/Detalle",
            descriptionDlg:
              "Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus. Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus.",
            catalogPdfUrl: "",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            title: "Vinil Textil",
            detaileddescriptionDlg: "Información/Detalle",
            descriptionDlg:
              "Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus. Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus.",
            catalogPdfUrl: "",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            title: "Vinil Adhesivo",
            detaileddescriptionDlg: "Información/Detalle",
            descriptionDlg:
              "Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus. Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus.",
            catalogPdfUrl: "",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            title: "Playeras",
            detaileddescriptionDlg: "Información/Detalle",
            descriptionDlg:
              "Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus. Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus.",
            catalogPdfUrl: "",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
        ],
      },
      {
        id: 4,
        title: "Elementos a Gran Formato",
        services: [
          {
            title: "Banderas",
            detaileddescriptionDlg: "Información/Detalle",
            descriptionDlg:
              "Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus. Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus.",
            catalogPdfUrl: "",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            title: "Muro Araña",
            detaileddescriptionDlg: "Información/Detalle",
            descriptionDlg:
              "Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus. Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus.",
            catalogPdfUrl: "",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            title: "Display Lona",
            detaileddescriptionDlg: "Información/Detalle",
            descriptionDlg:
              "Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus. Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus.",
            catalogPdfUrl: "",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            title: "Mamparas y Aros",
            detaileddescriptionDlg: "Información/Detalle",
            descriptionDlg:
              "Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus. Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus.",
            catalogPdfUrl: "",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            title: "Figuras de Trovicel",
            detaileddescriptionDlg: "Información/Detalle",
            descriptionDlg:
              "Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus. Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus.",
            catalogPdfUrl: "",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            title: "Coroplast tamaño real",
            detaileddescriptionDlg: "Información/Detalle",
            descriptionDlg:
              "Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus. Lorem ipsum dolor sit amet consectetur. Non felis nunc diam vitae id. Dictum cras lobortis integer sem. Auctor sit gravida enim felis. Hendrerit risus nibh id habitasse elit risus.",
            catalogPdfUrl: "",
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
    elements: 6,
    header: {
      title: "Galería",
    },
    categories: [
      {
        id: "impresiones",
        title: "Impresiones",
        images: [
          {
            name: "Lona impresa",
            description: "Ejemplo de impresión en lona.",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            name: "DTF Textil",
            description: "Impresión DTF en tela.",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
        ],
      },
      {
        id: "sublimacion",
        title: "Sublimación",
        images: [
          {
            name: "Taza sublimada",
            description: "Taza con diseño sublimado.",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
          {
            name: "Playera sublimada",
            description: "Playera con impresión sublimada.",
            imageUrl: {
              ext: "image/jpeg",
              b64: "",
            },
          },
        ],
      },
      {
        id: "personalizacion",
        title: "Personalización",
        images: [
          {
            name: "Vasos personalizados",
            description: "Vasos con diseños personalizados.",
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
    elements: 2,
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
    ],
  },
  documents: {
    elements: 2,
    header: {
      title: "Documentos",
    },
    documents: [
      {
        id: "1",
        title: "Catálogo de Productos",
        statement_b64: {
          cnt: "",
          ext: "pdf",
          statement_path: "catalogo_productos.pdf",
        },
      },
      {
        id: "2",
        title: "Guía de Instalación",
        statement_b64: {
          cnt: "",
          ext: "pdf",
          statement_path: "guia_instalacion.pdf",
        },
      },
    ],
  },
  privacyNotice: {
    descriptionDlg:
      "Ashop valora y respeta la privacidad de nuestros usuarios.Este aviso de privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que nos proporcionas a través de nuestro sitio web.\n\nRecopilamos datos como tu nombre, correo electrónico y teléfono cuando nos contactas a través de los formularios o te suscribes a nuestro boletín.\n\nUsamos tu información solo para responder a tus consultas, ofrecerte nuestros servicios y, si lo autorizas, para enviarte información relevante sobre nuestras consultorías.\n\nTus datos personales no serán transferidos a terceros sin tu consentimiento, salvo en los casos que la ley lo permita o requiera.\n\nTienes el derecho a acceder, corregir o eliminar tu información en cualquier momento. Solo tienes que escribirnos a: r.cortes@cormaconsulting.com\n\nEste aviso de privacidad puede sufrir modificaciones o actualizaciones. Te notificaremos de cualquier cambio a través de nuestra página web.Te invitamos a revisar este aviso periódicamente.",
  },
  contactType: "form",
  contact: {
    elements: 1,
    phone: "4611400001",
    whatsapp: "4611400001",
    email: "pedidos@ashopcelaya.com",
    whatsappUrl: "https://wa.me/4611400001",
    emailUrl: "mailto:pedidos@ashopcelaya.com",
  },
};
