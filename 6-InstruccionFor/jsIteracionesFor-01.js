/* Facundo Berges

Al presionar el botón mostrar 10 repeticiones con números ASCENDENTE, desde el 1 al 10.
*/
function mostrar()
{
	let contador;

	for(contador=1;contador<11;contador++)
	{
		alert("La iteración es: #"+contador);
	}
}

/*
function mostrar()
{
	let contador;

	for(contador=0;contador<5;contador++) //Acá va el continue;
	{
		if(contador%2==1)
		{
			break;
			continue;
		}
		alert("La iteración es: #"+contador);
	}
	//Acá va el break;
}*/