/* Facundo Berges

Ejercicio 9:
Al presionar el botón pedir números hasta que el usuario quiera, mostrar el número máximo y el número 
mínimo ingresado. */

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
}//FIN DE LA FUNCIÓN