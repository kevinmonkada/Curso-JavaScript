import haburguerMenu from "./dom/menu_hamburguesa.js";
import reloj from "./dom/reloj_alarma.js";
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
});

d.addEventListener("keydown", (e) => {
	shortcuts(e);
	moveBall(e, ".ball", ".stage");
});
