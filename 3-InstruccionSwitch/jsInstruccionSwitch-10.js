/*Facundo Berges

Ejercicio 10:
Una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos,
informar si "Se viaja" o "No se viaja" a ese lugar:
- En Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja".
- En Verano: Se viaja a Mar del plata y Cataratas solamente.
- En Otoño: Se viaja a todos los destinos.
- En Primavera: solo no se viaja a Bariloche.*/

function mostrar()
{
	let estacion= document.getElementById("txtIdEstacion").value;
	let destino = document.getElementById("txtIdDestino").value;
	let mensaje;
	
	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					mensaje="Se viaja.";
					break;
				default:
					mensaje="No se viaja.";
					break;
			}
			break;
		case "Verano":
			switch(destino)
			{
				case "Cataratas":
				case "Mar del plata":
					mensaje="Se viaja.";
					break;
				default:
					mensaje="No se viaja.";
					break;
			}
			break;
		case "Otoño":
			switch(destino)
			{
				default:
					mensaje="Se viaja.";
					break;
			}
			break;
		default:
			switch(destino)
			{
				case "Bariloche":
					mensaje="No se viaja.";
					break;
				default:
					mensaje="Se viaja.";
					break;
			}
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN