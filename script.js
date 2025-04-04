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
let addTwoNumbers = (x,y) => (x+y);
 let resultsArr =[];

 for (let i=0; i<10; i++){
    let result = addTwoNumbers(i , 2*i);
    resultsArr.push(result);
 }
 console.log(resultsArr);