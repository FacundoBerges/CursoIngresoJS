/* Facundo Berges

Ejercicio 6:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/

function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio;
	//let valorDeVerdad;

	contador=0;
	acumulador=0;

	while(contador<5)
	{
		contador=contador+1;
		numeroIngresado=prompt("Ingrese un número #"+contador+":");
		numeroIngresado=parseInt(numeroIngresado);
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("Error. Ingrese un número #"+contador+":");
			numeroIngresado=parseInt(numeroIngresado);
		}
		//valorDeVerdad=isNaN(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
	}
	promedio=acumulador/contador;

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;
}//FIN DE LA FUNCIÓN