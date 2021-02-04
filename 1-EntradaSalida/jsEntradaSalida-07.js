/*
Facundo Berges

Ejercicio 07.-
Debemos lograr tomar los numeros por ID, transformarlos a enteros (parseInt),
realizar la operación correcta y mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno;
	let numeroDos;
	let sumaNumeros;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	sumaNumeros = numeroUno+numeroDos;

	alert("La suma de los números ingresados es: " + sumaNumeros);	
}

function restar()
{
	let numeroUno;
	let numeroDos;
	let restaNumeros;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	restaNumeros = numeroUno-numeroDos;

	alert("La resta de los números ingresados es: " + restaNumeros);	
}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	let multiplicacionNumeros;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	multiplicacionNumeros = numeroUno*numeroDos;

	alert("La multiplicación de los números ingresados es: " + multiplicacionNumeros);
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let divisionNumeros;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	divisionNumeros = numeroUno/numeroDos;

	alert("La división de los números ingresados es: " + divisionNumeros);
}
