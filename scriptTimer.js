
// TIMER ==========================================

//Variables
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let marcador = document.getElementById('marcador');
let reloj = document.getElementById('reloj');

let hora = "00";
let minutero = "00";
let segundero = "00";

const notificacionAlarm = new Audio('notification.wav');
const notificacionStart = new Audio('notificationStart.wav');
const notificacionStop = new Audio('notificationStop.wav');
const notificacionReset = new Audio('notificationReset.wav');

//Listeners
startButton.addEventListener('click',startTimer);
resetButton.addEventListener('click',resetTimer);

//Funciones

setInitialTimer();


function setInitialTimer(){
    hora = 0;
    minutero = 0;
    segundero = 0;
    
    let separador = ":0";
    let separador2 = ":0";
    let separador3 = "0";
    let posicionInicial = hora + ":" + minutero + ":" + segundero;

    let textoMarcadorHoras = document.createElement("p");
    let textoMarcadorMinutero = document.createElement("p");
    let textoMarcadorSegundero = document.createElement("p");
    let separadorElement = document.createElement("p");
    let separadorElement2 = document.createElement("p");
    let separadorElement3 = document.createElement("p");

    textoMarcadorHoras.innerText = hora;
    textoMarcadorMinutero.innerText = minutero;
    textoMarcadorSegundero.innerText = segundero;
    separadorElement.innerText = separador;
    separadorElement2.innerText = separador2;
    separadorElement3.innerText = separador3;


    textoMarcadorHoras.className = "textoMarcadorHoras";
    textoMarcadorMinutero.className = "textoMarcadorMinutero";
    textoMarcadorSegundero.className = "textoMarcadorSegundero";
    textoMarcadorHoras.id = "textoMarcadorHoras";
    textoMarcadorMinutero.id = "textoMarcadorMinutero";
    textoMarcadorSegundero.id = "textoMarcadorSegundero";
    separadorElement.id = "separador";
    separadorElement2.id = "separador2";
    separadorElement3.id = "separador3";
    separadorElement.className = "separador";
    separadorElement2.className = "separador";
    separadorElement3.className = "separador";
    
    marcador.appendChild(separadorElement3);
    marcador.appendChild(textoMarcadorHoras);
    marcador.appendChild(separadorElement2);
    marcador.appendChild(textoMarcadorMinutero);
    marcador.appendChild(separadorElement);
    marcador.appendChild(textoMarcadorSegundero);


}

function resetTimer(){
    hora = 0;
    minutero = 0;
    segundero = 0;

    let horaArea = document.getElementById('textoMarcadorHoras'); 
    let minuteroArea = document.getElementById('textoMarcadorMinutero'); 
    let segunderoArea = document.getElementById("textoMarcadorSegundero");

    let separador = document.getElementById("separador");
    let separador2 = document.getElementById("separador2");
    let separador3 = document.getElementById("separador3");

    separador.innerText = ":0";
    separador2.innerText = ":0";
    separador3.innerText = "0";

    horaArea.innerText = hora;
    minuteroArea.innerText = minutero;
    segunderoArea.innerText = segundero;

    notificacionReset.play();
}


function startTimer() {
    intervalHora = setInterval(actualizarHora, 3600000)
    intervalMinutos = setInterval(actualizarMinutero, 60000)
    intervalSegundos = setInterval(actualizarSegundero, 1000)
    startButton.removeEventListener('click',startTimer)
    stopButton.addEventListener('click',stopTimer)
    let relojSpin = document.getElementById('relojSpin');   
    relojSpin.style.zIndex = 0;
    notificacionStart.play();
    
}

function stopTimer() {
    clearInterval(intervalHora);
    clearInterval(intervalMinutos);
    clearInterval(intervalSegundos);
    stopButton.removeEventListener('click',stopTimer)
    startButton.addEventListener('click',startTimer)
    let relojSpin = document.getElementById('relojSpin');
    relojSpin.style.zIndex = -1;
    notificacionStop.play();
}

function actualizarHora(){
    let horaArea = document.getElementById('textoMarcadorHoras'); 
    let separador = document.getElementById("separador3");
    if (hora < 99 && hora >= 9) {
        hora += 1;      
        separador.innerText = "";
    }else if (hora < 10) {
        hora += 1;  
        separador.innerText = "0";
    }
    else if (hora === 99) {
        hora = 0;
        separador.innerText = "0";
    }
    
    horaArea.innerText = minutero;
}

function actualizarMinutero(){
    let minuteroArea = document.getElementById('textoMarcadorMinutero'); 
    let separador = document.getElementById("separador2");
    if (minutero < 59 && minutero >= 9) {
        minutero += 1;      
        separador.innerText = ":";
    }else if (minutero <10) {
        minutero += 1; 
        separador.innerText = ":0";
    }
    else if (minutero === 59) {
        minutero = 0;
        separador.innerText = ":0";
    }
    
    minuteroArea.innerText = minutero;
}

function actualizarSegundero(){
    let segunderoArea = document.getElementById("textoMarcadorSegundero");
    let separador = document.getElementById("separador");
    
    if (segundero < 59 && segundero >= 9) {
        segundero += 1;      
        separador.innerText = ":";
    }else if (segundero <10) {
        segundero += 1; 
        separador.innerText = ":0";
    }
        else if (segundero === 59) {
        segundero = 0;
        separador.innerText = ":0";
    }
    segunderoArea.innerText = segundero;
}


/* Animación logo */

let svg = document.getElementsByTagName('svg')[0];

function drawItem() {
    svg.classList.add('animated');
}
drawItem();
