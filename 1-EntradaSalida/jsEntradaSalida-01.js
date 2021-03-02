/*
Facundo Berges
Ejercicio 1.-
Al presionar el  botón, se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
/*
function mostrar()
{
	alert("Esto funciona de maravilla");
}
*/

/* Facundo Berges

For 10 A-ingrese nombre , sexo , edad (validar que si es mujer debe ser 
adolescente y si es hombre debe ser niño), altura (validar), temperatura corporal

function mostrar()
{
	let nombreIngresado;
	let sexoIngresado;
	let edadIngresada;
	let alturaIngresada;
	let temperaturaCorporalIngresada;
	let respuesta;

	for(respuesta="si";respuesta=="si";respuesta=prompt("Escriba 'si' si desea continuar:"))
	{
		nombreIngresado=prompt("Ingrese nombre:");
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("ERROR. Ingrese nombre:");
		}

		sexoIngresado=prompt("Ingrese sexo (f o m):");
		while(isNaN(sexoIngresado)==false || sexoIngresado!="f" && sexoIngresado!="m")
		{
			sexoIngresado=prompt("ERROR. Ingrese sexo (f o m):");
		}

		switch(sexoIngresado)
		{
			case "m":
				while(edadIngresada>12)
				{
					edadIngresada=prompt("ERROR. Ingrese edad (debe ser niño):");
					edadIngresada=parseInt(edadIngresada);
					while(isNaN(edadIngresada)==true || edadIngresada<1 || edadIngresada>12)
					{
						edadIngresada=prompt("ERROR. Ingrese edad (debe ser niño):");
						edadIngresada=parseInt(edadIngresada);
					}
				}
				break;
			case "f":
				while(edadIngresada<13 || edadIngresada>17)
				{
					edadIngresada=prompt("ERROR. Ingrese edad (debe ser adolescente):");
					edadIngresada=parseInt(edadIngresada);
					while(isNaN(edadIngresada)==true || edadIngresada<13 || edadIngresada>17)
					{
						edadIngresada=prompt("ERROR. Ingrese edad (debe ser adolescente):");
						edadIngresada=parseInt(edadIngresada);
					}
				}
				break;
		}

		alturaIngresada=prompt("Ingrese altura (entre 10 y 250 cm):");
		alturaIngresada=parseInt(alturaIngresada);
		while(isNaN(alturaIngresada)==true || alturaIngresada<10 || alturaIngresada>250)
		{
			alturaIngresada=prompt("ERROR. Ingrese altura (entre 10 y 250 cm):");
			alturaIngresada=parseInt(alturaIngresada);
		}

		temperaturaCorporalIngresada=prompt("Ingrese temperatura corporal (entre 25° y 45°):");
		temperaturaCorporalIngresada=parseInt(temperaturaCorporalIngresada);
		while(isNaN(temperaturaCorporalIngresada)==true || temperaturaCorporalIngresada<25 || temperaturaCorporalIngresada>45)
		{
			temperaturaCorporalIngresada=prompt("ERROR. Ingrese temperatura corporal (entre 25° y 45°):");
			temperaturaCorporalIngresada=parseInt(temperaturaCorporalIngresada);
		}
	}//fin del for
}*/

/* Facundo Berges

For 10 B- necesitamos saber: 
el nombre y el sexo de la persona mas alta , --
de las mujeres el nombre de la mas joven ,--
de los hombre el nombre del mas bajito , ... solo si los hay
	
function mostrar()
{
	let nombreIngresado;
	let sexoIngresado;
	let edadIngresada;
	let alturaIngresada;
	let temperaturaCorporalIngresada;
	let respuesta;
	let banderaPrimerPersona;
	let banderaPrimerIngresoHombre;
	let banderaPrimerIngresoMujer;
	let alturaPersonaMasAlta;
	let nombrePersonaMasAlta;
	let sexoPersonaMasAlta;
	let edadMujerMasJoven;
	let nombreMujerMasJoven;
	let alturaHombreMasBajito;
	let nombreHombreMasBajito;

	banderaPrimerPersona=true;
	banderaPrimerIngresoHombre=true;
	banderaPrimerIngresoMujer=true;

	for(respuesta="si";respuesta=="si";respuesta=prompt("Escriba 'si' si desea continuar:"))
	{
		nombreIngresado=prompt("Ingrese nombre:");
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("ERROR. Ingrese nombre:");
		}

		sexoIngresado=prompt("Ingrese sexo (f o m):");
		while(isNaN(sexoIngresado)==false || sexoIngresado!="f" && sexoIngresado!="m")
		{
			sexoIngresado=prompt("ERROR. Ingrese sexo (f o m):");
		}

		alturaIngresada=prompt("Ingrese altura (entre 10 y 250 cm):");
		alturaIngresada=parseInt(alturaIngresada);
		while(isNaN(alturaIngresada)==true || alturaIngresada<10 || alturaIngresada>250)
		{
			alturaIngresada=prompt("ERROR. Ingrese altura (entre 10 y 250 cm):");
			alturaIngresada=parseInt(alturaIngresada);
		}

		edadIngresada=prompt("Ingrese edad (si es mujer debe ser adolescente y si es hombre debe ser niño):");
		edadIngresada=parseInt(edadIngresada);
		switch(sexoIngresado)
		{
			case "m":
				while(isNaN(edadIngresada)==true || edadIngresada>12 || edadIngresada<1)
				{
					edadIngresada=prompt("ERROR. Ingrese edad (debe ser niño):");
					edadIngresada=parseInt(edadIngresada);
				}
				if(banderaPrimerIngresoHombre==true || alturaIngresada<alturaHombreMasBajito)
				{
					banderaPrimerIngresoHombre=false;
					alturaHombreMasBajito=alturaIngresada;
					nombreHombreMasBajito=nombreIngresado;
				}
				break;
			case "f":
				while(isNaN(edadIngresada)==true || edadIngresada<13 || edadIngresada>17)
				{
					edadIngresada=prompt("ERROR. Ingrese edad (debe ser adolescente):");
					edadIngresada=parseInt(edadIngresada);
				}
				if(banderaPrimerIngresoMujer==true || edadIngresada<edadMujerMasJoven)
				{
					banderaPrimerIngresoMujer=false;
					edadMujerMasJoven=edadIngresada;
					nombreMujerMasJoven=nombreIngresado;
				}
				break;
		}

		temperaturaCorporalIngresada=prompt("Ingrese temperatura corporal (entre 25° y 45°):");
		temperaturaCorporalIngresada=parseInt(temperaturaCorporalIngresada);
		while(isNaN(temperaturaCorporalIngresada)==true || temperaturaCorporalIngresada<25 || temperaturaCorporalIngresada>45)
		{
			temperaturaCorporalIngresada=prompt("ERROR. Ingrese temperatura corporal (entre 25° y 45°):");
			temperaturaCorporalIngresada=parseInt(temperaturaCorporalIngresada);
		}

		if(banderaPrimerPersona==true || alturaIngresada>alturaPersonaMasAlta)
		{
			nombrePersonaMasAlta=nombreIngresado;
			sexoPersonaMasAlta=sexoIngresado;
			alturaPersonaMasAlta=alturaIngresada;
			banderaPrimerPersona=false;
		}
		
	}//fin del for
	if(sexoPersonaMasAlta=="m")
	{
		sexoPersonaMasAlta="masculino";
	}
	else
	{
		sexoPersonaMasAlta="femenino";
	}

	if(banderaPrimerIngresoMujer==true)
	{
		nombreMujerMasJoven="No se ingresó ninguna mujer.";
	}
	else
	{
		nombreMujerMasJoven="La mujer más joven es "+nombreMujerMasJoven+" con "+edadMujerMasJoven+" años.";
	}

	if(banderaPrimerIngresoHombre==true)
	{
		nombreHombreMasBajito="No se ingresó ningun hombre. ";
	}
	else
	{
		nombreHombreMasBajito="El hombre más bajito ingresado es "+nombreHombreMasBajito+" con una altura de "+alturaHombreMasBajito+"cm. ";
	}

	document.write("La persona más alta es "+nombrePersonaMasAlta+" de sexo "+sexoPersonaMasAlta+" con una altura de "+alturaPersonaMasAlta+" cm. ");
	document.write(nombreMujerMasJoven+" ");
	document.write(nombreHombreMasBajito);
}*/

/* Facundo Berges

For 10 C- necesitamos saber: 
el promedio de edad entre los hombres,
el promedio de edad entre las mujeres, 
la cantidad de personas que miden mas de 1,60 metros, 
y el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts. */
	
function mostrar()
{
	let nombreIngresado;
	let sexoIngresado;
	let edadIngresada;
	let alturaIngresada;
	let temperaturaCorporalIngresada;
	let respuesta;
	let banderaPrimerPersona;
	let banderaPrimerIngresoHombre;
	let banderaPrimerIngresoMujer;
	let alturaPersonaMasAlta;
	let nombrePersonaMasAlta;
	let sexoPersonaMasAlta;
	let edadMujerMasJoven;
	let nombreMujerMasJoven;
	let alturaHombreMasBajito;
	let nombreHombreMasBajito;
	let contadorHombres;
	let acumuladorEdadHombres;
	let promedioEdadHombres;
	let contadorMujeres;
	let acumuladorEdadMujeres;
	let promedioEdadMujeres;
	let contadorPersonasMayorA160;
	let contadorMujeresMayoresA160;
	let porcentajeMujeresMayoresA160;
	let respuestaA;
	let respuestaB;
	let respuestaC;
	let respuestaD;

	banderaPrimerPersona=true;
	banderaPrimerIngresoHombre=true;
	banderaPrimerIngresoMujer=true;
	contadorHombres=0;
	contadorMujeres=0;
	acumuladorEdadHombres=0;
	acumuladorEdadMujeres=0;
	contadorPersonasMayorA160=0;
	contadorMujeresMayoresA160=0;

	for(respuesta="si";respuesta=="si";respuesta=prompt("Escriba 'si' si desea continuar:"))
	{
		nombreIngresado=prompt("Ingrese nombre:");
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("ERROR. Ingrese nombre:");
		}

		sexoIngresado=prompt("Ingrese sexo (f o m):");
		while(isNaN(sexoIngresado)==false || sexoIngresado!="f" && sexoIngresado!="m")
		{
			sexoIngresado=prompt("ERROR. Ingrese sexo (f o m):");
		}

		alturaIngresada=prompt("Ingrese altura (entre 10 y 250 cm):");
		alturaIngresada=parseInt(alturaIngresada);
		while(isNaN(alturaIngresada)==true || alturaIngresada<10 || alturaIngresada>250)
		{
			alturaIngresada=prompt("ERROR. Ingrese altura (entre 10 y 250 cm):");
			alturaIngresada=parseInt(alturaIngresada);
		}
		if(alturaIngresada>160)
		{
			contadorPersonasMayorA160++;
			if(sexoIngresado=="f")
			{
				contadorMujeresMayoresA160++;
			}
		}

		edadIngresada=prompt("Ingrese edad (si es mujer debe ser adolescente y si es hombre debe ser niño):");
		edadIngresada=parseInt(edadIngresada);
		switch(sexoIngresado)
		{
			case "m":
				while(isNaN(edadIngresada)==true || edadIngresada>12 || edadIngresada<1)
				{
					edadIngresada=prompt("ERROR. Ingrese edad (debe ser niño):");
					edadIngresada=parseInt(edadIngresada);
				}
				if(banderaPrimerIngresoHombre==true || alturaIngresada<alturaHombreMasBajito)
				{
					banderaPrimerIngresoHombre=false;
					alturaHombreMasBajito=alturaIngresada;
					nombreHombreMasBajito=nombreIngresado;
				}
				contadorHombres++;
				acumuladorEdadHombres=acumuladorEdadHombres+edadIngresada;
				break;
			case "f":
				while(isNaN(edadIngresada)==true || edadIngresada<13 || edadIngresada>17)
				{
					edadIngresada=prompt("ERROR. Ingrese edad (debe ser adolescente):");
					edadIngresada=parseInt(edadIngresada);
				}
				if(banderaPrimerIngresoMujer==true || edadIngresada<edadMujerMasJoven)
				{
					banderaPrimerIngresoMujer=false;
					edadMujerMasJoven=edadIngresada;
					nombreMujerMasJoven=nombreIngresado;
				}
				contadorMujeres++;
				acumuladorEdadMujeres=acumuladorEdadMujeres+edadIngresada;
				break;
		}

		temperaturaCorporalIngresada=prompt("Ingrese temperatura corporal (entre 25° y 45°):");
		temperaturaCorporalIngresada=parseInt(temperaturaCorporalIngresada);
		while(isNaN(temperaturaCorporalIngresada)==true || temperaturaCorporalIngresada<25 || temperaturaCorporalIngresada>45)
		{
			temperaturaCorporalIngresada=prompt("ERROR. Ingrese temperatura corporal (entre 25° y 45°):");
			temperaturaCorporalIngresada=parseInt(temperaturaCorporalIngresada);
		}

		if(banderaPrimerPersona==true || alturaIngresada>alturaPersonaMasAlta)
		{
			nombrePersonaMasAlta=nombreIngresado;
			sexoPersonaMasAlta=sexoIngresado;
			alturaPersonaMasAlta=alturaIngresada;
			banderaPrimerPersona=false;
		}
		
	}//fin del for
	if(sexoPersonaMasAlta=="m")
	{
		sexoPersonaMasAlta="masculino";
	}
	else
	{
		sexoPersonaMasAlta="femenino";
	}

	if(banderaPrimerIngresoMujer==true)
	{
		nombreMujerMasJoven="No se ingresó ninguna mujer.";
	}
	else
	{
		nombreMujerMasJoven="La mujer más joven es "+nombreMujerMasJoven+" con "+edadMujerMasJoven+" años.";
	}

	if(banderaPrimerIngresoHombre==true)
	{
		nombreHombreMasBajito="No se ingresó ningun hombre. ";
	}
	else
	{
		nombreHombreMasBajito="El hombre más bajito ingresado es "+nombreHombreMasBajito+" con una altura de "+alturaHombreMasBajito+"cm. ";
	}
	/*B)
	document.write("La persona más alta es "+nombrePersonaMasAlta+" de sexo "+sexoPersonaMasAlta+" con una altura de "+alturaPersonaMasAlta+" cm. ");
	document.write(nombreMujerMasJoven+" ");
	document.write(nombreHombreMasBajito);*/

	//C)
	promedioEdadHombres=acumuladorEdadHombres/contadorHombres;
	if(contadorHombres==0)
	{
		respuestaA="No se ingresaron hombres.";
	}
	else
	{
		respuestaA="El promedio de edad de los hombres ingresados es "+promedioEdadHombres+".";
	}

	promedioEdadMujeres=acumuladorEdadMujeres/contadorMujeres;
	if(contadorMujeres==0)
	{
		respuestaB="No se ingresaron mujeres."
	}
	else
	{
		respuestaB="El promedio de edad de las mujeres ingresadas es "+promedioEdadMujeres+".";
	}

	if(contadorPersonasMayorA160==0)
	{
		respuestaC="No se ingresaron personas mayores a 1,60 Mts.";
	}
	else
	{
		respuestaC="Se ingresaron "+contadorPersonasMayorA160+" persona/s mayor/es a 1,60 Mts.";
	}

	porcentajeMujeresMayoresA160=contadorMujeresMayoresA160/contadorPersonasMayorA160*100;
	if(contadorMujeresMayoresA160!=0)
	{
		respuestaD="Sobre las personas mayores a 1,60 Mts, el "+porcentajeMujeresMayoresA160+"% son mujeres.";
	}
	else
	{
		respuestaD="No se ingresaron mujeres mayores a 1,60 Mts.";
	}

	document.write(respuestaA+" ");
	document.write(respuestaB+" ");
	document.write(respuestaC+" ");
	document.write(respuestaD+" ");
}