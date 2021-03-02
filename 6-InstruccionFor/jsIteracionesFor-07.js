/*Facundo Berges

al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, 
y mostrar la cantidad de numeros divisores encontrados.*/

function mostrar()
{
	let divisor;
	let numeroIngresado;
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
		if(numeroIngresado%divisor==0)
		{
			alert("El número "+divisor+" es divisor del número ingresado.");
			contadorDivisores++;
		}
	}

	alert("La cantidad de divisores encontrados fue "+contadorDivisores);
}//FIN DE LA FUNCIÓN