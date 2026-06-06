import { createContext, useState } from "react";

export const LanguageContext = createContext();

const loremEN =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae urna sed elit pretium fermentum non vitae sapien.";

const loremES =
  "Texto de ejemplo en español para representar contenido temporal del producto, su origen y la experiencia de compra.";

const copy = {
  EN: {
    common: {
      lorem: loremEN,
      lux: "Lux Café Co",
      size250: "250g",
      close: "Close",
    },

    nav: {
      home: "Home",
      collection: "Collection",
      origin: "Origin",
      wholesale: "Wholesale",
      contact: "Contact",
      explore: "Explore Coffee",
      menu: "Menu",
    },

    footer: {
      description: "Colombian coffee, refined for shared moments.",
    },

    auth: {
      eyebrow: "Lux Café Co",
      login: "Login",
      signUp: "Sign Up",
      fullName: "Full name",
      email: "Email address",
      password: "Password",
    },

    language: {
      eyebrow: "Language",
      title: "Select your language",
      body: "Choose how you would like to explore the Lux Café Co experience.",
      english: "English",
      spanish: "Español",
    },

    cart: {
      eyebrow: "Your Cart",
      title: "Selected Collection",
      empty: "Your cart is currently empty.",
    },
    home: {
      heroEyebrow: "Lux Café Co",
      heroTitle: "Colombian coffee, crafted for modern luxury.",
      heroBody:
        "A premium coffee experience inspired by Colombian origin, elegant rituals, and everyday moments worth slowing down for.",
      explore: "Explore 250g Collection",
      discover: "Discover Our Origin",

      productEyebrow: "250g Collection",
      productTitle: "Four expressions of craft.",
      productBody:
        "Each 250g format is designed with a distinct personality, from everyday smoothness to bold aroma-led profiles.",

      originEyebrow: "Colombian Origin Story",
      originTitleStart: "From",
      originTitleCountry: "Colombia",
      originTitleEnd: "with aroma.",
      originBody:
        "Lux Café Co celebrates Colombian coffee culture through careful sourcing, warm visual identity, and a refined modern presentation.",
      originPoints: [
        {
          title: "Harvest",
          body: "Selected beans begin with attention to ripeness, climate, and quality.",
        },
        {
          title: "Roast",
          body: "Aroma, depth, and balance guide every roast profile.",
        },
        {
          title: "Ritual",
          body: "Created for quiet mornings, shared tables, and premium daily moments.",
        },
      ],
      originFilm: "Origin Film",
      originFilmText: "Colombian coffee culture, captured through motion.",

      wholesaleEyebrow: "Wholesale Section",
      wholesaleTitleStart: "Premium",
      wholesaleTitleCountry: "Colombian",
      wholesaleTitleEnd: "coffee for partners.",
      wholesaleFormat: "Wholesale Format",
      wholesaleSupply: "Premium Colombian coffee supply",
      wholesaleBody:
        "Future 2.5kg wholesale formats are prepared for cafés, hospitality partners, and businesses looking for a refined Colombian coffee option.",
      wholesaleButton: "Explore Wholesale",

      contactEyebrow: "Contact",
      contactTitle: "Ready to bring our products to your next moment?",
      contactBody:
        "Start a conversation about retail products, wholesale interest, or future ordering opportunities.",
      contactButton: "Contact Lux Café Co",
    },

    products: {
      heroEyebrow: "The 250g Collection",
      heroTitle: "Premium coffee, crafted for refined rituals.",
      heroBody:
        "Explore four 250g expressions designed for different moods, aromas, and coffee moments.",
      startInquiry: "Start an Inquiry",
      discoverOrigin: "Discover Origin",

      lineupEyebrow: "Product Lineup",
      lineupTitle: "Explore the collection.",
      lineupBody:
        "Each product keeps the Lux Café Co identity consistent while offering a different flavour direction and visual personality.",

      collection: "Collection",
      format: "Format",
      profile: "Profile",

      viewCollection: "View Collection",
      addToCart: "Add to Cart",

      orderingEyebrow: "Ordering Options",
      orderingTitle: "Choose your way to enjoy Lux Café Co.",
      orderingBody:
        "This prototype presents future purchase paths clearly, including inquiry, pickup, and delivery-ready checkout planning.",
      options: [
        {
          title: "Retail collection inquiry",
          body: "Customers can contact Lux Café Co to ask about current product availability.",
        },
        {
          title: "Local pickup preparation",
          body: "Pickup content is structured for a future local ordering workflow.",
        },
        {
          title: "Delivery-ready future checkout",
          body: "The layout leaves space for a full checkout system later.",
        },
      ],

      items: {
        signature: {
          name: "Signature Coffee",
          tag: "Everyday Luxury",
          collection: "Signature Collection",
          profile: "Smooth, balanced, elegant",
          description:
            "A refined everyday coffee with a smooth body, warm aroma, and a polished finish.",
        },
        estate: {
          name: "Estate Coffee",
          tag: "Origin Focused",
          collection: "Estate Collection",
          profile: "Bright, clean, origin-led",
          description:
            "A Colombian origin-forward profile created to highlight clarity, freshness, and regional character.",
        },
        whisky: {
          name: "Whisky Coffee",
          tag: "Bold Expression",
          collection: "Whisky Collection",
          profile: "Deep, rich, memorable",
          description:
            "A stronger expression with deeper notes, designed for customers who enjoy a bolder cup.",
        },
        wine: {
          name: "Wine Coffee",
          tag: "Distinctive Aroma",
          collection: "Wine Collection",
          profile: "Aromatic, soft, unique",
          description:
            "A more expressive coffee profile with a distinctive aroma and smooth premium character.",
        },
      },
    },

    pages: {
      aboutEyebrow: "Our Origin",
      aboutTitle: "About Lux Café Co",
      aboutBody: "A Colombian coffee story rooted in craft, family, and premium quality.",

      wholesaleEyebrow: "For Cafés & Partners",
      wholesaleTitle: "Wholesale",
      wholesaleBody: "Premium Colombian coffee in 2.5kg format for business partners.",

      contactEyebrow: "Start a Conversation",
      contactTitle: "Contact",
      contactBody: "Connect with Lux Café Co for retail, wholesale, and future ordering.",
    },

    wholesale: {
      heroEyebrow: "Wholesale Partnership",
      heroTitle: "Premium Colombian coffee for cafés, retailers, and hospitality partners.",
      heroBody:
        "Lux Café Co offers a refined wholesale experience for businesses looking to serve Colombian coffee with strong visual identity, consistent supply, and premium presentation.",
      primaryButton: "Start Wholesale Inquiry",
      secondaryButton: "View 250g Collection",
      heroCardLabel: "Business Format",
      heroCardText:
        "Designed for professional service, retail display, and consistent daily preparation.",

      overviewEyebrow: "B2B Experience",
      overviewTitle: "Built for businesses that care about quality and presentation.",
      overviewBody:
        "The wholesale page helps partners quickly understand Lux Café Co: Colombian coffee identity, premium packaging direction, business-ready formats, and a clear inquiry path.",

      stats: [
        { value: "2.5kg", label: "Wholesale-ready format for business use." },
        { value: "4", label: "Retail product profiles supporting the brand family." },
        { value: "B2B", label: "Structured for cafés, retailers, and hospitality partners." },
      ],

      partnerEyebrow: "Ideal Partners",
      partnerTitle: "Who this program is designed for.",
      partnerBody:
        "Lux Café Co wholesale is built for businesses that want more than coffee supply: they want a premium product story and a polished customer experience.",

      partners: [
        {
          title: "Independent cafés",
          body: "For cafés that want to introduce a Colombian coffee option with a premium but approachable identity.",
        },
        {
          title: "Retail stores",
          body: "For shops looking for elegant 250g coffee products that can sit beautifully on shelves.",
        },
        {
          title: "Hospitality partners",
          body: "For hotels, lounges, restaurants, and event spaces that need a refined coffee experience.",
        },
      ],

      formatEyebrow: "Wholesale Format",
      formatTitle: "A larger format made for daily service.",
      formatBody:
        "The 2.5kg wholesale format gives partners a practical option for higher-volume use while keeping the Lux Café Co identity consistent and premium.",
      formatBadge: "Wholesale",

      formatPoints: [
        {
          title: "Consistent supply direction",
          body: "Designed to support partners who need reliable coffee for daily service.",
        },
        {
          title: "Premium brand presentation",
          body: "Keeps the product aligned with the luxury Colombian identity of Lux Café Co.",
        },
        {
          title: "Flexible partner use",
          body: "Suitable for cafés, hospitality service, retail sampling, and business events.",
        },
      ],

      processEyebrow: "Partnership Process",
      processTitle: "Simple, clear, and easy to begin.",

      process: [
        {
          title: "Send an inquiry",
          body: "Partners start by contacting Lux Café Co with business type, expected volume, and product interest.",
        },
        {
          title: "Discuss product fit",
          body: "Lux Café Co can recommend suitable products, formats, and partnership direction.",
        },
        {
          title: "Prepare wholesale details",
          body: "Pricing, supply expectations, packaging, and ordering details can be organized for the partner.",
        },
        {
          title: "Begin the partnership",
          body: "Once confirmed, the partner can start introducing Lux Café Co into their customer experience.",
        },
      ],

      ctaEyebrow: "Work With Lux Café Co",
      ctaTitle: "Bring Colombian coffee into your business.",
      ctaBody:
        "Start a wholesale conversation and explore how Lux Café Co can support your café, retail space, or hospitality experience.",
      ctaButton: "Contact for Wholesale",
    },

    origin: {
      heroEyebrow: "Colombian Origin",
      heroTitle: "Rooted in Colombia, refined for modern rituals.",
      heroBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum, justo vel luctus viverra, magna arcu tempor nulla, vitae pretium sem justo vel mauris.",

      introBodyOne:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",

      introBodyTwo:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",

      journeyBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed urna at velit dignissim tincidunt vitae non magna.",

      steps: {
        harvest: {
          title: "Mountain Harvest",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel ligula sed magna suscipit pretium.",
        },
        roast: {
          title: "Golden Roast",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo magna non neque pretium, sed faucibus sem luctus.",
        },
        distribution: {
          title: "Shared Ritual",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis justo non erat tincidunt, sed dictum neque pulvinar.",
        },
      },

      cultureBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mi nec sem posuere porta sed vitae arcu.",

      values: [
        {
          title: "Elegant Rhythm",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit velit eu turpis feugiat, non cursus neque luctus.",
        },
        {
          title: "Origin Texture",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus purus vitae nunc volutpat, vitae tempor mi viverra.",
        },
        {
          title: "Modern Ritual",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel velit et mauris pharetra accumsan.",
        },
      ],
      primaryButton: "Explore the Collection",
      secondaryButton: "Wholesale Inquiry",
      videoLabel: "Origin Film",
      videoTitle: "Harvest, roasting, and Colombian craft",

      introEyebrow: "Origin Story",
      introTitle: "Every cup begins where the mountains hold the aroma.",
      introBodyOne:
        "Our story is shaped by Colombian coffee culture: careful selection, rich landscapes, and a deep respect for the people behind every bean.",
      introBodyTwo:
        "The result is a premium coffee experience that feels elegant, approachable, and authentic — crafted for shared moments, quiet mornings, and meaningful rituals.",
      introBodyThree:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae nibh vel neque luctus fermentum. Curabitur sed lorem at sapien placerat faucibus.",
      journeyEyebrow: "From Colombia to Cup",
      journeyTitle: "A refined journey with purpose.",
      journeyBody:
        "From harvest to roasting and distribution, the Lux Café Co process is designed to preserve character, freshness, and origin identity.",

      steps: {
        harvest: {
          title: "Harvested with care",
          body:
            "Selected Colombian beans begin with attention to quality, climate, and ripeness, creating the foundation for a balanced and memorable profile.",
        },
        roast: {
          title: "Roasted for character",
          body:
            "Each roast is guided by aroma, texture, and depth, revealing the refined personality of the bean without losing its origin.",
        },
        distribution: {
          title: "Prepared for modern rituals",
          body:
            "From retail 250g collections to future wholesale formats, every product is designed to feel premium, desirable, and easy to enjoy.",
        },
      },

      cultureEyebrow: "Colombian Character",
      cultureTitle: "Premium coffee with warmth, color, and soul.",
      cultureBody:
        "Inspired by Colombia’s visual identity, Lux Café Co brings together gold warmth, deep blue elegance, red energy, and black luxury into a clean modern system.",
      cultureBadge: "Colombian coffee identity, carried through every detail.",

      valuesEyebrow: "Brand Values",
      valuesTitle: "Luxury, authenticity, and accessibility.",
      values: [
        {
          title: "Elegant yet approachable",
          body:
            "The brand feels premium without becoming distant, creating a refined experience that still feels warm and familiar.",
        },
        {
          title: "Family-rooted craft",
          body:
            "Origin is not only geography. It is the people, care, and tradition behind the coffee experience.",
        },
        {
          title: "Minimal with character",
          body:
            "Clean layouts, strong imagery, and Colombian color accents keep the design modern while preserving personality.",
        },
      ],

      ctaEyebrow: "Experience Lux Café Co",
      ctaTitle: "Bring Colombian origin into your daily ritual.",
      ctaBody:
        "Explore our 250g collection or start a conversation about future wholesale opportunities.",
      contactButton: "Contact Us",
    },

    contact: {
      heroEyebrow: "Contact Lux Café Co",
      heroTitle: "Let’s start a conversation.",
      heroBody:
        "Reach out for retail questions, wholesale partnership interest, product availability, or future ordering opportunities.",
      whatsapp: "Message us on WhatsApp",

      inquiryEyebrow: "Inquiry Box",
      inquiryTitle: "Tell us what you are looking for.",
      inquiryBody:
        "This simple inquiry area is designed for future contact form functionality. For now, it helps visitors understand what kind of message they can send.",
      name: "Your name",
      email: "Email address",
      reason: "Reason for inquiry",
      message: "Write your message...",
      send: "Send Inquiry",

      reasons: [
        "Retail product question",
        "Wholesale partnership",
        "Product availability",
        "General question",
      ],

      faqEyebrow: "Quick Answers",
      faqTitle: "Frequently asked questions.",
      faqs: [
        {
          question: "Can I ask about wholesale coffee?",
          answer:
            "Yes. Lux Café Co is prepared for wholesale conversations with cafés, retail stores, hospitality partners, and business buyers.",
        },
        {
          question: "Is the website ready for e-commerce?",
          answer:
            "This prototype is structured with future ordering and e-commerce in mind, even if checkout is not fully built yet.",
        },
        {
          question: "What products can customers ask about?",
          answer:
            "Customers can ask about Signature, Estate, Whisky, and Wine Coffee in the 250g collection.",
        },
        {
          question: "Where is the brand identity inspired from?",
          answer:
            "Lux Café Co is rooted in Colombian origin, premium coffee culture, and warm shared moments.",
        },
      ],

      finalEyebrow: "Stay Connected",
      finalTitle: "Explore the collection while we prepare your next cup.",
      finalBody:
        "Discover the Lux Café Co 250g collection or contact us directly for business opportunities.",
      finalButton: "View Collection",
    },
  },

  ES: {
    common: {
      lorem: loremES,
      lux: "Lux Café Co",
      size250: "250g",
      close: "Cerrar",
    },

    nav: {
      home: "Inicio",
      collection: "Colección",
      origin: "Origen",
      wholesale: "Mayorista",
      contact: "Contacto",
      explore: "Explorar Café",
      menu: "Menú",
    },

    footer: {
      description: "Café colombiano, refinado para momentos compartidos.",
    },

    auth: {
      eyebrow: "Lux Café Co",
      login: "Iniciar sesión",
      signUp: "Registrarse",
      fullName: "Nombre completo",
      email: "Correo electrónico",
      password: "Contraseña",
    },

    language: {
      eyebrow: "Idioma",
      title: "Selecciona tu idioma",
      body: "Elige cómo quieres explorar la experiencia de Lux Café Co.",
      english: "Inglés",
      spanish: "Español",
    },

    cart: {
      eyebrow: "Tu carrito",
      title: "Colección seleccionada",
      empty: "Tu carrito está vacío actualmente.",
    },

    home: {
      heroEyebrow: "Lux Café Co",
      heroTitle: "Café colombiano, creado para el lujo moderno.",
      heroBody:
        "Una experiencia de café premium inspirada en el origen colombiano, rituales elegantes y momentos diarios que merecen disfrutarse con calma.",
      explore: "Explorar colección 250g",
      discover: "Descubrir nuestro origen",

      productEyebrow: "Colección 250g",
      productTitle: "Cuatro expresiones de artesanía.",
      productBody:
        "Cada formato de 250g tiene una personalidad distinta, desde suavidad diaria hasta perfiles intensos y aromáticos.",

      originEyebrow: "Historia de origen colombiano",
      originTitleStart: "Desde",
      originTitleCountry: "Colombia",
      originTitleEnd: "con aroma.",
      originBody:
        "Lux Café Co celebra la cultura cafetera colombiana mediante selección cuidadosa, identidad visual cálida y una presentación moderna refinada.",
      originPoints: [
        {
          title: "Cosecha",
          body: "Los granos seleccionados comienzan con atención a madurez, clima y calidad.",
        },
        {
          title: "Tostado",
          body: "El aroma, la profundidad y el equilibrio guían cada perfil de tostado.",
        },
        {
          title: "Ritual",
          body: "Creado para mañanas tranquilas, mesas compartidas y momentos diarios premium.",
        },
      ],
      originFilm: "Película de origen",
      originFilmText: "La cultura del café colombiano capturada en movimiento.",

      wholesaleEyebrow: "Sección mayorista",
      wholesaleTitleStart: "Café",
      wholesaleTitleCountry: "colombiano",
      wholesaleTitleEnd: "premium para socios.",
      wholesaleFormat: "Formato mayorista",
      wholesaleSupply: "Suministro premium de café colombiano",
      wholesaleBody:
        "Los futuros formatos mayoristas de 2.5kg están pensados para cafés, socios de hospitalidad y negocios que buscan una opción colombiana refinada.",
      wholesaleButton: "Explorar mayorista",

      contactEyebrow: "Contacto",
      contactTitle: "¿Listo para llevar nuestros productos a tu próximo momento?",
      contactBody:
        "Inicia una conversación sobre productos retail, interés mayorista o futuras opciones de pedido.",
      contactButton: "Contactar Lux Café Co",
    },

    products: {
      heroEyebrow: "Colección 250g",
      heroTitle: "Café premium, creado para rituales refinados.",
      heroBody:
        "Explora cuatro expresiones de 250g diseñadas para diferentes momentos, aromas y estilos de café.",
      startInquiry: "Iniciar consulta",
      discoverOrigin: "Descubrir origen",

      lineupEyebrow: "Línea de productos",
      lineupTitle: "Explora la colección.",
      lineupBody:
        "Cada producto mantiene la identidad de Lux Café Co, pero ofrece una dirección de sabor y personalidad visual diferente.",

      collection: "Colección",
      format: "Formato",
      profile: "Perfil",

      viewCollection: "Ver colección",
      addToCart: "Agregar al carrito",

      orderingEyebrow: "Opciones de pedido",
      orderingTitle: "Elige cómo disfrutar Lux Café Co.",
      orderingBody:
        "Este prototipo presenta caminos futuros de compra, incluyendo consulta, recogida local y checkout preparado para entrega.",
      options: [
        {
          title: "Consulta de colección retail",
          body: "Los clientes pueden contactar a Lux Café Co para preguntar por la disponibilidad actual.",
        },
        {
          title: "Preparación para recogida local",
          body: "El contenido de recogida está estructurado para un futuro flujo de pedido local.",
        },
        {
          title: "Checkout preparado para entrega",
          body: "El layout deja espacio para un sistema completo de checkout más adelante.",
        },
      ],

      items: {
        signature: {
          name: "Café Signature",
          tag: "Lujo diario",
          collection: "Colección Signature",
          profile: "Suave, balanceado, elegante",
          description:
            "Un café diario refinado con cuerpo suave, aroma cálido y final pulido.",
        },
        estate: {
          name: "Café Estate",
          tag: "Enfoque de origen",
          collection: "Colección Estate",
          profile: "Brillante, limpio, de origen",
          description:
            "Un perfil colombiano enfocado en claridad, frescura y carácter regional.",
        },
        whisky: {
          name: "Café Whisky",
          tag: "Expresión intensa",
          collection: "Colección Whisky",
          profile: "Profundo, rico, memorable",
          description:
            "Una expresión más fuerte con notas profundas para quienes disfrutan una taza intensa.",
        },
        wine: {
          name: "Café Wine",
          tag: "Aroma distintivo",
          collection: "Colección Wine",
          profile: "Aromático, suave, único",
          description:
            "Un perfil más expresivo con aroma distintivo y carácter premium suave.",
        },
      },
    },

    pages: {
      aboutEyebrow: "Nuestro origen",
      aboutTitle: "Sobre Lux Café Co",
      aboutBody: "Una historia de café colombiano basada en artesanía, familia y calidad premium.",

      wholesaleEyebrow: "Para cafés y socios",
      wholesaleTitle: "Mayorista",
      wholesaleBody: "Café colombiano premium en formato 2.5kg para socios comerciales.",

      contactEyebrow: "Inicia una conversación",
      contactTitle: "Contacto",
      contactBody: "Conecta con Lux Café Co para retail, mayorista y futuros pedidos.",
    },

    wholesale: {
      heroEyebrow: "Alianza Mayorista",
      heroTitle: "Café colombiano premium para cafés, tiendas y socios de hospitalidad.",
      heroBody:
        "Lux Café Co ofrece una experiencia mayorista refinada para negocios que desean servir café colombiano con identidad visual fuerte, suministro consistente y presentación premium.",
      primaryButton: "Iniciar consulta mayorista",
      secondaryButton: "Ver colección 250g",
      heroCardLabel: "Formato Comercial",
      heroCardText: "Diseñado para servicio profesional, exhibición retail y preparación diaria constante.",

      overviewEyebrow: "Experiencia B2B",
      overviewTitle: "Creado para negocios que valoran calidad y presentación.",
      overviewBody:
        "La página mayorista ayuda a los socios a entender rápidamente lo que ofrece Lux Café Co: identidad colombiana, dirección premium de empaque, formatos para negocio y un camino claro de consulta.",

      stats: [
        { value: "2.5kg", label: "Formato mayorista listo para uso comercial." },
        { value: "4", label: "Perfiles retail que apoyan la familia de marca." },
        { value: "B2B", label: "Estructurado para cafés, tiendas y socios de hospitalidad." },
      ],

      partnerEyebrow: "Socios Ideales",
      partnerTitle: "Para quién está diseñado este programa.",
      partnerBody:
        "El programa mayorista de Lux Café Co es adecuado para socios que buscan más que suministro de café. Está creado para negocios que desean una historia premium y una experiencia pulida para sus clientes.",

      partners: [
        {
          title: "Cafés independientes",
          body: "Para cafés que desean presentar una opción de café colombiano con identidad premium y cercana.",
        },
        {
          title: "Tiendas retail",
          body: "Para tiendas que buscan productos de café de 250g elegantes y atractivos para exhibición.",
        },
        {
          title: "Socios de hospitalidad",
          body: "Para hoteles, lounges, restaurantes y eventos que necesitan una experiencia de café refinada.",
        },
      ],

      formatEyebrow: "Formato Mayorista",
      formatTitle: "Un formato grande para servicio diario.",
      formatBody:
        "El formato mayorista de 2.5kg ofrece a los socios una opción práctica para mayor volumen, manteniendo la identidad premium de Lux Café Co.",
      formatBadge: "Mayorista",
      formatPoints: [
        {
          title: "Dirección de suministro consistente",
          body: "Diseñado para apoyar socios que necesitan café confiable para servicio diario.",
        },
        {
          title: "Presentación de marca premium",
          body: "Mantiene el producto alineado con la identidad colombiana de lujo de Lux Café Co.",
        },
        {
          title: "Uso flexible para socios",
          body: "Adecuado para cafés, hospitalidad, muestras retail y eventos comerciales.",
        },
      ],

      processEyebrow: "Proceso de Alianza",
      processTitle: "Simple, claro y fácil de comenzar.",
      process: [
        {
          title: "Enviar una consulta",
          body: "Los socios comienzan contactando a Lux Café Co con tipo de negocio, volumen esperado e interés de producto.",
        },
        {
          title: "Conversar sobre el ajuste del producto",
          body: "Lux Café Co puede recomendar productos, formatos y dirección de alianza adecuados.",
        },
        {
          title: "Preparar detalles mayoristas",
          body: "Precios, expectativas de suministro, empaque y pedidos pueden organizarse para el socio.",
        },
        {
          title: "Comenzar la alianza",
          body: "Una vez confirmado, el socio puede introducir Lux Café Co en su experiencia de cliente.",
        },
      ],

      ctaEyebrow: "Trabaja con Lux Café Co",
      ctaTitle: "Lleva café colombiano a tu negocio.",
      ctaBody:
        "Inicia una conversación mayorista y descubre cómo Lux Café Co puede apoyar tu café, tienda o experiencia de hospitalidad.",
      ctaButton: "Contactar para mayorista",
    },

    origin: {
      heroEyebrow: "Origen Colombiano",
      heroTitle: "Nacido en Colombia, refinado para rituales modernos.",
      heroBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum, justo vel luctus viverra, magna arcu tempor nulla, vitae pretium sem justo vel mauris.",

      introBodyOne:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",

      introBodyTwo:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      introBodyThree:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae nibh vel neque luctus fermentum. Curabitur sed lorem at sapien placerat faucibus.",
      journeyBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed urna at velit dignissim tincidunt vitae non magna.",

      steps: {
        harvest: {
          title: "Mountain Harvest",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel ligula sed magna suscipit pretium.",
        },
        roast: {
          title: "Golden Roast",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo magna non neque pretium, sed faucibus sem luctus.",
        },
        distribution: {
          title: "Shared Ritual",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis justo non erat tincidunt, sed dictum neque pulvinar.",
        },
      },

      cultureBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mi nec sem posuere porta sed vitae arcu.",

      values: [
        {
          title: "Elegant Rhythm",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit velit eu turpis feugiat, non cursus neque luctus.",
        },
        {
          title: "Origin Texture",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus purus vitae nunc volutpat, vitae tempor mi viverra.",
        },
        {
          title: "Modern Ritual",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel velit et mauris pharetra accumsan.",
        },
      ],
      primaryButton: "Explorar la colección",
      secondaryButton: "Consulta mayorista",
      videoLabel: "Película de origen",
      videoTitle: "Cosecha, tostado y artesanía colombiana",

      introEyebrow: "Historia de origen",
      introTitle: "Cada taza comienza donde las montañas guardan el aroma.",
      introBodyOne:
        "Nuestra historia está inspirada en la cultura cafetera colombiana: selección cuidadosa, paisajes ricos y respeto por las personas detrás de cada grano.",
      introBodyTwo:
        "El resultado es una experiencia de café premium que se siente elegante, cercana y auténtica, creada para momentos compartidos y rituales significativos.",

      journeyEyebrow: "De Colombia a la taza",
      journeyTitle: "Un recorrido refinado con propósito.",
      journeyBody:
        "Desde la cosecha hasta el tostado y la distribución, el proceso de Lux Café Co está diseñado para preservar carácter, frescura e identidad de origen.",

      steps: {
        harvest: {
          title: "Cosechado con cuidado",
          body:
            "Los granos colombianos seleccionados comienzan con atención a la calidad, el clima y la madurez, creando una base equilibrada y memorable.",
        },
        roast: {
          title: "Tostado para revelar carácter",
          body:
            "Cada tostado se guía por aroma, textura y profundidad, revelando la personalidad del grano sin perder su origen.",
        },
        distribution: {
          title: "Preparado para rituales modernos",
          body:
            "Desde colecciones retail de 250g hasta futuros formatos mayoristas, cada producto está diseñado para sentirse premium, deseable y fácil de disfrutar.",
        },
      },

      cultureEyebrow: "Carácter colombiano",
      cultureTitle: "Café premium con calidez, color y alma.",
      cultureBody:
        "Inspirado por la identidad visual de Colombia, Lux Café Co combina calidez dorada, elegancia azul, energía roja y lujo negro en un sistema moderno y limpio.",
      cultureBadge: "Identidad cafetera colombiana en cada detalle.",

      valuesEyebrow: "Valores de marca",
      valuesTitle: "Lujo, autenticidad y accesibilidad.",
      values: [
        {
          title: "Elegante pero cercano",
          body:
            "La marca se siente premium sin volverse distante, creando una experiencia refinada que también se siente cálida y familiar.",
        },
        {
          title: "Artesanía con raíz familiar",
          body:
            "El origen no es solo geografía. También son las personas, el cuidado y la tradición detrás de la experiencia cafetera.",
        },
        {
          title: "Minimalista con carácter",
          body:
            "Layouts limpios, imágenes fuertes y acentos de color colombiano mantienen el diseño moderno sin perder personalidad.",
        },
      ],

      ctaEyebrow: "Vive Lux Café Co",
      ctaTitle: "Lleva el origen colombiano a tu ritual diario.",
      ctaBody:
        "Explora nuestra colección de 250g o inicia una conversación sobre futuras oportunidades mayoristas.",
      contactButton: "Contáctanos",
    },

    contact: {
      heroEyebrow: "Contacta Lux Café Co",
      heroTitle: "Empecemos una conversación.",
      heroBody:
        "Contáctanos para preguntas retail, interés mayorista, disponibilidad de productos o futuras oportunidades de pedido.",
      whatsapp: "Envíanos un mensaje por WhatsApp",

      inquiryEyebrow: "Caja de consulta",
      inquiryTitle: "Cuéntanos qué estás buscando.",
      inquiryBody:
        "Esta área está pensada para una futura función de formulario. Por ahora, ayuda al visitante a entender qué tipo de mensaje puede enviar.",
      name: "Tu nombre",
      email: "Correo electrónico",
      reason: "Motivo de consulta",
      message: "Escribe tu mensaje...",
      send: "Enviar consulta",

      reasons: [
        "Pregunta sobre producto retail",
        "Alianza mayorista",
        "Disponibilidad de producto",
        "Pregunta general",
      ],

      faqEyebrow: "Respuestas rápidas",
      faqTitle: "Preguntas frecuentes.",
      faqs: [
        {
          question: "¿Puedo preguntar sobre café mayorista?",
          answer:
            "Sí. Lux Café Co está preparado para conversaciones mayoristas con cafés, tiendas, socios de hospitalidad y compradores comerciales.",
        },
        {
          question: "¿El sitio está listo para e-commerce?",
          answer:
            "Este prototipo está estructurado pensando en futuros pedidos y e-commerce, aunque el checkout todavía no esté completamente construido.",
        },
        {
          question: "¿Sobre qué productos pueden preguntar los clientes?",
          answer:
            "Los clientes pueden preguntar sobre Signature, Estate, Whisky y Wine Coffee en la colección de 250g.",
        },
        {
          question: "¿De dónde viene la identidad de la marca?",
          answer:
            "Lux Café Co está inspirado en el origen colombiano, la cultura cafetera premium y los momentos compartidos.",
        },
      ],

      finalEyebrow: "Mantente conectado",
      finalTitle: "Explora la colección mientras preparamos tu próxima taza.",
      finalBody:
        "Descubre la colección 250g de Lux Café Co o contáctanos directamente para oportunidades comerciales.",
      finalButton: "Ver colección",
    },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem("lux-language") || "EN";
  });

  const setLanguage = (value) => {
    setLanguageState(value);
    localStorage.setItem("lux-language", value);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: copy[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}