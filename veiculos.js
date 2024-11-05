class Veiculo {
    constructor(fabricante, modelo) {
        this.fabricante = fabricante;
        this.modelo = modelo;
    }

    // em comum
    Dirigir() {
        console.log(`${this.fabricante} ${this.modelo} em condições.`);
    }
}


// Classe que herda de Veiculo
class Carro extends Veiculo {
    constructor(fabricante, modelo, cilindradas) {
        super(fabricante, modelo); // classe pai 
        this.cilindradas = cilindradas;
    }

    // Sobrescreve o método Dirigir
    Dirigir() {
        console.log(`${this.fabricante} ${this.modelo} com ${this.cilindradas} cilindradas em condições.`);
    }
}

// Outra classe que herda de Veiculo
class Moto extends Veiculo {
    constructor(fabricante, modelo, cilindradas) {
        super(fabricante, modelo);
        this.cilindradas = cilindradas;
    }

    // Sobrescreve o método Dirigir
    Dirigir() {
        console.log(`${this.fabricante} ${this.modelo} com ${this.cilindradas} cilindradas em condições.`);
    }
}


const carro1 = new Carro("Nissan", "Frontier", 2300);
const carro2 = new Carro("Volkswagen", "Golf", 1500);
const moto1 = new Moto("Honda", "Hornet", 600);

// Chamando os métodos para verificar o comportamento
carro1.Dirigir();  
carro2.Dirigir();  
moto1.Dirigir(); 


