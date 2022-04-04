const years = [1980, 1934, 2002, 2019];

const passedTime = function (year) {
    const time = new Date()
    return time.getFullYear() - year
}

const passTime = years.map(passedTime)
console.log(passTime)