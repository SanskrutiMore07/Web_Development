const user ={
    name: "Sayali",
    age: 20,
    emailID: "moresayali@gmail.com",
    amount:32000
}

//for of loop 

/*const temparray = Object.keys(user);
console.log(temparray)
for(let keys of temparray){
    console.log(keys);
}*/

/*for(let values of Object.values(user)){
    console.log(values);
}*/

for(let values of Object.entries(user)){
    console.log(values)
}