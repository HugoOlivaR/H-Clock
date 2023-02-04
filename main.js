function reloj(){

    fecha=new Date(); //Actualizar fecha.
    hora=fecha.getHours(); //hora actual
    minuto=fecha.getMinutes(); //minuto actual
    segundo=fecha.getSeconds(); //segundo actual


    if (hora<10) { //dos cifras para la hora
        hora="0"+hora;
    }
    if (minuto<10) { //dos cifras para el minuto
        minuto="0"+minuto;
    }
    if (segundo<10) { //dos cifras para el segundo
        segundo="0"+segundo;
    }

    document.getElementById("reloj").innerHTML = hora + ":" + minuto + ":" + segundo;	

}

reloj()

setInterval(reloj, 1000)


var divreloj = document.getElementById("divreloj")
var numerosreloj = document.getElementById("reloj")
var icono = document.getElementById("icono")
var divabierto = false

function tamaño(){

    if(divabierto == true){
        divabierto = false
    }else{
        divabierto = true
    }

    if(divabierto == true){
        divreloj.style.transition = "ease 1s"
        divreloj.style.width = "400px"
        divreloj.style.height = "200px"
        divreloj.style.borderRadius = "20px"


        numerosreloj.style.transition = "ease 1s"
        numerosreloj.style.fontSize = "110px"


        icono.style.transition = "ease 0.3s"
        icono.style.height = "0px"
        icono.style.width = "0px"

    }else{
        divreloj.style.transition = "ease 0.5s"
        divreloj.style.width = "70px"
        divreloj.style.height = "70px"
        divreloj.style.borderRadius = "10px"


        numerosreloj.style.transition = "ease 0.2s"
        numerosreloj.style.fontSize = "0px"


        icono.style.transition = "ease 0.2s"
        icono.style.height = "60px"
        icono.style.width = "60px"
    }

}


var divactivo = false
var clasedivreloj = document.querySelector('.divreloj');

function activacion(){

    if(divactivo == true){
        divactivo = false
    }else{
        divactivo = true
    }

    if(divactivo == true){
        clasedivreloj.classList.remove('desactivado')
        clasedivreloj.classList.add('activo')
    }else{
        clasedivreloj.classList.remove('activo')
        clasedivreloj.classList.add('desactivado')
    }
}

