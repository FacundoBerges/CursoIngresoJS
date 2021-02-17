/* TP12. Facundo Berges

Rising BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide 
realizar una carga de datos validada e ingresada por ventanas emergentes solamente 
(para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12. Los datos requeridos son los siguientes:

A. Edad, entre 18 y 90 años inclusive.
B. Sexo, “M” para masculino y “F” para femenino.
C. Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos.
D. Sueldo bruto, no menor a 8000.
E. Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F. Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados. */

function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
	var sueldoBrutoIngresado;a
	var legajoIngresado;
	var nacionalidadIngresada;

	edadIngresada=prompt("Ingrese su edad (entre 18 y 90 años, ambos incluidos): ");
	edadIngresada=parseInt(edadIngresada);
	while(isNaN(edadIngresada)==true || edadIngresada<18 || edadIngresada>90)
	{
		edadIngresada=prompt("La edad ingresada es errónea. Ingrese su edad (entre 18 y 90 años, ambos incluidos): ");
		edadIngresada=parseInt(edadIngresada);
	}

	sexoIngresado=prompt("Ingrese su sexo (F para femenino o M para masculino):");
	while(sexoIngresado!="f" && sexoIngresado!="F" && sexoIngresado!="m" && sexoIngresado!="M")
	{
		sexoIngresado=prompt("Error. Ingrese su sexo (F para femenino o M para masculino):");
	}
	switch(sexoIngresado)
	{
		case "f":
		case "F":
			sexoIngresado="Femenino";
			break;
		default:
			sexoIngresado="Masculino";
			break;
	}

	estadoCivilIngresado=prompt("Ingrese su estado civil (1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos):");
	estadoCivilIngresado=parseInt(estadoCivilIngresado);
	while(isNaN(estadoCivilIngresado)==true || estadoCivilIngresado<1 || estadoCivilIngresado>4)
	{
		estadoCivilIngresado=prompt("Error. Ingrese su estado civil (1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos):");
		estadoCivilIngresado=parseInt(estadoCivilIngresado);
	}
	switch(estadoCivilIngresado)
	{
		case "1":
			estadoCivilIngresado="Soltero/a";
			break;
		case "2":
			estadoCivilIngresado="Casado/a";
			break;
		case "3":
			estadoCivilIngresado="Divorciado/a";
			break;
		default:
			estadoCivilIngresado="Viudo/a";
			break;
	}

	sueldoBrutoIngresado=prompt("Ingrese su sueldo bruto (no menor a $ 8.000): ");
	sueldoBrutoIngresado=parseInt(sueldoBrutoIngresado);
	while(isNaN(sueldoBrutoIngresado)==true || sueldoBrutoIngresado<8000)
	{
		sueldoBrutoIngresado=prompt("Error. Ingrese su sueldo bruto (no menor a $ 8.000): ");
		sueldoBrutoIngresado=parseInt(sueldoBrutoIngresado);
	}

	legajoIngresado=prompt("Ingrese su legajo (numérico de 4 cifras, sin ceros a la izquierda): ");
	legajoIngresado=parseInt(legajoIngresado);
	while(isNaN(legajoIngresado)==true || legajoIngresado<1000 || legajoIngresado>9999)
	{
		legajoIngresado=prompt("Error. Ingrese su legajo (numérico de 4 cifras, sin ceros a la izquierda): ");
		legajoIngresado=parseInt(legajoIngresado);
	}

	nacionalidadIngresada=prompt("Ingrese su nacionalidad (“A” para argentinos, “E” para extranjeros, “N” para nacionalizados):");
	while(nacionalidadIngresada!="A" && nacionalidadIngresada!="E" && nacionalidadIngresada!="N" && nacionalidadIngresada!="a" && nacionalidadIngresada!="e" && nacionalidadIngresada!="n")
	{
		nacionalidadIngresada=prompt("Error. Ingrese su nacionalidad (“A” para argentinos, “E” para extranjeros, “N” para nacionalizados):");
	}
	switch(nacionalidadIngresada)
	{
		case "a":
		case "A":
			nacionalidadIngresada="Argentino/a";
			break;
		case "E":
		case "e":
			nacionalidadIngresada="Extranjero/a";
			break;
		default:
			nacionalidadIngresada="Nacionalizado/a";
			break;
	}

	txtIdEdad.value="Edad: "+edadIngresada;
	txtIdSexo.value="Sexo: "+sexoIngresado;
	txtIdEstadoCivil.value="Estado civil: "+estadoCivilIngresado;
	txtIdSueldo.value="Sueldo bruto: "+sueldoBrutoIngresado;
	txtIdLegajo.value="Legajo N° "+legajoIngresado;
	txtIdNacionalidad.value="Nacionalidad: "+nacionalidadIngresada;
}//Fin de la función