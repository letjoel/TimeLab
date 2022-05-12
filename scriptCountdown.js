// COUNTDOWN =================================================
// Variables

let segunderoCD = document.getElementById('segundosInput');
let minuteroCD = document.getElementById('minutosInput');
let horasCD = document.getElementById('horasInput');

let countdown = document.getElementById('countdown');

let startCD = document.getElementById('startCD');
let stopCD = document.getElementById('stopCD');
let resetCD = document.getElementById('resetCD');

segunderoCD.value = 0;
minuteroCD.value = 0;
horasCD.value = 0;

//Listeners

segunderoCD.addEventListener('change', editarSegundos);
minuteroCD.addEventListener('change', editarMinutos);
horasCD.addEventListener('change', editarHoras);

startCD.addEventListener('click', startCountdown)
stopCD.addEventListener('click', stopCountdown)
resetCD.addEventListener('click', resetCountdown)

function editarSegundos() {
    
    if (segunderoCD.value > 59) {
        segunderoCD.value = 59;
    }
    if (segunderoCD.value <0) {
        segunderoCD.value = 0;
    }
    if (segunderoCD.value == 0 && minuteroCD.value == 0 && horasCD.value == 0) {
       
    }
    if (segunderoCD.value >=0 && segunderoCD.value <=9) {
        //insertar un cero
    } 
    
}

function editarMinutos() {
    if (minuteroCD.value > 59) {
        minuteroCD.value = 59;
    }
        if (minuteroCD.value <0) {
        minuteroCD.value = 0;
    }
}

function editarHoras() {
    if (horasCD.value >= 99) {
        horasCD.value = 99;
    }
        if (horasCD.value <0) {
        horasCD.value = 0;
    }
}

function startCountdown() {
    notificacionStart.play();
    intervalSegundosCD = setInterval(actualizarSegundosCD, 1000);
    startCD.removeEventListener('click', startCountdown);
}

function stopCountdown() {
    notificacionAlarm.pause();
    notificacionStop.play();
    clearInterval(intervalSegundosCD);
    startCD.addEventListener('click', startCountdown)
}

function resetCountdown() {
    stopCountdown();
    segunderoCD.value = 0;
    minuteroCD.value = 0;
    horasCD.value = 0;
    startCD.addEventListener('click', startCountdown)
    notificacionReset.play();
}

function actualizarSegundosCD() {
        if (segunderoCD.value > 0) {
        segunderoCD.value -= 1; 
        }else if (segunderoCD.value == 0) {
            evaluarMinutos();
        }
        else {
            segunderoCD.value = 59;
        }  
}

function evaluarMinutos() {
    if (minuteroCD.value > 0) {
        minuteroCD.value -= 1;
        segunderoCD.value = 59;
    }else if (minuteroCD.value == 0) {
        evaluarHora();
    }
}

function evaluarHora() {
    if (horasCD.value > 0) {
        horasCD.value -= 1;
        minuteroCD.value = 59;
        segunderoCD.value = 59;
        
    }else if (horasCD.value == 0) {
        //alarm!!
        setTimeout(alarmar,0);
        setTimeout(flash, 200);
        setTimeout(flash2, 600);
    }
}

function flash() {
countdown.style.backgroundColor = "deepPink";
}

function flash2() {
countdown.style.backgroundColor = "#275950";
}

function alarmar() {
notificacionAlarm.play();
setTimeout(alarmarStop,4000);
}

function alarmarStop() {
    notificacionAlarm.pause();
    clearTimeout(alarmar);
}

