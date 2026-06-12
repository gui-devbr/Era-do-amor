let tempot = new Date(2026, 6, 12, 21, 0, 0);

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

        const conteiner = document.getElementById("conteiner");
        const viagem = document.getElementById("viagem-tempo");

        // 1. Faz o timer sumir suavemente
        conteiner.classList.add("esconder");

        // 2. Após 1 segundo (fade-out do timer), ativa o efeito "warp speed"
        setTimeout(() => {
            conteiner.style.display = "none"; // Tira o timer do caminho
            viagem.classList.add("ativo");
        }, 1000);

        // 3. Após 5 segundos "viajando no espaço", troca para a página das estrelas
        setTimeout(() => {
            window.location.href = "https://gui-devbr.github.io/Era-do-amor/ceu.html";
        }, 6000); // 1s do fade + 5s de viagem

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