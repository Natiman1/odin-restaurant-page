export default function contactPage() {
	const main = document.getElementById("main");
	main.textContent = "";

	const h1 = document.createElement("h1");
	h1.innerHTML = "Contact Us";
	main.appendChild(h1);

	const div = createDivWithParagraphs([
		"Italian Pizza",
		"+63912345678",
		"italianpizza@gmail.com",
	]);

	main.appendChild(div);

	return main;
}

function createDivWithParagraphs(paragraphTexts) {
	const div = document.createElement("div");

	for (const text of paragraphTexts) {
		const p = createParagraph(text);
		div.appendChild(p);
	}

	return div;
}

function createParagraph(text) {
	const p = document.createElement("p");
	p.classList.add("contact-p");
	p.innerHTML = text;
	return p;
}
