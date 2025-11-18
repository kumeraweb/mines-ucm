export const SITE = {
  // Nombre de la ejecutiva
  name: 'María Inés',

  // Teléfono sin espacios ni signos (solo números)
  phone: '976299880',

  // Mensaje predeterminado para WhatsApp
  whatsappMsg: 'Hola María Inés, quisiera información sobre los planes UCM',

  // Email oficial UCM
  email: 'mmora@ucmchile.cl',

  // Ciudad o áreas atendidas
  city: 'Santiago y V Región',

  // Dominio real del sitio (sin slash al final)
  domain: 'https://www.cotizacoronariamovil.cl',

  // Imagen para OpenGraph
  ogImage: '/images/hero.jpg',

  // Título SEO opcional (neutral y seguro)
  title: 'Ejecutiva de Planes UCM | María Inés',

  // Descripción SEO opcional (SIN términos médicos)
  description:
    'Asesoría comercial para afiliarte a los planes UCM. Información, orientación y contratación directa con ejecutiva autorizada.'
}

// Helpers universales
export const LINKS = {
  wa: () => `https://wa.me/56${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMsg)}`,
  call: () => `tel:+56${SITE.phone}`
}
