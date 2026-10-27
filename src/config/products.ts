import type { Grind, Product } from '../types';

export const products: Product[] = [
	{ id: 'jarabacoa', name: 'Jarabacoa', notes: 'Chocolate con leche, caramelo y naranja dulce.', price: 650, size: '340 g', tag: 'Más vendido' },
	{ id: 'barahona', name: 'Barahona', notes: 'Cacao, panela y un final de nuez tostada.', price: 690, size: '340 g', tag: 'Tueste medio' },
	{ id: 'constanza', name: 'Constanza', notes: 'Floral, frutos rojos y acidez brillante.', price: 750, size: '340 g', tag: 'Edición limitada' },
	{ id: 'espresso', name: 'Blend Espresso', notes: 'Cuerpo denso, chocolate amargo y crema persistente.', price: 620, size: '340 g', tag: 'Tueste oscuro' },
];

export const grinds: Grind[] = [
	{ key: 'grano', label: 'En grano' },
	{ key: 'molido', label: 'Molido' },
];
