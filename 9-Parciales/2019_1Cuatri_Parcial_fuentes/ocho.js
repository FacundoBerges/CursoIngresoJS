/* Facundo Berges

Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número
entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el 
ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
*/
function mostrar()
{
    let letraIngresada;
    let numeroIngresado;
    let respuesta;
    let contadorNumerosPares;
    let contadorNumerosImpares;
    let contadorCeros;
    let acumuladorNumerosPositivos;
    let contadorNumerosPositivos;
    let promedioNumerosPositivos;
    let acumuladorNumerosNegativos;
    let banderaPrimerNumero;
    let letraMaximo;
    let numeroMaximo;
    let letraMinimo;
    let numeroMinimo;

    respuesta="si";
    contadorNumerosPares=0;
    contadorNumerosImpares=0;
    contadorCeros=0;
    acumuladorNumerosPositivos=0;
    contadorNumerosPositivos=0;
    acumuladorNumerosNegativos=0;
    banderaPrimerNumero=true;

    while(respuesta=="Si" || respuesta=="si" || respuesta=="SI")
    {
        letraIngresada=prompt("Ingrese una letra:");
        while(isNaN(letraIngresada)==false)
        {
            letraIngresada=prompt("ERROR. Ingrese una letra:");
        }

        numeroIngresado=prompt("Ingrese un número:");
        numeroIngresado=parseInt(numeroIngresado);
        while(isNaN(numeroIngresado)==true || numeroIngresado<-100 || numeroIngresado>100)
        {
            numeroIngresado=prompt("ERROR. Ingrese un número:");
            numeroIngresado=parseInt(numeroIngresado);
        }

        //Ejercicio A)
        if(numeroIngresado%2==0)
        {
            contadorNumerosPares=contadorNumerosPares+1;
        }
        //Ejercicio B)
        else
        {
            contadorNumerosImpares=contadorNumerosImpares+1;
        }
        
        //Ejercicio C)
        if(numeroIngresado==0)
        {
            contadorCeros=contadorCeros+1;
        }
        else
        {
            //Ejercicio D)
            if(numeroIngresado>0)
            {
                acumuladorNumerosPositivos=acumuladorNumerosPositivos+numeroIngresado;
                contadorNumerosPositivos=contadorNumerosPositivos+1;
            }

            // Ejercicio E)
            else //numeroIngresado<0
            {
                acumuladorNumerosNegativos=acumuladorNumerosNegativos+numeroIngresado;
            }
        }
        // Ejercicio F)
        if(banderaPrimerNumero==true)
        {
            numeroMaximo=numeroIngresado;
            numeroMinimo=numeroIngresado;
            letraMaximo=letraIngresada;
            letraMinimo=letraIngresada;
            banderaPrimerNumero=false;
        }
        else
        {
            if(numeroIngresado>numeroMaximo)
            {
                numeroMaximo=numeroIngresado;
                letraMaximo=letraIngresada;
            }

            if(numeroIngresado<numeroMinimo)
            {
                numeroMinimo=numeroIngresado;
                letraMinimo=letraIngresada;
            }
        }

        respuesta=prompt("Escriba 'si' si desea seguir ingresando datos:");
    }//fin del while
    promedioNumerosPositivos=acumuladorNumerosPositivos/contadorNumerosPositivos;
    if(contadorNumerosPositivos==0)
    {
        promedioNumerosPositivos=0+", no se ingresaron";
    }

    document.write("La cantidad de números pares ingresados es "+contadorNumerosPares+". La cantidad de números impares ingresados es "+contadorNumerosImpares+". La cantidad de ceros ingresados es "+contadorCeros+". El promedio de números positivos ingresados es "+promedioNumerosPositivos+". La suma de todos los números negativos da en total "+acumuladorNumerosNegativos+". El máximo número ingresado es "+numeroMaximo+" con la letra "+letraMaximo+" y el mínimo es "+numeroMinimo+" con letra "+letraMinimo+".");
}