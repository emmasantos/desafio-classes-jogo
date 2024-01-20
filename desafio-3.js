////Criar classe que represente herói com as seguintes propriedades: nome, idade, tipo(ex,:guerreiro, mago etc)
class typeHero{
    constructor (name, age, type, attack){
        this.name = name
        this.age = age
        this.type = type
        this.attack = attack
    }

    atacar(){
        //lembrar de interpolação de string
        //console.log('O ${this.type} atacou usando ${this.attack}!')
        console.log("ˏˋ°•*⁀➷ O " + this.type + " atacou usando " + this.attack + "!")
    }

}

////Deve haver um método  chamado ATACAR que deve atender os seguintes requisitos:
//- exibir a mensagem "o {tipo} atacou usando {ataque}"
//ex.: se ninja -> no ataque exibir (usou shuriken)

let archer = new typeHero("Iosif", "23", "Arqueiro", "Arco e flecha")
let mage = new typeHero("Linus", "55", "Mago", "Magia")
let barbarian = new typeHero("Falkor", "36", "Bárbaro", "Machado")
let paladin = new typeHero("Hyperion", "22", "Paladino", "Espada")


//Ao final exibir mensagem: "o {tipo} atacou usando {ataque}" || ex: mago atacou usando magia || guerreiro atacou usando espada

archer.atacar()
