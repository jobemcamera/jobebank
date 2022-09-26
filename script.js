// Então hoje, para facilitar a sua ida ao supermercado, você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.

// Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.

// Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.

// Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:

// Caso você adicione na sua lista:
// banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca

// O programa deverá imprimir, por exemplo:

// Lista de compras:
//     Frutas: banana, tomate, maçã, uva, abacate
//     Laticínios: leite vegetal, leite de vaca, leite em pó
//     Congelados:
//     Doces: chiclete e bala de ursinho

let frutas = [];
let laticinios = [];
let vegetais = [];
let doces = [];
let comida = "";
let categoria = "";

let pergunta = "sim";

while (pergunta !== "nao") {
  comida = prompt ("Qual comida você gostaria de adicionar a lista de compras?");
  categoria = prompt ("Qual categoria essa comida pertence? 1 [Frutas] - 2 [Laticinios] - 3 [Vegetais] - 4 [Doces]");
  
  if (categoria == 1) {
    frutas.push(comida);
  } else if (categoria == 2) {
    laticinios.push(comida);
  } else if (categoria == 3) {
    vegetais.push(comida);
  } else if (categoria == 4) {
    doces.push(comida);
  }
  pergunta = prompt("Você deseja adicionar mais alguma comida a lista de compras? sim ou nao");
}

alert(`Lista de compras: \n Frutas: ${frutas} \n Laticinios: ${laticinios} \n Vegetais: ${vegetais} \n Doces: ${doces}`);