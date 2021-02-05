/*
Facundo Berges

Ejercicio 02:
Al ingresar una edad debemos informar solo si la persona es mayor de edad. */

function mostrar()
{
	let edad;
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	console.log(edad);

	if(edad>17)
	{
		alert("La persona es mayor de edad.");
	}
	
}//FIN DE LA FUNCIÓN