//concurrency
//callbacks
//



//-------------concurrency
//whenever things happen at the same time or in parallel
//bcoz of contact swithching--parallel things work


//callbacks
//function pass as an argument

// function doSomething(callback){
//     callback();
// }

// function sayHi(){
//     console.log("Hii");
// }

// doSomething(sayHi);


//
// function judge(grade){
//     switch(true){
//     case grade =="A":
//     console.log("You got an",grade,":amazing!");
//     break;
//     case grade =="B":
//     console.log("You got an",grade,":well done!");
//     break;
//     case grade =="C":
//     console.log("You got an",grade,":alright!");
//     break;
//     case grade =="D":
//     console.log("You got an",grade,":hmmmm!");
//     break;
//     default:
//         console.log("An",grade,"! what? !")
//     }
// }


// function getGrade(score,callback){
//     let grade;
//     switch(true){
//     case score >= 90:
//         grade = "A";
//     break;
//     case score >= 80:
//         grade = "B";
//     break;
//     case score >= 70:
//         grade = "C";
//     break;
//     case score >= 60:
//         grade = "D";
//         break;
//     default:
//         console.log("An",grade,"! what? !")
//     }
// }
// getGrade("A",judge);


//-------promises------
//this function need two parameter and these parameter are callbacks.
//1. resolve  2.reject


//when resolve() is called , the promise is presumed to be successful and whatever is b/w the arrows is returned and used 
//as input for the then method on the promise object . if reject () is called , the promise failed and the catch method 
//on the promisse object (if present)

//
// let promise = new Promise(function(resolve,reject){
//     let x=20;
//     if(x>10){
//         resolve(x);
//     }else{
//         reject("Too low");
//     }
// });

// promise.then(
//     function(value){
//         console.log("Success:",value);
//     },
//     function(error){
//         console.log("Error:",error);
//     }
// )


// const promise = new Promise((resolve,reject)=>{
//    reject("Success!");
// }).then(value =>{
//     console.log(value);
//     return "we";

// }).then(value =>{
//     console.log(value);
//     return "can";

// }).then(value =>{
//     console.log(value);
//     return "chain";

// }).then(value =>{
//     console.log(value);
//     return "promise";

// }).then(value =>{
//     console.log(value);

// }).catch(value =>{
//     console.log(value);
// })


//---------------async and await----------------
