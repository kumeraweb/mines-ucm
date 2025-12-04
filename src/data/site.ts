export const SITE = {
  name: 'Ejecutiva',
  phone: '983589813',
  whatsappMsg: 'Hola María Inés, quisiera información sobre los planes UCM',
  email: 'mmora@ucmchile.cl',
  city: 'Santiago y V Región',
  domain: 'https://www.contratarucm.cl',
  ogImage: '/images/hero.jpg',
  title: 'Ejecutiva de Planes UCM',
  // Descripción SEO opcional (SIN términos médicos)
  description:
    'Asesoría comercial para afiliarte a los planes UCM. Información, orientación y contratación directa con ejecutiva autorizada.'
}

export const LINKS = {
  wa: () => `https://wa.me/56${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMsg)}`,
  call: () => `tel:+56${SITE.phone}`
}
