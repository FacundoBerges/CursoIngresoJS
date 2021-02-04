/*
Facundo Berges

Ejercicio 5.-
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	/*
	let nombreIngresado; //defino las variables a utilizar
	let edadIngresada;
	
	nombreIngresado=document.getElementById("txtIdNombre").value; //busco el valor según lo ingresado en el html
	edadIngresada=document.getElementById("txtIdEdad").value;
	
	textoNombreEdad= "Su nombre es " + nombreIngresado + " y tiene " + edadIngresada + " años."; //concateno la información anterior en formato de oración

	alert(textoNombreEdad);
	/*


	/*Ejercicio 5 BIS:
	se debe mostrar un mensaje: "Perez , usted se llama jose y tiene 66 años."
	se debe optener el apellido , de la manera que puedan
	*/
	let nombre;
	let apellido;
	let edad;

	nombre=document.getElementById("txtIdNombre").value;
	edad=document.getElementById("txtIdEdad").value;
	apellido=prompt("Ingrese su apellido: ");

	alert(apellido + ", usted se llama " + nombre + " y tiene " + edad + " años.");
}
