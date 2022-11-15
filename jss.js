console.clear()
console.warn("This is a warning!");
console.error("You made a mistake");
console.assert(4==6)

// variables
var n1=30
var n2=31
console.log(n1+n2)

let j=10 //let saves memory
const p=9// variable value can't be changed

// strings
var str1="hello World"
console.log(str1)
//objects
var marks={
    name1:88,
    name2:99,
    name3:100

}
console.log(marks)
//boolean
var a=true;
var b=false;
console.log(a,b);
//undefined
var und;
console.log(und);
//arrays
var ar=[1,2,"hello",3.8]
console.log(ar);
//arithmatic operators
var a=10
var b=20
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
//logical
console.log(true&&true)
console.log(true||true)
console.log(!true)
//assignment operator
var b=100000
console.log(b)
//comparison operator
console.log(a==b)
console.log(a<b)
//functions
function avg(a,b)
   {
    return a+b/2
   }
c1=avg(10,20)
console.log(c1)
//conditional statements
var n=10;
if(n>5)
{
    console.log("Greater than five")

}
else if(n<5)
{
    console.log("Less than five")
}
else {
    console.log("its five!")
}
//array and for loop
var ar=[1,2,3,4];
console.log(ar);
for(var i=0;i<ar.length;i++)
{
    console.log(ar[i]);
}
//for-each
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);
console.log(sum);

function myFunction(item) {
  sum += item;
}
//switch
const lang = "java";
 
switch (lang) {
  case "python":
    console.log("I know python");
    break;
  case "java":
    console.log("I know java");
    break;
  case "C":
    console.log("I know c");
    break;
}
//array methods
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)
console.log(fruits.toString());
console.log(fruits.join("+"))
console.log(fruits.pop())
fruits.push("Jackfruit")
console.log(fruits)
const langs=["java","python","c","js"]
const a2=fruits.concat(langs)
console.log(a2)
//string methods
var s="Binit Chakraborty"
console.log(s.slice(6))
console.log(s.substr(2,3))
console.log(s.replace("Chakraborty","Chak"))
var s1="@gmail.com"
console.log(s.concat(s1))
console.log(s.trim())
var str = 'I am rachit'
    var array = str.split("am");
   console.log(array);
//Spread operator
var a=[1,2,3];
var a1=[...a,4,5,6];
   console.log(a1);
var o={
    a:1,
    b:2
}
var o1={
    ...o,
    c:"own member"
}
console.log(o1);
//Rest Operator
function sum1(b,...a)
{
    console.log(a);
}
sum1(1,2,3,4,5);
