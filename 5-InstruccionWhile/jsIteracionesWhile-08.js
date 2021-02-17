/* Facundo Berges

Ejercicio 8:
Al presionar el botón pedir números hasta que el usuario quiera, sumar los que son positivos y 
multiplicar los negativos. */

function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var contadorNegativos;

	contador=0;
	sumaPositivos=0;
	contadorNegativos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta=="si")
	{
		contador=contador+1;
		numeroIngresado=prompt("Ingrese un número: ");
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN=(numeroIngresado)==true)
		{
			numeroIngresado=prompt("Error. Ingrese un número: ");
			numeroIngresado=parseInt(numeroIngresado);
		}
		if(numeroIngresado<0)
		{
			multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;
			contadorNegativos=contadorNegativos+1;
		}
		else
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
		}
		respuesta=prompt("Escriba 'si' si desea continuar agregando números: ");
	}

	txtIdSuma.value=sumaPositivos;
	if(contadorNegativos==0)
	{
		multiplicacionNegativos=0;
	}
	txtIdProducto.value=multiplicacionNegativos;
}//FIN DE LA FUNCIÓN