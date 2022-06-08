const colecionador = {
    nome: "João do Gibi",
    idade:41,
    tipocolecao: ["quadrinhos"],
    contato: "joao@email.com",

    adicionarTipo:function(propriedade,tipo){
        this[propriedade].push(tipo)
    } // foi criada uma função onde recebe parâmetros, entre chaves passamos o valor 'tipocolecao', ou seja, 'tipocolecao.push(HQ+i)'
    
}

console.log(colecionador)

for(i = 0; i < 4; i++) {
    colecionador.adicionarTipo("tipocolecao","HQ"+i)
}

console.log(colecionador)