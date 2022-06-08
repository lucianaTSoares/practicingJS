let object = {
    name: "Luciana",
    age: 20
} // é um objeto literal

let object2 = object

console.log(object)
console.log(object2)
console.log('')

object.name = 'Luciana Soares'

console.log(object)
console.log(object2)
console.log('')

// O comportamento é que o 'object2' não copiou o objeto 'object', e sim serviu de referência para acessarmos as chaves e valores do objeto 'object'