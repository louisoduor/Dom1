// let fruit = "mango"
// fruit = "banana"
// console.log(fruit)

// Arrays
/*

List - Group of items
represented as []
fruits = ["apple", "banana", "lemon"]


*/

// let fruits = []
// fruits = ["apple", "banana", "lemon"]
// console.log(fruits)

// const indices = [0, 1, 2, 3, 4, 5, 6]

// let lengthOfIndices = indices.length
// console.log(lengthOfIndices)
// const myList = ["banana", 1, true, undefined, null]
// const favFood  = [
//     {name: "shallo", age: 18, food: "ndengu"}, 
//     {name: "peter", age: 13, food: "rice"}, 
//     {name: "leila", age: 15, food: "pasta"}
// ]

// let nestedValues = [3,5,1,78,[7,9,2]]

// console.log(nestedValues)


/**
 * listOfFruits = ["apple", "banana", "mango"]
 *                [  0    ,    1    ,    2]  
 * 
 */


// let listOfFruits = ["apple", "banana", "mango"]
// listOfFruits[3] = "lemon"
// listOfFruits.push("guava") // Add item at the end of array
// listOfFruits.unshift("grapes") // Add item at the begining of array
// let removedItem = listOfFruits.pop()

// listOfFruits.shift()

// console.log(listOfFruits)

// console.log(listOfFruits.length)
// console.log("removed item: ", removedItem)

let listOfFruits = ["apple", "banana", "mango"]
// for(let i = 0; i < listOfFruits.length; i++){
//     console.log("Start...")
//     console.log(i, listOfFruits[i])
//     console.log("...end")
// }

let lenFruits = listOfFruits.length
let start = 0
while(start < lenFruits){
    console.log(listOfFruits[start])
    start++
}