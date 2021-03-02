/* Facundo Hector Berges

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
c) Informar el tipo con mas cantidad de bolsas.
d) El tipo mas caro
*/

function mostrar()
{
  let respuesta;
  let productoIngresado;
  let cantidadBolsasIngresada;
  let precioBolsaIngresada;
  let totalAPagarBruto;
  let acumuladorBolsasCompradas;
  let descuentoPorCantidadBolsas;
  let precioConDescuento;
  let cantidadBolsasCemento;
  let cantidadBolsasCal;
  let cantidadBolsasArena;
  let productoConMasBolsas;
  let flagPrimerIngreso;
  let tipoMasCaro;
  let precioMasCaro;

  let respuestaA;
  let respuestaB;
  let respuestaC;
  let respuestaD;

  respuesta="si";
  flagPrimerIngreso=true;
  acumuladorBolsasCompradas=0;
  descuentoPorCantidadBolsas=0;
  totalAPagarBruto=0;
  cantidadBolsasCemento=0;
  cantidadBolsasCal=0;
  cantidadBolsasArena=0;

  while(respuesta=="si")
  {
    productoIngresado=prompt("Ingrese producto (arena, cal o cemento):");
    productoIngresado=productoIngresado.ToLowerCase();
    while(isNaN(productoIngresado)==false || (productoIngresado!="arena" && productoIngresado!="cal" && productoIngresado!="cemento"))
    {
      productoIngresado=prompt("ERROR. Ingrese producto (arena, cal o cemento):");
      productoIngresado=productoIngresado.ToLowerCase();
    }

    cantidadBolsasIngresada=prompt("Ingrese cantidad de bolsas (mayor a 0):");
    cantidadBolsasIngresada=parseInt(cantidadBolsasIngresada);
    while(isNaN(cantidadBolsasIngresada)==true || cantidadBolsasIngresada<1)
    {
      cantidadBolsasIngresada=prompt("ERROR. Ingrese cantidad de bolsas (mayor a 0):");
      cantidadBolsasIngresada=parseInt(cantidadBolsasIngresada);
    }

    precioBolsaIngresada=prompt("Ingrese precio de las bolsas ingresadas (mayor a $ 0):");
    precioBolsaIngresada=parseInt(precioBolsaIngresada);
    while(isNaN(precioBolsaIngresada)==true || precioBolsaIngresada<1)
    {
      precioBolsaIngresada=prompt("ERROR. Ingrese precio de las bolsas ingresadas (mayor a $ 0):");
      precioBolsaIngresada=parseInt(precioBolsaIngresada);
    }
    // Fin de validaciones.

    acumuladorBolsasCompradas=acumuladorBolsasCompradas+cantidadBolsasIngresada;

    totalAPagarBruto=totalAPagarBruto+(cantidadBolsasIngresada*precioBolsaIngresada);

    switch(productoIngresado)
    {
      case "arena":
        cantidadBolsasArena=cantidadBolsasArena+cantidadBolsasIngresada;
        break;
      case "cal":
        cantidadBolsasCal=cantidadBolsasCal+cantidadBolsasIngresada;
        break;
      case "cemento":
        cantidadBolsasCemento=cantidadBolsasCemento+cantidadBolsasIngresada;
        break;
    }//Fin del switch.

    if(flagPrimerIngreso==true || precioBolsaIngresada>precioMasCaro)
    {
      flagPrimerIngreso=false;
      precioMasCaro=precioBolsaIngresada;
      tipoMasCaro=productoIngresado;
    }

    respuesta=prompt("Escriba 'si' si desea continuar:");
    respuesta=respuesta.ToLowerCase();
  }//Fin del while.

  respuestaA="El total a pagar bruto es de $ "+totalAPagarBruto;
  alert(respuestaA);

  if(acumuladorBolsasCompradas>10)
  {
    if(acumuladorBolsasCompradas>30)
    {
      descuentoPorCantidadBolsas=15;
    }
    else
    {
      descuentoPorCantidadBolsas=25;
    }
    precioConDescuento=totalAPagarBruto-(totalAPagarBruto*descuentoPorCantidadBolsas/100);
    respuestaB="El total a pagar con descuento por cantidad de bolsas compradas es de $ "+precioConDescuento;
    alert(respuestaB);
  }

  if(cantidadBolsasCemento>cantidadBolsasArena && cantidadBolsasCemento>cantidadBolsasCal)
  {
    productoConMasBolsas="cemento";
  }
  else
  {
    if(cantidadBolsasArena>cantidadBolsasCal)
    {
      productoConMasBolsas="arena";
    }
    else
    {
      productoConMasBolsas="cal";
    }
  }
  respuestaC="El producto con más bolsas ingresadas es "+productoConMasBolsas+".";
  alert(respuestaC);

  respuestaD="El producto más caro ingresado fue "+tipoMasCaro+" con un valor de $ "+precioMasCaro+".";
  alert(respuestaD);
}//Fin de la función.