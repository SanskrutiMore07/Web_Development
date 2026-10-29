const user ={
    name: "Sayali",
    age: 20,
    emailID: "moresayali@gmail.com",
    amount:32000
}
console.log(typeof user)
console.log(user.name);
//console.log(typeof age)
user.adharNo = 123456852121;
user.age = 25
user.name = "Sagar"


delete user.emailID;
console.log(user)

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

for(let keys in user)
{
    console.log(keys,user[keys])
}

for(let [keys,values] of Object.entries(user)){
    console.log(keys,values)
}

