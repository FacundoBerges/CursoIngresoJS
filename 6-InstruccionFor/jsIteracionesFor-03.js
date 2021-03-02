/*Facundo Berges

Al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"*/

function mostrar()
{
	let cantidadIngresada;
	let contador;

	cantidadIngresada=prompt("Ingrese la cantidad de veces que quiere repetir el mensaje:");
	while(isNaN(cantidadIngresada)==true || cantidadIngresada<1)
	{
		cantidadIngresada=prompt("ERROR. Ingrese la cantidad de veces que quiere repetir el mensaje:");
	}

	for(contador=0;contador<cantidadIngresada;contador++)
	{
		alert("Hola UTN FRA");
	}
}