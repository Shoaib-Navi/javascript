//classes-blueprint,collection of object,prototype

//classes and objects
// data-proprtites,  function-method

//this ki jgh pr object name aa jata hai


// class ClassName{
//     constructor(prop1,prop2){
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//     }
// }

// let obj = new ClassName("arg1","arg2");
// console.log(obj)

//this keyword refers to the object it belongs to ao it is the first property of thhe 
//abstraction--mujhe kya chaheye or kya nii---which attribute are necceary or not

// class Dog{
//     constructor(dogName,weight,color,breed){
//         this.dogName = dogName;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }

// let dog = new Dog("javascript",2.4,"brown","chihahua");
// console.log(dog);


//there can be one constructor in the class
//class name first letter capital
//constructor=element

// class Person{
//     constructor(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// let p = new Person("shoaib","Navi")

// console.log("hi",p.firstName);


//function on class are called method
//we dont use function keyword,start directly with the name

// class Person{
//     constructor(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     greet(){
//         console.log("hi there i am  ", this.firstName)
//     }
//     compliment(name,object){
//         return "That's a wonderful "+ object +","+name;
//     }
// }


// let p = new Person("shoaib","Navi")
// p.greet();
// let compliment = p.compliment("Harry","hat")

// console.log(compliment)

//remaining portion----------------------------------------------------



// validation
// class Person {
//     #firstname;
//     #lastname;

//     constructor(firstname, lastname) {
//         if (firstname.startsWith("M")) {
//             this.#firstname = firstname;
//         } else {
//             this.#firstname = "M" + firstname;
//         }
//         this.#lastname = lastname;
//     }

//     getData() {
//         return First Name: ${this.#firstname}, Last Name: ${this.#lastname};
//     }
// }

// let p = new Person("kay", "Moon");
// console.log(p.getData());



// getters 

// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
//     get firstname() {
//         return this.#firstname;
//     }

//     set firstname(firstname){
//         this.#firstname=firstname;
//     }
//     get lastname(){
//         return this.#lastname;
//     }
//     set lastname(lastname){
//         this.#lastname=lastname;
//     }
// }
// let p= new Person("Shoaib","Navi");
// p.firstname="ali";
// console.log(p.firstname);


// INHERITANCE

// class Vehicle {
//     constructor(color, currentSpeed, maxSpeed) {
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }
//     move() {
//         console.log("moving at", this.currentSpeed);
//     }
//     accelerate(amount) {
//         this.currentSpeed += amount;
//     }
// }
// class Motorcycle extends Vehicle {
//     constructor(color, currentSpeed, maxSpeed, fuel) {
//         super(color, currentSpeed, maxSpeed);
//         this.fuel = fuel;
//     }
//     doWheelie() {
//         console.log("Driving on one wheel");

//     }

// }
// let motor=new Motorcycle("Black",0,250,"gasoline");
// console.log(motor.color);
// motor.accelerate(50);
// motor.move();


// // PROTOTYPES

// class Person {
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     greet(){
//         console.log("hi there! I'm",this.firstname);
//     }
// }
// Person.prototype.introduce = function () {
//     console.log("Hi,I'm",this.firstname);
// };
// Person.prototype.favouriteColor = "green";
// let p = new Person("Shoaib","Navi");
// console.log(p.favouriteColor);
// p.introduce();


//----------------map------------------
// const fruits = new Map([
//     ["apple",500],
//     ["banana",700],
//     ["grapes",600]
// ])

// fruits.set("apple",900);
// fruits.set("banana",800);
// fruits.set("grapes",700);



// console.log(fruits.get("apple"))

//what is the difference between javascript objects and map
//keys must be string         //keys must be of any datatype




// ----------javascript map method-------------------

// console.log(fruits.size)

// fruits.typeOf

// fruits.delete("apple");

// fruits.clear();

// console.log(fruits.has("banana"))

// let text ="";
// fruits.forEach(function(value,key){
//     console.log(text +=key + '='+value)
// })

// let text ="";
// for(const x of fruits.entries()){
//     console.log(text +=x)
// }

// let text ="";
// for(const x of fruits.keys()){
//     console.log(text +=x)
// }

// let text ="";
// for(const x of fruits.values()){
//     console.log(text +=x)
// }


// const apples = {name:'Apples'};
// const bananas = {name:'Bananas'};
// const oranges = {name:'Oranges'};

// const fruits = new Map();
// fruits.set(apples,500)
// fruits.set(bananas,600)
// fruits.set(oranges,700)

// console.log(fruits)

// const fruits = [
//     {name:'apples',quantity:300},
//     {name:'bananas',quantity:400},
//     {name:'oranges',quantity:500},
//     {name:'kiwi',quantity:600},
// ];

// //destructuring
// function myCallback({ quantity }){
//     return quantity > 200?"ok":"low";
// }

// const result = Map.groupBy(fruits,myCallback);
// console.log(result);

//-------------javascript destructuring-----------
//
// const person = {
//     firstname:"john",
//     lastname:"Doe",
//     age:50
// };

// // let {firstname,lastname} = person; //both give same answer
// let {lastname,firstname} = person;
// console.log(firstname)


//note- Destru. is not destructive

// let {lastname,firstname,country="us"} = person; 
// console.log(country)

//rename
// let {lastname:name} = person;
// console.log(lastname)
// let name = "GurukulTheSchools";

// let[a1,a2,a3,a4,a5] = name;

//create an array
// const fruits=["bananas","oranges","apples","mangos"];
// let[fruit1,fruit2] = fruits;
// console.log(fruit1)

//for skipping values we use comma

// let[fruit1,,,fruit2] = fruits;

// let{[0]:fruit1,[1]:fruit2} = fruits;
// console.log(fruit2)

//rest and spread
//rest-other than one capture all other element

// const numbers = [10,20,30,40,50,60];
// const [a,b,...rest]=numbers;
// console.log(a,b,rest)

// const fruits = new Map([
//     ["apples",500],
//     ["bananas",400],
//     ["oranges",300],
// ])

// let text = "";
// for(const[key,value]of fruits){
//     text += key + " is " +value;
// }

// console.log(text)

//swaping variable name

// [firstname,lastname] = [lastname,firstname];

//exponentiation
// let x=5;
// let z = x**2;
//or
// let z= Math.pow(x,2);

// //javascript array includes()
// const fruits=["bananas","oranges","apples","mangos"];
// // console.log(fruits.includes("mangos")) //true
// console.log(fruits.includes("mangos",2)) //true

//the value here define the starting position --("mangos",2)

//---------trailing commas----
//dangling--

// const arr = [
//     "one",
//     "two",
//     "three",,
// ];

// console.log(arr.length)

//more than one comma at last it give undefined

// const sparseArray = [1,,,4,5,,];
// console.log(sparseArray.length)


// const person = {
//     firstname:"john",
//     lastname:"Doe",
//     age:50,
// };
// //trailing comma help in adding new element

// console.log(person)


//trailing comma can add into function also
// function createRectangle{
//     w,
//     h
// }