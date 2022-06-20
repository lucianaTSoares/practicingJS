const object = [
  {
    nome: "Nome Sobrenome",
    idade: 20,
    familiares: [
      {
        nome: "Nome Familiar 1",
        idade: 15,
      },
      {
        nome: "Nome Familiar 2",
        idade: 10,
      },
    ],
  },
  {
      nome: "Nome Sobrenome 2",
      idade: 40,
      familiares: [
          {
            nome: "Nome Familiar 3",
            idade: 6,
          }
      ]
  }
];

console.log('Spread Operator: ')
for (value in object) {
    console.log(...object[value].familiares);
    // espalha os objetos desejados, misturando também objetos de dentro de arrays em um lugar só
}

console.log('\nWithout Spread Operator: ')
for (value in object) {
    console.log(object[value].familiares);
}

console.log('\nSpread Operator in a key: ')
for (value in object) {
    console.log( { ...object[value].nome } )
}