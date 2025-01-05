let number = [0, 1, 2, 4, 5];

number.pop()

console.log(number)

number.shift()

console.log(number)

number.push(9)

console.log(number)

number.unshift("y")

console.log(number)

let a = number.length
console.log(a)

let newNumber = number.concat([13, 66])

console.log(newNumber)

console.log(number.includes("y"))

let matriks = [
     [1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]
]

console.log(matriks[0][0])

let coba = [0, 1, 2, 3, 4]
console.log(coba.slice(2, 4))

console.log(coba.splice(0, 1, 11))