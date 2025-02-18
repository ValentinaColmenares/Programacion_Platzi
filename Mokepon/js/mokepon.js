function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador(){
    if (document.getElementById('hipodoge').checked){
        alert('SELECCIONASTE HIPODOGE')
    }else if(document.getElementById('capipepo').checked){
        alert('SELECCIONASTE CAPIPEPO')
    }else if(document.getElementById('ratigueya').checked){
        alert('SELECCIONASTE RATIGUEYA')
    }else{
        alert('NO HAS SELECCIONADO TU MASCOTA')
    }
}

window.addEventListener('load', iniciarJuego)