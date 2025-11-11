export const SITE = {
  name: 'María Inés • UCM',
  brand: 'Unidad Coronaria Móvil',
  phone: '9XXXXYYYY',
  whatsappMsg: 'Hola María Inés, quiero cotizar UCM',
  email: 'contacto@ucm.cl',
  city: 'Santiago y V Región',
  ogImage: '/images/hero.jpg'
}
export const LINKS = {
  wa: (num = SITE.phone) => `https://wa.me/56${num}?text=${encodeURIComponent(SITE.whatsappMsg)}`,
  call: (num = SITE.phone) => `tel:+569${num}`
}
