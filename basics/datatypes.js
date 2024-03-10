// Section 2: DataTypes in javascript

// var myName = "Vaibhav"
// console.log(myName); datatype=string
// var myName = 47
// console.log(myName); datatype=number

// var iAmVaibhav = true;
// console.log(typeof(iAmVaibhav)); datatype=boolean


// data types practice

// console.log(10+"20");
// output= 1020 exp:number will not be added it will concatinates them number + string

// console.log(9-"5")
// output:4 Note: it is a js bug 

// console.log("Java" + "Script");
// output:Javascript Note: concatination

// console.log("" + 0);
// output: 0 note: it will show 0 with empty space

// console.log("Java" - "Script");
// output:NaN beacuse js telling that it is not a number

// console.log(true + true);
// output will be 2 because in js 1 will be represnted as 1=True and 0=false.


//typeof operator
// console.log(typeof(iAmVaibhav));


// Interview Question : 1
// Differnce between Null vs undefined

// var Xuseless = Mull;
// console.log(Xuseless);
// console.log(typeof(Xuseless)); //output: Obeject but in js there no datatype named object so its a another bug in js

// var XstandBy;
// console.log(XstandBy);
// console.log(typeof(XstandBy));

// Interview Question : 2
// What is Nan
// It is a property of the globle object.
// In other words, it is   a variable in globle scope.
// the initial value of Nan is Not-A-Number

// console.log("Java" - "Script");
// Explanation: when we are trying to subtract two strings it will show NaN

// var myNumber = 1234567891
// var myName = "MorningStar"

// console.log(isNaN(myName));
// console.log(isNaN(myNumber));

// Challenge time

// NaN === NaN;
// Number.NaN === NaN
// isNaN(NaN);
// isNaN(Number.NaN);
// Number.isNan(NaN);

// console.log(isNaN(NaN));