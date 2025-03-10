let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    let botonFuego = document.getElementById('boton-fuego')
    let botonAgua = document.getElementById('boton-agua')
    let botonTierra = document.getElementById('boton-tierra')
    let botonReiniciar = document.getElementById('boton-reiniciar')

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', () => seleccionarAtaqueJugador("Fuego"))
    botonAgua.addEventListener('click', () => seleccionarAtaqueJugador("Agua"))
    botonTierra.addEventListener('click', () => seleccionarAtaqueJugador("Tierra"))
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }else{
        alert('Selecciona una mascota')
        sectionSeleccionarMascota.style.display = "flex" 
        sectionSeleccionarAtaque.style.display = "none"
    }

    if(document.querySelector('input[name="mascota"]:checked') != null){
        seleccionarMascotaEnemigo()
    }

}

function seleccionarMascotaEnemigo(){
    let mascotaEnemigoAleatorio = eligePC(1, 3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    
    if (mascotaEnemigoAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    }else if(mascotaEnemigoAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    }else if(mascotaEnemigoAleatorio == 3){
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function seleccionarAtaqueJugador(ataque){
    ataqueJugador = ataque
    seleccionarAtaqueEnemigo()
}

function seleccionarAtaqueEnemigo(){
    let ataqueEnemigoAleatorio = eligePC(1, 3)
    
    if (ataqueEnemigoAleatorio == 1){
        ataqueEnemigo = 'Fuego'
    }else if(ataqueEnemigoAleatorio == 2){
        ataqueEnemigo = 'Tierra'
    }else if(ataqueEnemigoAleatorio == 3){
        ataqueEnemigo = 'Agua'
    }

    quienGana()
}

function quienGana(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")
    if (ataqueJugador == ataqueEnemigo){
        crearMensaje("Empate 🤝")
    } else if ((ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra") || (ataqueJugador == "Tierra" && ataqueEnemigo == "Agua") || (ataqueJugador == "Agua" && ataqueEnemigo == "Fuego")){
        crearMensaje("Ganaste 🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else{
        crearMensaje("Perdiste ☹️")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador    
    
    }

    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal("FELICITACIONES! Ganaste 🥇")
    } else if(vidasJugador == 0){
        crearMensajeFinal("Lo siento, perdiste 🥺")
    }
}

function crearMensaje(veredicto){
    let sectionMensajes = document.getElementById('resultado')
    let sectionAtaqueJugador = document.getElementById('ataque-del-jugador')
    let sectionAtaqueEnemigo = document.getElementById('ataque-del-enemigo')

    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = veredicto
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    sectionAtaqueJugador.appendChild(nuevoAtaqueJugador)
    sectionAtaqueEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(veredictoFinal){
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
    let sectionMensajes = document.getElementById('resultado')
    let botonFuego = document.getElementById('boton-fuego')
    let botonAgua = document.getElementById('boton-agua')
    let botonTierra = document.getElementById('boton-tierra')
    
    sectionMensajes.innerHTML = veredictoFinal

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
}

function reiniciarJuego(){
    location.reload()
}

function eligePC(min, max){
    return Math.floor(Math.random()*(max-min+1)+min) 
}

window.addEventListener('load', iniciarJuego)