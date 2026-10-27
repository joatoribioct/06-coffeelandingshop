import type { Feature, NavLink, Plan, ProcessStep, Testimonial } from '../types';

export const site = {
	name: 'Café Nogal',
	title: 'Café Nogal — Café de especialidad dominicano',
	description: 'Café de especialidad dominicano, tostado en pequeños lotes y entregado a tu puerta en menos de 48 horas.',
	whatsappNumber: '18095550123',
	email: 'hola@cafenogal.do',
	phone: '(809) 555-0123',
	address: 'Calle El Conde 152, Santo Domingo',
	showHandwritten: true,
};

export const navLinks: NavLink[] = [
	{ label: 'Tienda', href: '#productos' },
	{ label: 'Origen', href: '#historia' },
	{ label: 'Proceso', href: '#proceso' },
	{ label: 'Suscripción', href: '#suscripcion' },
	{ label: 'Visítanos', href: '#ubicacion' },
];

export const features: Feature[] = [
	{ title: 'Origen dominicano', text: 'Fincas de Jarabacoa, Barahona y Constanza, cosechadas a mano.' },
	{ title: 'Tostado fresco', text: 'Tostamos cada semana. La fecha va impresa en cada bolsa.' },
	{ title: 'Entrega a domicilio', text: 'Santo Domingo y Santiago en 24–48 h. Resto del país, 72 h.' },
	{ title: 'Barista certificado', text: 'Cada perfil lo cata y aprueba nuestro equipo de barras.' },
];

export const processSteps: ProcessStep[] = [
	{ title: 'Cosecha', text: 'Solo cerezas maduras, recogidas una a una.', placeholder: 'Cosecha a mano' },
	{ title: 'Secado', text: 'En camas elevadas durante 15 a 20 días.', placeholder: 'Secado al sol' },
	{ title: 'Tueste', text: 'Lotes pequeños, perfil diseñado para cada origen.', placeholder: 'Tostador en acción' },
	{ title: 'Tu taza', text: 'Molido a tu gusto y empacado el mismo día.', placeholder: 'Barista sirviendo' },
];

export const testimonials: Testimonial[] = [
	{ quote: 'El Jarabacoa tiene un dulzor que no encontraba en ningún supermercado. Ya no compro otro.', name: 'María Fernández', city: 'Santo Domingo' },
	{ quote: 'La suscripción me salvó las mañanas. Llega siempre fresco y a tiempo.', name: 'José Rodríguez', city: 'Santiago' },
	{ quote: 'Fui al local por un cortado y salí con dos bolsas. Atención de primera.', name: 'Ana Peña', city: 'Punta Cana' },
];

export const plans: Plan[] = [
	{ label: '1 bolsa / mes', price: 'RD$550' },
	{ label: '2 bolsas / mes', price: 'RD$1.050' },
	{ label: '3 bolsas / mes', price: 'RD$1.500' },
];

export const hours = [
	{ days: 'Lunes a viernes', time: '7:00 – 19:00' },
	{ days: 'Sábado', time: '8:00 – 20:00' },
	{ days: 'Domingo', time: '9:00 – 14:00' },
];

export const socials = ['Instagram', 'TikTok', 'Facebook'];
export const policies = ['Envíos y devoluciones', 'Privacidad', 'Términos'];
