const n = 24;
const oddNumbers = [];

const fillArray = function() {
    for (let i = 0; i <= n; i++) {
        oddNumbers[i] = i
    }
}

function addFilter(element) {
    return element % 2 === 1
}

fillArray()
let newOddNumbers = oddNumbers.filter(addFilter)

console.log(oddNumbers)
console.log(newOddNumbers)