// explore local storage and session storage with json
// console.log('sss')
const handle =()=>{
    const nam = document.getElementById('name').value
    const email = document.getElementById('email').value
    // console.log(nam)
    // localStorage.setItem(nam,email)
    const data = {email,nam}
    localStorage.setItem('new',JSON.stringify(data))
}
const item = localStorage.getItem('new')
console.log(JSON.parse(item))
const r = ()=>{
    localStorage.clear()
}