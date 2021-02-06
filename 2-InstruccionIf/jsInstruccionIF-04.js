/*Facundo Berges

Ejercicio 04:
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive).*/

function mostrar()
{
	let edad;
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if(edad<18)
	{
		if(edad>12)
		{
			alert("La persona es adolescente.");
		}
	}

	//O
	//if(edad<18 && edad>12)
	//{
	//	alert("La persona es adolescente.");
	//}
}//FIN DE LA FUNCIÓN