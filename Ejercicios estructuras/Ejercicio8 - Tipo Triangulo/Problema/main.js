// Escribe aquí tu codigo Javascript
var angulo = parseInt(prompt("El triangulo tiene un angulo de 90º o angulo recto? escribe 1 si es que lo tiene o 2 si esque no."));
if(angulo === 1){
	console.log("Es un triangulo rectangulo");
}else if (angulo === 2) {
	var lado1 = parseInt(prompt("Ingrese la medida del primer lado"));
	var lado2 = parseInt(prompt("Ingrese la medida del segundo lado"));
	var lado3 = parseInt(prompt("Ingrese la medida del tercer lado"));
	if (lado1 === lado3 && lado2 === lado3) {
		console.log("Es un triangulo equilátero");
	}else if (lado2 === lado3 && lado3 !== lado1 || lado1 === lado2 && lado2 !== lado3 || lado1 === lado3 && lado3 !== lado2) {
		console.log("Es un triangulo isósceles");
	}else {
		if (lado1 !== lado2 && lado1 !== lado3){
			
			console.log("Es un triangulo ecaleno");
			
		}
	}
}else{
	console.log("no es un triangulo");
}


