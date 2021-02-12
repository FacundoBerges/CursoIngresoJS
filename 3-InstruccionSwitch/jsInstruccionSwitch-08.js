/*Facundo Berges

Ejercicio 08:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/

function mostrar()
{
	let destino = document.getElementById("txtIdDestino").value;
	let mensaje;
	
	switch(destino)
	{
		case "Mar del plata":
		case "Cataratas":
			mensaje="En el destino seleccionado hace Calor.";
			break;
		default:
			mensaje="En el destino seleccionado hace Frío.";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN