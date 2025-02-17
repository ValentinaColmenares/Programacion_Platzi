// FUNCIÓN PARA LA ELECCIÓN DEL COMPUTADOR
function eligePC(min, max){
    return Math.floor(Math.random()*(max-min+1)+min) 
}

// FUNCIÓN QUE INFORMA LA ELECCIÓN DEL JUGADOR Y DEL COMPUTADOR
function mostrarEleccion(quienElige, eleccion){
    if (eleccion == 1){
        alert("El " + quienElige + " eligió 🪨")
    }else if(eleccion == 2){
        alert("El " + quienElige + " eligió 📄")
    }else if(eleccion == 3){
        alert("El " + quienElige + " eligió ✂️")
    }else{
        alert("Hubo un error con la elección del " + quienElige + " 🙃")
    }
}

// FUNCIÓN QUE MUESTRA EL RESULTADO FINAL DE UNA PARTIDA
function veredicto(jugador1, jugador2){
    if ((jugador1 == jugador2)){
        alert("¡EMPATE! 🤼")
        empates++
    }else if ((jugador1 == 1 && jugador2 == 3) || (jugador1 == 2 && jugador2 == 1) || (jugador1 == 3 && jugador2 == 2)){
        alert("¡¡¡GANASTE!!! 🍾🤩")
        victorias++
    }else {
        alert("PERDISTE... 😒🥈")
        derrotas++
    }
}

// FUNCIÓN PARA MOSTRAR LOS RESULTADOS ACUMULADOS FINALES
function resultados(){
    alert("Has acumulado... \n" + "Victorias: " + victorias + "\nDerrotas: " + derrotas + "\nEmpates: " + empates)
    if (victorias == 2) {
        alert("TÚ eres el GANADOR");
    } else if ( derrotas == 2 ) {
        alert("EL COMPUTADOR es el GANADOR");
    } else {
        alert("Hubo un error... 🙃");
    }
}

// FUNCIÓN PARA REINICIAR LAS VARIABLES PARA UN PRÓXIMO JUEGO
function reiniciarVariables(){
    victorias = 0
    derrotas = 0
    empates = 0
}

// INICIALIZACIÓN DE VARIABLES
let jugador = 0, pc = 0, victorias = 0, derrotas = 0, empates = 0

// ESTE ES EL JUEGO
while(true){

    while ((victorias < 2) && (derrotas < 2)){

        // ELECCIÓN DEL JUGADOR
        // 1 es piedra, 2 es papel, 3 es tijera
        jugador = prompt("Elige: \n 1 para piedra, 2 para papel, 3 para tijera 🤔")
        mostrarEleccion("jugador", jugador)

        // ELECCIÓN DE LA COMPUTADORA
        pc = eligePC(1, 3)
        mostrarEleccion("computador", pc)

        // VEREDICTO FINAL
        veredicto(jugador, pc)
    
    }

    resultados()
    reiniciarVariables()

}