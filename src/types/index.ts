export interface Product {
	id: string;
	name: string;
	notes: string;
	price: number;
	size: string;
	tag: string;
}

export interface NavLink {
	label: string;
	href: string;
}

export interface Feature {
	title: string;
	text: string;
}

export interface ProcessStep {
	title: string;
	text: string;
	placeholder: string;
}

export interface Testimonial {
	quote: string;
	name: string;
	city: string;
}

export interface Plan {
	label: string;
	price: string;
}

export interface Grind {
	key: 'grano' | 'molido';
	label: string;
}
