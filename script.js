// Generar un número aleatorio entre 1 y 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let intentos = document.querySelector('.intentos');
let ultimoResultado = document.querySelector('.ultimoResultado');
let mayorMenor = document.querySelector('.mayorMenor');

let botonAdivinar = document.getElementById('guessSubmit');
let campoAdivinanza = document.getElementById('guessInput');

let contadorIntentos = 1;
let botonReinicio;

// Función para comprobar el intento del jugador
function comprobarAdivinanza() {
    let adivinanzaUsuario = Number(campoAdivinanza.value);
    if (contadorIntentos === 1) {
        intentos.textContent = 'Intentos previos: ';
    }
    intentos.textContent += adivinanzaUsuario + ' ';

    if (adivinanzaUsuario === numeroAleatorio) {
        ultimoResultado.textContent = '¡Felicidades! ¡Adivinaste el número!';
        ultimoResultado.className = 'ultimoResultado acierto';
        mayorMenor.textContent = '';
        finalizarJuego();
    } else if (contadorIntentos === 10) {
        ultimoResultado.textContent = '¡Fin del juego! El número correcto era ' + numeroAleatorio;
        finalizarJuego();
    } else {
        ultimoResultado.textContent = '¡Incorrecto!';
        ultimoResultado.className = 'ultimoResultado error';
        if (adivinanzaUsuario < numeroAleatorio) {
            mayorMenor.textContent = 'El número es mayor.';
        } else {
            mayorMenor.textContent = 'El número es menor.';
        }
    }

    contadorIntentos++;
    campoAdivinanza.value = '';
    campoAdivinanza.focus();
}

// opcion para el botón de adivinar
botonAdivinar.addEventListener('click', comprobarAdivinanza);

// Función para gestionar el final del juego
window.onload=inicio;
function finalizarJuego() {
    campoAdivinanza.disabled = true;
    botonAdivinar.disabled = true;
    botonReinicio = document.createElement('button');
    botonReinicio.textContent = 'Iniciar Nuevo Juego';
    botonReinicio.classList.add("game");
    document.body.appendChild(botonReinicio);
    botonReinicio.addEventListener('click', reiniciarJuego);
    
}

// Función para reiniciar el juego
function reiniciarJuego() {
    contadorIntentos = 1;
    const resultadosReiniciar = document.querySelectorAll('.resultados p');
    for (let i = 0; i < resultadosReiniciar.length; i++) {
        resultadosReiniciar[i].textContent = '';
    }
    botonReinicio.parentNode.removeChild(botonReinicio);
    campoAdivinanza.disabled = false;
    botonAdivinar.disabled = false;
    campoAdivinanza.value = '';
    campoAdivinanza.focus();
    ultimoResultado.className = '';
    // Generar un nuevo número aleatorio
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}
