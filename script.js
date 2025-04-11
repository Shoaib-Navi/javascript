// git init
// git add .
// git commit -m "message"
// git push

// function sayhello()
// {
//     let you = prompt("what is your name ?");
//     console.log("hello", you+ "!");
// }




// let varContainingFunction= function(){
//     let varInFunction ="I'm in a function.";
//     console.log("hi there!",varInFunction);
// }

// varContainingFunction();

// function tester(para1,para2){
//     return para1 +" "+ para2;
// }

// const arg1 ="argument 1";
// const arg2 ="argument 2";

// console.log(tester(arg1,arg2));

// function sum(num1,num2){
//     return num1 + num2;
// }
// console.log(sum(2,4))

// function sum(){
//     let num1=parseInt(prompt("enter num1:"));
//     let num2=parseInt(prompt("enter num2:"));
    
//     console.log(num1 + num2);
// }
// sum();

//default argument: D.A are the trailing(last) argument
// function sum(x=2,y=4){   
//  console.log(x + y);
// }
// sum(10,12);
// sum(10);
// sum();
// sum(1,2,3,4); //it take starting two numbers


//special function: arrow function
// const doingStuff = x => console.log(x);

// doingStuff("great");

// let addTwoNumbers = (x,y) => console.log(x+y);
// addTwoNumbers(3,4);

// const arr = ["squirrel","alpaca","buddy"];
// arr.forEach(e => console.log(e));

//spread and rest operator
// let spread = ["so","much","fun"];
// let message = ["javascript","is", ...spread,"and","vary","powerful"];

// console.log(message);
// console.log(...spread);

//spread operator use at invoke time.
//addition using spread operator. 
// function sum(x,y){   
//  console.log(x + y);
// }
// let arr=[5,9];
// sum(...arr)

// function sum(x,y,z,a){   
//  console.log(x + y+z+a);
// }
// let arr1=[5,9];
// let arr2=[3,4];
// sum(...arr1, ...arr2);


//rest operator use when function define.
// function someFunction(para1, ...para2){
//     console.log(para1,para2);
// }
// someFunction("hi","there!","How are you?");

//Returning function values
// let addTwoNumbers = (x,y) => (x+y);
//  let resultsArr =[];

//  for (let i=0; i<10; i++){
//     let result = addTwoNumbers(i , 2*i);
//     resultsArr.push(result);
//  }
//  console.log(resultsArr);

// //returning with arrow function
// let addTwoNumber = (x,y) => x+y;  //there is no need of return keyword.

// let result=addTwoNumber(5,6);
// console.log(result);

//variable scope in function
// function testAvailability(x){
//    console.log("Available here:",x)
// }
// testAvailability("hii");
// console.log("Not available here:",x);

// function testAvailability(){
//    let y="Local variable!";
//    console.log("Available here:",y)
// }
// testAvailability();
// console.log("Not available here:",y);

// function testAvailability(){
//    let y="I'll return";
//    console.log("Available here:",y);
//    return y;
// }

// let z=testAvailability();
// console.log("Outside the function:",z);
// console.log("Not available here:",y);

// function doingStuff(){
//    if(true){
//       var x="local";
//    }
//    console.log(x);
// }
// doingStuff();

// function doingStuff(){
//    if(true){
//       console.log(x);  //this give output as undefind
//       var x="local";
//    }
// }
// doingStuff();

// function doingStuff(){
//    if(true){
//       console.log(x);   //this give output reference error
//       let x="local";
//    }
// }
// doingStuff();


// function doingStuff(){
//    if(true){
//       console.log(x);   //this give output reference error
//    }
//    const x="local";
// }
// doingStuff();

//global scope

// let globalVar = "Accessible everywhere!";
// console.log("Outside function:",globalVar);

// function creatingNewScope(x){
//    console.log("Access to global var inside function:",globalVar);
// }

// creatingNewScope("some parameter");
// console.log("still available:",globalVar);


// let x="global";

// function doingStuff(){
//    let x="local";
//    console.log(x);

// }
// doingStuff();
// console.log(x);


//immediately invoked function expression
//this tell that you don't need to store an anoanymous function into variable ,by this without storing  we can invoke it.

// (function (){
//     console.log("IIFE");
// })();

// (()=>{
//     console.log("IIFE");
// })();


// //Recursive function
// function getRecursive(nr){
//     console.log(nr);
//     getRecursive(--nr);
// }

// getRecursive(3);
// //this is infinit recursion
// //this stop when condition overflow

// function getRecursive(nr){
//     if(nr > 0){
//         getRecursive(--nr);
//     }
//     console.log(nr);
// }

// getRecursive(3);

//output:0,0,1,2
//bcoz 0 come when base condition false then it give 0,and 2nd 0 come by condition


// function logRecursive(nr){
//     console.log("started function:",nr);
//     if(nr > 0){
//         logRecursive(nr-1);
//     }else{
//         console.log("done with recursion");
//     }
//     console.log("ended function:",nr);
// }

// logRecursive(3);


//iteration is better then recursion 
//the performance of recursion is slightly worse than the performance of regular iteration using a loop .so if this ...



//nested function

// function doOuterFunctionStuff(nr){
//     console.log("outer function");
//     doOuterFunctionStuff(nr);
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x){
//         console.log(x+7);
//         console.log("i can access outer variable:",nr) //something is remain
//     }
// }

// doOuterFunctionStuff(3);


//when one function1 call and function1 is inside the function2 then it will give error that function reference error 


//in one scope you only call only one anonymous function


//function callbacks
//--function passed as an argument

// let functionVariable = function() {
//     console.log("not so secret though");
// }

// function doFlexibleStuff(executeStuff){
//     executeStuff();
//     console.log("inside doFlexibleFunction");
// }

// doFlexibleStuff(functionVariable);

//synchronous means blocking code


//dynamic pages
//setTimeout()
//setTmeInterval()

// let youGotThis = function(){
//     console.log("keep coding")
// };

// setTimeout(youGotThis,5000);  //settimeout(function or ... ,time)

//setInterval

// let youGotThis = function(){
//     console.log("keep coding")
// };

// setInterval(youGotThis,2000);


//practice
// let val=10;
// function tester(val){
//     val += 10;
//     if(val<100){
//         return tester(val);
//     }
//     return val;
// }
// console.log(tester(val))
// console.log(val);


//2
// let testFunction = function(){
//     console.log("hello")
// }();

//invoke here directly



// (function(){
//     console.log("welcome")
// })();

//3
// (function(){
//     console.log("welcome")
// })();

// let result =(function(){
//     let firstName ="laurence";
//     return firstName;
// })();

// console.log(result);

// (function(firstName){
//     console.log("My name is "+ firstName);
// })("Laurence");


//4
// let test2 =(num) => num+5;
// console.log(test2(14));

//5
// var addFive1=function addFive1(num){
//     return num+2;
// }

// let addFive2 =(num) => num+2;
// console.log(addFive1(14));

