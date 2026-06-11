let tempot = new Date(2026,5,12,20,0, 0)

let music = new Audio("Mine.mp3")

music.volume = 0.4
music.loop = true;


function iniciartransmissao(){
    music.play()
}


let contador = setInterval(atualizartempo, 1000);

function atualizartempo(){

    

    let now = new Date().getTime();
    let futuro = tempot.getTime();

    let distance = futuro - now;

    if(distance <= 0){

        clearInterval(contador);

        document.getElementById("timer").innerHTML = `
        ❤️
        `;

        setTimeout(() => {
            window.location.href = "https://gui-devbr.github.io/Era-do-amor/ceu.html";
        }, 3000);

        return;
    }

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));

    let hours = Math.floor(
        distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)
    );

    let minutos = Math.floor(
        distance % (1000 * 60 * 60) / (1000 * 60)
    );

    let segundos = Math.floor(
        distance % (1000 * 60) / 1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutos;
    document.getElementById("seconds").textContent = segundos;
}

atualizartempo();