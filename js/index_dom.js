import countdown from "./dom/cuenta_regresiva.js";
import darkMode from "./dom/dark_mode.js";
import haburguerMenu from "./dom/menu_hamburguesa.js";
import reloj from "./dom/reloj_alarma.js";
import scrollTopButton from "./dom/scroll_button.js";
import { moveBall, shortcuts } from "./dom/teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
	haburguerMenu(".panel-btn", ".panel", ".menu a");
	reloj(
		"time-text",
		"startTime",
		"stopTime",
		"startAudio",
		"stopAudio",
		"audioReloj"
	);
	countdown("countdown", "Dec 18, 2023", "Feliz Cumpleaños🎉🎊🪩🥳🎁🍾");
	scrollTopButton(".scroll-top-btn"); //since it is a class I use a dot to call it if its an ID I use #
});

d.addEventListener("keydown", (e) => {
	shortcuts(e);
	moveBall(e, ".ball", ".stage");
});

darkMode(".dark-mode-btn", "dark-mode");
