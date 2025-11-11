export const SITE = {
  name: 'Ejecutiva Planes • UCM',
  brand: 'Unidad Coronaria Móvil',
  phone: '976299880',
  whatsappMsg: 'Hola María Inés, quiero cotizar UCM',
  email: ' mmora@ucmchile.cl',
  city: 'Santiago y V Región',
  ogImage: '/images/hero.jpg'
}
export const LINKS = {
  wa: (num = SITE.phone) => `https://wa.me/56${num}?text=${encodeURIComponent(SITE.whatsappMsg)}`,
  call: (num = SITE.phone) => `tel:+569${num}`
}
