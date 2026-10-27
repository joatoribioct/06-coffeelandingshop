import { formatPrice, isValidEmail, whatsappUrl } from '../utils/format';

const $ = <T extends HTMLElement>(sel: string) => document.querySelector<T>(sel);
const $$ = <T extends HTMLElement>(sel: string) => [...document.querySelectorAll<T>(sel)];

const phone = document.body.dataset.whatsapp ?? '';
const cart: Record<string, number> = {};
let grind = 'grano';

const products = Object.fromEntries(
	$$('[data-add]').map((btn) => [
		btn.dataset.id!,
		{ name: btn.dataset.name!, price: Number(btn.dataset.price) },
	]),
);

function renderCart() {
	const lines = Object.entries(cart).filter(([, qty]) => qty > 0);
	const count = lines.reduce((a, [, qty]) => a + qty, 0);
	const total = lines.reduce((a, [id, qty]) => a + products[id].price * qty, 0);

	$('[data-cart-count]')!.textContent = String(count);
	$('[data-cart-empty]')!.hidden = count > 0;
	$('[data-cart-footer]')!.hidden = count === 0;
	$('[data-cart-total]')!.textContent = formatPrice(total);

	$('[data-cart-lines]')!.innerHTML = lines
		.map(
			([id, qty]) =>
				`<div class="flex justify-between gap-3 border-b border-sand py-2.5 text-[15px]">
					<span>${qty} × ${products[id].name}</span>
					<span class="font-bold">${formatPrice(products[id].price * qty)}</span>
				</div>`,
		)
		.join('');

	const grindLabel = $(`[data-grind="${grind}"]`)!.textContent!.toLowerCase();
	const message =
		'Hola, quiero pedir: ' +
		lines.map(([id, qty]) => `${qty} × ${products[id].name} (${grindLabel})`).join(', ') +
		'. Total ' +
		formatPrice(total);
	$<HTMLAnchorElement>('[data-cart-order]')!.href = whatsappUrl(phone, message);
}

function renderGrind() {
	$$('[data-grind]').forEach((btn) => {
		const active = btn.dataset.grind === grind;
		btn.classList.toggle('bg-cream', active);
		btn.setAttribute('aria-pressed', String(active));
	});
	const label = $(`[data-grind="${grind}"]`)!.textContent!.toLowerCase();
	$$('[data-grind-label]').forEach((el) => (el.textContent = label));
}

// Cart toggle
$('[data-cart-toggle]')!.addEventListener('click', () => {
	const panel = $('[data-cart-panel]')!;
	panel.hidden = !panel.hidden;
});

// Grind selector
$$('[data-grind]').forEach((btn) =>
	btn.addEventListener('click', () => {
		grind = btn.dataset.grind!;
		renderGrind();
		renderCart();
	}),
);

// Add to cart
$$('[data-add]').forEach((btn) => {
	let timer: number;
	btn.addEventListener('click', () => {
		const id = btn.dataset.id!;
		cart[id] = (cart[id] ?? 0) + 1;
		renderCart();

		btn.textContent = 'Agregado';
		btn.classList.add('bg-leaf', 'text-cream');
		btn.classList.remove('bg-caramel', 'text-ink');
		clearTimeout(timer);
		timer = window.setTimeout(() => {
			btn.textContent = 'Agregar';
			btn.classList.remove('bg-leaf', 'text-cream');
			btn.classList.add('bg-caramel', 'text-ink');
		}, 1200);
	});
});

// Subscription plans
$$('[data-plan]').forEach((btn) =>
	btn.addEventListener('click', () => {
		$$('[data-plan]').forEach((b) => {
			const active = b === btn;
			b.classList.toggle('border-brown', active);
			b.classList.toggle('border-sand', !active);
			b.setAttribute('aria-pressed', String(active));
		});
	}),
);

// Subscription form
const form = $<HTMLFormElement>('[data-subscribe-form]')!;
const emailInput = form.querySelector<HTMLInputElement>('input[type="email"]')!;
const emailError = $('[data-email-error]')!;

emailInput.addEventListener('input', () => {
	emailError.hidden = true;
	emailInput.classList.replace('border-danger', 'border-sand');
});

form.addEventListener('submit', (e) => {
	e.preventDefault();
	if (!isValidEmail(emailInput.value.trim())) {
		emailError.hidden = false;
		emailInput.classList.replace('border-sand', 'border-danger');
		return;
	}
	$('[data-subscribe-email]')!.textContent = emailInput.value.trim();
	$('[data-subscribe-success]')!.hidden = false;
	form.hidden = true;
});

renderGrind();
renderCart();
