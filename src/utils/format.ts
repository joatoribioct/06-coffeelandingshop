export const formatPrice = (n: number): string => 'RD$' + n.toLocaleString('es-DO');

export const isValidEmail = (value: string): boolean => /^\S+@\S+\.\S+$/.test(value);

export const whatsappUrl = (phone: string, message?: string): string => {
	const digits = phone.replace(/\D/g, '');
	return `https://wa.me/${digits}` + (message ? `?text=${encodeURIComponent(message)}` : '');
};
