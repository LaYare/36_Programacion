// Escribe aquí tu codigo Javascript
var numero1 = parseIn(prompt('Ingrese el primer numero'));
var numero2 = parseIn(promppt('Ingrese el segundo numero'));
if (numero1>numero2) {
	suma = numero1 + numero2;
	resta = numero1 - numero2;
	console.log(suma);
	console.log(resta);
}else if (numero1===numero2) {
	alert('Son iguales');
}else{
	multiplicar = numero1 * numero2;
	dividir = numero1 / numero2;
	console.log(multiplicar);
	console.log(dividir);
}


