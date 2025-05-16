/*let btn1 =document.querySelector("#btn1");
btn1.onclick =()=>{
    let a =25;
    a++;
    console.log(a);//26
};*/

let box = document.querySelector("div");
box.onmouseover = () =>{
    console.log('you are inside div');
};

//Event Object
let btn1 =document.querySelector("#btn1");
btn1.onclick =(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
};