/*Facundo Berges

Ejercicio 05:
Al ingresar una edad solo debemos informar si la persona NO es adolescente.*/

function mostrar()
{
	let edad;
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if(edad>18)
	{
		alert("La persona no es adolescente.");
	}
	if(edad<12)
	{
		alert("La persona no es adolescente.");
	}

	//O
	//if(edad>18 || edad<12)
	//{
	//	alert("La persona no es adolescente.");
	//}
}//FIN DE LA FUNCIÓN