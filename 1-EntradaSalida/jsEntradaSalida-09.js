/*
Facundo Berges

Ejercicio 09.-
Debemos lograr tomar el importe por ID, transformarlo a entero (parseInt), luego mostrar el importe
con un aumento del 10% en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	/*
	let numeroIngresado;
	let numeroConAumento;

	numeroIngresado=parseInt(document.getElementById("txtIdSueldo").value);
	numeroConAumento=(numeroIngresado*10/100)+numeroIngresado;
	document.getElementById("txtIdResultado").value=numeroConAumento;

	09.Bis: Se pide al usuario el %.*/

	let numeroIngresado;
	let aumento;
	let numeroConAumento;

	numeroIngresado=parseInt(document.getElementById("txtIdSueldo").value);

	aumento=prompt("Ingrese % a aumentar: ");

	aumento=parseInt(aumento);

	numeroConAumento=(numeroIngresado*aumento/100)+numeroIngresado;
	document.getElementById("txtIdResultado").value=numeroConAumento;
}
