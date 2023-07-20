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

/* function delegadorReloj(btnIniciarReloj,btnDetenerReloj,btnIniciarAlarma,btnDetenerAlarma,elemento,audio
) {
	//elemento es el div que contiene los botones
	const d = document;
	console.log(
		btnIniciarReloj,
		btnDetenerReloj,
		btnIniciarAlarma,
		btnDetenerAlarma,
		elemento,
		audio
	);
	let fecha = new Date();
	let temporizadorReloj, temporizadorAudio;
	d.addEventListener("click", (e) => {
		if (e.target.matches(`#${btnIniciarReloj}`)) {
			temporizadorReloj = setInterval(() => {
				fecha = new Date();
				d.getElementById(elemento).innerText =
					fecha.toLocaleTimeString("EN-us");
			}, 1000);
			d.getElementById(elemento).style.visibility = "visible";
			d.getElementById(btnIniciarReloj).disabled = true;
		}
		if (e.target.matches(`#${btnDetenerReloj}`)) {
			clearInterval(temporizadorReloj);
			d.getElementById(btnIniciarReloj).disabled = false;
			d.getElementById(elemento).style.visibility = "hidden";
			d.getElementById(elemento).innerHTML = "&nbsp";
		}
		if (e.target.matches(`#${btnIniciarAlarma}`)) {
			console.log(audio);
			d.getElementById(audio).play();
			d.getElementById(btnIniciarAlarma).disabled = true;
		}
		if (e.target.matches(`#${btnDetenerAlarma}`)) {
			d.getElementById(audio).pause();
			d.getElementById(btnIniciarAlarma).disabled = false;
		}
	});
} */
