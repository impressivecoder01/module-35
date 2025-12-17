// (advance) truthy, false, ternary operator, shortcut and or
// false values
/**
 * 0
 * false
 * ''
 * null
 * undefined
 */
const test = ' '
if(test){
    console.log('yes')
}
else{
    console.log('no')
}

test ? console.log('ttt'): console.log('uuu')
const num = 11;
(num<11)?console.log('rt'):console.log('ss')