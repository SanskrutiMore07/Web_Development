/*let items = [200,500,220,600,300];

const names = ["Sayali","Sai","Raj","Namrata","sayali"]

console.log(names.join("_"));

console.log(names.lastIndexOf("Sayali"))
console.log(names.indexOf("Sai"))
console.log(names.includes("Sai"))

names.sort();
names.reverse();
console.log(names);

/// 2 D Array
const arr = [10,20,30,50,[20,41,52],12]
console.log(arr[4][2])*/

/// 3 D Array
const arr = [10,20,30,[20,50,[60,70,80],11],80];
console.log(arr[3][2][1]);

const a = arr.flat(4);
console.log(a)
