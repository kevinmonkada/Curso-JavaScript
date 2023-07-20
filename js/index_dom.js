import haburguerMenu from "./dom/menu_hamburguesa.js";
import reloj from "./dom/reloj_alarma.js";

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
