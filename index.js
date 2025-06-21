// Código do projeto
const nomeHeroi = "SuperProg";
const nivel = 7500;

switch (true){
    case (nivel < 1000):
        console.log(`O Herói de nome: ${nomeHeroi}, está no nível Ferro`);
    break;

    case (nivel > 1000 && nivel <= 2000):
        console.log(`O Herói de nome: ${nomeHeroi}, está no nível Bronze`);
    break;
    
    case (nivel > 2000 && nivel <= 5000):
        console.log(`O Herói de nome: ${nomeHeroi}, está no nível Prata`);
    break;
    
    case (nivel > 5000 && nivel <= 7000):
        console.log(`O Herói de nome: ${nomeHeroi}, está no nível Ouro`);
    break;
    
    case (nivel > 7000 && nivel <= 8000):
        console.log(`O Herói de nome: ${nomeHeroi}, está no nível Platina`);
    break;

    case (nivel > 8000 && nivel <= 9000):
        console.log(`O Herói de nome: ${nomeHeroi}, está no nível Ascendente`)
    break;
    
    case (nivel > 9000 && nivel <= 10000):
        console.log(`O Herói de nome: ${nomeHeroi}, está no nível Imortal`);
    break;
    
    case (nivel >= 10001):
        console.log(`O Herói de nome: ${nomeHeroi}, está no nível Radiante`);
    break;
    
    default:
        console.log("Nível inválido");
}

// Desafio Completo!