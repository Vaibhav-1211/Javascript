// Section 5: Function in JS
//A javascript function is a block of code design to perform a particular task.
//1. Function defination
//Before we use a function, we need to define it.
//function functionName (){
//     statement
// }

// function sum(){
//     var a =10,b=20
//     var total = a+b
//     console.log(total);
// }//defined function only

// 2.Calling a funciton
//Defining a function does not execute it.
//Javascript function is executed when "somthing" invokes it(calls it)


// function sum(){
//     var a =10,b=20
//     var total = a+b
//     console.log(total);
// }//Actual function looks like this
// sum(); //function calling

//3.Function Parameter vs function arguments
//function parameters are the names listed in the function's defination.
//function arguments are the real values passed to the function.



// function sum(a, b) {// data in paranthisis known as function parameter.

//     var total = a + b
//     console.log(total);
// }
// sum(20, 30)//pasing the value in function calling parnthisis it is called function arguments
//Note: Value passed in function name is know as function parameter where as value passed in fn call is fn argument

// 4. Interview question
// Why Function?

//You can reuse code: Define the code once, and use it many times.
//You can use the same code many times with different arguments ,
//to produce different results.
//oR
//A function is a group of reusable code which can be called anywhere
//in your program.This eliminates the need of writing the same code 
//again and again.

//4.Function Expressions
//Function expression means 
//create function and put it into the variable"

// function sum(a,b){
//     var total = a+b;
//     console.log(total);
// }

// var funcitonExp = sum(5,10);
// funcitonExp;//to make function expression we need to put the function call into var than it will known as fn expression.

// 5.Return Keyword
// When javascript reaches a returns statement,
// the function will stop executing.

// the function often compute a return value.
// the return value is "returned" back to the "caller"

// function sum(a, b) {
//     return total = a + b;
// }//fn define
// var funExp = sum(5, 15);//fn exp
// console.log("the sum of two No. is: " + funExp);//fn call

// 6. Anonymous Function
//A function expression is similar to and   has the same syntax
//as a function declaration one can define "named"
//function expression (where the name of the expression might be used in call stack for example)
// or "anonymous" function expressions.

        // var funExp = function(a,b){
        //     return total = a+b;
        // }//anonymous fn expression
        // console.log(funExp(5,10));
        // console.log("the sum of two No. is: " + funExp);
        // function without name is called Anonymous function