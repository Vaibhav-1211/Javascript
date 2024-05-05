// 1. If..Else
// The if statement executes a statement a statement if a speciefied condidition is truthy. 
// If the condition is falsy, another statement can be executed.

// var tomr = "sun";

// if (tomr == "rain") {
//     console.log('take a raincoat');
// } else {
//     console.log('No need to a raincoat');
// }

// Challenge time
// 1.write a program that works out whether if a given year is leap year or not? A normal year has 365 days, leap years have 366, with an extra day in february.
// Nested if else challenge time

// var year = 2024;

// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             console.log("the year " + year + "is  leap year");
//         } else {
//             console.log("the year" + year + "is not leap year");
//         }
//     } else {
//         console.log("the year " + year + "is  leap year");
//     }
// } else {
//     console.log("The year " + year + "is not a leap year");
// }

// 2.What is truthy and falsy values in Javascript?

// We have total 5 falsy values in javascript.
// 1) 0
// 2) ""
// 3)undefined
// 4)null 
// 5)NaN
// 6)false** is false anyway //if we deal with any given false value in the end we'll get output of else condition everytime!!

// if(undefined){
//     console.log("we loose!");
// }else{
//     console.log("we won");
// }



// 2.conditional (ternary) ope
// Conditional (ternary) operator is the only Javascript operator 
// that takes three operands
// It is the shorter version of If..else
// variablename = (condition) ? value1:value2

// var age = 17;
// if(age >= 18){
//     console.log("Eligible for vote");
// }else{
//     console.log("Not Eligible for vote");
// }

// var age = 17; console.log((age >= 18) ? "Eligible for vote" : "Not Eligible for vote");

// 3. Switch statement 
// Evulates an expression, matching the expression's value to a 
// case clause, and executes statement associated with that case.

// 1st without break statement 
// find the Area of circle and rectangle?

// else if
// var area = "circle"
// PI = 3.142, l = 5, b = 4, r = 3;

// if (area == "circle") {
//     console.log("Area of circle is: " + PI*r**2);
// } else if (area == "triangle") {
//     console.log("Area of triangle is: " + (l*b)/2);
// } else if (area == "rectangle") {
//     console.log("Area of rectangle is: " + (l*b));
// } else {
//     console.log("Enter valid data");
// }



// do-while loop
// for loop
// for in loop
// for of loop


// switch (area) {
//     case 'circle': console.log("Area of circle is: " + PI * r ** 2);
//         break;
//     case 'triangle': console.log("Area of triangle is: " + (l * b) / 2);
//         break;
//     case 'rectangle': console.log("Area of rectangle is: " + (l * b));
//         break;
//     default: console.log("Enter valid data");
// }

// 4.While loop statement
// the while statement creates a loop that executes a specified statement 
// as long as the test condition evaluates to true.

// Inifinity loop
// var num = 0;

// while(num <= 10){
//     console.log(num);//infinity loop
// }

// this {known as block scope} jab tak condition false  nahi ho jati ye chalta hi rahega
// jab tak condition check nahi ho jati ye data nahi dikhata 

// while(num <= 10){ //this {known as block scope}
//     console.log(num);
//     num++;
// }

// 5.Do-while loop
// here in do-while loop it will show output first and than check the condition 

// var num = 0
// do{
//     console.log(num);
//     num++;
// }while(num<=10);
// atleast you'll get one data even if the condition was not satisfied


// 6. For Loop
// Syntex
// for(initializer;condition;iteration){
//     //code to be executed
// }

// for (var num = 0; num <= 10; num++) { 
//     console.log(num);
// }//here, var num = 0 is initializer, num <= 10 is condition, num++ is iteration

// 6. Challenge Time
// Javascript program to print table for given number (8)

// var mul = 8;
// output: 8 * 1= 8;

// consol.log()
// debugger
// for(var num = 8;num*1;num++){
//     for(var mul;num<=mul;mul++){
//         console.log("Table of 8 is:" +num + mul);
//     }
// }


// for (var num = 1; num <= 10; num++) {
//     tabelOf = 9;
//     console.log(tabelOf + "*" + num + "=" + tabelOf * num);
// }
