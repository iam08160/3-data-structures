//  ? Array Methods

/* 
    * Methods are functions that live inside of an object prototype
    * Denoted by the . at the ends of an object we're working on
    * Ex: somevariable.toLowercase()
*/

let educationTeam = [
    ["Paul Niemzczk", "Rob Andersall", "Eric Weinburger"],
    ["Ben Villa", "Dave Landey", "Ben Ragland"],
    ["Lulu Browne", "Julie Assur"]

]

/* 
    .push()

    *adds an element to the end of an array
    *returns the new length of an array
*/

console.log(educationTeam)
let pushReturn = educationTeam.push(["Benny Boas", "Kate Sweeney"])
console.log("VALUE",educationTeam, "Return", pushReturn)

/* 
 .pop()

 *Removes last array element and returns it
*/

let lastElement = educationTeam.pop()
console.log("Value",educationTeam,"Return of.pop()", lastElement)

/* 
    .unshift()
    *adds an element to the beginning of an array
    *returns length of new arrau
    
*/

let unshiftReturn = educationTeam.unshift("Mike")
console.log("Value", educationTeam, "Return of .unshift()", unshiftReturn)

/* 
    .shift()

*Removes the first element from an array
* returns the length of the new array
*/

let shiftReturn = educationTeam.shift()
console.log("Value", educationTeam, "Return of .shift()", shiftReturn)

// ? Advanced Array Methods

// Arrays are iterable

let states = [
    "Illinois",
    "Wisconsin",
    "Alabama",
    "New York",
    "Vermont",
    "Indiana", 
    "Massachussets",
    "Ohio",
    "Virginia",
    "West Virginia",
    "Pennsylvania",
    "North Dakota",
    "South Dakota",
    "Oregon",
    "California",
    "Nevada",
    "Arizona",
    "New Mexico",
    "Florida",
    "Louisiana",
    "Texas",
    "New Hampshire",
    "Maine",
    "Rhode Island",
    "Alaska",
    "Connecticut",
    "Montana",
    "Nebraska",
    "Delaware",
    "Washington",
    "Iowa",
    "Kansas",
    "Oklahoma",
    "Michigan",
    "Minnesotta",
    "Kentucky",
    "Tennessee",
    "Idaho",
    "Utah",
    "Georgia",
    "Mississippi",
    "Missouri",
    "Colorado",
    "Delaware",
    "Hawaii",
    "Maryland",
    "North Carolina",
    "South Carolina",
    "New Jersey",
    "Wyoming"
]
for (state of states) {
    console.log(states)
}

/* 
    .forEach()

    * fires a callback function on each element of your array
*/

states.forEach((state, index, array) => {
    console.log(`${state} ${index}`)
})

/* 
    .map()

    *creates an array with elements resulting from the callback fx

*/

let statesLowercase = states.map(state => state.toLowerCase())
console.log(statesLowercase)

/* 
.filter()

*Creates a new array based on the fliter function
*Only filtered items can be added to an array
* No If Else

*/

let statesC = states.filter(state => state.startsWith("C"))
console.log(statesC)

let grades = [56, 78, 96, 41, 7, 22, 15, 10, 89]

/* 
    ? Challenge

    * Utilize array methods to raise the grade by 15 points for everyone
    * Those above 90 should not get any points

*/

let newGrade = grades.map(grade=> grade < 90 ? grade + 15 : grade)

console.log(newGrade)

// Rewrites the values of original array to new grades
grades.forEach((_, index, originalArr) => {
    //          _ - placeholder if we don't use the param
    // originalArr[index] == grade
    //             grade  == iterator representation of grade
    //             think of counting on your fingers ^^^
    console.log("This is the", originalArr[index])
    if (originalArr[index] > 90) {
        null
    } else {
        originalArr[index] = originalArr[index] + 15
    }
})
console.log(grades)
