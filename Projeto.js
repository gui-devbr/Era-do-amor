let tempot = new Date(2026, 5, 12, 23, 30, 0);

let music = new Audio("Mine.mp3");
music.volume = 0.4;
music.loop = true;

function iniciartransmissao(){
    music.play().catch(e => console.log("Áudio aguardando interação do usuário."));
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

        // Aplica o fade-out direto via style para não depender de classe CSS externa
        conteiner.style.transition = "opacity 1s ease";
        conteiner.style.opacity = "0";

        // Após 1 segundo, remove o timer e inicia a dobra espacial
        setTimeout(() => {
            conteiner.style.display = "none"; 
            viagem.classList.add("ativo");
        }, 1000);

        // Redireciona para a tela espacial de memórias
        setTimeout(() => {
            window.location.href = "ceu.html"; // Ajuste para o caminho local ou mantenha sua URL do GitHub Pages se preferir
        }, 6000); 

        return;
    }

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((distance % (1000 * 60)) / 1000);

    // Formata com zero à esquerda para manter o layout simétrico
    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutos).padStart(2, '0');
    document.getElementById("seconds").textContent = String(segundos).padStart(2, '0');
}

// Executa imediatamente para evitar o "00" estático no primeiro carregamento
atualizartempo();