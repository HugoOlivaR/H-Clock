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
var claseicono = document.querySelector('.icono ');
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




// EVENTO CUANDO PULSA LA TECLA ESPACIO

var oscuro = true
var fondo = document.getElementById("body")


function colorClaro(){
    fondo.style.background = "rgb(255, 239, 205)"
}

function colorOscuro(){
    fondo.style.background = "#10131c"
}



window.addEventListener("keydown", (event) => {

    var tecla = event.key

    if(tecla == " "){
        if(oscuro == true){
            colorClaro()
    
            clasedivreloj.classList.remove('oscuro')
            clasedivreloj.classList.add('claro')
            icono.classList.remove('oscuro')
            icono.classList.add('claro')
            numerosreloj.classList.remove('oscuro')
            numerosreloj.classList.add('claro')

            clasealerta.classList.remove('oscuro')
            clasealerta.classList.add('claro')
            clasetextoalerta.classList.remove('oscuro')
            clasetextoalerta.classList.add('claro')
            clasecerrar.classList.remove('oscuro')
            clasecerrar.classList.add('claro')


            oscuro = false

        }else{
            colorOscuro()

            clasedivreloj.classList.remove('claro')
            clasedivreloj.classList.add('oscuro')
            icono.classList.remove('claro')
            icono.classList.add('oscuro')
            numerosreloj.classList.remove('claro')
            numerosreloj.classList.add('oscuro')

            clasealerta.classList.remove('claro')
            clasealerta.classList.add('oscuro')
            clasetextoalerta.classList.remove('claro')
            clasetextoalerta.classList.add('oscuro')
            clasecerrar.classList.remove('claro')
            clasecerrar.classList.add('oscuro')


            oscuro = true
        }
    }
  
}, true);


// ALERTA

var alerta = document.getElementById("alerta")
var cerrar = document.getElementById("cerrar")

var clasealerta = document.querySelector(".alerta")
var clasetextoalerta = document.querySelector(".textoalerta")
var clasecerrar = document.querySelector(".cerrar")



setTimeout(mostrar, 2000)

function prueba(){
    alert("prueba")
}

function mostrar(){
    alerta.style.visibility = "visible"
    alerta.style.opacity = "1"
}

function funcioncerrar(){
    cerrar.style.transition = "ease 0.2s"
    alerta.style.transition = "ease 0.2s"
    alerta.style.opacity = "0"
    alerta.style.visibility = "hidden" 
}