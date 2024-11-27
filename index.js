function obterDados() {

    let nome = prompt("Por favor, insira o nome do personagem:");
    let xp = prompt("Por favor, entre com o nivle d XP do personagem: ");


    if (xp <= 1000) {
        experiencia = "Ferro";
    } else if (xp > 1000 && xp <= 2000) {
        experiencia = "Bronze";
    } else if (xp > 2000 && xp <= 5000) {
        experiencia = "Prata";
    } else if (xp > 5000 && xp <= 7000) {
        experiencia = "Ouro";
        } else if (xp > 7000 && xp <= 8000) {
            experiencia = "Platina";
        } else if (xp > 8000 && xp <= 9000) {
            experiencia = "Ascendente";
        } else if (xp > 9000 && xp <= 10000) {
            experiencia = "Imortal";
        } else if (xp > 10000) {
        experiencia = "Radiante";
        }

        
        var vitorias = prompt("Por favor, insira o número de vitórias do personagem:");
        let derrotas = prompt("Por favor, insira o número de derrotas do personagem:");
        let total = 0;

        if (vitorias.length <= 0 ) {
        vitorias = 0;
    }
        
    if (derrotas.length <= 0 ) {
        derrotas = 0;
    }

    total = vitorias - derrotas;
        
    if (total <= 10) {
        nivel = "Ferro";
    } else if (total > 11 && total <= 20) {
        nivel = "Bronze";
    } else if (total > 21 && total <= 50) {
        nivel = "Prata";
    } else if (total > 51 && total <= 80) {
        nivel = "Ouro";
    } else if (total > 81 && total <= 90) {
        nivel = "Diamante";
    } else if (total > 91 && total <= 100) {
        nivel = "Lendário";
    } else if (total > 101) {
        nivel = "Imortal";
    }

    if (nome && xp ) {
        let nomeProcessado = "O Herói de nome - " + nome + "\nExperiência - " + nivel +
        "\nSaldo de vitorias - " + total + "\nEsta no Nível - " + nivel;
        document.getElementById("resultado").innerText = nomeProcessado;
    } else {
        document.getElementById("resultado").innerText = "Nome e ou XP não informado.";
    }

}
