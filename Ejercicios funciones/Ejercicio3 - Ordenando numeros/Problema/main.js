// Escribe aquí tu codigo Javascript
var numero1 = parseInt(prompt('Ingrese el primer numero'));
var numero2 = parseInt(prompt('Ingrese el segundo numero'));
var numero3 = parseInt(prompt('Ingrese el tercer numero'));

function ordenandoNumeros(numero1,numero2,numero3) {
	if (numero1<numero2 && numero1<numero3 && numero2<numero3) {
		console.log(numero1,numero2,numero3);
	} else if (numero1>numero2 && numero3 > numero2 && numero3 > numero1) {
			console.log(numero2,numero1,numero3);
	} else if (numero3<numero2 && numero3< numero1 && numero2<numero1){
			console.log(numero3,numero2,numero1);
	} else if (numero1>numero2 && numero1>numero3 && numero3 > numero2){
		console.log(numero2,numero3,numero1);
	} else if(numero1<numero2 && numero2>numero3 && numero3<numero1){
		console.log(numero3,numero1,numero2);
	} else if(numero1<numero2 && numero2>numero3 && numero1<numero3){
		console.log(numero1,numero3,numero2);
	}
}

ordenandoNumeros(numero1,numero2,numero3);
