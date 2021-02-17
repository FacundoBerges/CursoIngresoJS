/* Facundo Berges

Ejercicio 5:
Al presionar el botón pedir un sexo 'f' para femenino, 'm' para masculino.*/

function mostrar()
{
	let sexoIngresado;

	sexoIngresado=prompt('Ingrese sexo: f (femenino) o m (masculino): ');

	while(sexoIngresado!='f' && sexoIngresado!='m')
	{
		sexoIngresado=prompt('El sexo ingresado no es válido, favor de reingresar un sexo (f o m): ');
	}

	txtIdSexo.value='El sexo ingresado fue '+sexoIngresado;
}//FIN DE LA FUNCIÓN