let Mode = document.querySelector("#Mode");
let body = document.querySelector("body");
let currentMode ="LightMode";

Mode.addEventListener("click",()=>{
   // console.log("You are tring to change mode");
   if(currentMode === "LightMode"){
    currentMode ="darkMoode";
    body.classList.add("dark");
    body.classList.remove("Light");
   }
   else{
    currentMode ="LightMode";
     body.classList.add("Light");
     body.classList.remove("dark");
   }
   console.log(currentMode);
});