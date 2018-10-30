
// Array Methods: map -- filter -- reduce, and more!

const colors = ["red", "blue", "green", "yellow", "burnt orange", "teal"]
const numbers = [20, 10, 5, 8, 30, 100, 19]

// Sort works in....unusual ways
let sortedColors = colors.sort()
sortedColors

let sortedNums = numbers.sort( (a, b) => {
  return b - a
})
sortedNums


// Boring old way
// let reversedColors = [];
// for (var i = 0; i < colors.length; i++) {
//   let reversed = colors[i].split("").reverse().join("")
//   reversedColors.push(reversed)
// }
// console.log(reversedColors)

// .map, .filter and .reduce all return a value that we capture in a variable. REMEMBER, each one has to return a value from the anonymous function in order to work
// Exciting, hip way with .map
let reversedColors = colors.map(color => {
  return color.split("").reverse().join("")
  // return `My favorite color is ${color}`
})
console.log(reversedColors);

// Even shorter version
// let reversedColors = colors.map(color => color.split("").reverse().join(""))

// filter sets a condition that each item in the orignal array has to meet in order to bbe added to the new array
let fourLtrWords = colors.filter( color => color.length === 4)
console.log(fourLtrWords)

// same as...
let fourLtrColors = []
for( let i = 0; i < colors.length; i++ ) {
  if(colors[i].length === 4 )
    fourLtrColors.push(colors[i])
}
console.log(fourLtrColors)

// reduce on numbers
let total = numbers.reduce( (accumulator, next) => accumulator + next)
console.log(total)

// reduce on strings
let colorList = colors.reduce( (accumulator, next) => `${accumulator}, ${next}`)
console.log(colorList)
