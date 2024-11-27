class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'realizou um ataque desconhecido'; 
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}


const mago = new Heroi('Merlin', 250, 'mago');
const guerreiro = new Heroi('Conan', 30, 'guerreiro');
const monge = new Heroi('Shaolin', 50, 'monge');
const ninja = new Heroi('Hattori', 20, 'ninja');

mago.atacar();     
guerreiro.atacar();
monge.atacar();    
ninja.atacar();    

