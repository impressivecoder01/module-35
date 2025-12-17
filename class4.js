// array and object destructuring
const friends = ['h', 'o', 'j', 'l'];
const [o,b,j,k] = friends
console.log(o)

const person = {
    nam : 'hero',
    age: 55,
    friendss : ['b','c','d','e'],
    country: 'bd'
}
const {nam, age, friendss, country} = person
console.log(country)
console.log(friendss)