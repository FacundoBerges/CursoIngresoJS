/* Facundo Hector Berges

parcial 2020, ejercicio 2:
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde).
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro. */

function mostrar()
{
  let respuesta;
  let tipoProductoIngresado;
  let cantidadBolsasIngresadas;
  let precioBolsasIngresadas;
  let contadorBolsas;
  let totalAPagarBruto;
  let totalAPagarConDescuento;
  let porcentajeDescuento;
  let AcumuladorBolsasArena;
  let AcumuladorBolsasCal;
  let AcumuladorBolsasCemento;
  let mayorPrecioArena;
  let mayorPrecioCal;
  let mayorPrecioCemento;
  let tipoMasCaro;
  let mayorPrecio;
  let banderaPrimerIngreso;
  let TipoConMasBolsas;

  respuesta="si";
  contadorBolsas=0;
  descuentoBolsas=0;
  totalAPagarBruto=0;
  porcentajeDescuento=0;
  totalAPagarConDescuento=0;
  AcumuladorBolsasArena=0;
  AcumuladorBolsasCal=0;
  AcumuladorBolsasCemento=0;
  mayorPrecioArena=0;
  mayorPrecioCal=0;
  mayorPrecioCemento=0;
  banderaPrimerIngreso=true;

  while(respuesta=="si" || respuesta=="Si" || respuesta=="SI")
  {
    tipoProductoIngresado=prompt("Ingrese el tipo de producto de construcción (arena, cal o cemento):");
    while(isNaN(tipoProductoIngresado)==false || tipoProductoIngresado!="Arena" && tipoProductoIngresado!="arena" && tipoProductoIngresado!="Cal" && tipoProductoIngresado!="cal" && tipoProductoIngresado!="Cemento" && tipoProductoIngresado!="cemento")
    {
      tipoProductoIngresado=prompt("Error. Ingrese el tipo de producto de construcción (arena, cal o cemento):");
    } //Fin de validación de producto.

    cantidadBolsasIngresadas=prompt("Ingrese la cantidad de bolsas:");
    cantidadBolsasIngresadas=parseInt(cantidadBolsasIngresadas);
    while(isNaN(cantidadBolsasIngresadas)==true || cantidadBolsasIngresadas<1)
    {
      cantidadBolsasIngresadas=prompt("Error. Ingrese la cantidad de bolsas:");
      cantidadBolsasIngresadas=parseInt(cantidadBolsasIngresadas);  
    } //Fin de validación de bolsas.

    precioBolsasIngresadas=prompt("Ingrese el precio por bolsa (mayor a 0):");
    precioBolsasIngresadas=parseInt(precioBolsasIngresadas);
    while(isNaN(precioBolsasIngresadas)==true || precioBolsasIngresadas<1)
    {
      precioBolsasIngresadas=prompt("Ingrese el precio por bolsa (mayor a 0):");
      precioBolsasIngresadas=parseInt(precioBolsasIngresadas);
    } //Fin de validación de precio.

    
    if(banderaPrimerIngreso==true)
    {
      tipoMasCaro=tipoProductoIngresado;
      mayorPrecio=precioBolsasIngresadas;
      banderaPrimerIngreso=false;
    }
    else
    {
      switch(tipoProductoIngresado)
      {
        case "Arena":
        case "arena":
          AcumuladorBolsasArena=AcumuladorBolsasArena+cantidadBolsasIngresadas;
          if(mayorPrecio<precioBolsasIngresadas)
          {
            tipoMasCaro=tipoProductoIngresado;
            mayorPrecioArena=precioBolsasIngresadas;
          }
          break;
        case "Cal":
        case "cal":
          AcumuladorBolsasCal=AcumuladorBolsasCal+cantidadBolsasIngresadas;
          if(mayorPrecio<precioBolsasIngresadas)
          {
            tipoMasCaro=tipoProductoIngresado;
            mayorPrecioCal=precioBolsasIngresadas;
          }
          break;
        case "Cemento":
        case "cemento":
          AcumuladorBolsasCemento=AcumuladorBolsasCemento+cantidadBolsasIngresadas;
          if(mayorPrecio<precioBolsasIngresadas)
          {
            tipoMasCaro=tipoProductoIngresado;
            mayorPrecioCemento=precioBolsasIngresadas;
          }
          break;
      } 
    }
    contadorBolsas=contadorBolsas+cantidadBolsasIngresadas;
    totalAPagarBruto=totalAPagarBruto+precioBolsasIngresadas*cantidadBolsasIngresadas;

    respuesta=prompt("Si desea continuar, escriba 'si':");
  }//Fin del While

  if(cantidadBolsasIngresadas>10)
  {
    if(contadorBolsas>30)
    {
      porcentajeDescuento=25;
    }
    else
    {
      porcentajeDescuento=15;
    }
  }

  if(AcumuladorBolsasCemento>AcumuladorBolsasCal && AcumuladorBolsasCemento>AcumuladorBolsasArena)
  {
    TipoConMasBolsas="cemento";
  }
  else
  {
    if(AcumuladorBolsasCal>AcumuladorBolsasArena)
    {
      TipoConMasBolsas="cal";
    }
    else
    {
      TipoConMasBolsas="arena";
    }
  }

  totalAPagarConDescuento=totalAPagarBruto-totalAPagarBruto*porcentajeDescuento/100;

  alert("El importe total bruto es de $ "+totalAPagarBruto+".");
  if(porcentajeDescuento!=0)
  {
    alert("El importe a pagar con descuento aplicado es $ "+totalAPagarConDescuento+".");
  }
  alert("El tipo con mayor cantidad de bolsas es "+TipoConMasBolsas+".");
  alert("El tipo más caro es "+tipoMasCaro+".");
}