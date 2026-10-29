//Event Listener
let btn1 =document.querySelector("#btn1");
btn1.addEventListener("click",(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
})

btn1.addEventListener("click",()=>{
    console.log("button was click - handler1");
});

btn1.addEventListener("click",()=>{
    console.log("button was click - handler2");
});

btn1.addEventListener("click",()=>{
    console.log("button was click - handler3");
});

btn1.addEventListener("click",()=>{
    console.log("button was click - handler4");
});