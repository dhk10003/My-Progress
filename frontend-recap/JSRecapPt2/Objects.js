const obj1 = {
    name: 'obj1',
    id: 1
}

// const obj2 = obj1

// console.log(obj2)

// obj2.name = 'obj2'

// console.log("Logging obj1 after changing obj2:")
// console.log(obj1)

const obj2 = {...obj1}

obj2.name = 'obj2'
obj2.id = 2

console.log("Logging obj1 after changing obj2:")
console.log(obj1)

console.log("Logging obj2 after changing obj2:")
console.log(obj2)

const obj3 = {...obj1, city: "New York"}
console.log(obj3)

console.log({...obj1, prop1: "something"})
// this object looks like: {name: "obj1", id: 1, city: "New York"}