/*Facundo Berges

al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, 
y mostrar la cantidad de numeros pares encontrados.*/

function mostrar()
{
	let contador;
	let numeroIngresado;
	let contadorNumerosPares;

	contadorNumerosPares=0;

	numeroIngresado=prompt("Ingrese número:");
	numeroIngresado=parseInt(numeroIngresado);
	while(isNaN(numeroIngresado)==true || numeroIngresado<1)
	{
		numeroIngresado=prompt("Error. Ingrese número:");
		numeroIngresado=parseInt(numeroIngresado);
	}

	for(contador=1;contador<numeroIngresado;contador++)
	{
		if(contador%2==0)
		{
			alert(contador);
			contadorNumerosPares++;
		}
	}

	alert("Se mostraron "+contadorNumerosPares+" números pares.")
}//FIN DE LA FUNCIÓN