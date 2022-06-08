const object = {
    name: "Luciana",
    age: 20
}

const objectMethod = (metodo, objeto) => {
    let object = Object[metodo](objeto) 
    console.log(`Método ${metodo}: ${JSON.stringify(object)}`)
}

objectMethod('create', object)      // cria objeto vazio, mas independente de 'object'
objectMethod('keys', object)        // cria array com as keys de 'object'
objectMethod('values', object)      // cria array com os valores das keys de 'object'
objectMethod('entries', object)     // cria arrays constando os valores das chaves e valores