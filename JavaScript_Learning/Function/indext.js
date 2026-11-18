function greating(){
    console.log("Explain the Chef architecture with a neat diagram. ")
    return 10;
}
console.log(greating())


//greating();

function addNumber(No1,No2){
    const sum =No1+No2;
    console.log(sum)
}
addNumber(5,8);
addNumber(7,6);
addNumber(20,20)

function addNo(n1,n2,n3=0,n4=0){
    const add = n1+n2+n3+n4;
    console.log(add)
}
addNo(4,5,6)

function sumof(...num){
    let sum = 0;
    for(let n of num){
        sum+=n
    }
    console.log(sum)
}
sumof(14,20)
sumof(30,10,20)