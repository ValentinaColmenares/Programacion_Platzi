let ataqueJugador
let ataqueEnemigo

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    let botonFuego = document.getElementById('boton-fuego')
    let botonAgua = document.getElementById('boton-agua')
    let botonTierra = document.getElementById('boton-tierra')

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', () => seleccionarAtaqueJugador("Fuego"))
    botonAgua.addEventListener('click', () => seleccionarAtaqueJugador("Agua"))
    botonTierra.addEventListener('click', () => seleccionarAtaqueJugador("Tierra"))
}

function seleccionarMascotaJugador(){
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
    let spanAtaqueJugador = document.getElementById('ataque-jugador')
    ataqueJugador = ataque

    if (ataque == "Fuego"){
        spanAtaqueJugador.innerHTML = 'Fuego'
    }else if(ataque == "Agua"){
        spanAtaqueJugador.innerHTML = 'Agua'
    }else{
        spanAtaqueJugador.innerHTML = 'Tierra'
    }

    seleccionarAtaqueEnemigo()
}

function seleccionarAtaqueEnemigo(){
    let ataqueEnemigoAleatorio = eligePC(1, 3)
    let spanAtaqueEnemigo = document.getElementById('ataque-enemigo')
    
    if (ataqueEnemigoAleatorio == 1){
        spanAtaqueEnemigo.innerHTML = ataqueEnemigo = 'Fuego'
    }else if(ataqueEnemigoAleatorio == 2){
        spanAtaqueEnemigo.innerHTML = ataqueEnemigo = 'Tierra'
    }else if(ataqueEnemigoAleatorio == 3){
        spanAtaqueEnemigo.innerHTML = ataqueEnemigo = 'Agua'
    }
}

function eligePC(min, max){
    return Math.floor(Math.random()*(max-min+1)+min) 
}

window.addEventListener('load', iniciarJuego)