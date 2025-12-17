function sum (a, b){
    let total = a+b
    return total
}
console.log(sum(44,44))
function sum2 (a, b){
    console.log(arguments)
}
sum2(3,4)

const sum3 = ( a,b)=> a + b ;
console.log(sum3(4,4))

const num = [3,3,4,5,67]
const num2 = [...num, 33,333]
console.log(num2)