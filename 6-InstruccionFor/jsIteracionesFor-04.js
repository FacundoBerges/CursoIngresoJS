/*Facundo Berges
al presionar el botón repetir hasta que utilizamos 'BREAK'.*/
function mostrar()
{
	let contador;
	let datoIngresado;

	for(contador=0;contador+1;contador++)
	{
		console.log(contador);

		datoIngresado=prompt("Ingrese datos (letras o números), o 0 para finalizar el ingreso.");

		if(datoIngresado==0)
		{
			break;
		}
	}
	alert("Se ingresó 0. (Fin del programa)")
}//FIN DE LA FUNCIÓN