/*
FacundoBerges

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let sumaPrecios;

    precioUno=document.getElementById("txtIdPrecioUno").value;
    precioDos=document.getElementById("txtIdPrecioDos").value;
    precioTres=document.getElementById("txtIdPrecioTres").value;

    precioUno=parseInt(precioUno);
    precioDos=parseInt(precioDos);
    precioTres=parseInt(precioTres);

    sumaPrecios=precioUno+precioDos+precioTres;
    alert("La suma de los números ingresados es: "+sumaPrecios);
}
function Promedio () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let sumaPrecios;
    let promedioPrecios;

    precioUno=document.getElementById("txtIdPrecioUno").value;
    precioDos=document.getElementById("txtIdPrecioDos").value;
    precioTres=document.getElementById("txtIdPrecioTres").value;

    precioUno=parseInt(precioUno);
    precioDos=parseInt(precioDos);
    precioTres=parseInt(precioTres);

    sumaPrecios=precioUno+precioDos+precioTres;
    promedioPrecios=sumaPrecios/3;

    alert("El promedio de los números ingresados es: "+promedioPrecios);
}
function PrecioFinal () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let sumaPrecios;
    let precioFinal;

    precioUno=document.getElementById("txtIdPrecioUno").value;
    precioDos=document.getElementById("txtIdPrecioDos").value;
    precioTres=document.getElementById("txtIdPrecioTres").value;

    precioUno=parseInt(precioUno);
    precioDos=parseInt(precioDos);
    precioTres=parseInt(precioTres);

    sumaPrecios=precioUno+precioDos+precioTres;
    precioFinal=sumaPrecios*1.21;

    alert("El precio final de los números ingresados es: "+precioFinal);
}