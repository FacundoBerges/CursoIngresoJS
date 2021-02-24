/* Facundo Berges

Parcial 2018 - Ejercicio 9

Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y
100 (validar), la temperatura de almacenamiento (entre -30 y 30) hasta que el usuario quiera
e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado.
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo. */

function mostrar()
{
    let contador;
    let marcaProducto;
    let pesoProducto;
    let temperaturaDeAlmacenamiento;
    let respuesta;
    let temperaturasPares;
    let productoMasPesado;
    let productoMasLiviano;
    let marcaMasPesado;
    let marcaMasLiviano;
    let banderaPrimerIngreso;
    let cantidadProductosBajo0;
    let sumaPesoTotal;
    let pesoPromedio;

    contador=0;
    banderaPrimerIngreso=true;
    respuesta="si";
    temperaturasPares=0;
    cantidadProductosBajo0=0;
    sumaPesoTotal=0;
    pesoPromedio=0;

    while(respuesta=="si" || respuesta=="SI" || respuesta=="Si")
    {
        marcaProducto=prompt("Ingrese marca del producto:")
        while(isNaN(marcaProducto)==false)
        {
            marcaProducto=prompt("Error. Ingrese marca del producto (debe ser alfabético o alfanumérico):");
        }

        pesoProducto=prompt("Ingrese peso (entre 1 y 100):");
        pesoProducto=parseInt(pesoProducto);
        while(isNaN(pesoProducto)==true || pesoProducto<1 || pesoProducto>100)
        {
            pesoProducto=prompt("Error. Ingrese peso (entre 1 y 100):");
        }

        temperaturaDeAlmacenamiento=prompt("Ingrese temperatura de almacenamiento del producto (entre -30 y 30):");
        temperaturaDeAlmacenamiento=parseInt(temperaturaDeAlmacenamiento);
        while(isNaN(temperaturaDeAlmacenamiento)==true || temperaturaDeAlmacenamiento<-30 || temperaturaDeAlmacenamiento>30)
        {
            temperaturaDeAlmacenamiento=prompt("Error. Ingrese temperatura de almacenamiento del producto (entre -30 y 30):");
        }

        contador=contador+1;
        sumaPesoTotal=sumaPesoTotal+pesoProducto;

        if(temperaturaDeAlmacenamiento%2 == 0)
        {
            temperaturasPares=temperaturasPares+1;
        }

        if(temperaturaDeAlmacenamiento<0)
        {
            cantidadProductosBajo0=cantidadProductosBajo0+1;
        }

        if(banderaPrimerIngreso==true)
        {
            marcaMasPesado=marcaProducto;
            marcaMasLiviano=marcaProducto;
            productoMasPesado=pesoProducto;
            productoMasLiviano=pesoProducto;
            banderaPrimerIngreso=false;
        }

        else
        {
            if(pesoProducto>productoMasPesado)
            {
                marcaMasPesado=marcaProducto;
                productoMasPesado=pesoProducto;
            }

            if(pesoProducto<productoMasLiviano)
            {
                marcaMasLiviano=marcaProducto;
                productoMasLiviano=pesoProducto;
            }
        }
        respuesta=prompt("Escriba 'si' si desea continuar: ");
    }
    pesoPromedio=sumaPesoTotal/contador;

    document.write("Se ingresaron "+temperaturasPares+" temperaturas pares. ");
    document.write("La marca del producto más pesado fue '"+marcaMasPesado+"'. ");
    document.write("Se ingresaron "+cantidadProductosBajo0+" productos que se conservan por debajo de 0° de temperatura. ");
    document.write("El peso promedio de los productos ingresados es: "+pesoPromedio+". ");
    document.write("El producto más pesado es '"+marcaMasPesado+"' con un peso de "+productoMasPesado+" y el más liviano fue '"+marcaMasLiviano+"' con un peso de "+productoMasLiviano+". ");
}