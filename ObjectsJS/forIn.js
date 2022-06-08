let object = {
    name: "Nome Sobrenome",
    age: 20,
    phone: ['1191234567','1194564743'],
    date: '01/01/2001'
  };

  for (const key in object) {

      if (object.hasOwnProperty(key)) {
          console.log(`${key}: ${object[key]}`)
      } // condição que verifica se existe as keys(name, age, ...) no 'object' e os imprime na tela
    
} // for in -> for que percorre objetos