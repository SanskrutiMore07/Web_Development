let marks =  [55,85,65,44,20]
let sum =0;

for (let val of marks)
{
    sum += val
}

console.log(sum)

let avg = sum / marks.length;

console.log(`Avg marks of  Class = ${avg}`);