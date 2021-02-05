/*
Facundo Berges

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular
 y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular 
y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, 
debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen. */

function Rectangulo () 
{
    let largoTerreno;
    let anchoTerreno;
    let cantidadAlambre;

    largoTerreno=document.getElementById("txtIdLargo").value;
    anchoTerreno=document.getElementById("txtIdAncho").value;

    cantidadAlambre=((largoTerreno*2)+(anchoTerreno*2))*3;

    alert("La cantidad de alambre necesaria para el terreno rectangular es " +cantidadAlambre+ " metros.");
}
function Circulo () 
{
	let radioTerreno;
    let circunferenciaTerreno;
    let cantidadAlambre;

    radioTerreno=document.getElementById("txtIdRadio").value;
    circunferenciaTerreno=((radioTerreno**2)*3.14);
    cantidadAlambre=circunferenciaTerreno*3;

    alert("La cantidad de alambre necesaria para el terreno circular es de " +cantidadAlambre+ " metros.");
}
function Materiales () 
{
	
}