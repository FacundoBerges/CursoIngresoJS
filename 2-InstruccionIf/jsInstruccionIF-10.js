/*Facundo Berges

Ejercicio 10:
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive*/

function mostrar()
{
	let notaRandom;
	let mensaje;
	notaRandom=Math.floor(Math.random()*10)+1;

	if(notaRandom>8)
	{
		mensaje="EXCELENTE. Nota del examen: " +notaRandom;
	}else
	{
		if(notaRandom>3)
		{
			mensaje="APROBÓ. Nota del examen: " +notaRandom;
		}else
		{
			mensaje="Vamos, la proxima se puede. Nota del examen: " +notaRandom;
		}
	}
	alert(mensaje);
}