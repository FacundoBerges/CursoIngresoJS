/* Facundo Berges

Ejercicio 8:
Al presionar el botón pedir números hasta que el usuario quiera, sumar los que son positivos y 
multiplicar los negativos. */
/*EJERCICIO ORIGINAL
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
		while(isNaN(numeroIngresado)==true)
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
}//FIN DE LA FUNCIÓN     FIN DEL EJERCICIO ORIGINAL*/


// Facundo Berges
// EJERCICIO DE PEDIR EDAD Y NOMBRE Y MOSTRAR EL MAYOR Y MENOR 
//"A- edad y nombre , informar el nombre de la persona mas vieja y la mas joven."
function mostrar()
{
	var respuesta;
	var edadIngresada;
	var nombreIngresado;
	var edadMayor;
	var edadMenor;
	var nombreMayor;
	var nombreMenor;
	var banderaPrimerIngreso;

	respuesta="si";
	banderaPrimerIngreso=true;

	while(respuesta=="si")
	{
		edadIngresada=prompt("Ingrese una edad: ");
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada)==true || edadIngresada<0 || edadIngresada>110)
		{
			edadIngresada=prompt("Error. Ingrese una edad: ");
			edadIngresada=parseInt(edadIngresada);
		}
		nombreIngresado=prompt("Ingrese nombre: ");
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("Error. Ingrese nombre: ");
		}

		if(banderaPrimerIngreso==true)
		{
			edadMayor=edadIngresada;
			edadMenor=edadIngresada;
			nombreMayor=nombreIngresado;
			nombreMenor=nombreIngresado;
			banderaPrimerIngreso=false;
		}
		else
		{
			if(edadIngresada<edadMenor)
			{
				edadMenor=edadIngresada;
				nombreMenor=nombreIngresado;
			}
			if(edadIngresada>edadMayor)
			{
				edadMayor=edadIngresada;
				nombreMayor=nombreIngresado;
			}
		}
		respuesta=prompt("Escriba 'si' si desea continuar agregando números: ");
	}
	alert("La persona más vieja es "+nombreMayor+" con "+edadMayor+" años y la persona más joven es "+nombreMenor+" con "+edadMenor+" años.");
}