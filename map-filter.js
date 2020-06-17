
const numbers = [3,4,7,3,2]

// const output = []

// for(let i = 0;i<numbers.length;i++){
//     const result = numbers[i]
//     const element = result * result
//     output.push(element)
// }

// console.log(output)


// function squre(element) {
//     return element * element
// }

/* MAP AR MODDE FUNCTION DILE SEKHANE 3 TA PARAMETER PASS HOY, 1. ELEMENT 2. INDEX 3. ARRAY */

// numbers.map(function(element,index,arr) {
//     console.log(element,index,arr)
// })


// const result = numbers.map(function(element) {
//     return element * element
// })

// console.log(result)


// function squre (element){
//     return element * element
// }

// const squre = element => element * element
// const squre = x => x*x

// const result = numbers.map(x => x*x)

// console.log(result)

//const result = numbers.filter( x => x < 5)

const result = numbers.find(x => x < 5)

console.log(result)




