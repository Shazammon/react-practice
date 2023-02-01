const personOne = {
    name: 'Kyle',
    age: 24,
    address: {
        city: 'Somewhere',
        state: 'One of them'
    }
}

const personTwo = {
    name: 'Sally',
    age: 32,
    favoriteFood: 'Watermelon',
    address: {
        city: 'Somewhere else',
        state: 'Another one of them'
    }
}

// const { name: firstName, age, favoriteFood = 'Rice' } = personTwo
// const { name: firstName, ...rest } = personTwo
const { name: firstName, address: { city } } = personTwo // this is nesting an object destructuring inside an object destructuring
const personThree = {...personOne, ...personTwo} // overrides everything from person 1 if it exists in person 2

console.log(firstName)
// console.log(age)
// console.log(favoriteFood)
// console.log(rest)
console.log(city)
console.log(personThree)

// function printUser(user) {
//     console.log(user)
//     console.log(`Name is ${user.name}. Age is ${user.age}`)
// }

// instead of the above function, you can use object destructuring for this:

function printUser({name, age, favoriteFood = 'Watermelon'}) {
    console.log(`Name is ${name}. Age is ${age}. Food is ${favoriteFood}`)
}
 

printUser(personOne)