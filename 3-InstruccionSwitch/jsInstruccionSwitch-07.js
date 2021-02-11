/*Facundo Berges

Ejercicio 07:
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste*/

function mostrar()
{
	let destino = document.getElementById("txtIdDestino").value;
	let mensaje;
	
	switch(destino)
	{
		case "Bariloche":
			mensaje="El destino se encuentra al Oeste de Argentina.";
			break;
		case "Cataratas":
			mensaje="El destino se encuentra al Norte de Argentina.";
			break;
		case "Mar del plata":
			mensaje="El destino se encuentra al Este de Argentina.";
			break;
		default:
			mensaje="El destino se encuentra al Sur de Argentina.";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN