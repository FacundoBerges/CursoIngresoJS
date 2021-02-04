/*
Facundo Berges

Debemos lograr tomar los numeros por ID, transformarlos a enteros (parseInt) y Sumarlos. 
Mostrar el resultado por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos;
	let sumaNumeros;
	
	//1ra forma
	numeroUno=document.getElementById("txtIdNumeroUno").value;
	numeroDos=document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	
	//2da forma 
	//numeroUno=parseInt(document.getElementById("txtIdNumeroUno").value);
	//numeroDos=parseInt(document.getElementById("txtIdNumeroDos").value);

	sumaNumeros = numeroUno+numeroDos;

	alert("La suma de los números ingresados es: " + sumaNumeros);
}
