// json, fetch, keys, values, array add or remove using dots
const person = {
    nam : 'hero',
    age: 55,
    friendss : ['b','c','d','e'],
    country: 'bd'
}

const data = JSON.stringify(person)
console.log(data)
const obj = JSON.parse(data)
console.log(obj)
const person2 = {
    nam : 'hero',
    age: 55,
    friendss : ['b','c','d','e'],
    country: 'bd'
}

const key = Object.keys(person2)
console.log(key)
const value = Object.values(person2)
console.log(value)

const products = [
    {nam: 'redmi', brand:'xiaomi', price: 333},
    {nam: 'redmi1', brand:'xiaomi1', price: 3333},
    {nam: 'redmi2', brand:'xiaomi2', price: 333},
    {nam: 'redmi3', brand:'xiaomi3', price: 333},
]
const add = [...products, {nam: 'aa'}]
console.log(add)

const remain = products.filter(p => p.brand!== 'xiaomi')
console.log(remain)
const no = [...remain, {nam: 'add'}]
console.log(no)