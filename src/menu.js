import pizza1 from "./images/pizza1.jpg";
import pizza2 from "./images/pizza2.jpg";
import pizza3 from "./images/pizza3.jpg";
import pizza4 from "./images/pizza4.jpg";

const menuItem = [
	{
		name: "Cheese pizza",
		imgSrc: pizza1,
	},
	{
		name: "Italian pizza",
		imgSrc: pizza2,
	},
	{
		name: "Delusion pizza",
		imgSrc: pizza3,
	},
	{
		name: "vagi pizza",
		imgSrc: pizza4,
	},
];

function displayMenuItem() {
	// Create a container for the menu items
	const menuContainer = document.createElement("div");
	menuContainer.classList.add("menu-container");

	for (const item of menuItem) {
		const menuItemContainer = document.createElement("div");
		menuItemContainer.classList.add("menu-item-container");

		const img = document.createElement("img");
		img.setAttribute("class", "menu-item");
		img.src = item.imgSrc;

		const p = document.createElement("p");
		p.classList.add("item-name-p");
		p.innerHTML = item.name;

		menuItemContainer.appendChild(img);
		menuItemContainer.appendChild(p);
		menuContainer.appendChild(menuItemContainer);
	}

	return menuContainer;
}

export default function menuPage() {
	const main = document.getElementById("main");
	main.textContent = "";

	const h1 = document.createElement("h1");
	const wholeMenuContainer = displayMenuItem();

	h1.innerHTML = "Menu";
	main.appendChild(h1);
	main.appendChild(wholeMenuContainer);

	return main;
}
