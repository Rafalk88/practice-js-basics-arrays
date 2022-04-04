const n = 24;
const oddNumbers = [];

const fillArray = function() {
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 1) {
            oddNumbers.push(i)
        }
    }
}
fillArray()

console.log(oddNumbers)