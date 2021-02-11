/*Facundo Berges

Ejercicio 02:
Al seleccionar un mes informar:
- Si estamos en Invierno: "Abrigate que hace frio."
- Si aún no llego el Invierno: "Falta para el invierno."
- Si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
	ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/

function mostrar()
{
	let mesDelAño = document.getElementById("txtIdMes").value;
	let mensaje;

	switch(mesDelAño)
	{
		case "Julio":
		case "Agosto":
			mensaje="Abrigate que hace frio.";
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje="Ya pasamos el frio, ahora calor!!!.";
			break;
		default:
			mensaje="Falta para el invierno.";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN