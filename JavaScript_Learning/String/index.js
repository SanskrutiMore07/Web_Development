const str1 ="Shubham";
const str2 = 'Sayali More';
const day = 12;
const str3 = `Strike is comig on ${day}`;
console.log(str1,str2,str3)
console.log(str1.length)
console.log(str1[1])

//uppercase

console.log(str1.toLocaleUpperCase())
console.log(str1.toLocaleLowerCase())

const str =`Hello Shubham !!! How Are You?`

console.log(str.indexOf('Shu'))
console.log(str.includes('Shu'))
console.log(str.slice(2,7))

console.log(str.substring(2,5))

console.log(str.replace("llo","iam"))

const user ="  Rohit    nrgii    "
console.log(user.trim())

const names = "Rohit, Raj, Suraj, Sahil, Sumedh , Sagar,Atharv"
console.log(names.split(","))

const now = new Date()
console.log(now)
console.log(now.toString());