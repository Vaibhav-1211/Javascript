Section 13: Advance Javascript
1. Event Propagation (Event Bubbling and Event Capturing )
bottom to top -> Bubbling phase        
third argument for bubbling phase in addEventListers is false
top to bottom -> Capture phase
third argument for capture phase in addEventListers is false for we want the particular phase

2. Higher Order Function
// function which takes another function as an argument is called HOF.
// wo function jo dusre function ko as an argument accept karta hai use HOF.

3. Callback Function 
//  function which get passed as an argument to another function is called CBF
//  a callback function is a function that is passed as an argument to 
// another function, to be "Calledback " at a later time.

//Jis  bhi function ko hum kisi or function ke ander as an argument passed
//karte hai then usko hum Callback fun bolte hai.

// // we need to create calculator

const add = (a,b) => {
    return a+b;
}//call back function

const sub = (a,b) => {
    return a-b;
}//call back function

const mult = (a,b) => {
    return a*b;
}//call back function

const calculator = (num1,num2,operator) => {
    return operator(num1,num2);
}

calculator(5,2,sub)//higher order function
console.log(calculator(5,2,sub));
I have to do the hardcode for each operation which s bad 
we will use the call back and the HOF to make it simple to use

Interview Question 
Difference between higher order function and call back function

// ------->Asynchronous Javascript<------------||

5. Hoisting in Javascript

// We have a creation phase and execution phase.

// Hoisting in javascript is a mechanism where variables and functions
// declaration are moved to the top of their scope before    the code execute.

//For example->
console.log(myName);
var myName;
myName = "V";

//how it will be in output during creation phase
var myName //= undefined;
console.log(myName);
myName = "V";

//-->In ES2015 (a.k.a ES6) hoisting is avoided by using the let keyword 
//instead of var.(the other difference is that variable declared
//with let are local to the surrounding block,not the entire function.)

// 6.What is Scope chain and lexical scoping in javascript?
//The scope chain is used to resolved the values of variable names in JS.

Scope chain in JS is laxically defined,which means that we can
see that the scope chain will be by looking at the code

//At the top, we have the global scope,which is the window object
//in the browser.

// Lexical scoping means Now, the inner function can get access to 
// their parent function variables But the vice-versa is not true.

//For Example -|>
let a = "Hello guys."; //Global scope

inder function bahar vale ka data access kar sakta hai per outer function inner fn ko access nahi kar sakta because of lexicall scoping
const first = () => {
    let b = "How are you?"
    const second = () => {
        let c = "Hii, I am fine thank you😶‍🌫️"
        console.log(a+b+c);
    }
    second();
    // console.log(a+b+c);//I can't use c
}
first();

//_------->Closures in javascript 
A closure is the combination of function bundled together (enclosed) with reference 
to its surrounding state (the lexical environment).

//In other words, a closure gives you
//access to an outer function's scope from an inner function.

//In javascript ,closures are created every time a function is created ,at function creation time.

For example ->

const outerFun = (a) => {
    let b = 10;
    const innerFun = () => {
        let sum = a+b;
        console.log(`the sum of the two no is ${sum}`);
    }
    // innerFun();
    return innerFun;
}
// outerFun(5)
let checkCloosure = outerFun(5);
// checkCloosure();
console.dir(checkCloosure)

It is same like lexical scoping

4.Use strict mode

"use strict"
x = "V"
console.log(x);

work of use strict is to use everything in systematic order

11. Interview Question
Difference between Synchronus and Asynchronus javascript?

//----:->6.Synchronus Javascript Prog

Work 1 = 10min //1st it will complete this work then it moved to next  
work 2 = 5s //then it will execute this
one work at a time

Example
const fun2 = () => {
    console.log(`Function 2 is called`);
}

const fun1 = () => {
    console.log(`Function 1 is called `);
    fun2();
    console.log(`Function 1 is called agian !!`);
}
fun1();



// ---->Asynchronus Javascript Prog.
1 work = 10min// it will start this work 
2 work = 5sec // and this work 
It will complete the work along with every other work or we can say that multi-tasking no one has to weight for another work

Example
const fun2 = () => {
    setTimeout(() => {
        console.log(`Function 2 is called`);
    }, 2000);
}
const fun1 = () => {
    console.log(`Function 1 is called `);
    fun2();
    console.log(`Function 1 is called again!!`);
}
fun1();
12.Difference between Synchronus and a synchronus



7.What is Event loop


---Currying
Currying is technique of evaluting function with multiple  arguments,into 
seqence of function with single argument.

In other words , when a function, instead of taking all arguments at one
time, takes the first one and return a new function that function takes the second 
one and return a new function which takes third one , and so forth, 
until all arguments have fulfilled.

function sum(num1) {
    return function (num2) {
        return function (num3) {
            console.log(num1 + num2 + num3);
        }
    }
}
const sum(num1)=>(num2)=>(num3)=>console.log(num1+num2+num3);
sum(5)(4)(2)
we can also write this whole fn in one line because it is not longer so we can short it out

//8.Call back Hell

setTimeout(() => {
    console.log(`1.works is done`);
    setTimeout(() => {
        console.log(`2.works is done`);
        setTimeout(() => {
            console.log(`3.works is done`);
            setTimeout(() => {
                console.log(`4.works is done`);
                setTimeout(() => {
                    console.log(`5.works is done`);
                    setTimeout(() => {
                        console.log(`6.works is done`);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

// 1.XMLHttpRequest----------------------------------------------------------------------->>>>>
// XMLHttpRequest (XHR) object are used to interact with servers.You can retrieve data from
//a URL without having to do a full page refresh.This enables a Web page to update just part of
//a page without distrupting what the user is doing.XMLhttpRequest is used heavily in AJAX Programming.

//2. Ajax ------------------------------------------------------------------------------->>>>>>
// Ajax, which initially stood for Asynchronus Javascript and XML,is programming practice of
//building complex,dynamic webpages using a technology known as XMLhttpRequest.

// 👉 // 🤩 Bonus JSON 🤩

// **********************************************************************


// 👉 JSON.stringify turns a JavaScript object into JSON text and 
stores that JSON text in a string, eg:

var my_object = { key_1: "some text", key_2: true, key_3: 5 };

var object_as_string = JSON.stringify(my_object);  
// "{"key_1":"some text","key_2":true,"key_3":5}"  

console.log(object_as_string);

typeof(object_as_string);  
"string" 


// 👉 JSON.parse turns a string of JSON text into a JavaScript object, eg:

var object_as_string_as_object = JSON.parse(object_as_string);  
// {key_1: "some text", key_2: true, key_3: 5} 

typeof(object_as_string_as_object);  
// "object" 



// 7️⃣ AJAX Call using XMLHttprequest 

// how to handled with the events and callback 

// XMLHttpRequest (XHR) objects are used to interact with servers. 
// You can retrieve data from a URL without having to do a full 
// page refresh. This enables a Web page to update just part 
// of a page without disrupting what the user is doing. 
// XMLHttpRequest is used heavily in AJAX programming.

const request = new XMLHttpRequest();
// we need to call the api or request the api using GET method ki, me jo
// url pass kar kr rha hu uska data chaiye 
request.open('GET', "https://covid-api.mmediagroup.fr/v1");
request.send(); // we need to send the request and its async so we need to 
// add the event to load the data adn get it

// to get the response 
request.addEventListener("load", () => {
    console.log(this.responseText);
});

