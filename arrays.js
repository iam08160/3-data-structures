//  ? Arrays 

/* 
    ? Array is a list-like objects
    ? Prototype has methods to perform traversal and mutations operations
    *denoted by []
    *hold data types
    *content can be accessed by their index 
    
*/

let arr = []

console.log(arr) // creates empty array literal
console.log.apply(Boolean(arr)) // ! empty arrays return true

// ? HOw would you check that  an array is empty????

!arr ? console.log("empty") : console.log("Hoas contents")
// ! WRONG returns "has contents" because array ALWAYS returns true

if (arr.length == 0) {
    console.log("Empty")
} else{
    console.log("Has contents")
} 

let carMake = ["BMW", "Honda", "Toyota", "Hyundai"]
console.log(carMake) // displays all contentsa of an array
console.log(carMake[1]) // displays value at an index
console.log(carMake[7]) // if !found returns undefined, NOT an error

// ? Nesting, Assignment & Reassignment

//Assign
carMake[carMake.length] = "ASton Martin"
console.log(carMake)

// Assigne to a different variable

let bmw = carMake [0]
console.log [bmw]

//Reassigning Values
carMake[2] = "Yugo"
console.log(carMake)

//  Nesting
carMake[carMake.length] = ["guy","guy1","guy2"]
console.log(carMake)

// ? How to access nested array
console.log(carMake[6])
// ? How can I Access Guy then?
console.log(carMake[5][1])

// Arrays cann have many different types

let manyDataTypes = [
    "string",
    [1, 5, 6, true],
    false,
    undefined,
    null,
    NaN,
    "some other string"
]

console.log(manyDataTypes)

// Data Type

console.log(typeof manyDataTypes) // returns object to JS OOP nature
console.log(manyDataTypes instanceof Array)


/* 
    ? Challenge

    *Create a variable named janCohort
    *Include everyone's name at iterable
    *Nest array with instructors name, TA, and Matt
    *Access Rishi's name and reassign to Jennifer
    *Access Pauls name and reassign to Pablo
    ! Spicey Mode ; remove last entry within the nested array


*/

let janCohort = ["Ian", "Tyler", "Mike", "Alex", "Rishi", "Jose"]
console.log(janCohort)
janCohort[janCohort.length] = ["Paul", "Dave", "Matt"]
console.log(janCohort)
janCohort[5] = "Jennifer"
console.log(janCohort)
janCohort[6][0] = "Pablo"
console.log(janCohort)
janCohort[6][2]
janCohort[6][janCohort[6].length - 1] = null
console.log(janCohort)

let superNested = [1, [2, [3, [4, [5, "some value", "jackpot!"]]]]]
console.log(superNested[1][1][1][1][2])