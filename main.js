 
// Iteracion 1
 
let myFavoriteHero = "Hulk"
let x = 50
let h = 5
let y = 10
let z = h + y

// / Iteracion 2
 
const character = {name: 'Jack Sparrow', age: 10};
character.age = 25
 
let firstName = 'Jon'
let lastName = 'Snow'
let age = 24
 
// Soy Jon Snow, tengo 24 años y me gustan los lobos.
console.log("Soy " + firstName + " " + lastName + "," + " tengo " + age + " años y me gustan los lobos")
 
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
 
console.log("Total sum is: " + (toy1.price + toy2.price))
 
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
 
globalBasePrice = 25000
car1.finalPrice = car1.basePrice + globalBasePrice
car2.finalPrice = car2.basePrice + globalBasePrice

// Iteracion 3
 
alert(10 * 5)
 
alert(10 * 2)
 
alert(15 * 9)
 
let y = 10
let z = 5
let x = z + y
x = z * y

// // Iteracion 4
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
 
console.log(avengers[0])
 
avengers[0] = "IRONMAN"
 
alert(avengers.length)
 
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
 
rickAndMortyCharacters.push("Morty", "Summer")
 
console.log[rickAndMortyCharacters[rickAndMortyCharacters.length]]
 
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
 
rickAndMortyCharacters.pop()
console.log(rickAndMortyCharacters[0])
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length])
 
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
 
rickAndMortyCharacters.splice(1, 1)
console.log(rickAndMortyCharacters)

//  Iteracion 5
 
const number1 = 10;
const number2 = 20;
const number3 = 2;
 
// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}
 
if (number2 / number1 == 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}
 
if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}
 
if (number3 != number1) {
  console.log("number3 es distinto number1");
}
 
if (number3 * 5 == number1) {
  console.log("number3 por 5 es igual a number1");
}
 
if (number3 * 5 == number1 && number1 * 2 == number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}
 
if (number2 / 2 == number1 || number1 / 5 == number3) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

// Iteracion 6
 
// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
 
for ( let i = 0; i <= 9; i++) {
    console.log(i)
}
 
// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo
// cuando el resto del numero dividido entre 2 sea 0.
for ( let i = 0; i <= 9; i++) {
    if (i % 2 == 0) 
        console.log(i)
    }

// 1.3 Crea un bucle para conseguir dormir contando ovejas.
// Este bucle empieza en 0 y termina en 10.
// Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle
// y cambia el mensaje en la última vuelta a 'Dormido!'.
for ( let i = 0; i <= 10; i++) {
    if (i != 10) {
        console.log("Intentando dormir")
        continue
    }
    console.log("Dormido!")
}

