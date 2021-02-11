/*4.Facundo Berges

	Para el departamento de iluminación:
    Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
    A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
    B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % 
        y si es de otra marca el descuento es del 30%.
    C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
        se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
    D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
        si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
    E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos 
        en informar del impuesto con el siguiente mensaje: ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.
*/
function CalcularPrecio () 
{
    let precioLamparitas;
    let cantidadLamparitas;
    let marcaLamparitas;
    let precioFinal;
    let precioConIIBB;
    let porcentajeDescuento;

    cantidadLamparitas=document.getElementById("txtIdCantidad").value;
    marcaLamparitas=document.getElementById("Marca").value;
    precioLamparitas=cantidadLamparitas*35;

    if(cantidadLamparitas>5)
    {
        porcentajeDescuento=50;
    }
    else
    {
        if(cantidadLamparitas==5)
        {
            if(marcaLamparitas=="ArgentinaLuz")
            {
                porcentajeDescuento=40;
            }
            else
            {
                porcentajeDescuento=30;
            }
        }
        else
        {
            if(cantidadLamparitas==4)
            {
                if(marcaLamparitas=="ArgentinaLuz" || marcaLamparitas=="FelipeLamparas")
                {
                    porcentajeDescuento=25;
                }
                else
                {
                    porcentajeDescuento=20;
                }
            }
            else
            {
                if(cantidadLamparitas==3)
                {
                    if(marcaLamparitas=="ArgentinaLuz" || marcaLamparitas=="FelipeLamparas")
                    {
                        if(marcaLamparitas=="ArgentinaLuz")
                        {
                            porcentajeDescuento=15;
                        }
                        else
                        {
                            porcentajeDescuento=10;
                        }
                    }
                    else
                    {
                        porcentajeDescuento=5;
                    }
                }
                else
                {
                    porcentajeDescuento=0;
                }
            }
        }
    }
    precioFinal=precioLamparitas-(precioLamparitas*porcentajeDescuento/100);

    if(precioFinal>119)
    {
        precioConIIBB=(precioFinal*10/100);
        alert("Usted pagó $ "+precioConIIBB+" de ingresos brutos.");
    }
    else
    {
        precioConIIBB=0
    }
    document.getElementById("txtIdprecioDescuento").value="El precio final a pagar es $ "+(precioFinal+precioConIIBB)+". ($ "+precioConIIBB+ " corresponden a IIBB)";
}