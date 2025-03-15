/*let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

let Para = document.querySelector("p");
//console.log(Para.getAttribute("class")); // clASS NAME ACCSESS HONar
console.log(Para.setAttribute("class", "newClass"));

/**************************************/

/*div.style.backgroundColor = "green";
div.style.fontSize="30px";*/
/*********************************** */

let newheadding = document.createElement("h1");
newheadding.innerHTML = "<i> hi i am new !!!</i>";

document.querySelector("body").prepend(newheadding);

let newbtn =document.createElement("button");
newbtn.innerText="Click Me!!!";
console.log(newbtn);
let div = document.querySelector("div");
div.append(newbtn);