function mostrar()
{
	let edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad)
	console.log("La edad ingresada es: "+edad);
	//tomo la edad

	if(edad==15)
	{
		alert("niña bonita")
	}

}//FIN DE LA FUNCIÓN