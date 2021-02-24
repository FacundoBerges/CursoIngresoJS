/* Facundo Berges

Parcial 2020.- ejercicio 1:
Debemos realizar la carga de 5 (cinco) productos de prevención de contagio, de cada una debo obtener
los siguientes datos: 
	El tipo (validar "barbijo", "jabón" o "alcohol"),
	El precio (validar entre 100 y 300),
	La cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
	La Marca y 
	El fabricante.

Se debe Informar al usuario lo siguiente:

a) Del más barato de los alcohol, la cantidad de unidades y el fabricante.
b) Del tipo con mas unidades, el promedio por compra.
c) Cuántas unidades de jabones hay en total. */

function mostrar()
{
	let contadorProductosIngresados;
	let tipoDeProducto;
	let precioProducto;
	let cantidadProducto;
	let marcaProducto;
	let fabricanteProducto;
	let precioAlcoholMasBarato;
	let cantidadAlcoholMasBarato;
	let fabricanteAlcoholMasBarato;
	let banderaAlcohol;
	let contadorUnidadesAlcohol;
	let contadorUnidadesBarbijos;
	let contadorUnidadesJabon;
	let contadorComprasAlcohol;
	let contadorComprasBarbijos;
	let contadorComprasJabon;
	let promedio;
	let mensaje;

	contadorProductosIngresados=0;

	banderaAlcohol=true;
	precioAlcoholMasBarato=0;
	cantidadAlcoholMasBarato=0;
	fabricanteAlcoholMasBarato="No se ingresó 'alcohol' como producto.";

	contadorUnidadesAlcohol=0;
	contadorUnidadesBarbijos=0;
	contadorUnidadesJabon=0;

	contadorComprasAlcohol=0;
	contadorComprasBarbijos=0;
	contadorComprasJabon=0;

	while(contadorProductosIngresados<5)
	{
		tipoDeProducto=prompt("Ingrese tipo de producto (barbijo, jabón o alcohol): ");
		while(isNaN(tipoDeProducto)==false || tipoDeProducto!="barbijo" && tipoDeProducto!="Barbijo" && tipoDeProducto!="jabón" && tipoDeProducto!="jabon" && tipoDeProducto!="Jabón" && tipoDeProducto!="Jabon" && tipoDeProducto!="alcohol" && tipoDeProducto!="Alcohol")
		{
			tipoDeProducto=prompt("Error. Ingrese tipo de producto (barbijo, jabón o alcohol): ");
		}

		precioProducto=prompt("Ingrese precio del producto (entre $ 100 y $ 300): ");
		precioProducto=parseInt(precioProducto);
		while(isNaN(precioProducto)==true || precioProducto<100 || precioProducto>300)
		{
			precioProducto=prompt("Error. Ingrese precio del producto (entre $ 100 y $ 300): ");
			precioProducto=parseInt(precioProducto);
		}

		cantidadProducto=prompt("Ingrese cantidad de productos (entre 1 y 1000): ");
		cantidadProducto=parseInt(cantidadProducto);
		while(isNaN(cantidadProducto)==true || cantidadProducto<1 || cantidadProducto>1000)
		{
			cantidadProducto=prompt("Error. Ingrese cantidad de productos (entre 1 y 1000): ");
			cantidadProducto=parseInt(cantidadProducto);
		}

		marcaProducto=prompt("Ingrese la marca del producto: ");
		while(isNaN(marcaProducto)==false)
		{
			marcaProducto=prompt("Error. Ingrese la marca del producto: ");
		}

		fabricanteProducto=prompt("Ingrese el fabricante del producto: ");
		while(isNaN(fabricanteProducto)==false)
		{
			fabricanteProducto=prompt("Error. Ingrese el fabricante del producto: ");
		}

		contadorProductosIngresados=contadorProductosIngresados+1;

		switch(tipoDeProducto)
		{
			case "barbijo":
			case "Barbijo":
				contadorUnidadesBarbijos=contadorUnidadesBarbijos+cantidadProducto;
				contadorComprasBarbijos=contadorComprasBarbijos+1;
				break;
			case "Alcohol":
			case "alcohol":
				contadorUnidadesAlcohol=contadorUnidadesAlcohol+cantidadProducto;
				contadorComprasAlcohol=contadorComprasAlcohol+1;
				if(banderaAlcohol==true || precioProducto<precioAlcoholMasBarato)
				{
					cantidadAlcoholMasBarato=cantidadProducto;
					fabricanteAlcoholMasBarato=fabricanteProducto;
					precioAlcoholMasBarato=precioProducto;
					banderaAlcohol=false;
				}
				break;
			default: //Jabon
				contadorUnidadesJabon=contadorUnidadesJabon+cantidadProducto;
				contadorComprasJabon=contadorComprasBarbijos+1;
				break;
		}
	}

	if(precioAlcoholMasBarato==0)
	{
		alert(fabricanteAlcoholMasBarato)
	}
	else
	{
		alert("El alcohol más barato ingresado fue el del fabricante "+fabricanteAlcoholMasBarato+" con una cantidad de "+cantidadAlcoholMasBarato+" unidades.");
	}

	if(contadorUnidadesAlcohol>contadorUnidadesBarbijos && contadorUnidadesAlcohol>contadorUnidadesJabon)
	{
		mensaje="alcohol";
		promedio=contadorUnidadesAlcohol/contadorComprasAlcohol;
	}
	else
	{
		if(contadorUnidadesBarbijos>contadorComprasJabon)
		{
			mensaje="barbijo";
			promedio=contadorUnidadesBarbijos/contadorComprasBarbijos;
		}
		else
		{
			mensaje="jabón";
			promedio=contadorUnidadesJabon/contadorComprasJabon;
		}
	}
	mensaje="El producto con más unidades compradas fue "+mensaje+" con un promedio de "+promedio+" unidades por compra.";
	alert(mensaje);
	alert("En total hay "+contadorUnidadesJabon+" unidades de jabón.");
}