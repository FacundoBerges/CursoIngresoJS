/*Facundo Berges

Ejercicio 03:
Al seleccionar un mes informar:
- Si es Febrero: " Este mes no tiene más de 29 días."
- Si NO es Febrero: "Este mes tiene 30 o más días"*/
function mostrar()
{
	let mesDelAño = document.getElementById("txtIdMes").value;
	let mensaje;

	switch(mesDelAño)
	{
		case "Febrero":
			mensaje="Este mes no tiene más de 29 días.";
			break;
		default:
			mensaje="Este mes tiene 30 o más días.";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN