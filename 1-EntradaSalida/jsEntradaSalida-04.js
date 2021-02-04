/* 
Facundo Berges

Ejercicio 4.-
Debemos lograr tomar un dato por 'PROMPT' y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombreIngresado;
	nombreIngresado = prompt("Ingrese su nombre: ");
	nombreRespuesta = "Su nombre es: "+nombreIngresado

	document.getElementById("txtIdNombre").value=nombreRespuesta

}
