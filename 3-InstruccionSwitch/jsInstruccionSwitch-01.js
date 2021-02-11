/*Facundo Berges

Ejercicio 01:
Al seleccionar un mes informar:
- Si es Enero: "que comiences bien el año!!!."
- Si es Marzo: "a clases!!!."
- Si es Julio: "se vienen las vacaciones!!!."
- Si es Diciembre: "Felices fiesta!!!."*/

function mostrar()
{
	let mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case "Enero"://case: toma el valor dado entre las "".
			alert("Que comiences bien el año!!!.");
			break;//Se usa break tanto en "case" como en "default" para dar por finalizada la orden.
		case "Marzo":
			alert("A clases!!!.");
			break;
		case "Julio":
			alert("Se vienen las vacaciones!!!.");
			break;
		case "Diciembre":
			alert("Felices fiesta!!!.");
			break;
		default: //toma todos los meses que quedan fuera de los "case".
			break;
	}
}//FIN DE LA FUNCIÓN