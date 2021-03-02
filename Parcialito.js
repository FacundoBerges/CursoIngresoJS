/*
Realizar el algoritmo que permita ingresar 5 paises:

· El continente (validar entre america , asia , europa ,africa y oceania),
· El nombre del país,
· Cantidad de habitantes en millones entre 1 y 7000 (validar),
· El nivel de pobreza entre (pobre, rico, muy rico) en europa no hay paises pobre (validar),
· La temperaruta mínima que se registra en su territorio(entre -50 y 50),

a) La cantidad de temperaturas pares.
b) La cantidad de temperaturas impares de europa.
c) El nombre del pais con menos habitantes.
d) La cantidad de paises que superan los 40 grados.
e) La cantidad de paises de america que tienen menos de 0 grados.
f) El promedio de habitantes entre los paises ingresados.
g) El promedio de habitantes entre los paises que superan los 40 grados.        
h) La temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) Qué continente tiene mas habitantes.
*/

function mostrar()
{
    let contadorPaisesIngresados;
    let continenteIngresado;
    let nombrePaisIngresado;
    let cantidadHabitantesIngresados;
    let nivelDePobrezaIngresado;
    let temperaturaIngresada;

    //a
    let contadorTemperaturasPares;

    //b
    let contadorTemperaturasImparesEuropa;
    
    //c
    let paisConMenosHabitantes;
    let cantidadHabitantesPaisConMenosHabitantes;
    
    //d
    let contadorPaisesMasDe40Grados;

    //e
    let contadorPaisesMenos0GradosAmerica;

    //f
    let acumuladorHabitantes;
    let promedioHabitantesTotal;

    //g
    let acumuladorHabitantesPaisesMasDe40Grados;
    let promedioHabitantesPaisesMasDe40Grados;

    //h
    let temperaturaMinimaIngresada;
    let paisTemperaturaMinimaIngresada;

    //i
    let acumuladorHabitantesAmerica;
    let acumuladorHabitantesEuropa;
    let acumuladorHabitantesAsia;
    let acumuladorHabitantesAfrica;
    let acumuladorHabitantesOceania;
    let continenteConMasHabitantes;

    //Inicialización de variables
    contadorTemperaturasPares=0;
    contadorTemperaturasImparesEuropa=0;
    contadorPaisesMasDe40Grados=0;
    contadorPaisesMenos0GradosAmerica=0;
    cantidadHabitantesPaisConMenosHabitantes=0;
    acumuladorHabitantes=0;
    acumuladorHabitantesPaisesMasDe40Grados=0;
    acumuladorHabitantesAmerica=0;
    acumuladorHabitantesEuropa=0;
    acumuladorHabitantesAsia=0;
    acumuladorHabitantesAfrica=0;
    acumuladorHabitantesOceania=0;
    continenteConMasHabitantes=0;
    
    //Inicio del for
    for(contadorPaisesIngresados=0;contadorPaisesIngresados < 5;contadorPaisesIngresados++)
    {
        continenteIngresado = prompt("Ingrese un continente (America, Europa, Africa, Oceania o Asia)");
        continenteIngresado = continenteIngresado.toLowerCase();
        while(isNaN(continenteIngresado) == false || continenteIngresado != "america" && continenteIngresado != "europa" && continenteIngresado != "africa" && continenteIngresado != "oceania" &&continenteIngresado != "asia")
        {
            continenteIngresado = prompt("El continente ingresado es incorrecto, por favor reingrese (America, Europa, Africa, Oceania o Asia)");
        }

        nombrePaisIngresado = prompt("Ingrese nombre del país");
        while(isNaN(nombrePaisIngresado) == false)
        {
            nombrePaisIngresado = prompt("ERROR. Ese nombre no es valido, por favor reingrese");
        }
        
        cantidadHabitantesIngresados = prompt("Ingrese la cantidad de habitantes (En millones, entre 1 y 7000");
        cantidadHabitantesIngresados=parseInt(cantidadHabitantesIngresados);
        while(isNaN(cantidadHabitantesIngresados) == true || cantidadHabitantesIngresados<1 || cantidadHabitantesIngresados>7000)
        {
            cantidadHabitantesIngresados = prompt("ERROR. Esa cantidad de habitantes no es valida, por favor reingrese");
            cantidadHabitantesIngresados=parseInt(cantidadHabitantesIngresados);
        }

        nivelDePobrezaIngresado=prompt("Ingrese nivel de pobreza (pobre, rico, muy rico):");
        while(isNaN(nivelDePobrezaIngresado)==false || (continenteIngresado=="europa" && nivelDePobrezaIngresado=="pobre") || (continenteIngresado!="europa" && nivelDePobrezaIngresado != "pobre" && nivelDePobrezaIngresado != "rico" && nivelDePobrezaIngresado != "muy rico"))
        {
            nivelDePobrezaIngresado=prompt("ERROR. Ingrese nivel de pobreza (pobre, rico, muy rico - no hay pobreza en europa):"); 
        }
        
        temperaturaIngresada=prompt("Ingrese temperatura mínima (entre -50° y 50°):");
        temperaturaIngresada=parseInt(temperaturaIngresada);
        while(isNaN(temperaturaIngresada)==true || temperaturaIngresada<-50 || temperaturaIngresada>50)
        {
            temperaturaIngresada=prompt("ERROR. Ingrese temperatura mínima (entre -50° y 50°):");
            temperaturaIngresada=parseInt(temperaturaIngresada);
        }
        
        //a)
        if(temperaturaIngresada%2==0)
        {
            contadorTemperaturasPares++;
        }

        //b) i)
        switch(continenteIngresado)
        {
            case "europa":
                acumuladorHabitantesEuropa=acumuladorHabitantesEuropa+cantidadHabitantesIngresados;
                if(temperaturaIngresada % 2 != 0) //b)
                {
                    contadorTemperaturasImparesEuropa++;
                }
                break;
            case "america":
                acumuladorHabitantesAmerica=acumuladorHabitantesAmerica+cantidadHabitantesIngresados;
                if(temperaturaIngresada < 0)
                {
                    contadorPaisesMenos0GradosAmerica++;
                }
                break;
            case "asia":
                acumuladorHabitantesAsia = acumuladorHabitantesAsia + cantidadHabitantesIngresados;
                break;
            case "oceania":
                acumuladorHabitantesOceania = acumuladorHabitantesOceania + cantidadHabitantesIngresados;
                break;
            case "africa":
                acumuladorHabitantesAfrica = acumuladorHabitantesAfrica + cantidadHabitantesIngresados;
                break;
        }

        //c) h)
        if(contadorPaisesIngresados == 0)
        {
            paisConMenosHabitantes = nombrePaisIngresado;
            cantidadHabitantesPaisConMenosHabitantes = cantidadHabitantesIngresados;
            
            temperaturaMinimaIngresada=temperaturaIngresada;
            paisTemperaturaMinimaIngresada=nombrePaisIngresado;
        }
        else
        {
            //c)
            if(cantidadHabitantesIngresados < cantidadHabitantesPaisConMenosHabitantes)
            {
                paisConMenosHabitantes = nombrePaisIngresado;
                cantidadHabitantesPaisConMenosHabitantes = cantidadHabitantesIngresados; 
            }

            //h)
            if(temperaturaIngresada<temperaturaMinimaIngresada)
            {
                temperaturaMinimaIngresada=temperaturaIngresada;
                paisTemperaturaMinimaIngresada=nombrePaisIngresado;
            }
        }

        //d) g)
        if(temperaturaIngresada > 40)
        {
            contadorPaisesMasDe40Grados++;
            acumuladorHabitantesPaisesMasDe40Grados = acumuladorHabitantesPaisesMasDe40Grados + cantidadHabitantesIngresados;

        }

        //f)
        acumuladorHabitantes = acumuladorHabitantes + cantidadHabitantesIngresados;
        
    } // Fin del 'For'
    
    //f)
    promedioHabitantesTotal = acumuladorHabitantes / 5;

    //g)
    promedioHabitantesPaisesMasDe40Grados = acumuladorHabitantesPaisesMasDe40Grados / 5;
    
    //i)
    if(acumuladorHabitantesAmerica > acumuladorHabitantesEuropa && acumuladorHabitantesAmerica > acumuladorHabitantesAfrica && acumuladorHabitantesAmerica > acumuladorHabitantesOceania && acumuladorHabitantesAmerica > acumuladorHabitantesAsia)
    {
        continenteConMasHabitantes="America";
    }
    else
    {
        if(acumuladorHabitantesEuropa > acumuladorHabitantesAfrica && acumuladorHabitantesEuropa > acumuladorHabitantesOceania && acumuladorHabitantesEuropa > acumuladorHabitantesAsia)
        {
            continenteConMasHabitantes="Europa";
        }
        else
        {
            if(acumuladorHabitantesAfrica > acumuladorHabitantesAsia && acumuladorHabitantesAfrica > acumuladorHabitantesOceania)
            {
                continenteConMasHabitantes="Africa";
            }
            else
            {
                if(acumuladorHabitantesAsia > acumuladorHabitantesOceania)
                {
                    continenteConMasHabitantes="Asia";
                }
                else
                {
                    continenteConMasHabitantes="Oceania";
                }
            }
        }
    }

    //respuesta a)
    if(contadorTemperaturasPares == 0)
    {
        contadorTemperaturasPares = "No existen Paises ingresados con temperaturas pares";
    }
    else
    {
        contadorTemperaturasPares = "La cantidad de paises con temperaturas pares es " + contadorTemperaturasPares;
    }
    alert(contadorTemperaturasPares);

    //respuesta b)
    if(contadorTemperaturasImparesEuropa == 0)
    {
        contadorTemperaturasImparesEuropa = "No existen Paises ingresados de Europa con temperaturas impares";
    }
    else
    {
        contadorTemperaturasImparesEuropa="La cantidad de paises con temperaturas impares en europa es " + contadorTemperaturasImparesEuropa;
    }
    alert(contadorTemperaturasImparesEuropa);

    //respuesta c)
    paisConMenosHabitantes = "El pais con menos habitantes es " + paisConMenosHabitantes;
    alert(paisConMenosHabitantes);
    
    //respuesta d)
    if(contadorPaisesMasDe40Grados == 0)
    {
        contadorPaisesMasDe40Grados="No existen Paises ingresados con mas de 40 grados";
    }
    else
    {
        contadorPaisesMasDe40Grados="La cantidad de países con más de 40 grados es "+contadorPaisesMasDe40Grados;
    }
    alert(contadorPaisesMasDe40Grados);

    //respuesta e)
    if(contadorPaisesMenos0GradosAmerica == 0)
    {
        contadorPaisesMenos0GradosAmerica = "No existen Paises con menos de 0 grados en America";
    }
    else
    {
        contadorPaisesMenos0GradosAmerica = "Los paises de america con menos de 0 grados son en total" + promedioHabitantesTotal;
    }
    alert(contadorPaisesMenos0GradosAmerica); 
    
    //respuesta f)
    promedioHabitantesTotal="El promedio de habitantes entre los países ingresados es "+promedioHabitantesTotal;
    alert(promedioHabitantesTotal); 
    
    //respuesta g)
    if(acumuladorHabitantesPaisesMasDe40Grados==0)
    {
        promedioHabitantesPaisesMasDe40Grados="No existen Paises ingresados con mas de 40 grados";
    }
    else
    {
        promedioHabitantesPaisesMasDe40Grados = "El promedio de Habitantes en Paises con mas de 40 grados es " + promedioHabitantesPaisesMasDe40Grados;
    }
    alert(promedioHabitantesPaisesMasDe40Grados);
    
    //respuesta h)
    paisTemperaturaMinimaIngresada = "El pais con la menor temperatura ingresada es " + paisTemperaturaMinimaIngresada + " con " + temperaturaMinimaIngresada + "grados"
    alert(paisTemperaturaMinimaIngresada);

    //respuesta i)
    continenteConMasHabitantes="El continente con más habitantes es "+continenteConMasHabitantes;
    alert(continenteConMasHabitantes);

}//Fin de la función.