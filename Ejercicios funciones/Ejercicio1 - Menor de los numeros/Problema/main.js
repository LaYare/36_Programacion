// Escribe aquí tu codigo Javascript
var numero1 = parseInt(prompt('Ingrese el primer numero'));
var numero2 = parseInt(prompt('Ingrese el segundo numero'));
var numero3 = parseInt(prompt('Ingrese el tercer numero'));

function elNumeroMenor(numero1,numero2,numero3) {
	if (numero1<numero2 && numero1<numero3) {
		console.log('Este numero es el menor: '+numero1);
	}else if (numero2<numero1 && numero2<numero3) {
		console.log('Este numero es el menor: '+numero2);
	}else{
		console.log('Este numero es el menor: '+numero3);
	}
}
elNumeroMenor(numero1,numero2,numero3);


