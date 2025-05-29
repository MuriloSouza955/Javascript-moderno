/*
Deep freeze
Nesta aula, vamos ver como implementar o conceito de Deep Freeze em JavaScript, que consiste em congelar de forma profunda um objeto, percorrendo recursivamente cada propriedade. Vamos aprender como criar uma função recursiva para congelar todas as propriedades de um objeto, garantindo um congelamento profundo.
*/

const book = {
    title: "Objetos iumutaveis",
    category: "Javascript",
    author: {
        name: "Murilo",
        email: "murilo@gmail.com"
    },
}

function deepFreeze(obj) {
    const proops  = Reflect.ownKeys(obj);

    for (const prop of proops) {
        const value = obj[prop];
        if(value  && typeof value === "object" || typeof value === "function"){
            deepFreeze(value)
        }
    }
    //Retorna o objeto congelado
    return Object.freeze(obj);
}

deepFreeze(book);

book.author.name = "Murilo Souza";  //Não vai funcionar pois o objeto está congelado

console.log(book);