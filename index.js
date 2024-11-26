 function obterDados() {
    let nome = prompt("Por favor, insira o nome do personagem:");
    let xp = prompt("Por favor entre com o nivle d XP do personagem: ");
    
    if (xp <= 1000) {
        nivel = "Ferro";
    } else if (xp > 1000 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp > 2000 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp > 5000 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp > 7000 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp > 8000 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp > 9000 && xp <= 10000) {
        nivel = "Imortal";
    } else if (xp > 10000) {
        nivel = "Radiante";
    } else {
        nivel = "Nível Inválido";
    }

    if (nome && xp) {
        let nomeProcessado = "O Herói de nome - " + nome + "\n esta no nível - " + nivel;
        document.getElementById("resultado").innerText = nomeProcessado;
    } else {
        document.getElementById("resultado").innerText = "Nome e ou XP não informado.";
    }

            
}
