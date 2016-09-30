// Escribe aquí tu codigo Javascript
var suma1 = 0;
var suma2 = 0;
for(var i = 0; i < 3;i++){
	var lista1 = parseInt(prompt("ingrese el valor"));
	suma1 = suma1 + lista1;
}
for(var i = 0; i < 3;i++){
	var lista2 = parseInt(prompt("ingrese el valor"));
	suma2 = suma2 + lista2;
}
if(suma1>suma2){
	console.log("lista 1 es mayor");
}else if (suma2>suma1) {
	console.log("Lista 2 es mayor");
}else{
	console.log("Las listas son iguales");
}
