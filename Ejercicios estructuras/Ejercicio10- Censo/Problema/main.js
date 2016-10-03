// Escribe aquí tu codigo Javascriptvar k = 0;
var hombres = 0;
var mujeres = 0;
var edades = 0;
do{
	var documento = parseInt(prompt('Ingrese el numero de documento, ingrese 0 para terminar el programa'));
	console.log('Número de documento: '+documento);
	var sexo = prompt('Ingrese el sexo, femenino o masculino');
	console.log('Sexo: '+sexo);
	switch(sexo){
		case 'femenino':
		mujeres++;
		var edad = parseInt(prompt('Ingrese la edad'));
		console.log('La edad es: '+edad);
		break;
		
		case 'masculino':
		hombres++;
		var edad = parseInt(prompt('Ingrese la edad'));
		console.log('La edad es: '+edad);
		if (edad > 16 && edad < 65) {
			edades++;
		}	
		break;
	}
	
	k++;

}while(documento > 0);
k = k-1;
console.log('Cantidad total de personas censadas: '+k);
console.log('Cantidad de varones: '+hombres);
console.log('Cantidad de damitas: '+mujeres);
console.log('Cantidad de varones con edades entre 16 y 65 años: '+edades);

