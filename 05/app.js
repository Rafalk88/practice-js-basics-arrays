const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenArray = function (element) {
   return element % 2 === 0
}

const sumArray = function (a, b) {
    return a + b
}

const evenNumbers = numbers.filter(evenArray)
const sumNumbers = evenNumbers.reduce(sumArray)

console.log(`Tablica liczb parzystych: ${evenNumbers}`)
console.log(`Suma liczb z tablicy: ${sumNumbers}`)