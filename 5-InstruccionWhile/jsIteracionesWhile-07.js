/* Facundo Berges

Ejercicio 7:
Al presionar el botón pedir números hasta que el USUARIO QUIERA e informar la suma acumulada y el promedio.*/

function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;

	contador=0;
	acumulador=0;
	respuesta="si";

	while(respuesta=="si")
	{
		contador=contador+1;
		numeroIngresado=prompt("Ingrese un número: ");
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("Error. Ingrese un número: ");
			numeroIngresado=parseInt(numeroIngresado);
		}
		acumulador=acumulador+numeroIngresado;
		respuesta=prompt("Escriba 'si' si desea continuar agregando números: ");
	}
	promedio=acumulador/contador;

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;
}//FIN DE LA FUNCIÓN