lista1 = [1,2,3,4,5,6,3]
lista2 = [7,8,9,10]

const concat = () => {
    console.log(`\nConcat: ${lista1.concat(lista2)} \n`)
    // retorno 1,2,3,4,5,6,7,8,9,10
}

const filter = () => {
    console.log(`Filter: ${lista1.filter(element => element > 1)} \n`)
    // retorno 2,3,4,5,6
}

const findAndFindIndex = () => {
    console.log(`Find (elemento): ${lista1.find(element => element > 1)} \nFindIndex (índice do elemento): ${lista1.findIndex(element => element > 1)}\n`)
    // retorno Find: 2 e FindIndex: 1
}

const indexOfAndLastIndexOf = () => {
    console.log(`IndexOf: ${lista1.indexOf(3)}\nLastIndexOf: ${lista1.lastIndexOf(3)}\n`)
    // retorno 2, pois o número 3 se repete primeiro no index 2 do array. Retorno 6, pois o num 3 se repete no final do array
}

const forEach = () => {
    lista1.forEach(element => {
        
        element > 3 ? console.log(`ForEach maior 3: ${element}`) : console.log(`ForEach menor 3: ${element}\n`)
        // como se fosse um for em arrays
    });
}

const includes = () => {
        const inclui = lista1.includes(4)
        const inclui2 = lista1.includes(10)

        console.log(`Lista 1 inclui número 4? ${inclui}\nLista 1 inclui número 10? ${inclui2}\n`)
}

const mediaFoEach = (num1, num2, num3, num4) => {
    const notas = [num1, num2, num3, num4]
    let notaTotal = 0

    notas.forEach(element => {
       notaTotal += element
    }) // Funciona como um For só que para arrays e é um método Callback -> Uma função passada como argumento dentro de outra função

    let media = notaTotal / notas.length

    console.log(`Média: ${media}\n`)
}

const mapVsForEach = () => {
    
    const notas = [10, 9, 8, 7, 6]

    const usoMap = notas.map(element => 
        element >= 10 ? element : ++element
        // Retorna o resultado da condição: [10, 10, 9, 8, 7]
    )

    const usoForEach = notas.forEach(element => 
        element >= 10 ? element : ++element
        // Realiza a condição, mas não retorna o resultado da condição e sim undefined
    );

    console.log(`Uso do Map: ${usoMap}`)
    console.log(`Uso do ForEach: ${usoForEach}\n`)
    //Ambos métodos callback
}

const calculoMediaReduce = () => {

    const notas = [10, 9, 8, 7, 6]

    let notaTotal = notas.reduce( (acum, valorAtual) => acum + valorAtual )
    // Soma todos os valores de um array

    let media = notaTotal / notas.length

    console.log(media)
}

concat()
filter()
findAndFindIndex()
indexOfAndLastIndexOf()
forEach()
includes()
mediaFoEach(7, 8.6, 6, 10)
mapVsForEach()
calculoMediaReduce()