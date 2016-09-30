// Escribe aquí tu codigo Javascript
var acredoresTotales = 0;
do{
	var numero_de_cuenta = parseInt(prompt('Ingrese numero de cuenta, si ingresa un numero negativo el programa terminará'));
	var nombre_de_cliente = prompt('Ingrese el nombre del cliente');
	var saldo_actual = parseInt(prompt('Ingrese el saldo actual del cliente'));
	if (saldo_actual>0) {
		console.log('Numero de cuenta del cliente: '+ numero_de_cuenta +' Nombre del cliente'+ nombre_de_cliente+' El cliente es Acreedor \n');
		acredoresTotales = acredoresTotales + 1;
	}else if (saldo_actual<0) {
		console.log('Numero de cuenta del cliente: '+ numero_de_cuenta +' Nombre del cliente'+ nombre_de_cliente+' El cliente es Deudor y debe: $'+saldo_actual+' pesos \n');
	}else{
		console.log('Numero de cuenta del cliente: '+ numero_de_cuenta +' Nombre del cliente'+ nombre_de_cliente+' El cliente tiene saldo Nulo \n');
	}
}while(numero_de_cuenta>0);
console.log("El numero total de acredores es: "+acredoresTotales);


