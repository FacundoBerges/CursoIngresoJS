/* Facundo Berges

Ejercicio 3:
Al presionar el botón pedir la CLAVE (ayuda: es utn750).*/

function mostrar()
{
	let clave;

	clave=prompt("Ingrese la clave: ");

	while(clave!="utn750")
	{
		clave=prompt("La clave ingresada es errónea, favor de reingresar la clave: ");
	}
	alert("La clave ingresada es correcta.");
}//FIN DE LA FUNCIÓN