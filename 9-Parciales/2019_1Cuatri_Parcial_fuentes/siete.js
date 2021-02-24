/* Facundo Berges

Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros
(validar entre 0 y 250) , el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, 
informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.*/

function mostrar()
{
    let alturaIngresada;
    let sexoIngresado;
    let contadorDatosIngresados;
    let contadorAlturas;
    let promedioAlturas;
    let alturaMasBaja;
    let sexoAlturaMasBaja;
    let contadorMujeresMayorA190;

    contadorDatosIngresados=0;
    contadorAlturas=0;
    alturaMasBaja=0;
    contadorMujeresMayorA190=0;

    while(contadorDatosIngresados<5)
    {
        alturaIngresada=prompt("Ingrese altura en CM (entre 0 y 250): ");
        alturaIngresada=parseInt(alturaIngresada);
        while(isNaN(alturaIngresada)==true || alturaIngresada<0 || alturaIngresada>250)
        {
            alturaIngresada=prompt("Error. Ingrese altura en CM (entre 0 y 250): ");
            alturaIngresada=parseInt(alturaIngresada);
        }

        sexoIngresado=prompt("Ingrese sexo ('f' o 'm'): ");
        while(isNaN(sexoIngresado)==false || sexoIngresado!="f" && sexoIngresado!="F" && sexoIngresado!="m" && sexoIngresado!="M")
        {
            sexoIngresado=prompt("Error. Ingrese sexo ('f' o 'm'): ");
        }

        if(contadorDatosIngresados==0 || alturaIngresada<alturaMasBaja)
        {
            alturaMasBaja=alturaIngresada;
            sexoAlturaMasBaja=sexoIngresado;
        }

        switch(sexoIngresado)
        {
            case "F":
            case "f":
                if(alturaIngresada>189)
                {
                    contadorMujeresMayorA190=contadorMujeresMayorA190+1;
                }
                break;
            default:
                break;
        }

        contadorDatosIngresados=contadorDatosIngresados+1;
        contadorAlturas=contadorAlturas+alturaIngresada;
    }//Fin del while
    promedioAlturas=contadorAlturas/5;
    if(sexoAlturaMasBaja=="F" || sexoAlturaMasBaja=="f")
    {
        sexoAlturaMasBaja="femenino."
    }
    else
    {
        sexoAlturaMasBaja="masculino."
    }

    // A)
    alert("El promedio total de las alturas ingresadas es de "+promedioAlturas);
    // B)
    alert("La altura más baja ingresada fue "+alturaMasBaja+" y es de sexo "+sexoAlturaMasBaja);
    // C)
    alert("La cantidad de mujeres que su altura supera los 190 centimetros es "+contadorMujeresMayorA190);
}