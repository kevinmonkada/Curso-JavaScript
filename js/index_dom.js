import haburguerMenu from "./dom/menu_hamburguesa.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
	haburguerMenu(".panel-btn", ".panel", ".menu a");
});
