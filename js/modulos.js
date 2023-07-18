/* **********     Curso JavaScript: 33. Módulos ( import / export ) - #jonmircha     ********** */
/* import saludar, { Saludar, PI, usuario } from "./constantes.js";
import { aritmetica as calculos } from "./aritmetica.js";

console.log("Archivo modulos.js");
console.log(PI, usuario);
//console.log(aritmetica.sumar(3, 4));
console.log(calculos.sumar(3, 4));
console.log(calculos.restar(3, 4));
saludar();
let saludo = new Saludar();
saludo;
 */
//console.log("Hola");

/*       Ejercicio 1       */

//Funcion declarada

/* function miFuncion(cadena = "") {
	if (!cadena) {
		console.warn("No ingresaste ninguna cadena de texto");
	} else {
		alert(`El conteo de caracteres es ${cadena.length}`);
	}
} */

//Arrow function

/* const miFuncion = (cadena = "") =>
	!cadena
		? console.warn("No ingresaste ninguna cadena de texto")
		: alert(`El conteo de caracteres es ${cadena.length}`);

miFuncion();
miFuncion("Hola Mundo"); */

/*       Ejercicio 2       */

/* const miFuncion = (cadena = "", longitud = undefined) =>
	!cadena
		? console.warn("No ingresaste ninguna cadena de texto")
		: console.info(cadena.slice(0, longitud));

miFuncion("Hola Mundo", 4); */

/*       Ejercicio 3       */

/* const miFuncion = (cadena = "", caracter = undefined) =>
	!cadena
		? console.warn("No ingresaste ninguna cadena de texto")
		: (caracter === undefined) 
            ? console.warn("No ingresaste el caracter separador de texto")
            : console.log(cadena.split(caracter));

miFuncion();
miFuncion("hola que tal", " "); */

/*       Ejercicio 4       */

// Version 1

/* const miFuncion = (cadena = "", repetir = undefined) =>
	!cadena
		? console.warn("No ingresaste ninguna cadena de texto")
		: repetir === undefined
		? console.warn("No ingresaste el numero de veces a repetir")
		: console.log(cadena.repeat(repetir));

miFuncion("Hola", 3); */

//Version 2

/* const repetirTexto = (texto = "", veces = undefined) => {
	if (!texto) return console.warn("No ingresaste un texto");
	if (veces === undefined)
		return console.warn("No ingresaste el número de veces a repetir el texto");
	if (veces === 0) return console.error("El numero de veces no puede ser 0");
	if (Math.sign(veces) === -1)
		return console.error("El numero de veces no puede ser negativo");
	for (let i = 1; i <= veces; i++) console.info(`${texto},${i}`);
};

repetirTexto("a", 2); */

/*       Ejercicio 5       */

/* const miFuncion = (cadenaTexto) => {
	let cadenaInvertida = "";
	if (!cadenaTexto)
		return console.warn("No ingresaste ninguna cadena de texto");
	for (let i = cadenaTexto.length - 1; i >= 0; i--) {
		cadenaInvertida += cadenaTexto[i];
	}
	return console.log(cadenaInvertida);
};

miFuncion("Esto es texto"); 

version 2 con CoachGPT-Javascript

const reverseWords = (cadenaTexto) => {
	let palabras = cadenaTexto.split(" ");
	let palabrasInvertidas = [];

	for (let palabra of palabras) {
		let palabraInvertida = "";
		for (let i = palabra.length - 1; i >= 0; i--) {
			palabraInvertida += palabra[i];
		}
		palabrasInvertidas.push(palabraInvertida);
	}

	let resultado = palabrasInvertidas.join(" ");
	return resultado;
};

console.log(reverseWords("Esto es texto"));

*/

/*       Ejercicio 6       */

/* function countOccurrences(cadenaTexto, word) {
	let count = 0;
	const words = cadenaTexto.split(" ");

	if (!cadenaTexto)
		return console.warn("No ingresaste ninguna cadena de texto");

	for (let i = 0; i < words.length; i++) {
		if (words[i] === word) {
			count++;
		}
	}

	return console.log(count);
}

countOccurrences("Hola mundo adios mundo", "mundo"); */

/* function countOccurrences(str, word) {
	let count = 0;
	const words = str.split(" "); // Se divide la cadena en palabras individuales y se almacenan en el array 'words'

	for (let i = 0; i < words.length; i++) {
		// Se inicia el bucle 'for' con la variable 'i' inicializada en 0
		// El bucle se ejecutará mientras 'i' sea menor que la longitud del array 'words'
		// 'i' representa el índice actual en cada iteración del bucle

		if (words[i] === word) {
			// Se verifica si la palabra en el índice 'i' del array 'words' es igual a 'word'

			count++; // Si hay una coincidencia, se incrementa la variable 'count' en 1
		}
	}

	return count; // Se devuelve el número total de ocurrencias de la palabra 'word' en la cadena 'str'
}
 */

/*       Ejercicio 7       */

/* function isPalindrome(str) {
	// Eliminar los espacios y convertir a minúsculas
	const formattedStr = str.replace(/\s/g, "").toLowerCase();

	// Obtener la longitud de la cadena
	const len = formattedStr.length;

	// Iterar hasta la mitad de la cadena
	for (let i = 0; i < len / 2; i++) {
		// Comparar los caracteres simétricos de cada extremo
		if (formattedStr[i] !== formattedStr[len - 1 - i]) {
			return false; // No es un palíndromo
		}
	}

	return true; // Es un palíndromo
}

console.log(isPalindrome("radar"));
 */

/*       Ejercicio 8       */

/* const miFuncion = (texto, patronEliminar) => {
	if (!texto || !patronEliminar) {
		console.warn("No ingresaste un texto o un patrón a eliminar");
		return null;
	}

	const resultado = texto.replace(new RegExp(patronEliminar, "g"), "");

	return resultado;
};

// Ejemplo de uso:
const texto = "xyz1, xyz2, xyz3, xyz4 y xyz5";
const patronEliminar = "xyz";

const resultado = miFuncion(texto, patronEliminar);
console.log(resultado); // Output: "1, 2, 3, 4 y 5"
 */

//Version 2 Jonmircha
/* 
const eliminarCaracteres = (texto = "", patron = "") =>
	!texto
		? console.warn("No ingresaste un texto")
		: console.info(texto.replace(new RegExp(patron, "ig"), ""));

eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
 */

/*       Ejercicio 9       */

/* const randomNumberInRange = (min = 501, max = 600) =>
	Math.round(Math.random() * (max - min)) + min;
console.log(randomNumberInRange());
 */

/*       Ejercicio 10       */

/* const miFuncion = (imput = 0) => {
	if (!imput) return console.warn("La funcion no puede estar vacia");
	let capicua = imput.split("").reverse().join("");
	return imput === capicua
		? console.info(
				`El numero ingresado si es capicua, el numero ingresado es ${imput} y el numero al reves es ${capicua}`
		  )
		: console.info(
				`No es capicua ya que el numero ingresado es ${imput} y el numero al reves es ${capicua}`
		  );
};

miFuncion("15351");
 */

/*       Ejercicio 11       */

/* const factorizar = (numero) => {
	console.log(numero);
	if (numero === 0 || numero === 1) return 1;
	for (let i = numero - 1; i >= 1; i--) {
		numero *= i;
	}
	return console.log(numero);
};
factorizar(5);
 */

/*       Ejercicio 12       */
/* const miFuncion = (numero) => {
	if (numero <= 1) {
		return false;
	}
	for (let i = 2; i < numero / 2; i++) {
		if (numero % i === 0) {
			return false;
		}
	}
	return true;
};
console.log(miFuncion(12));
 */

// Version JonMircha

/* const numeroPrimo = (numero = undefined) => {
	if (numero === undefined) return console.warn("No ingresaste un número");
	if (typeof numero !== "number")
		return console.error(`El valor "${numero}" ingresado, NO es un número`);
	if (numero === 0) return console.error("El número no puede ser 0");
	if (numero === 1) return console.error("El número no puede ser 1");
	if (Math.sign(numero) === -1)
		return console.error("El número no puede ser negativo");
	let divisible = false;
	for (let i = 2; i < numero; i++) {
		if (numero % i === 0) {
			divisible = true;
			break;
		}
	}
	return divisible
		? console.log(`El numero ${numero}, NO es primo`)
		: console.log(`El numero ${numero}, SI es primo`);
};

numeroPrimo();
numeroPrimo("320");
numeroPrimo(true);
numeroPrimo(0);
numeroPrimo(1);
numeroPrimo(-13);
numeroPrimo(13);
numeroPrimo(200); */
/*       Ejercicio 13       */

/* const miFuncion = (numero) => numero % 2 === 0;

console.log(miFuncion(13)); // Devuelve true
 */

// Version JonMircha

/* const numeroParImpar = (numero = undefined) => {
	if (numero === undefined) return console.warn("No ingresaste un número");
	if (typeof numero !== "number")
		return console.error(`El valor "${numero}" ingresado, NO es un número`);
	return numero % 2 === 0
		? console.info(`El numero ${numero} es Par`)
		: console.info(`El numero ${numero} es Impar`);
};
numeroParImpar();
numeroParImpar("23");
numeroParImpar(-398);
numeroParImpar(19); */

/*       Ejercicio 14       */
// Version 1
/* const miFuncion = (grados = 0, conversion = "") => {
  let F = grados * (9 / 5) + 32;
  let C = (grados - 32) * (5 / 9);

  if (conversion === "F") {
    return console.log(F + "°F");
  }
  return console.log(C + "°C");
};

miFuncion(0, "C"); */

// Version 2
/* const miFuncion = (grados = 0, conversion = "") => {
	if (typeof grados !== "number") {
		console.error("El valor de los grados debe ser un número.");
		return;
	}

	if (conversion !== "C" && conversion !== "F") {
		console.error('La conversión debe ser "C" o "F".');
		return;
	}

	let resultado;

	if (conversion === "F") {
		resultado = grados * (9 / 5) + 32;
		console.log(`${grados}°C equivale a ${Math.round(resultado)}°F.`);
	} else {
		resultado = (grados - 32) * (5 / 9);
		console.log(`${grados}°F equivale a ${Math.round(resultado)}°C.`);
	}
};

miFuncion(0, "C");
 */

// Version JonMircha

/* const convertirGrados = (grados = undefined, unidad = undefined) => {
	if (grados === undefined) return console.warn("No ingresaste un número");
	if (typeof grados !== "number")
		return console.error(`El valor "${grados}" ingresado, NO es un número`);
	if (unidad === undefined)
		return console.warn("No ingresaste el tipo de grado a convertir");
	if (typeof unidad !== "string")
		return console.error(`El valor ${unidad} no es un texto`);
	if (unidad.length !== 1 || !/(C|F)/.test(unidad))
		return console.warn("Valor de unidad no reconocido");
	if (unidad === "C") {
		return console.info(`${grados}°C = ${Math.round(grados * (9 / 5) + 32)}°F`);
	}
	if (unidad === "F") {
		return console.info(
			`${grados}°F = ${Math.round((grados - 32) * (5 / 9))}°C`
		);
	}
};
convertirGrados();
convertirGrados("2");
convertirGrados(2);
convertirGrados(2, true);
convertirGrados(0, "Hola");
convertirGrados(0, "E");
convertirGrados(0, "C");
convertirGrados(32, "F");
 */

/*       Ejercicio 15       */

// Version CoachGPT-JavaScript

/* const miFuncion = (numero, base) => {
	if (base === 2) {
		const decimal = parseInt(numero, 2);
		return `${decimal} base 10`;
	} else if (base === 10) {
		const binario = numero.toString(2);
		return `${binario} base 2`;
	} else {
		return "Base no válida. Por favor, ingresa 2 para binario o 10 para decimal.";
	}
};

console.log(miFuncion(100, 2)); // Salida: 4 base 10
console.log(miFuncion(4, 10)); // Salida: 100 base 2 */

/*       Ejercicio 16       */

/* const miFuncion = (precio = undefined, descuento = undefined) => {
	let resultado = ((precio * descuento) / 100) * -1 + precio;
	if (precio === undefined && descuento === undefined)
		return console.log(`Ingresa el precio y el descuento`);
	if (precio === undefined) return console.log(`Ingresa el precio`);
	if (descuento === undefined)
		return console.log(`Ingresa el descuento en % sin signos`);
	if (typeof precio !== "number")
		return console.error(`El valor "${precio}" ingresado, NO es un número`);
	if (typeof descuento !== "number")
		return console.error(`El valor "${descuento}" ingresado, NO es un número`);
	return console.log(
		`El ${descuento}% de descuento de $${precio} nos da un total a pagar de $${resultado}`
	);
};

miFuncion(1000, 20);
 */

/*       Ejercicio 17       */

//console.log(Date.parse(1984, 4, 23));
/* let ingresoFecha = (1984, 4, 23);
let fecha = Date.parse(ingresoFecha);

console.log(Date.now()); */
/* const miFuncion = (new Date(undefined)) =>


miFuncion(new Date());
 */

// Version JonMircha

/* const miFuncion = (fecha = undefined) => {
	if (fecha === undefined) return console.log(`No ingresaste la fecha`);
	if (!(fecha instanceof Date))
		return console.error("El valor ingresado no es una fecha");
	let hoyMenosFecha = new Date().getTime() - fecha.getTime();
	let tiempoEnMs = 1000 * 60 * 60 * 24 * 365;
	let aniosHumanos = Math.floor(hoyMenosFecha / tiempoEnMs);

	return Math.sign(aniosHumanos) === -1
		? console.info(
				`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`
		  )
		: Math.sign(aniosHumanos) === 1
		? console.info(
				`Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}.`
		  )
		: console.info(`Estamos en el año actual ${fecha.getFullYear()}.`);
};

miFuncion();
miFuncion({});
miFuncion(false);
miFuncion(new Date());
miFuncion(new Date(1984, 4, 23));
miFuncion(new Date(1884, 4, 23));
miFuncion(new Date(2084, 4, 23));
 */

/*       Ejercicio 18       */

/* const contarVocales = (texto = "") => {
	if (typeof texto !== "string")
		return console.error(
			`El valor "${texto}" ingresado, NO es una cadena de texto`
		);
	if (texto === "") return console.error(`No ingresaste ningun texto`);
	let vocales = texto
		.toLocaleLowerCase()
		.replace(/[^aeiouáéíóúàèìòù]/g, "").length;
	let consonantes = texto
		.toLocaleLowerCase()
		.replace(/[aeiouáéíóúàèìòù1234567890]/g, "").length;
	return console.info(
		`"${texto}" contiene ${vocales} vocales y ${consonantes} consonantes.`
	);
};

contarVocales();
contarVocales(1234);
contarVocales("12454");
contarVocales("Azul");
 */

/*       Ejercicio 19       */
// Buscar expresiones regulares para validar emails y Nombre/Apellido

/* const miFuncion = (nombreApellido = "") => {
	if (nombreApellido === "")
		return console.error("No ingresaste ningun Nombre ni Apellido");
	const nombreApellidoTest = /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(nombreApellido);

	if (nombreApellidoTest === true)
		return console.log(
			`Verdadero, el nombre ingresado ${nombreApellido} cumple con los parametros indicados`
		);
	if (nombreApellidoTest === false)
		return console.log(
			`Falso, el valor ingresado ${nombreApellido} no cumple con los parametros indicados`
		);
}; */

//Version ChatGPT
/* const miFuncion = (nombreApellido = "") => {
	if (nombreApellido === "")
		return console.error("No ingresaste ningun Nombre ni Apellido");
	const nombreApellidoTest = /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(nombreApellido);

	if (nombreApellidoTest) {
		return console.log(
			`Verdadero, el nombre ingresado ${nombreApellido} cumple con los parametros indicados`
		);
	} else {
		return console.log(
			`Falso, el valor ingresado ${nombreApellido} no cumple con los parametros indicados`
		);
	}
};
miFuncion();
miFuncion("Jonathan MirCha");
miFuncion("John123");
 */

/*       Ejercicio 20       */

/* const validarCorreo = (correo = "") => {
	if (correo === "") {
		console.error("No ingresaste ningún correo");
		return;
	}

	const patronCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	if (patronCorreo.test(correo)) {
		console.log(`El correo ${correo} es válido`);
	} else {
		console.log(`El correo ${correo} no es válido`);
	}
};

validarCorreo();
validarCorreo("ejemplo@dominio.com");
validarCorreo("correo_invalido");
 */
// Expresion regular que usa JonMircha para validar correos  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
//201.236.235.219

/*       Ejercicio 21       */
//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado,
//pe.mi_funcion([1, 4, 5]) devolverá[1, 16, 25].

// Mi version
/* const miFuncion = (arreglo = undefined) => {
	arreglo.forEach(function (el) {
		console.log(el * el);
	});
};
miFuncion([1, 4, 5]); */

// Version CoachGPT-JavaScript 1
/* 
function miFuncion(arrayNumerico) {
	let resultado = [];

	for (let i = 0; i < arrayNumerico.length; i++) {
		let cuadrado = arrayNumerico[i] ** 2;
		resultado.push(cuadrado);
	}

	return resultado;
}

console.log(miFuncion([1, 4, 5])); // Output: [1, 16, 25] */

// Version CoachGPT-JavaScript 2 basado en una mejora a mi codigo

//Version Kevin con validaciones
/* const miFuncion = (arreglo) => {
	if (Array.isArray(arreglo) === false) {
		console.error("El valor ingresado NO es un arreglo");
	}
	if (arreglo.length === 0) {
		console.info("Ingresa un arreglo para continuar");
	}
	if (Array.isArray(arreglo) === true && arreglo.length > 0) {
		const resultado = arreglo.map((el) => el ** 2);
		return console.log(resultado);
	}
};

miFuncion([1, 4, 5]); // Output: [1, 16, 25] */

//Version CoachGPT-JavaScript con validaciones

/* const miFuncion = (arreglo) => {
	if (!Array.isArray(arreglo)) {
		console.error("El valor ingresado NO es un arreglo");
		return;
	}

	if (arreglo.length === 0) {
		console.info("Ingresa un arreglo para continuar");
		return;
	}

	if (!arreglo.every((el) => typeof el === "number")) {
		console.error("El arreglo contiene elementos que no son números");
		return;
	}

	const hasDuplicates = new Set(arreglo).size !== arreglo.length;
	if (hasDuplicates) {
		console.warn("El arreglo contiene elementos repetidos");
		return;
	}

	const hasNegativeNumbers = arreglo.some((el) => el < 0);
	if (hasNegativeNumbers) {
		console.warn("El arreglo contiene elementos negativos");
		return;
	}

	const resultado = arreglo.map((el) => el ** 2);
	console.log(resultado);
};

miFuncion([1, 4, 5]); // Output: [1, 16, 25]
miFuncion([1, 4, "5"]); // Error: El arreglo contiene elementos que no son números
miFuncion([]); // Info: Ingresa un arreglo para continuar
miFuncion([1, 4, 5, 4]); // Warning: El arreglo contiene elementos repetidos
miFuncion([-1, 2, 3]); // Warning: El arreglo contiene elementos negativos
 */

//Solucion profe Jonmircha

/* const devolverCuadrados = (arr = undefined) => {
	if (arr === undefined) return console.warn("No Ingresaste un arreglo de numeros");
	if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
	if (arr.length === 0) return console.error("El arreglo esta vacio");
	for (let num of arr) {
		if (typeof num !== "number")return console.error(`El valor "${num}" ingresado, NO es un numero`);
	}
	const newArr = arr.map((el) => el * el);
	return console.info(`Arreglo original: [${arr}],\nArreglo elevado al cuadrado: [${newArr}]`);
};
devolverCuadrados();
devolverCuadrados(true);
devolverCuadrados(0);
devolverCuadrados([]);
devolverCuadrados([1, "3", 4, {}]);
devolverCuadrados([1, 4, {}]);
devolverCuadrados([1, 4, 8]); */

/*       Ejercicio 22       */

/* const encontrarNumeroMaximoYMinimo = (array) => {
	let numeroMaximo = -Infinity;
	let numeroMinimo = Infinity;

	for (let i = 0; i < array.length; i++) {
		if (array[i] > numeroMaximo) {
			numeroMaximo = array[i];
		}
		if (array[i] < numeroMinimo) {
			numeroMinimo = array[i];
		}
	}

	return [numeroMaximo, numeroMinimo];
};

// Ejemplo de uso
const array = [100, 4, 5, -99, -60];
const resultado = encontrarNumeroMaximoYMinimo(array);
console.log(resultado); // Output: [99, -60] */

//Solucion profe Jonmircha

/* const arrayMinMax = (arr = undefined) => {
	if (arr === undefined) return console.warn("No Ingresaste un arreglo de numeros");
	if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
	if (arr.length === 0) return console.error("El arreglo esta vacio");
	for (let num of arr) {
		if (typeof num !== "number")return console.error(`El valor "${num}" ingresado, NO es un numero`);
	}
	return console.info(`Arreglo original: \n[${arr}]\nValor mayor: [${Math.max(...arr)}]\nValor menor: [${Math.min(...arr)}]`)
}

arrayMinMax();
arrayMinMax(false);
arrayMinMax([]);
arrayMinMax([2,3,true]);
arrayMinMax([1, 4, 5, 99, -60]); */

/*       Ejercicio 23       */

/* const miFuncion = (arreglo) => {
	const pares = [];
	const impares = [];

	arreglo.forEach((num) => {
		if (num % 2 === 0) {
			pares.push(num);
		} else {
			impares.push(num);
		}
	});

	const resultado = {
		pares: pares,
		impares: impares,
	};

	return console.log(resultado);
};

miFuncion([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
 */

//Solucion profe Jonmircha

/* const separarParesImpares = (arr = undefined) => {
	if (arr === undefined) return console.warn("No Ingresaste un arreglo de numeros");
	if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
	if (arr.length === 0) return console.error("El arreglo esta vacio");
	for (let num of arr) {
		if (typeof num !== "number")return console.error(`El valor "${num}" ingresado, NO es un numero`);
	}
	return console.info({
	pares: arr.filter(num=>num %2===0),
	impares: arr.filter(num=>num %2===1),
	})
}
separarParesImpares();
separarParesImpares("Hola");
separarParesImpares([]);
separarParesImpares([2,4,"j"]);
separarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); */

/*       Ejercicio 24       */
//Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
//el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, 
//pe.miFuncion([7, 5, 7, 8, 6]) devolverá { asc: [5, 6, 7, 7, 8], desc: [8, 7, 7, 6, 5] }.

//Primer intento

/* const miFuncion = (arr = undefined) => {
	if (arr === undefined) return console.warn("No Ingresaste un arreglo de numeros");
	if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
	if (arr.length === 0) return console.error("El arreglo esta vacio");
	for (let num of arr) {
		if (typeof num !== "number")return console.error(`El valor "${num}" ingresado, NO es un numero`);
	}
	return console.info({
		asc: [...arr].sort((a,b)=>a-b),
		desc: [...arr].sort((a,b)=>b-a),
	})
}

miFuncion();
miFuncion("Hola");
miFuncion([]);
miFuncion([2,4,"j"]);
miFuncion([7, 5, 7, 8, 6]) */

//Version Profe Jonmircha

/* const ordernarArreglo = (arr = undefined) => {
	if (arr === undefined) return console.warn("No Ingresaste un arreglo de numeros");
	if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
	if (arr.length === 0) return console.error("El arreglo esta vacio");
	for (let num of arr) {
		if (typeof num !== "number")return console.error(`El valor "${num}" ingresado, NO es un numero`);
	}
	return console.info({
		arr,
		asc: arr.map(el => el).sort(),
		desc: arr.map(el => el).sort().reverse(),
	});
}
ordernarArreglo();
ordernarArreglo("Hola");
ordernarArreglo([]);
ordernarArreglo([2,4,"j"]);
ordernarArreglo([7, 5, 7, 8, 6]) */



/*       Ejercicio 25       */

// Programa una función que dado un arreglo de elementos, elimine los duplicados, 
//pe.miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá["x", 10, 2, "10", true].

//Version 1
/* const miFuncion = (arr = undefined) => {
	if (arr === undefined) return console.warn("No Ingresaste un arreglo de numeros");
	if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
	if (arr.length === 0) return console.error("El arreglo esta vacio");
	const arregloSinRepetidos = arr.filter((valor, indice) => {
    return arr.indexOf(valor) === indice;
 	});

  return console.log(arregloSinRepetidos);
;
}
miFuncion();
miFuncion("Hola");
miFuncion([]);
miFuncion([2, 4, "j"]);
miFuncion(["x", 10, "x", 2, "10", 10, true, true]); */

//Version 2

/* const miFuncion = (arr = undefined) => {
  if (arr === undefined) return console.warn("No ingresaste un arreglo de números");
  if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo está vacío");
  const arregloSinRepetidos = arr.filter((valor, indice) => {
    return arr.indexOf(valor) === indice;
  });

  console.log(arregloSinRepetidos);
}

miFuncion();
miFuncion("Hola");
miFuncion([]);
miFuncion([2, 4, "j"]);
miFuncion(["x", 10, "x", 2, "10", 10, true, true]); */



//Version CoachGPT-JavaScript
/* const eliminarRepetidos = (arreglo) => {
  const arregloSinRepetidos = arreglo.filter((valor, indice) => {
    return arreglo.indexOf(valor) === indice;
  });

  return arregloSinRepetidos;
};

const arregloOriginal = ["x", 10, "x", 2, "10", 10, true, true];
const resultado = eliminarRepetidos(arregloOriginal);
console.log(resultado); // Output: [1, 2, 3, 4, 5, 6]
 */

//Version Profe Jonmircha

/* const quitarDuplicados = (arr = undefined)=>{
	if (arr === undefined) return console.warn("No Ingresaste un arreglo de numeros");
	if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
	if (arr.length === 0) return console.error("El arreglo esta vacio");
	if (arr.length === 1) return console.error("El arreglo debe tener al menos 2 elementos");
	//Version 1
	/*return console.info({
		original: arr,
		sinDuplicados: arr.filter((value, index, self) => self.indexOf(value) === index)
	})*/
	//Version 2 con nuevo tipo de dato de ECMAScript `Set`
/* 	return console.info({
		original: arr,
		sinDuplicados: [... new Set(arr)]
		})
}
quitarDuplicados();
quitarDuplicados({});
quitarDuplicados([]);
quitarDuplicados([2]);
quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]); */


/*       Ejercicio 26       */

//Programa una función que dado un arreglo de números obtenga el promedio, 
//pe.promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]) devolverá 4.5.

/* const miFuncion = (arr = undefined) => {
	if (arr === undefined) return console.warn("No Ingresaste un arreglo de numeros");
	if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
	if (arr.length === 0) return console.error("El arreglo esta vacio");
	for (let num of arr) {
		if (typeof num !== "number")return console.error(`El valor "${num}" ingresado, NO es un numero`);
	}
	const sum = arr.reduce((p, c) => c += p);
	const avg = sum / arr.length;

	return console.log(`El promedio del arreglo ingresado [${arr}] es igual a ${avg}`)
}

miFuncion();
miFuncion("Hola");
miFuncion([]);
miFuncion([2,4,"j"]);
miFuncion([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]); */

//Version Profe Jonmircha

/* const promedio = (arr = undefined) =>{
	if (arr === undefined) return console.warn("No Ingresaste un arreglo de numeros");
	if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
	if (arr.length === 0) return console.error("El arreglo esta vacio");
	for (let num of arr) {
		if (typeof num !== "number")return console.error(`El valor "${num}" ingresado, NO es un numero`);
	}
	
	return console.info(
		arr.reduce((total,num,index,arr)=>{
			total += num;
			if (index===arr.length-1){
				return `El promedio de ${arr.join("+")} es ${total / arr.length}`;	
			} else {
				return total;
			}
		})
	)
}

promedio();
promedio("Hola");
promedio([]);
promedio([2, 4, "j"]);
promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]); */

/*       Ejercicio 27       */

/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: 
	id de la película en IMDB, 
	titulo, 
	director, 
	año de estreno, 
	país o países de origen, 
	géneros y calificación en IMBD.

  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: 
Action, 
Adult, 
Adventure, 
Animation, 
Biography, 
Comedy, 
Crime, 
Documentary ,
Drama, 
Family, 
Fantasy, 
Film Noir, 
Game-Show, 
History, 
Horror, 
Musical, 
Music, 
Mystery, 
News, 
Reality-TV, 
Romance, 
Sci-Fi, 
Short, 
Sport, 
Talk-Show, 
Thriller, 
War, 
Western.
 */

//Primer Intento

//el constructor es un método especial que se ejecuta en el momento de instanciar la clase

/* class Pelicula {
	constructor(id, title, dir, year, country, genre, rating) {
		this.id = id;
		this.title = title;
		this.dir = dir;
		this.year = year;
		this.country = country;
		this.genre = genre;
		this.rating = rating;

		
		//Expresiones Regulares
		const expRegId = /^[a-zA-Z]{2}\d{7}$/;
		const expRegTitle = /^[a-zA-Z]{100}/;
		const expRegDir = /^[a-zA-Z]{50}/;
		const expRegYear = /^\d{4}$/;
		
		if (!this.id|| !this.title || !this.dir || !this.year || !this.country || !this.genre || !this.rating ) {
			throw new Error("Todos los parametros son obligatorios");
		}
		if (!expRegId.test(this.id)) {
			throw new Error(`El valor ingresado como ID "${this.id}" no cumple con los parametros minimos, ejemplo de parametro correcto "tt2964642"`);
		}
		if (expRegTitle.test(this.title)) {
			throw new Error("El titulo no puede exceder los 100 caracteres");
		}
		if (expRegDir.test(this.dir)) {
			throw new Error("El nombre del director no puede exceder los 50 caracteres");
		}
		if (!expRegYear.test(this.year)) {
			throw new Error("El año debe incluir 4 digitos en formato de numero");
		}
		if (!Array.isArray(this.country)) {
			throw new Error(`El pais debe ser ingresado entre llaves y con comillas ["ejemplo"]`);
		}
		if (!(Array.isArray(this.genre))) {
			throw new Error(`El genero debe ser ingresado entre llaves y con comillas ["ejemplo"]`);
		}
		if (invalidGenres.length > 0) {
			throw new Error(`Hay generos que no son validos, los siguientes géneros ingresados no son válidos: ${invalidGenres.join(", ")}`);
		}
		
	}
	static getGenerosAceptados() {
		//Generos de Peliculas
		const arrayGenre = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
		const invalidGenres = this.genre.filter(g => !arrayGenre.includes(g));
	}
}
const test = new Pelicula("tt2964642","Test","Kev","1990",["Col"],["Adventure","Talk-Show"],"10")

console.log(test); */


// Version ChatGPT+Mi Version

/* class Pelicula {
	constructor(id, title, dir, year, country, genre, rating) {
		this.id = id;
		this.title = title;
		this.dir = dir;
		this.year = year;
		this.country = country;
		this.genre = genre;
		this.rating = rating;

		
		//Expresiones Regulares
		const expRegId = /^[a-zA-Z]{2}\d{7}$/;
		const expRegTitle = /^[a-zA-Z]{100}/;
		const expRegDir = /^[a-zA-Z]{50}/;
		const expRegYear = /^\d{4}$/;
		const expRegRating = /^(10(\.0)?|[0-9](\.[0-9])?)$/;

		if (!this.id|| !this.title || !this.dir || !this.year || !this.country || !this.genre || !this.rating ) {
			throw new Error("Todos los parametros son obligatorios");
		}
		if (!expRegId.test(this.id)) {
			throw new Error(`El valor ingresado como ID "${this.id}" no cumple con los parametros minimos, ejemplo de parametro correcto "tt2964642"`);
		}
		if (expRegTitle.test(this.title)) {
			throw new Error("El titulo no puede exceder los 100 caracteres");
		}
		if (expRegDir.test(this.dir)) {
			throw new Error("El nombre del director no puede exceder los 50 caracteres");
		}
		if (!expRegYear.test(this.year)) {
			throw new Error("El año debe incluir 4 digitos en formato de numero");
		}
		if (!Array.isArray(this.country)) {
			throw new Error(`El pais debe ser ingresado entre llaves y con comillas ["ejemplo"]`);
		}
		if (!(Array.isArray(this.genre))) {
			throw new Error(`El genero debe ser ingresado entre llaves y con comillas ["ejemplo"]`);
		}
		if (!this.constructor.validarGeneros(this.genre)) {
      		throw new Error(`Hay generos que no son validos, los siguientes géneros ingresados no son válidos: ${this.constructor.invalidGenres.join(", ")}\n\nLos generos aceptados son: \n\n${Pelicula.getGenerosAceptados()}`);
		}
		if (!expRegRating.test(this.rating)) {
  			throw new Error("La calificación debe ser un número entre 0 y 10, pudiendo ser decimal de una posición");
		}
	}
	static validarGeneros(genres) {
	//Generos Validos
    const arrayGenre = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    this.invalidGenres = genres.filter(g => !arrayGenre.includes(g));
    return this.invalidGenres.length === 0;
	}
	//Shortcut de generos aceptados
  	static getGenerosAceptados() {
    const arrayGenre = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    return arrayGenre;
		}
	//Metodo creador de ficha tecnica de peliculas
	obtenerFichaTecnica() {
		return `
			Título: ${this.title}
			Director: ${this.dir}
			Año de estreno: ${this.year}
			Países de origen: ${this.country.join(", ")}
			Género: ${this.genre.join(", ")}
			Calificación: ${this.rating}`
			;
	}
}
//Arreglo con informacion de 3 peliculas en forma de objeto cada uno
const peliculas = [
  {
    id: "tt2964642",
    title: "Película 1",
    dir: "Director 1",
    year: "2021",
    country: ["País 1"],
    genre: ["Action", "Adventure"],
    rating: "8.5"
  },
  {
    id: "tt1234567",
    title: "Película 2",
    dir: "Director 2",
    year: "2022",
    country: ["País 2"],
    genre: ["Animation", "Biography"],
    rating: "7.9"
  },
  {
    id: "tt9876543",
    title: "Película 3",
    dir: "Director 3",
    year: "2023",
    country: ["País 3"],
    genre: ["Comedy", "Crime"],
    rating: "9.2"
  }
];

for (let i = 0; i < peliculas.length; i++) {
  const pelicula = new Pelicula(
    peliculas[i].id,
    peliculas[i].title,
    peliculas[i].dir,
    peliculas[i].year,
    peliculas[i].country,
    peliculas[i].genre,
    peliculas[i].rating
  );
  
  const fichaTecnica = pelicula.obtenerFichaTecnica();
  console.log(fichaTecnica);
} */


//Version Profe Jon Mircha
/* class Pelicula {
	constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
		this.id = id;
		this.titulo = titulo;
		this.director = director;
		this.estreno = estreno;
		this.pais = pais;
		this.generos = generos;
		this.calificacion = calificacion;
		
		this.validarIMDB(id)
		this.validarTitulo(titulo)
		this.validarDirector(director)
		this.validarEstreno(estreno)
		this.validarPais(pais)
		this.validarGeneros(generos)
		this.validarCalificacion(calificacion)
	}

	static get listaGeneros() {
		return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
	}

	static generosAceptados() {
		return console.info(`Los generos aceptados son:\n${Pelicula.listaGeneros.join(", ")}.`)
	}
		
	validarCadena(propiedad, valor) {
		if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);
		if (typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`);
		return true;
	}
	
	validarLongitudCadena(propiedad, valor, longitud) {
		if (valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el número de caracteres permitidos \nLimite: (${longitud}).`);
		
		return true;
	}
	validarNumero(propiedad, valor) {
		if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);

		if (typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado, NO es un numero`);

		return true;
	}
	validarArreglo(propiedad, valor) {
		if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);
		if (!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado, NO es un arreglo`);
		if (valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos`);
		for (let cadena of valor) {
			if (typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);
		}
		return true;
	}
	validarIMDB(id) {
		if (this.validarCadena("IMDB id", id))
			if (!(/^([a-z]){2}([0-9]){7}$/.test(id))) return console.error(`IMDB id "${id}" no es válido, debe tener 9 caracteres, los 2 primeros letras minúsculas, los 7 restantes números.`);
	}
	validarTitulo(titulo) {
		if (this.validarCadena("Titulo", titulo))
			this.validarLongitudCadena("Titulo", titulo, 100)
	}
	validarDirector(director) {
		if (this.validarCadena("Director", director))
			this.validarLongitudCadena("Director", director, 50)
	}
	validarEstreno(estreno) {
		if (this.validarNumero("Fecha de Estreno", estreno))
			if (!(/^([0-9]){4}$/.test(estreno))) return console.error(`La fecha de estreno "${estreno}" no es válida, debe ser un numero de 4 digitos.`);
	}
	validarPais(pais) {
		this.validarArreglo("País", pais)
	}
	validarGeneros(generos) {
		if (this.validarArreglo("Generos", generos)) {
			for (let genero of generos) {
				//console.log(genero,Pelicula.listaGeneros.includes(genero))
				if (!Pelicula.listaGeneros.includes(genero)) {
					console.error(`Genero(s) incorrectos "${generos.join(", ")}".`);
					Pelicula.generosAceptados();
				}
			}
		}
	}
	validarCalificacion(calificacion) {
		if (this.validarNumero("Calificacion", calificacion))
			return (calificacion < 0 || calificacion > 10)
				? console.error(`La calificacion tiene que estar en un rango entre 1 a 10`)
				: this.calificacion = calificacion.toFixed(1);
	}
	fichaTecnica() {
		return console.log(`Título: ${this.titulo}\nDirector: ${this.director}\nAño de estreno: ${this.estreno}\nPaíses de origen: ${this.pais.join("-")}\nGénero: ${this.generos.join(", ")}\nCalificación: ${this.calificacion}\nIMDB Id: "${this.id}"`)
	}
} */

/* const misPelis = [
  {
	id: "tt0758758",
	titulo: "Into the Wild",
	director: "Sean Penn",
	estreno: 2007,
	pais: ["USA"],
	generos: ["Adventure", "Biography", "Drama"],
	calificacion: 8.1
  },
  {
	id: "tt0479143",
	titulo: "Rocky Balboa",
	director: "Sylvester Stallone",
	estreno: 2006,
	pais: ["USA"],
	generos: ["Action", "Drama", "Sport"],
	calificacion: 8.1
  },
  {
	id: "tt0468569",
	titulo: "The Dark Knight",
	director: "Christopher Nolan",
	estreno: 2008,
	pais: ["USA", "UK"],
	generos: ["Action", "Crime", "Drama"],
	calificacion: 9.0
  }
];

misPelis.forEach(el => new Pelicula(el).fichaTecnica()); */

//Pelicula.generosAceptados();
/* const peli = new Pelicula({
	id: "tt1234567",
	titulo: "Test",
	director: "Kev",
	estreno: 1994,
	pais: ["Colombia"],
	generos: ["Adventure", "Action"],
	calificacion: 9.789
})
peli.fichaTecnica(); */
