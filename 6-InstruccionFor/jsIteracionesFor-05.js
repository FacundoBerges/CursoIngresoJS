/*Facundo Berges

al presionar el botón repetir el pedido de número hasta que ingresemos el 9.*/

function mostrar()
{
	let contador;
	let numeroIngresado;

	for(contador=0;contador+1;contador++)
	{
		numeroIngresado=prompt("Ingrese número:");
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("Error. Ingrese número:");
			numeroIngresado=parseInt(numeroIngresado);
		}

		if(numeroIngresado==9)
		{
			break;
		}
	}

	alert("Se ingresó 9 (fin de la aplicación).")
}//FIN DE LA FUNCIÓN