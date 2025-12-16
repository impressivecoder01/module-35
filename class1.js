// variable
let name = 'first name'
name= 'full name'
console.log(name)
const countryNm = 'bd'
console.log(countryNm)
const num = 20;
if(num>=20&& num==10){
    console.log('yes')
}
else{
    console.log('no')
}
if(num>=20|| num==10){
    console.log('yes')
}
else{
    console.log('no')
}

const friends = ['a', 'b', 'c', 'd']
console.log(friends.length)
console.log(friends[1])
friends.push('e')
console.log(friends)
friends.pop()
console.log(friends)
friends.unshift('aa')
console.log(friends)
friends.shift()
console.log(friends)
console.log(friends.splice(1,2))
console.log(friends.slice(1,2))
for(let i = 0; i< friends.length; i++){
    console.log(friends[i], 'ss')
}