export default function reloj(
	elemento,
	startTime,
	stopTime,
	startAudio,
	stopAudio,
	audio
) {
	let d = document;
	let fecha = new Date();
	let interval;
	d.addEventListener("click", (e) => {
		if (e.target.matches(`#${startTime}`)) {
			interval = setInterval(() => {
				fecha = new Date();
				d.getElementById(elemento).innerText =
					fecha.toLocaleTimeString("EN-us");
			}, 1000);
			d.getElementById(elemento).style.visibility = "visible";
			d.getElementById(startTime).disabled = true;
		}
		if (e.target.matches(`#${stopTime}`)) {
			clearInterval(interval);
			d.getElementById(startTime).disabled = false;
			d.getElementById(elemento).style.visibility = "hidden";
			d.getElementById(elemento).innerHTML = "Aca aparece el Tiempo";
		}
		if (e.target.matches(`#${startAudio}`)) {
			d.getElementById(audio).play();
			d.getElementById(startAudio).disabled = true;
		}
		if (e.target.matches(`#${stopAudio}`)) {
			d.getElementById(audio).pause();
			d.getElementById(startAudio).disabled = false;
		}
	});
}
