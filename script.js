// spread operator example
const nameArray = ["My", "name", "is", "John"];
console.log("no spread operator", nameArray)
console.log("with spread operator", ...nameArray)

const names1 = ["David", "Tim", "Larry"]
const names2 = ["Sally", "Jane", "Susan"]
console.log("no spread operator", names1, names2)
console.log("with spread operator",...names1, ...names2)

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

const combinedObjects = {...item, ...itemDetails}
console.log("object with spread operator", combinedObjects)

function numbersFunction(num1, num2, num3){
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
const mergedObject = {...obj1,...obj2}
console.log("mergedObject", mergedObject)