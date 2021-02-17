/* Facundo Berges

Ejercicio 4:
Al presionar el botón pedir un número entre 0 y 9 inclusive.*/

function mostrar()
{
	let numeroIngresado;

	numeroIngresado=prompt("Ingrese un número entre 0 y 9 (ambos incluidos): ");

	while(isNaN(numeroIngresado)==true || numeroIngresado>9 || numeroIngresado<0)
	{
		numeroIngresado=prompt("El número ingresado esta fuera del rango permitido, favor de reingresar un número entre 0 y 9 (ambos incluidos): ");
	}

	document.getElementById("txtIdNumero").value="El número ingresado fue "+numeroIngresado;
}//FIN DE LA FUNCIÓN