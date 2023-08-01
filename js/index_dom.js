import countdown from "./dom/cuenta_regresiva.js";
import darkMode from "./dom/dark_mode.js";
import haburguerMenu from "./dom/menu_hamburguesa.js";
import reloj from "./dom/reloj_alarma.js";
import responsiveMedia from "./dom/responsive_object.js";
import responsiveTester from "./dom/responsive_tester.js";
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
	responsiveMedia(
		"youtube",
		"(min-width:1024px)",
		`<a href="https://www.youtube.com/watch?v=2SetvwBV-SU" target="_blank
rel="noopener">Ver Video</a>`,
		`<iframe width="560" height="315" src="https://www.youtube.com/embed/
2SetvwBV-SU" frameborder="0" allow="accelerometer; autoplay; encrypted-media;gyroscope; picture-in-picture" allowfullscreen></iframe>`
	);
	responsiveMedia(
		"gmaps",
		"(min-width:1024px)",
		`<a href="https://goo.gl/maps/uxNNrRC82kPHGPjb8" target="_blank"
rel="noopener">Ver Mapa</a>`,
		`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.3307860565521!2d-99.16869369209537!3d19.42702312622355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses-419!2smx!4v1591819162197!5m2!1ses-419!2smx"
			width="600"
			height="450"
			frameborder="0"
			style="border:0;"
			allowfullscreen=""
			aria-hidden="false"
			tabindex="0"
		></iframe>`
	);
	responsiveTester("responsive-tester");
});

d.addEventListener("keydown", (e) => {
	shortcuts(e);
	moveBall(e, ".ball", ".stage");
});

darkMode(".dark-mode-btn", "dark-mode");
