/*let divs = document.querySelectorAll(".Box");
//console.log(divs);
divs[0].innerText = "New Unique Value 1";
divs[1].innerText = "New Unique Value 2";
divs[2].innerText = "New Unique Value 3";*/

let divs = document.querySelectorAll(".Box");
let idx = 1;
for(div of divs){
    div.innerText = `New Unique Value ${idx}`;
    idx ++;
}


