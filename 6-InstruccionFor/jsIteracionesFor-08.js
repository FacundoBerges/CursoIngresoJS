/*Facundo Berges

al presionar el botón pedir un número. Informar si el numero es PRIMO o no.*/

function mostrar()
{
	let numeroIngresado;
	let divisor;
	let contadorDivisores;

	contadorDivisores=0;

	numeroIngresado=prompt("Ingrese número:");
	numeroIngresado=parseInt(numeroIngresado);
	while(isNaN(numeroIngresado)==true || numeroIngresado<1)
	{
		numeroIngresado=prompt("Error. Ingrese número:");
		numeroIngresado=parseInt(numeroIngresado);
	}

	for(divisor=2;divisor<numeroIngresado;divisor++)
	{
		if(numeroIngresado%divisor==0)// || divisor>(numeroIngresado/2)) // || agregado en clase
		{
			//contadorDivisores++;
			break;
		}
	}

	if(contadorDivisores!=0)
	{
		mensaje="El numero ingresado no es un número primo.";
	}
	else
	{
		mensaje="El numero ingresado ES un número primo.";
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN