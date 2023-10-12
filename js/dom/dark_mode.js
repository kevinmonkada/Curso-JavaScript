const d = document,
	ls = localStorage;

export default function darkMode(btn, classDark) {
	const $themeBtn = d.querySelector(btn),
		$selectors = d.querySelectorAll("[data-dark]");

	//console.log($selectors);

	let dark = "🌑",
		light = "🌕";

	const lightMode = () => {
		$selectors.forEach((el) => el.classList.remove(classDark));
		$themeBtn.textContent = dark;
		ls.setItem("theme", "light");
	};
	const darkMode = () => {
		$selectors.forEach((el) => el.classList.add(classDark));
		$themeBtn.textContent = light;
		ls.setItem("theme", "dark");
	};

	d.addEventListener("click", (e) => {
		if (e.target.matches(btn)) {
			//console.log($themeBtn.textContent);
			if ($themeBtn.textContent === dark) {
				darkMode();
			} else {
				lightMode();
			}
		}
	});
	d.addEventListener("DOMContentLoaded", (e) => {
		//console.log(ls.getItem("theme"));
		if (ls.getItem("theme") === null) ls.setItem("theme", "light");
		if (ls.getItem("theme") === "light") lightMode();
		if (ls.getItem("theme") === "dark") darkMode();
	});
}
