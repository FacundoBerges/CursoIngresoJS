/*
Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo, internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano
*/

function mostrar()
{
    let mascotaIngresado;
    let tipoDePelajeIngresado;
    let edadMascotaIngresada;
    let nombreMascotaIngresada;
    let razaMascotaIngresada;
    let pesoIngresado;
    let estadoClinicoIngresado;
    let temperaturaCorporalIngresada;
    let respuesta;
    //A
    let pesoPerroMasPesado;
    let nombrePerroMasPesado;
    //B
    let contadorEstadoEnfermo;
    let promedioMascotasEnfermas;
    //C
    let nombreUltimaMascotaOtraCosa;
    //D
    let banderaPrimerAnimalSinPelo;
    let temperaturaAnimalSinPeloYMenorTemperatura;
    let nombreAnimalSinPeloYMenorTemperatura;
    //E
    let acumuladorTemperaturasGatos;
    let contadorGatos;
    let acumuladorTemperaturasPerros;
    let contadorPerros;
    let acumuladorTemperaturasOtraCosa;
    let contadorOtraCosa;
    let promedioTemperaturaGatos;
    let promedioTemperaturaPerros;
    let promedioTemperaturaOtraCosa;
    let mayorPromedioTemperaturaCorporal;
    //F
    let contadorGatosYPerros;
    let contadorAnimalesIngresados;
    let porcentajeGatosYPerros;
    //G
    // contadorEstadoEnfermo;
    let contadorEstadoInternado;
    let contadorEstadoAdopcion;
    let estadoConMenosMascotas;
    //H
    let acumuladorKilosDePeso;
    let promedioKilosDePeso;
    //I
    let banderaPrimerGatoSinPelo;
    let pesoGatoSinPeloMasLiviano;
    let nombreGatoSinPeloMasLiviano;
    let razaGatoSinPeloMasLiviano;

    banderaPrimerAnimalSinPelo=true;
    banderaPrimerGatoSinPelo=true;
    acumuladorTemperaturasGatos=0;
    contadorGatos=0;
    acumuladorTemperaturasPerros=0;
    contadorPerros=0;
    acumuladorTemperaturasOtraCosa=0;
    contadorOtraCosa=0;
    contadorEstadoEnfermo=0;
    contadorEstadoInternado=0;
    contadorEstadoAdopcion=0;
    estadoConMenosMascotas=0;
    acumuladorKilosDePeso=0;

    respuesta="si";

    while(respuesta=="si")
    {
        mascotaIngresado=prompt("Ingrese tipo de mascota (perro, gato u 'otra cosa'):");
        mascotaIngresado=mascotaIngresado.toLowerCase();
        while(isNaN(mascotaIngresado)==false || mascotaIngresado!="perro" && mascotaIngresado!="gato" && mascotaIngresado!="otra cosa")
        {
            mascotaIngresado=prompt("ERROR. Ingrese tipo de mascota (perro, gato u 'otra cosa'):");
            mascotaIngresado=mascotaIngresado.toLowerCase();
        }

        tipoDePelajeIngresado=prompt("Ingrese tipo de pelaje (corto, largo o sin pelo):");
        tipoDePelajeIngresado=tipoDePelajeIngresado.toLowerCase();
        while(isNaN(tipoDePelajeIngresado)==false || tipoDePelajeIngresado!="corto" && tipoDePelajeIngresado!="largo" && tipoDePelajeIngresado!="sin pelo")
        {
            tipoDePelajeIngresado=prompt("ERROR. Ingrese tipo de pelaje (corto, largo o sin pelo):");
            tipoDePelajeIngresado=tipoDePelajeIngresado.toLowerCase();
        }

        edadMascotaIngresada=prompt("Ingrese edad de la mascota (entre 1 y 25 años):");
        edadMascotaIngresada=parseInt(edadMascotaIngresada);
        while(isNaN(edadMascotaIngresada)==true || edadMascotaIngresada<1 || edadMascotaIngresada>25)
        {
            edadMascotaIngresada=prompt("ERROR. Ingrese edad de la mascota (entre 1 y 25 años):");
            edadMascotaIngresada=parseInt(edadMascotaIngresada);
        }

        nombreMascotaIngresada=prompt("Ingrese nombre de la mascota:");
        while(isNaN(nombreMascotaIngresada)==false)
        {
            nombreMascotaIngresada=prompt("ERROR. Ingrese nombre de la mascota:");
        }

        razaMascotaIngresada=prompt("Ingrese nombre de la mascota:");
        while(isNaN(razaMascotaIngresada)==false)
        {
            razaMascotaIngresada=prompt("ERROR. Ingrese nombre de la mascota:");
        }

        pesoIngresado=prompt("Ingrese peso de la mascota(entre 1 y 50 kg):");
        pesoIngresado=parseInt(pesoIngresado);
        while(isNaN(pesoIngresado)==true || pesoIngresado<1 || pesoIngresado>50)
        {
            pesoIngresado=prompt("ERROR. Ingrese peso de la mascota(entre 1 y 50 kg):");
            pesoIngresado=parseInt(pesoIngresado);
        }

        estadoClinicoIngresado=prompt("Ingrese estado clínico (enfermo, internado o adopcion):");
        estadoClinicoIngresado=estadoClinicoIngresado.toLowerCase();
        while(isNaN(estadoClinicoIngresado)==false || estadoClinicoIngresado!="enfermo" && estadoClinicoIngresado!="internado" && estadoClinicoIngresado!="adopcion")
        {
            estadoClinicoIngresado=prompt("ERROR. Ingrese estado clínico (enfermo, internado o adopcion):");
            estadoClinicoIngresado=estadoClinicoIngresado.toLowerCase();
        }

        temperaturaCorporalIngresada=prompt("Ingrese temperatura corporal (entre 20 y 50 grados):");
        temperaturaCorporalIngresada=parseInt(temperaturaCorporalIngresada);
        while(isNaN(temperaturaCorporalIngresada)==true || temperaturaCorporalIngresada<20 || temperaturaCorporalIngresada>50)
        {
            temperaturaCorporalIngresada=prompt("ERROR. Ingrese temperatura corporal (entre 20 y 50 grados):");
            temperaturaCorporalIngresada=parseInt(temperaturaCorporalIngresada);
        }
        //Fin de las validaciones

        switch(mascotaIngresado) // A), C) y E)
        {
            case "perro":
                if(contadorPerros==0 || pesoIngresado>pesoPerroMasPesado)//A)
                {
                    nombrePerroMasPesado=nombreMascotaIngresada;
                    pesoPerroMasPesado=pesoIngresado;
                }
                contadorPerros++;
                acumuladorTemperaturasPerros=acumuladorTemperaturasPerros+temperaturaCorporalIngresada;//E)
                break;
            case "gato":
                if(banderaPrimerGatoSinPelo==true || (tipoDePelajeIngresado=="sin pelo" && pesoIngresado<pesoGatoSinPeloMasLiviano))
                {
                    banderaPrimerGatoSinPelo=false;
                    nombreGatoSinPeloMasLiviano=nombreMascotaIngresada;
                    razaGatoSinPeloMasLiviano=razaMascotaIngresada;
                    pesoGatoSinPeloMasLiviano=pesoIngresado;
                }
                contadorGatos++;
                acumuladorTemperaturasGatos=acumuladorTemperaturasGatos+temperaturaCorporalIngresada;//E)
                break;
            case "otra cosa":
                contadorOtraCosa++;
                acumuladorTemperaturasOtraCosa=acumuladorTemperaturasOtraCosa+temperaturaCorporalIngresada;//E)
                nombreUltimaMascotaOtraCosa=nombreMascotaIngresada; //C
                break;
        }//Fin SWITCH tipo mascota.

        switch(estadoClinicoIngresado)
        {
            case "enfermo":
                contadorEstadoEnfermo++;
                break;
            case "internado":
                contadorEstadoInternado++;
                break;
            case "adopcion":
                contadorEstadoEnfermo++;
                break;
        } //Fin SWITCH estado clinico.

        //D
        if(banderaPrimerAnimalSinPelo==true || (tipoDePelajeIngresado=="sin pelo" && temperaturaCorporalIngresada>temperaturaAnimalSinPeloYMenorTemperatura))
        {
            banderaPrimerAnimalSinPelo=false;
            temperaturaAnimalSinPeloYMenorTemperatura=temperaturaCorporalIngresada;
            nombreAnimalSinPeloYMenorTemperatura=nombreMascotaIngresada;
        }

        contadorAnimalesIngresados++;
        acumuladorKilosDePeso=acumuladorKilosDePeso+pesoIngresado;

        respuesta=prompt("Escriba 'si' si desea continuar:");
        respuesta=respuesta.toLowerCase();
    }//Fin del while.

    //A)
    if(contadorPerros!=0)
    {
        alert("El perro más pesado es "+nombrePerroMasPesado+" con "+pesoPerroMasPesado+" Kg.");
    }

    //B)
    if(contadorEstadoEnfermo!=0)
    {
        promedioMascotasEnfermas=contadorAnimalesIngresados*100/contadorEstadoEnfermo;
        alert("Es promedio de mascotas enfermas entre el total de mascotas ingresadas es "+promedioMascotasEnfermas+"%.");
    }

    //C)
    if(contadorOtraCosa!=0)
    {
        alert("El último nombre ingresado de tipo de mascota 'otra cosa' es "+nombreUltimaMascotaOtraCosa+".");
    }

    //D)
    if(banderaPrimerAnimalSinPelo==false)
    {
        alert("El animal sin pelo con mayor temperatura corporal es "+nombreAnimalSinPeloYMenorTemperatura+" con "+temperaturaAnimalSinPeloYMenorTemperatura+"°.");
    }

    //E
    if(contadorGatos!=0)
    {
        promedioTemperaturaGatos=acumuladorTemperaturasGatos/contadorGatos;
    }
    else
    {
        promedioTemperaturaGatos=0;
    }

    if(contadorPerros!=0)
    {
        promedioTemperaturaPerros=acumuladorTemperaturasPerros/contadorPerros;
    }
    else
    {
        promedioTemperaturaPerros=0;
    }

    if(contadorOtraCosa!=0)
    {
        promedioTemperaturaOtraCosa=acumuladorTemperaturasOtraCosa/contadorOtraCosa;
    }
    else
    {
        promedioTemperaturaOtraCosa=0;
    }

    if(promedioTemperaturaPerros>promedioTemperaturaGatos && promedioTemperaturaPerros>promedioTemperaturaOtraCosa)
    {
        mayorPromedioTemperaturaCorporal=promedioTemperaturaPerros;
    }
    else
    {
        if(promedioTemperaturaGatos>promedioTemperaturaOtraCosa)
        {
            mayorPromedioTemperaturaCorporal=promedioTemperaturaGatos;
        }
        else
        {
            mayorPromedioTemperaturaCorporal=promedioTemperaturaOtraCosa;
        }
    }

    //F
    contadorGatosYPerros=contadorGatos+contadorPerros;
    contadorAnimalesIngresados=contadorGatos+contadorPerros+contadorOtraCosa;
    if(contadorGatosYPerros!=0)
    {
        porcentajeGatosYPerros=contadorGatosYPerros*100/contadorAnimalesIngresados;
        alert("De los "+contadorAnimalesIngresados+" animales ingresados, el "+porcentajeGatosYPerros+"% son perros y gatos.");
    }

    //G
    if(contadorEstadoInternado<contadorEstadoEnfermo && contadorEstadoInternado<contadorEstadoAdopcion)
    {
        estadoConMenosMascotas="internado";
    }
    else
    {
        if(contadorEstadoEnfermo<contadorEstadoAdopcion)
        {
            estadoConMenosMascotas="enfermo";
        }
        else
        {
            estadoConMenosMascotas="adopción";
        }
    }
    alert("El estado con menos mascotas es "+estadoConMenosMascotas);

    //H
    promedioKilosDePeso=acumuladorKilosDePeso/contadorAnimalesIngresados;
    alert("El promedio de peso de los animales ingresados es "+promedioKilosDePeso+" kg.");

    //I
    if(banderaPrimerGatoSinPelo==false)
    {
        alert("El gato sin pelo más liviano es "+nombreGatoSinPeloMasLiviano+" de raza "+razaGatoSinPeloMasLiviano+" con un peso de "+pesoGatoSinPeloMasLiviano+" kg.");
    }

}//Fin de la función.