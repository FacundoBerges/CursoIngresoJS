/*
Facundo Berges

EJercicio 10.-
Debemos lograr tomar el importe por ID. Transformarlo a entero (parseInt), luego mostrar el importe 
con un Descuento del 25 % en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	/*let numeroIngresado;
	let numeroConDescuento;

	numeroIngresado=document.getElementById("txtIdImporte").value;
	numeroIngresado=parseInt(numeroIngresado);

	numeroConDescuento=(numeroIngresado*0.75);
	document.getElementById("txtIdResultado").value=numeroConDescuento;*/

	// 10. Bis: Se pide al usuario el porcentaje.
	let numeroIngresado;
	let descuento;
	let numeroADescontar;
	let numeroConDescuento;

	numeroIngresado=parseInt(document.getElementById("txtIdImporte").value);

	descuento=prompt("Ingrese % a descontar: ");

	descuento=parseInt(descuento);

	numeroADescontar=(numeroIngresado*descuento/100);
	numeroConDescuento=(numeroIngresado-numeroADescontar);

	document.getElementById("txtIdResultado").value=numeroConDescuento;
}
