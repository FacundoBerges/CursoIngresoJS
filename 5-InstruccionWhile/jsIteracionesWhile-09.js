/* Facundo Berges

Ejercicio 9:
Al presionar el botón pedir números hasta que el usuario quiera, mostrar el número máximo y el número 
mínimo ingresado. *//*

function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un número:");
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("Error. Ingrese un número:");
			numeroIngresado=parseInt(numeroIngresado);
		}
		
		if(banderaDelPrimero=="es el primero")
		{
			numeroMinimo=numeroIngresado;
			numeroMaximo=numeroIngresado;
			banderaDelPrimero="Ya no es el primero";
		}
		else
		{
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}
		}
		respuesta=prompt("¿Desea continuar?");
	}

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN*/ //ORIGINAL

/* CON FOR

function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	//iniciar variables
	banderaDelPrimero=true;

	for(respuesta="si";respuesta=="si";respuesta=prompt("Escriba 'si' si desea seguir ingresando números:"))
	{
		numeroIngresado=prompt("Ingrese un número:");
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("Error. Ingrese un número:");
			numeroIngresado=parseInt(numeroIngresado);
		}
		
		if(banderaDelPrimero==true)
		{
			numeroMinimo=numeroIngresado;
			numeroMaximo=numeroIngresado;
			banderaDelPrimero=false;
		}
		else
		{
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}
		}
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
} FIN DE 'CON FOR'*/

// CON FOR Y SOLO el menor de los pares y el mayor de los negativos ...solo si hay

function mostrar()
{	// declarar variables
	var numeroIngresado;
	var numeroMaximoNegativo;
	var numeroMinimoPar;
	var respuesta;
	var banderaNegativo;
	var banderaPar;

	//iniciar variables
	banderaNegativo=true;
	banderaPar=true;

	for(respuesta="si";respuesta=="si";respuesta=prompt("Escriba 'si' si desea continuar:"))
	{
		numeroIngresado=prompt("Ingrese un número:");
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("Error. Ingrese un número:");
			numeroIngresado=parseInt(numeroIngresado);
		}
		
		if(numeroIngresado<0)
		{
			if(banderaNegativo==true || numeroIngresado>numeroMaximoNegativo)
			{
				banderaNegativo=false;
				numeroMaximoNegativo=numeroIngresado;
			}
		}

		if(numeroIngresado%2==0)
		{
			if(banderaPar==true || numeroIngresado<numeroMinimoPar)
			{
				banderaPar=false;
				numeroMinimoPar=numeroIngresado;
			}
		}
	}

	if(banderaPar==true)
	{
		numeroMinimoPar="No se ingresó ningún numero par.";
	}
	else
	{
		numeroMinimoPar="El menor número par ingresado es "+numeroMinimoPar;
	}

	if(banderaNegativo==true)
	{
		numeroMaximoNegativo="No se ingresó ningún número negativo.";
	}
	else
	{
		numeroMaximoNegativo="El mayor número negativo ingresado es "+numeroMaximoNegativo;
	}

	txtIdMaximo.value=numeroMaximoNegativo;
	txtIdMinimo.value=numeroMinimoPar;
}//FIN DE LA FUNCIÓN