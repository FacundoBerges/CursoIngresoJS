/*
Facundo Berges

EJercicio 10.-
Debemos lograr tomar el importe por ID. Transformarlo a entero (parseInt), luego mostrar el importe 
con un Descuento del 25 % en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let numeroIngresado;
	let numeroConDescuento;

	numeroIngresado=document.getElementById("txtIdImporte").value;
	numeroIngresado=parseInt(numeroIngresado);

	numeroConDescuento=(numeroIngresado*0.75);
	document.getElementById("txtIdResultado").value=numeroConDescuento;
}
