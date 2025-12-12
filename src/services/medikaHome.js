export const apiData = {
  visibility: {
    showCarousel: true,
    showAboutUs: true,
    showCompanyInfo: true,
    showServices: true,
    showLocation: true,
    showClients: false,
    showContact: true,
    showPrivacyNotice: true,
  },
  navbar: {
    backgroudColor: {
      hexa: "#757575",
    },
    logoUrl: {
      ext: "image/jpeg",
      b64: ""
    },
    navLinks: [
      { name: "Inicio", id: "home" },
      { name: "Nosotros", id: "aboutus" },
      { name: "Servicios", id: "services" },
      { name: "Ubicación", id: "location" },
      { name: "Contacto", id: "contact" }
    ],
    socialLinks: {
      facebookUrl: "https://facebook.com/medikahome",
      instagramUrl: "https://instagram.com/medikahome",
      linkedinUrl: "https://linkedin.com/company/medikahome",
      whatsappUrl: "https://wa.me/4610000999"
    }
  },

  home: {
    carousel: [
      {
        image: {
          ext: "image/jpeg",
          b64: "",
        },
        description: "Bienvenido a Medika Home"
      }
    ],
    companyInfo: {
      aboutUs: {
        title: "Nosotros",
        description: "Nuestro consultorio médico esta diseñado para brindar atención profesional, accesible y cercana a cada paciente. Ofrecemos consultas médicas orientadas a cuidar tu bienestar con un enfoque humano y responsable, asegurando una experiencia cómoda desde el primer contacto."
      }
    }
  },

  services: {
    header: {
      title: "Servicios"
    },
    categories: [
      {
        id: "consultoria",
        title: "Consultoría",
        services: [
          {
            title: "Consulta",
            description: "Nuestra consulta médica ofrece una atención personalizada para evaluar tu estado de salud.",
            imageUrl: {
              ext: "image/jpeg",
              b64: ""
            },
          }
        ]
      }
    ]
  },

  contactType: "card",
  contact: {
    phone: "461-0000-999",
    whatsapp: "461-0000-999",
    email: "r.cortes@medikahome.com",
    whatsappUrl: "https://wa.me/4610000999",
    emailUrl: "mailto:r.cortes@medikahome.com"
  },
  location: {
    address: {
      displayAddress: "Circuito Misión de San Pablo 169, Fracc. La Misión, C.P. 38015, Celaya, Gto."
    },
    map: {
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.005565704185!2d-100.83898292387242!3d20.54695318098445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cbadb01e0fa65%3A0x7594ef63d918a5d8!2sMisi%C3%B3n%20de%20San%20Pablo%20169%2C%20La%20Mision%2C%2038015%20Celaya%2C%20Gto.!5e0!3m2!1ses!2smx!4v1762552233832!5m2!1ses!2smx",
      directionsUrl: "https://www.google.com/maps/place/Misi%C3%B3n+de+San+Pablo+169,+La+Mision,+38015+Celaya,+Gto./@20.5469532,-100.836408,17z/data=!3m1!4b1!4m6!3m5!1s0x842cbadb01e0fa65:0x7594ef63d918a5d8!8m2!3d20.5469532!4d-100.836408!16s%2Fg%2F11fnrrsv14?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D"
    }
  },

  privacyNotice: {
    description: "Medika Home Bajio valora y respeta la privacidad de nuestros usuarios. Este aviso de privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que nos proporcionas a través de nuestro sitio web.\n\nRecopilamos datos como tu nombre, correo electrónico y teléfono cuando nos contactas a través de los formularios o te suscribes a nuestro boletín.\n\nUsamos tu información solo para responder a tus consultas, ofrecerte nuestros servicios y, si lo autorizas, para enviarte información relevante sobre nuestras consultorías.\n\nTus datos personales no serán transferidos a terceros sin tu consentimiento, salvo en los casos que la ley lo permita o requiera.\n\nTienes el derecho a acceder, corregir o eliminar tu información en cualquier momento. Solo tienes que escribirnos a: r.cortes@cormaconsulting.com\n\nEste aviso de privacidad puede sufrir modificaciones o actualizaciones. Te notificaremos de cualquier cambio a través de nuestra página web.Te invitamos a revisar este aviso periódicamente."
  },
};

