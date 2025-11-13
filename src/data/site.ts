export const SITE = {
  // Nombre de la ejecutiva
  name: 'María Inés',

  // Teléfono sin espacios ni signos (solo números)
  phone: '976299880',

  // Mensaje predeterminado para WhatsApp
  whatsappMsg: 'Hola Maria Inés, quiero cotizar un plan UCM',

  // Email oficial UCM
  email: 'mmora@ucmchile.cl',

  // Ciudad o áreas atendidas
  city: 'Santiago y V Región',

  // Dominio real del sitio (sin slash al final)
  domain: 'https://www.cotizacoronariamovil.cl',

  // Imagen para OpenGraph
  ogImage: '/images/hero.jpg',

  // Título SEO opcional
  title: 'Ejecutiva Planes • UCM',

  // Descripción SEO opcional
  description: 'Contratacion planes Unidad Coronaria Móvil'
}

// Helpers universales
export const LINKS = {
  wa: () => `https://wa.me/56${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMsg)}`,
  call: () => `tel:+569${SITE.phone}`
}
