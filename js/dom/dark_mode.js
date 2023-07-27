const d = document;

export default function darkMode(btn, classDark) {
	const $themeBtn = d.querySelector(btn),
		$selectors = d.querySelectorAll("[data-dark]");

	//console.log($selectors);

	let dark = "🌑",
		light = "🌕";

	d.addEventListener("click", (e) => {
		if (e.target.matches(btn)) {
			//console.log($themeBtn.textContent);
			if ($themeBtn.textContent === dark) {
				$selectors.forEach((el) => el.classList.add(classDark));
				$themeBtn.textContent = light;
			} else {
				$selectors.forEach((el) => el.classList.remove(classDark));
				$themeBtn.textContent = dark;
			}
		}
	});
}
