/*Facundo Berges

Ejercicio 09:
Una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final:

- En Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene 
un descuento del 20%.
- En Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene 
un aumento del 20%.
- En Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene
un aumento del 10% y Cordoba tiene el precio sin descuento*/

function mostrar()
{
	let estacion= document.getElementById("txtIdEstacion").value;
	let destino = document.getElementById("txtIdDestino").value;
	let precioBase=15000;
	let precioFinal;
	let porcentajeModificacion=0;
	
	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					porcentajeModificacion=20;
					break;
				case "Mar del plata":
					porcentajeModificacion=-20;
					break;
				default:
					porcentajeModificacion=-10;
					break;
			}
			break;
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					porcentajeModificacion=-20;
					break;
				case "Mar del plata":
					porcentajeModificacion=20;
					break;
				default:
					porcentajeModificacion=10;
					break;
			}
			break;
		default:
			switch(destino)
			{
			case "Cordoba":
				porcentajeModificacion=0;
				break;
			default:
				porcentajeModificacion=10;
				break;
			}
			break;
	}
	precioFinal=precioBase+(precioBase*porcentajeModificacion/100);

	alert("El precio final será de $ " +precioFinal);
}//FIN DE LA FUNCIÓN