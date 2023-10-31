// spread operator example
const nameArray = ["My", "name", "is", "John"];
console.log("no spread operator", nameArray)
console.log("with spread operator", ...nameArray)

const names1 = ["David", "Tim", "Larry"]
const names2 = ["Sally", "Jane", "Susan"]
console.log("no spread operator", names1, names2)
console.log("with spread operator", ...names1, ...names2)

const item = {
    id: 1,
    name: "Apple",
    price: 0.55
}

const itemDetails = {
    id: 2,
    color: "Red",
    weight: 0.2
}

const combinedObjects = { ...item, ...itemDetails }
console.log("object with spread operator", combinedObjects)

function numbersFunction(num1, num2, num3) {
    console.log("numbersFunction", num1, num2, num3)
}

const numbers = [1, 2, 3]

numbersFunction(...numbers)

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

// const mergedArray = arr1.concat(arr2)
const mergedArray = [...arr1, ...arr2]

console.log("mergedArray", mergedArray)

const obj1 = {
    name: "Jimmy",
    age: 30
}

const obj2 = {
    city: "London",
}

// const mergedObject = Object.assign({}, obj1, obj2)
const mergedObject = { ...obj1, ...obj2 }
console.log("mergedObject", mergedObject)

// array destructuring examples
const arrValue = [1, 2, 3]

// let a = arrValue[0]
// let b = arrValue[1]
// let c = arrValue[2]

const [a, b, c] = arrValue

console.log(a)
console.log(b)
console.log(c)

// object destructuring examples
let country = {
    name: "Indonesia",
    capital: "Jakarta",
    population: 10560000,
    continent: "Asia",
    languages: ["Indonesian", "English"],
    currency: "Rupiah",
    currencySymbol: "Rp",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Indonesia",
    flagWidth: "150px",
}

// let countryName = country.name
// let capital = country.capital
// let population = country.population

let { name: countryName, capital, population } = country

console.log(countryName)
console.log(capital)
console.log(population)

// rest parameters
function concat(...strings) {
    for (let item of strings) {
        console.log(item)
    }
}

concat("Hello", "World", "!")

/**
 * The function "displayNames" takes in a first person name and an indefinite number of other people
 * names, and logs them to the console.
 * @param firstPerson - "John"
 * @param otherPeople - ["David", "Tim", "Larry"]
 */
function displayNames(firstPerson, ...otherPeople) {
    console.log("First Person", firstPerson)
    console.log("Other People", otherPeople)
}

displayNames("John", "David", "Tim", "Larry")

/* The code is creating an array called `colors` with six elements: "Red", "Green", "Blue", "Yellow",
"Pink", and "Purple". */
const colors = ["Red", "Green", "Blue", "Yellow", "Pink", "Purple"]
const [primary, ...restOfColors] = colors
console.log(primary);
console.log(restOfColors);

// arrow function examples
const printSomethingArrow = (msg) => {
    console.log(msg)
    return true;
}

printSomethingArrow("Hello my friends on Halloween Eve")
printSomethingArrow("Maybe it is the Eve of Halloween?")

const produce = () => ("producing");
console.log(produce())

const double = (num) => (num * 2)
console.log(double(5))

const logDoubles = numbers => { numbers.forEach(num => console.log(double(num))) }

const sampleArray = [100, 200, 300, 400, 500]
logDoubles(sampleArray)

const someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

someNumbers.forEach(num => {
    console.log(num * 2);
})

for (let num of someNumbers) {
    console.log(num * 2);
}

for (let num in someNumbers) {
    console.log(num * 2);
}

// generate some random data in an array
const randomData = ["John", 30, "London", true, 0.55, "David", 25, "New York", false, 0.75, "Tim", 35, "Paris", true, 0.45]

// filter out the names
const names = randomData.filter(item => typeof item === "string")

// capitalize the names
const capitalizedNames = names.map(name => name.toUpperCase())

// sort the names
const sortedNames = capitalizedNames.sort()

// log the names
sortedNames.forEach(name => console.log(name))