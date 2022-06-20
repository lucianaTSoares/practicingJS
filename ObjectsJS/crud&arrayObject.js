const crudObjetc = () => {
  let object = {
    name: "Luciana",
    age: 20,
    gender: "Female",
    other: "A",
  };

  console.log("Default object: " + JSON.stringify(object));
  // imprime o parâmetro passado em formato JSON

  // Create new key with value
  const createKey = (key, value) => {
    object[key] = value
  }

  createKey('cpf', '123456789')

  // Update a value key
  object.name = "Luciana Soares";

  // Delete key
  delete object.other; // retorna true

  // Read the object
  console.log("Updated object: " + JSON.stringify(object));
};

const arrayObject = () => {
    let object = {
        name: "Luciana",
        age: 20,
        phone: ['1191234567','1194564743']
      };

      object.phone.forEach((element, index) => {
          console.log(`Phone (index ${index}): ${element}`)
      });
}

crudObjetc();
arrayObject();
