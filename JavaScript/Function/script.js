//Two Numbers Sum

function Sum(x,y)
{
    s = x+y;
    return s;
}
let val = Sum(3,4);
console.log(val);

//Arrow Function 

const arrowMult =(a,b)=>
{
  let Val= console.log(a*b);
  console.log(Val);
}

//Create a Function using the "Function" Keyword that takes a string as an argument and returns the number of vowels in the string

function constvowels(str)
{
 let Count = 0;
 for (const char of str)
 {
    if(char ==="a"|| char ==="e"|| char ==="i"|| char ==="o"|| char ==="u")
    {
        Count++;
    }
 }
 return Count;
}

// Creat An Arrow Function To Perform Same Task

ConstCountVow = (str) =>
{
    let Count =0;
    for (const char of str)
        {
           if(char ==="a"|| char ==="e"|| char ==="i"|| char ==="o"|| char ==="u")
           {
               Count++;
           }
        }
        return Count;

}