// array methods map filter find forEach
const products = [
    {nam: 'redmi', brand:'xiaomi', price: 333},
    {nam: 'redmi1', brand:'xiaomi1', price: 3333},
    {nam: 'redmi2', brand:'xiaomi2', price: 333},
    {nam: 'redmi3', brand:'xiaomi3', price: 333},
]

const result = products.map(product =>product.price)
console.log(result)
products.forEach(product => console.log(product))
products.forEach(product => console.log(product.price))

const result2 = products.filter(product => product.brand=== 'xiaomi')
const result3 = products.filter(product => product.price > 3000)
console.log(result3)
console.log(result2)
const reslut4 = products.find(product => product.nam === 'redmi3')
console.log(reslut4)