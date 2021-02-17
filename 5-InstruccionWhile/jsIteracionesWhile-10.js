/* Facundo Berges

Ejercicio 10:
Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1- Suma de los negativos.
2- Suma de los positivos.
3- Cantidad de positivos.
4- Cantidad de negativos.
5- Cantidad de ceros.
6- Cantidad de números pares.
7- Promedio de positivos.
8- Promedios de negativos.
9- Diferencia entre positivos y negativos, (positivos-negativos). */

function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaPositivos;
	var sumaNegativos;
	var contadorPositivos;
	var contadorNegativos;
	var contadorDeCeros;
	var contadorNumerosPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;

	respuesta="si";
	sumaPositivos=0;
	sumaNegativos=0;
	contadorPositivos=0;
	contadorNegativos=0;
	contadorDeCeros=0;
	contadorNumerosPares=0;

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un número:");
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("Error. Ingrese un número:");
			numeroIngresado=parseInt(numeroIngresado);
		}

		if(numeroIngresado%2 == 0)
		{
			contadorNumerosPares=contadorNumerosPares+1;
		}

		if(numeroIngresado==0)
		{
			contadorDeCeros=contadorDeCeros+1;
		}
		else
		{
			if(numeroIngresado>0)
			{
				sumaPositivos=sumaPositivos+numeroIngresado;
				contadorPositivos=contadorPositivos+1;
			}
			else
			{
				sumaNegativos=sumaNegativos+numeroIngresado;
				contadorNegativos=contadorNegativos+1;
			}
		}

		respuesta=prompt("¿Desea continuar?");
	}//fin del while
	promedioPositivos=sumaPositivos/contadorPositivos;
	if(contadorPositivos==0)
	{
		promedioPositivos=sumaPositivos
	}

	promedioNegativos=sumaNegativos/contadorNegativos;
	if(contadorNegativos==0)
	{
		promedioNegativos=sumaNegativos
	}
	diferenciaPositivosNegativos=sumaPositivos+sumaNegativos;

	document.write("La suma de negativos es: "+sumaNegativos+". ");
	document.write("La suma de positivos es: "+sumaPositivos+". ");
	document.write("La cantidad de positivos ingresados es: "+contadorPositivos+". ");
	document.write("La cantidad de negativos ingresados es: "+contadorNegativos+". ");
	document.write("La cantidad de 0 ingresados es: "+contadorDeCeros+". ");
	document.write("La cantidad de números pares ingresados es: "+contadorNumerosPares+". ");
	document.write("El promedio de los números positivos ingresados es: "+promedioPositivos+". ");
	document.write("El promedio de los números negativos ingresados es: "+promedioNegativos+". ");
	document.write("La diferencia entre los números positivos y negativos ingresados es: "+diferenciaPositivosNegativos+".");
}//FIN DE LA FUNCIÓN