/* Facundo Berges

En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil
("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos.
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */

function mostrar()
{
	let nombreIngresado;
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let temperaturaCorporalIngresada;
	let respuesta;
	let flagPrimerIngreso;
	let nombreConMasTemperatura;
	let temperaturaMasAlta;
	let contadorMayoresViudos;
	let contadorHombresSolterosOViudos;
	let contadorPersonasAncianasConTemperaturaElevada;
	let edadPromedioHombresSolteros;
	let acumuladorEdadHombresSolteros;
	let contadorHombresSolteros;
	let respuestaE;

	respuesta="si";
	flagPrimerIngreso=true;
	contadorMayoresViudos=0;
	contadorHombresSolterosOViudos=0;
	contadorPersonasAncianasConTemperaturaElevada=0;
	edadPromedioHombresSolteros=0;
	acumuladorEdadHombresSolteros=0;
	contadorHombresSolteros=0;

	while(respuesta=="si" || respuesta=="Si" || respuesta=="SI")
	{
		nombreIngresado=prompt("Ingrese nombre:");
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("ERROR. Ingrese nombre:");
		}

		edadIngresada=prompt("Ingrese edad (mayor a 0):");
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada)==true || edadIngresada<1 || edadIngresada>110)
		{
			edadIngresada=prompt("ERROR. Ingrese edad (mayor a 0):");
			edadIngresada=parseInt(edadIngresada);
		}

		sexoIngresado=prompt("Ingrese sexo ('f' o 'm'):");
		while(isNaN(sexoIngresado)==false || sexoIngresado!="f" && sexoIngresado!="F" && sexoIngresado!="m" && sexoIngresado!="M")
		{
			sexoIngresado=prompt("ERROR. Ingrese sexo ('f' o 'm'):");
		}

		estadoCivilIngresado=prompt("Ingrese estado civil ('soltero', 'casado' o 'viudo'):");
		while(isNaN(sexoIngresado)==false || estadoCivilIngresado!="soltero" && estadoCivilIngresado!="Soltero" && estadoCivilIngresado!="casado" && estadoCivilIngresado!="Casado" && estadoCivilIngresado!="viudo" && estadoCivilIngresado!="Viudo")
		{
			estadoCivilIngresado=prompt("ERROR. Ingrese estado civil ('soltero', 'casado' o 'viudo'):");
		}

		temperaturaCorporalIngresada=prompt("Ingrese temperatura (mayor a 24° y menor a 44°):");
		temperaturaCorporalIngresada=parseInt(temperaturaCorporalIngresada);
		while(isNaN(temperaturaCorporalIngresada)==true || temperaturaCorporalIngresada<24 || temperaturaCorporalIngresada>44)
		{
			temperaturaCorporalIngresada=prompt("ERROR. Ingrese temperatura (mayor a 24° y menor a 44°):");
			temperaturaCorporalIngresada=parseInt(temperaturaCorporalIngresada);
		}

		// EJERCICIO A)
		if(flagPrimerIngreso==true || temperaturaCorporalIngresada>temperaturaMasAlta)
		{
			nombreConMasTemperatura=nombreIngresado;
			temperaturaMasAlta=temperaturaCorporalIngresada;
			flagPrimerIngreso=false;
		}

		// EJERCICIO B) y C)
		switch(estadoCivilIngresado)
		{
			case "soltero":
			case "Soltero":
				contadorHombresSolteros=contadorHombresSolteros+1;
				acumuladorEdadHombresSolteros=acumuladorEdadHombresSolteros+edadIngresada;
				if(sexoIngresado=="M" || sexoIngresado=="m")
				{
					contadorHombresSolterosOViudos=contadorHombresSolterosOViudos+1;
				}
				break;
			case "viudo":
			case "Viudo":
				if(edadIngresada>17)
				{
					contadorMayoresViudos=contadorMayoresViudos+1;
				}
				if(sexoIngresado=="M" || sexoIngresado=="m")
				{
					contadorHombresSolterosOViudos=contadorHombresSolterosOViudos+1;
				}
				break;
			case "Casado":
			case "casado":
				break;
		}

		// EJERCICIO D)
		if(edadIngresada>59 && temperaturaCorporalIngresada>38)
		{
			contadorPersonasAncianasConTemperaturaElevada=contadorPersonasAncianasConTemperaturaElevada+1;
		}

		respuesta=prompt("Escriba 'si' si desea continuar ingresando datos:");
	} // FIN DEL WHILE

	// EJERCICIO E)
	edadPromedioHombresSolteros=acumuladorEdadHombresSolteros/contadorHombresSolteros;

	//Respuesta A.
	alert("La persona con más temperatura ingresada fue "+nombreConMasTemperatura+" con "+temperaturaMasAlta+"°.");
	//Respuesta B.
	alert("Se ingresaron "+contadorMayoresViudos+" mayores de edad con estado civil 'viudo'.");
	//Respuesta C.
	alert("Hay "+contadorHombresSolterosOViudos+" hombres solteros/viudos.");
	//Respuesta D.
	alert("Se ingresaron "+contadorPersonasAncianasConTemperaturaElevada+" personas mayores a 60 años con temperatura mayor a 38°.");
	//Respuesta E.
	if(isNaN(edadPromedioHombresSolteros)==true || edadPromedioHombresSolteros==0)
	{
		respuestaE="No se ingresaron hombres solteros.";
	}
	else
	{
		respuestaE="La edad promedio entre los hombre solteros ingresados es "+edadPromedioHombresSolteros+".";
	}
	alert(respuestaE);
}