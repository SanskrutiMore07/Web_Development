//Data types

//primitive Data Types  
//number,strung,boolean,undefined , null , bigint, symbol

//Non Primitive Data types are mutable
//Array, object, Function 


//number 
let a = 10;
let b = 2.30;

console.log(a,b);

//string

let c= "Our FriendShip Will Never End"
let d = "Sayali";
console.log(c,d)

// bolean

let login = true;
let f = false;

console.log(login,f);

//undefined

let user;
console.log(user);

// Bigint 
let num = 54564564564564564n
console.log(num);

// null

let weather = null;
console.log(weather);

// Symbol

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1== id2);

// non-primitive Data types
//arry , object, function

let arr=[10,20,30,"Ajit More",true];
console.log(arr);

//Rohit 1234 18 gen

let obj = {
    name :"Rohit",
    Account : 453254,
    age:18,
    Catagory : 'gen'
}
console.log(obj)

//Function

function add()
{
    console.log("Hello Shubbb!!!")
}
add();
