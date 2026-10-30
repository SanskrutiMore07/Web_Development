//let arr =[20,30,50,200,500]

/*console.log(arr)

for(let i= 0;i<arr.length;i++)
{
    console.log(arr[i])
}

for(let num of arr){
    console.log(num);
}

let arr = [30,20,40,10,20,50,]

let arr2 = arr;

arr2.push(80);

console.log(arr)*/

const arr = [30,20,40,10,20,50,]

arr[2] = 44

console.log(arr.slice(2,4));

const arr2 = arr.slice(1,2)
console.log(arr)

arr.splice(1,3)
console.log(arr)

