/*
Facundo Berges

Ejercicio 3.-
Debemos lograr tomar un dato por 'ID.value' y luego mostrarlo por 'alert()' al presionar el botón  'mostrar'*/

function mostrar()
{
	let nombreIngresado;
	//nombreIngresado = txtIdNombre.value; 
	// or 
	nombreIngresado = document.getElementById("txtIdNombre").value;

	alert(nombreIngresado);

}
