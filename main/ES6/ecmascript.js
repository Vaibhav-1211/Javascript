// ES6
// 1) LET vs CONST vs VAR


// function biodata(){
//     const myfname = "Vaibhav";
//     console.log(myfname);

//     if(true){
//         const myLname = "Kabira"
//     }
//     // console.log("innerouter" + myLname);
//     console.log(myFname);
// }
// biodata();

// var => function scope
// let =>block scope

// 2)Template literals (Template strings)
// JS program to print table of 8

// for(let num= 1;num<=10;num++){
//     let tableOf = 12;
//     console.log(`${tableOf} * ${num} = ${tableOf*num}`);
// }

// 3) Defualt Parameters
// Default function parameters allow named parameters to be
// initialized with defualt values if no values or undefined is passed

// function mult(a,b=3){//this is know as defualt parameter
//     return a*b;
// }

// console.log(mult(5));

// 6.Fat arrow function
// --->Normal way to writing the function

// console.log(sum());
// function sum() {
//     let a = 5, b = 5;
//     let sum = a + b;
//     return (`the sum of two number is ${sum}`)
// }

// How to convert it into fat arrow function

// const sum = () => {
//     // let a = 5, b = 5;
//     // let sum = a + b;
//     // return
//     return `the sum of two number is ${(a = 5) + (b = 5)}`//fat arrow fn says if your code  is only one liner than no need to write the return keyword
// }
// console.log(sum());

// Section - 7;
// Arrays in Javascript

// var myFood = ['Fruits','Vaggies','Nuts','Milk']
// console.log(myFood);

// In simple words array is used to store multiple value in single variable like above.

// first element is known as Lower index/lower boundary and last Element is Upper index/upper boundary
// var myFood = ['Fruits','Vaggies','Nuts','Milk']
// array index is start from 0
// all element are call a index no. like index 0,1,2,3...


// Example:
// var myFood = ['Fruits','Vaggies','Nuts','Milk']

// Array Sub-Section 1:- Traversal in array
// navigate through an array

// if we want to get the single data at a time and also
// if we want to change the data

// var myFood = ['Fruits','Vaggies','Nuts','Milk']
// console.log(myFood[myFood.length - 1]);

// //if we want to change the length of elements of an array

//  console.log(myFood.length);//it will show total length of an element or total number of values present in array

// We use for loop to navigate

// var myFood = ['Fruits','Vaggies','Nuts','Milk']
// for(var i=0;i<myFood.length;i++){
//     console.log(myFood[i]);
// }///Normal For loop

// After ES6 we have for..in and for..of loop too


// var myFood = ['Fruits','Vaggies','Nuts','Milk']

// // for(let elements in myFood){
// //     console.log(elements);
// // }//for in loop simply returns the index no.

// for(let elements of myFood)
// {
//     console.log(elements);
// }//for of loop returns the array elements

// ----->Array.prototype.forEach()
// Calls a function for each elements in the array.//individual element k lie function call karta hai

// Normal function
// var myFood = ['Fruits', 'Vaggies', 'Nuts', 'Milk']

// myFood.forEach(function (element, index, array) {
//     console.log(element + " index: " + index + " " + array);
// })//element shows current value //here we use "this" keyword

// Using Fat arrow function

// myFood.forEach((element, index, array) => {
//     console.log(element + " index: " + index + " " + array);
// })//fat arrow fn does not supports the "this" keyword

// 2)------> Array Subsection 2 => Searching and filter in an array
// Array.prototype.indexOf()

// Return the first (least) index of an element within the array equal
// to an element, or -1 if none is found. It search the element from the
// 0th index number


// var myTVshow = ['WWE','How I met your mother', 'Big Bang Theory', 'Friends','Vikings','Peaky Blinders']
// console.log(myTVshow.indexOf("Friends",));
// //indexOf method always start searching forward
// //if agar kuch nahi milta hai to -1 return karta hai
// //it search from 0th index number if you are not providing the value
// //it is case sensative



// ---->Array.prototype.lastIndexOf()
// Return the last (greatest) index of an element whithin the array equal
// to an element, or -1 if none is found. It search the element last to first

// var myTVshow = ['WWE', 'How I met your mother', 'Big Bang Theory', 'Friends', 'Vikings', 'Peaky Blinders']
// console.log(myTVshow.lastIndexOf("How I met your mother"));
// //it start searching from backword elements

// ---->Array.prototype.includes()
// Determines whether the array containes a value,
// returning true or false as appropriate.

// var myTVshow = ['WWE', 'How I met your mother', 'Big Bang Theory', 'Friends', 'Vikings', 'Peaky Blinders']
// console.log(myTVshow.includes('Vikings'));

// Array.prototype.find()
// arr.find(callbackfn(element[,index[,array]]))(,this argument)

// Return the found element in the array,if some element in the
// array satisfies the testing function, or undefined if not found.
// Only problem is that it return only one element.

// const price = [200, 300, 400, 460, 570, 589, 600]
// price < 400

// const findElem = price.find((currVal) => {
//     return currVal < 400;
// })//it returns onlu one eleement because when fined() method statisfies the first condition while finding if get the in the value it won't serach further.


// console.log(findElem);//if it does not find the element it returns the undefined

// --->Array.prototype.findIndex()
// Returns the found index in the array, if an element in the
// array satisfies the testing function, or -1 if not found.
// const price = [200, 300, 400, 460, 570, 589, 600]

// const findElem = price.find((currVal) => {
//     return currVal < 400;
// })


// console.log(findElem);

// console.log(price.findIndex((currVal) => currVal > 400));//if code is less we can make it into one liner
// //it will return the index number


// --->Array.prototype.filter()

// Returns a new array containing all elements of the calling
// array for which the provided filtering function returns true.
// const price = [200, 300, 400, 460, 570, 589, 600]

// //price < 400
// const newPricetag = price.filter((elem,index)=>{
//     return elem < 500;
// })
// console.log(newPricetag);

// if condtion was not staisfy than it will return the empaty array

// 3. Array Subsaction 3 => How to sort an array
// Array.prototype.sort()

// The sort() method sorts and elements of an array in place and
// returns the sorted array.The default sort order is ascending, built
// upon converting the elements into strings,
// then comparing their sequaence of UTF-16 code unit values.

// const months = ['March','Jan', 'Fab','Nov','Apr','Oct']
// console.log(months.sort());
// It sort the elements in alphabatic order and defualt order for sorting is ascending order.
// it only works with strings becuase it converts into strings than compare them

// const nums = [10000,30000,21,4100,0,121,212]
// console.log(nums.sort());
// However, if numbers are sorted as strings,
// '25' is bigger than '100' , because '2' is bigger than "1".
// Becuase of this , the sort() method will produce an incorrect
// result when sorting numbers.

// ----->4.Array Subsection-> Perform CRUD

// Array.prototype.push()
// The push() method adds one or more elements to the
// end of an array and returns the new length of the array.

// const animals = ['Pigs', 'goats', 'sheep']

// const count = animals.push('Birds')
// console.log(count);
// animals.push('Lion')
// console.log(animals);//push method adds the element in an array in the end position of an 'array' and return the new legnth of an array

// animals.push('Dog','Cow','hens')
// console.log(animals);//adding multiple elements in an array



// ---->Array.prototype.unshift()
// The unshift() method adds one or more elements to the
// beginning of an array and returns the new length of the array.

// const count = animals.unshift('Birds')
// console.log(count);
// console.log(animals);//unshift add the element from starting position in an array
// animals.unshift('Dog','Cow','hens')

// 2nd example
// const myNums = [1, 2, 4, 5]
// myNums.unshift(5, 6)
// console.log(myNums);

// Array.prototype.pop()
// The pop() method removes the last element from an array and returns
// that element. This method changes the length of the array

// const plants = ['Broccoli', 'Cauliflower', 'kale', 'tomato', 'cabbage']
// console.log(plants);
// console.log(plants.pop());//it removes the element from the end and returns it and change the length of an array
// console.log(plants);


// ---Array.prototype.shift()
// the shift() method removes the first element from an array and returns
// the removed element.this method changes the length of the array.



// const plants = ['Broccoli', 'Cauliflower', 'kale', 'tomato', 'cabbage']
// console.log(plants);
// console.log(plants.shift());//it removes the element from the start and returns it and change the length of an array
// console.log(plants);

// 8. Challenge Time

// ---->Array.prototype.splice()
// ---->Add and/or removes elements from the array.

// 1.Add Dec at the end of and array?
// 2.What is the return value of splice method?
// 3.update march to March (update)?
// 4.Delete June from an array?

// const months = ['Jan', 'march', 'April', 'June', 'July'];
// Sol: 1
// .splice(start,deleteCount,string to be add)
// const newMonth = months.splice(5, 1, "Dec")
// console.log(months);//splice method mostly used for delete

// Sol:2

// console.log(newMonth);

// Sol:3
// const newMonth = months.splice(1,1,"March")
// console.log(months);

// Sol:4

// const newMonth = months.splice(3,1)
// console.log(months);

// const indexOfMonth = months.indexOf('June')

// if(indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth,1)
//     console.log(months);
//     console.log(updateMonth);
// }else{
//     console.log('No such data found');
// }

// 5.Array Subsection -> Map and Reduce Method
// Array.prototype.map()

// let newArray = arr.map(callback(currentValue[,index[,array]])){
// return element for newArray, after executing something
// }[,thisArg]

// const array1 = [1, 4, 5, 6, 15, 29];
// num >9
// let newArr = array1.map((curElem, index, arr) => {
//     return curElem > 9;
// })
// console.log(array1);
// console.log(newArr);//it returns new array containing the result
// it simply loop the data from starting to end

// let newArr = array1.map((currElm, index, arr) => {
//     return `Index no=${index} and the value is ${currElm} belongs to ${arr}`
// })
// console.log(newArr);
// It returns new array without mutating the original array.


// Challenge Time

// 1. Find the square root of each element in an array?
// 2.Multiply each element by 2 and return only those
// elements which are grether than 10?

// sol:1
// let arr = [25, 36, 49, 64, 81];
// let arrSqr = arr.map((currElm) => {
//     return Math.sqrt(currElm);
// })
// console.log(arr);
// console.log(`The Square of the number is: ${arrSqr}`);

// Sol:2
// let arr = [2, 3, 4, 6, 8];

// let NewArr = arr.map((currElm) => {
//     return currElm * 2
// }).reduce((accumulator,currElm) => {
//     return accumulator += currElm ;
// })
// console.log(NewArr);//it is know as chaining style

// ----->Reduce Method

// Flatter the array means to convert the 3d or 2d array  into a
// single dimensional array

// The reduce() method executes a reducer function (that you provide)
// on each element of the array, resulting in single output value.
// The reducer function takes 4 arguments.

// Accumulator //hindi me bole to ek sath jama karna sab
// Current Value
// Current Index
// Source Array

// let arr = [5, 6, 2]

// let sum = arr.reduce((accumulator, currElm, index, arr) => {
//     return accumulator += currElm;
// })
// console.log(arr);
// console.log(sum);

// -->How to flaten array
// converting 2d and 3d array into one dimensional array

// const arr = [
//     ['zone_1', 'zone_2'],
//     ['zone_3', 'zone_4'],
//     ['zone_4', 'zone_6'],
//     ['zone_7', 'zone_8'],
// ]

// let flatArr = arr.reduce((accum,currElm)=>{
//     return accum.concat(currElm)
// })
// console.log(flatArr);

// ---Section 7:Strings in Javascript****/

// A javascript string is zero or more charcters written inside qoutes.

// Javascript strings are used for storing and manipulating text.
// You can use single or double quotes.
// Strings can be crated as primitives,
// from strings literals ,or as objects,using the strings() constructor

// let myName= "Vaibhav Kabira"
// let MyChannel = "Morningstar"

// // let ytName = new String("MorningStar-Pro")//only for interview purpose
// console.log(ytName);

// Methods in string
// ---How to find the length of a string
// String.prototype.length()
// Reflects the length of the string.

// let myName = "Vaibhav Kabira"
// console.log(myName.length);

// Escape Character


// let anySentence = 'we are the so-called "Vikings" from the north.'
// console.log(anySentence);

// We can use double quotes in single quotes to make disspere the back slash
// if you don't want to mess,simply use the alternative quotes

// ---->Finding a string in a string
// String.prototype.indexOf(searchValue[,fromIndex])

// The indexOf() method returns the index of (the position of) the first
// occurance of a specified text in a string
// if data nahi milta hai than it return the -1
// forward search start to end

// const myBioData = "I am heaf of the table"
// console.log(myBioData.indexOf("am"));

// String.prototype.lastIndexOf(searchValue[,fromIndex])
// Returns the index within the calling string object of the
// last occurrance of searchValue, or -1 if not found.
// bacward search end to start

// const myBioData = "I am heaf of the table"
// console.log(myBioData.lastIndexOf('roman'));

// Searching for a String in a string
// String.prototype.search(regexp)
// The search() method search a string for a specified
// value and returns the position of the match

// const myBioData = 'I am Vaibhav Kabira';
// let sData = myBioData.search("Vaibhav")
// console.log(sData);
// The search() method cannot take a second start position argument

// ----->Extracting Strings Parts
// There are 3 methods for extracting a part of a string:

// slice(start,end)
// substring(start,end)
// substr(start,length)

// The slice() method------->
// slice() extract a part of a string and returns the extracted part
// in a new string.

// the method takes 2 parameters: the start position,
// and the end position (end not included).

// var str = "Apple,Banana,Kiwi,mango";
// let res = str.slice(7,-1)
// console.log(res);

// The slice() method selects the elements starting at the
// given start argument, and ends at, but does not include,
// the given and argument


// 11: Challenge Time---->
// Display only 280 characters of a string like the
// one used in Twitter?

// let myTweets = "In the introduction, the first sentence can be a broad or general statement that sets the tone for the piece. It is usually supported by a second sentence that leads into the thesis. The optional third sentence may pose a question that the thesis aims to answer, or it may prompt the reader to think about the topic in a different light. The final sentence of the intro paragraph clearly establishes the thes"
// let myActualTweets = myTweets.slice(0, 280);
// console.log(myActualTweets);
// console.log(myActualTweets.length);

// The substring() Method
// substring() is similar to slice().
// The difference is that substring() cannot accept
// negative indexes.

// var str = "Apple,Banana,Kiwi";
// let res = str.substring(0,5)
// console.log(str);
// console.log(res);
// if we give negative value then the characters are
// counted from the 0th position
// as per rules we cannot add negative values like (8,-1)

// The substr() Method
// substr() is similar to slice()

// The difference is that the second parameter specifies the
// length of the extracted part.

// var str = "Apple,Banana,Kiwi";
// let res = str.substr(-4)//it will show 4 charcter from end kiwi
// console.log(str);
// console.log(res);

// if we add negative value than it will not give any output
// used for extracting the data from starting and end


// ----->Replacing String content()
// string.prototype.replace(searchFor, replaceWith)

// The replace() method replace a specified value
// with another value in a string.

// let myBioData = "I am Vaibhav Kabira MorningStar Vaibhav Vaibhav";
// let replaceData = myBioData.replaceAll('Vaibhav','vaibhav')//it will only replace the value when it get the value in first occurence
// console.log(myBioData);
// console.log(replaceData);

// --------->Points to remember
// 1: The replace() method does not change the string
// it is called on. It returns a new string.
// 2.By defualt, the replace() method replace only
// the first match
// 3.By defualt, the replace() method is case sensative.
// writing capital will not work
// string.prototype.replaceAll is working

// ---->Extracting String Characters

// There are 3 methods for extracting strings characters:
// charAt(position)
// charCodeAt(position)
// Property access [ ]


// ------>1st Method
// CharAt() Method
// The CharAt() method returns the character at a
// specified index (position) in a string.

// let str = "hello world";
// console.log(str.charAt(0));//spcifies the position of character in string///

// ------->2nd Method
// charcodeAt() method returns the unicode of the
// character at a specifeid index in a string:
// The method returns a UTF-16 code
// (an integer between 0 to 65535).

// let str = "Hello world";
// console.log(str.charCodeAt(0));

// The unicode standard provides a unique number for every 
// character,no matter the platform , device,application,or 
// language,UTF-8 is a popular unicode encoding which has 88-bit code units

// ------>3rd Method
// Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings

// 12. Challenge time--->
// Return the unicode of the last character in a string
// let str = "HELLO WORLD"
// console.log(str.charCodeAt(10));
// console.log(str.length);//because it conts the space

// var str = "HEllO WORLD";
// console.log(str[0]);

// ------>Other usefull methods

// let myName = "Vaibhav Kabira";
// console.log(myName.toUpperCase());//makes every character in capital letters
// console.log(myName.toLowerCase());//makes every character in small letters

// ---------->The concat() method
// concat() joins two or more strings

// let fname = "Vaibhav";
// let lname = "Kabira";

// console.log(fname.concat(lname));
// console.log(fname.concat(" ", lname));
// //concat() add two sting by using this method

// ---String.trim()
// The trim() method removes whitespace from both sides of a string

// var str = "                    Hello World!";
// console.log(str.trim());    //it removes the whitespace from sides

// ------>Converting a string to an Array
// A string can be converted to an array with the 
// split() method

// var txt = "a,b,c |,d,e"; //String 
// console.log(txt.split(","));//Split on commas
// console.log(txt.split(" "));//Split on spaces
// console.log(txt.split("|"));//Split on pipe

// -------->Section 8 Date and Time in Javascript***///

// Javascript Date object represent a single moment in time in a 
// plateform-independent formate. date objects contain a number 
// that represents milliseconds since 1 January 1970 UTC

// --->Creating Data Object
// ---->There are 4ways to create a new date object:





// new Date()-->
// Date objects are created with the new Date() constructor.

// let currDate = new Date();//new Date() constructor
// console.log(currDate);//we can get both date and time using this method

// console.log(new Date().toLocaleString());//2/3/2024, 11:33:09 AM
// console.log(new Date().toString());//Sat Feb 03 2024 11:34:11 GMT+0530 (India Standard Time)

// Date.now()---->
// Returns the numeric value corresponding to the current time-the number
// of milliseconds elapsed since January 1,1970 00:00:00 UTC


// console.log(Date.now());//it returns the miliseconds since 1970

// --->new Date(year,month,...)
// 7 numbers specify year, month,day,hour,minute,second,
// and millisecond (in that order)
// Note: Javascript counts months from 0 to 11.

// January is 0. December is 11.

// var d = new Date(2018, 11, 24, 10, 33, 30, 0)
// console.log(d.toLocaleString());

// new Date(dateString) creates a new date object from a date string

// var d=new Date("October 13, 2024 11:13:00")
// console.log(d.toLocaleString());//we can get whateever date and time we want by using tolocalstring

// new Date(milliseconds)
// new Date(milliseconds) creates a new date object as zero time plus milliseconds

// var d = new Date(0);
// //var d = new Date(1609574531435)
// //var d = new Date(86400000*2);
// console.log(d.toLocaleString());//using milliseconds is the another way to get date andd time

// --->Date methods (get and set)

// const curDate = new Date();

// --------->How to get the individual date
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth()); //0 to 11 jan to dec
// console.log(curDate.getDate());
// console.log(curDate.getDay());


// -------->How to set the individual date

// console.log(curDate.setFullYear(2024));
// //The setFullYear() method can optionally set month and day
// console.log(curDate.setFullYear(2024,10,5));
// let setmonth = curDate.setmonth(10); //0-11 jan to dec
// console.log(setmonth);
// console.log(curDate.setDate(5));
// console.log(curDate.toLocaleString());

// -------->Time Methods (get and set)
// get()
// const curTime = new Date();

// how to get the individual Time

// console.log(curTime.getTime());
// //The getTime() method returns the number of milliseconds since
// //January 1,1970
// console.log(curTime.getHours());
// //The getHours() method returns the hours of a date as a number
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());

// set()

// let curTime = new Date();
// console.log(curTime.setTime());

// console.log(curTime.setHours(5));
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));


// ------>Practice Time
// new Date().toLocaleTimeString();
// console.log(curTime.toLocaleTimeString());//6:01:26 PM
// console.log(curTime.toLocaleDateString());//2/3/2024
// console.log(curTime.toLocaleString());// 2 / 3 / 2024, 6:02: 26 PM

// ----->Section-9 Math object in javascript-----////

// The Javascript Math object allows you to perform mathematical tasks on numbers.

// console.log(Math.PI);

// Math.round()
// //returns the value of x rounded to its nearest integer 

// let num = 10.99999;
// console.log(Math.round(num));//basically it round off the value to from decimal to normal value



// let num = 10.2565;
// console.log(Math.round(num));

// Math.pow()
// Math.pow(x,y) //returns the value of x to the power of y
// console.log(math.pow(2,3));

// Math.sqrt()
// Math.sqrt(x) returns the square root of x

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(66));//we can find sqaure root by using sqrt()

// Math.abs()
// Math.abs(x) returns the absolute (positive) value of x

// console.log(Math.abs(-55));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955));// it returns the positive value //negetive to positive

// Math.ceil()
// Math.ceil(x) returns the value of x rounded up to its nearest integers

// console.log(Math.ceil(4.4));
// console.log(Math.ceil(99.1));//it will defenetily increse the value even if value is above or less than .5//ek number jyda dega if point me value hogi to

// Math.floor()
// Math.floor(x) returns the value of x rounded down to its nearest integer

// console.log(Math.floor(4.7));
// console.log(Math.floor(99.99));//jo hai vo hi value return karega point se phele ki

// Math.min()
// Math.min() can be used to find the lowest value in a list of argument     

// console.log(Math.min(0,150,30,20,-8,-200));

// Math.max()
// Math.max() can be used to find the highest value in a list of argument

// console.log(Math.max(0,150,30,20,-8,-200));

// Math.random()
// Math.random() returns a random number between 0 (inclusive) to 9

// console.log(Math.floor(Math.random()*10));//by adding floor method in random it will returns the normal value between 0 to 9

// Math.trunc()
// The trunc() method returns the integer part of a number

// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));//it returns any number given before the point or in decimal number
// it won't give output in decimal

// Practice Time

// if the argument is a positive number, Math.trunc() is equivalent to 
// Math.floor(),
// otherwise Math.trunc() is equivalent to Math.ceil().


// ----->Section 10. DOM in javascript
// Windows vs document
// DOM vs BOM
// DOM navigation
// Searching and getting Element Reference


// // --->//Windows vs document

// 1.Window is the main container or we can say that 
// globle object and any operation related to entire
// browser window can be a part of window object.

// For ex ---> the history or to find the url etc.

// 1.Where as in DOM is the chile of window object.

// 2. All the members like objects, method or properties.
// If they are the part of window object then we do not refer 
// the window object. Since window is a globle object 
// So, you do not have to write down window

// 3.Where as the DOM is the child of window object.
// 4.Where in the DOM we need to refer the document,if 
// we want to use the document object methods or properties.

// 5. Window has methods, properties and object. ex
// setTimeout() or setInterval are the methods, where as 
// Document is the Object of the window and it also has 
// screen Object of window and also has a screen object with properties 
// describing the physical display.

// 6. Document is just the object of the global object that is window, which deals with the document, the HTML element themselves.
// html k lie kaam ho to document use karo uske alava window related ho to window kar lo

// Window is parent of each and every things ->document DOM & BOM & Javascript
// BOM or Window both are same -> Navigator,screen,location,frame,history,XML HttpRequest
// Javascript -> Object,Array,Function

// Section 3: Navigate throught DOM

// DOM -> HTML is root element of your document 
// in dom ".(dot)" means class and "#means=ID" 
// code run on console
// 1.document.documentElement
// returns the Element that is the root elements of the document.
// document.doctype-> //returns the !DOCTYPE html
// 2.document.head -> returns the head part of html document <head></head> type.
// 3.document.body->//<body> </body> returns the body section part display everything under body tag
// 4.document.body.childnNodes->  (includes tab,enter and whitespace //list of the direct children only
// 5.document.children (without text node,only regular Elements)
// 6.document.childNodes.length ->  returns the lenght of the children 

// --->Practice Time
// How to check whether an element has child nodes or not?
// We will use hasChildNodes() document.body.hasChildNodes() -> true returns true

// --->Practice Time
// --->How to find the child in DOM tree -> 
// document.body.fistChild
// document.body.firstElementChild
// document.body.firstElementChild.firstElementChild
// const firstChld = document.body.firstElementChild.firstElementChild - undefined
// firstChild
// firstChild.style.color = "grey"

// Another way
// const childTwo = document.querySelector('.child-two');
// childTwo
// childTwo.style.color = "yellow"
// --> document.body.nextSibling
// -->document.body.prevoiusSibling
// document.body.prevoiusElementSibling
// document.head.nextElementSibling

// firstChild vs fistElementChild
// lastChild vs lastElementChild

// --->How to find the parent nodes
// document.body.parentNode
// document.body.parentElement

// -->How to find or access the siblings
// document.body.nextSibling
// document.body.nextElementSibling
// document.body.previousSibling
// document.body.previousElementSibling


// Section 4: How to search the Element and the Refrences 
// We will see the new file
// Interview question
// -> Difference between getElementByID and query selector


// ***************************************************

// Section 11----> Events in Javascript

// HTML events are "things" that happen to HTML element.
// When Javascript is used in HTML pages, Javascript can "react" on these events.

// --->HTML Events 
// An HTML event can be somthing the browser does, or something a user does.

// Here are some example of HTML events:

// An HTML web page has finished loading 
// An HTML input field was changed 
// An HTML button was clicked 
// often, when events happen, you may want to do something.
// javascript lets you execute code when events are detected.
// HTML allows events handler attributes, which Javascript code, 
// to be added to HTML element.

// -------> Section:1 4 ways of writing Evenets in Javascript

// 1: Using inline events alert().
// 2:By calling a function (we already seen and most common way of writing)
// 3:Using Inline events (HTML onclick="" property and element.onClick)
// 4:Using Event Listeners (addEventListener and IE's attachEvent)

// Check the events HTML File

// Section 2: What is Event Object?
// Event object is the parent object of the event object.
// for example
// MouseEvent,focusEvent, KeyboardEvent etc

// Section 3: MouseEvent in Javascript
// The MouseEvent Object 
// Event that occur when the mouse intersect with the HTML 
// document belongs to the MouseEvent Object.

// Section 4: Keyboard in Javascript
// Event that occurs when user presses a key on the keyboard,
// belongs to the KeyboardEvent object.

// Section 5: InputEvents in Javascript
// The onchange event occurs when the value of an element has been changed.

// For radiobutton and checkboxes, the onchange event occurs when the 
// chacked state has been changed.

// ************************************************************************************** */

// 7.Interview Question
// Difference between onClick and addEventListner
// --> Conclusion
// This is becuase addEventListner does not overwrite existing event handlers ,
// where as onclick overrides any existing onclick = fn event handlers.

// The other significat difference of course is that onclick will always work, 
// whereas addEventListener does not work in old browser
// ......................................................................................................//

// Section :11--->Timing Based event in JS


// ---->Javascript Timing events 

// The window object allows execution of code at specified time interval.
// These time intervals are called timing events.
// the two key methods to use with Javascript are:


// setTimeout(function,milliseconds)
// Executes a function,after waiting a specified number of milliseconds

// setinterval(function,milliseconds)
// Same as setTimeout(), but reports the execution of the function continuously.

// 1.setTimeout()
// 2.clearTimeout()
// 3.setInterval()
// 4.clearInterval()
// ----Refer the html page timeventpage

// 8.Interview question

// Difference between setTimeout and setInterval()?

// Section 12)--->OOPS in Javascript

// 1.)What is object literals?
// 2.)What is 'this' object?


// 1.}What is object literals?
// Object literals is simply a key:value pair of data structure.

// Storing variables and functional together in one container.

// Object = school bag(containing all things like books, lunch box etc)

// 1st way

// let bioData = {
//     myName:'Vaibhav Kabira',//here, myName is key:value 
//     myAge:'24',
//     getdata: function () {
//         console.log(`My name is ${bioData.myName} and my age is: ${bioData.myAge}`);
//     }//this know as method in oops when you use function in object

// }//using object 

// console.log(bioData.getdata());

// 2nd way no need to write function as well after es6
// let bioData = {
//     myName:'Vaibhav Kabira',//here, myName is key
//     myAge:'24',
//     getdata () {//no need to write function keyword
//         console.log(`My name is ${bioData.myName} and my age is: ${bioData.myAge}`);
//     }//this know as method in oops when you use function in object

// }

// console.log(bioData.getdata());

// What if we want object as a value inside an object

// let bioData = {
//     myName:{
//         myRealName:'Vaibhav',
//         surName:'Kabira',
//     },
//     myAge:'24',
//     getdata() {
//         console.log(`My name is ${bioData.myName} and my age is: ${bioData.myAge}`);
//     }//this know as method in oops when you use function in object

// }

// console.log(bioData.myName.surName);


// 2.What is this object?
// The defination of "this" object is that it contain the current context.
// The this object can have different values depending on where it is placed.

// // For example 1
// console.log(this.alert('Viper'));
// / it refers to the current context -> and that is window global object

// // Ex; 2
// function myName (){
//     console.log(this);
// }
// myName();

// Ex: 3

// var myNames = "MorningStar";
// function myName() {
//     console.log(this.myNames);
// }
// myName();

// //ex: 4
// const obj = {
//     myAge:24,
//     myName(){
//         console.log(this.myAge);
//     }
// }//when we use this in object uska current context change ho jata from window to that current object
// obj.myName();

// 9.--->Interview question----
// What will be the output of

// const obj = {
//     myAge:26,
//     myName:()=>{
//         console.log(this);
//     }
// }
// obj.myName();

// -->Ex:6

// ---->4.Destructring in ES6
// The destructring assignment syntex is a javascript expression 
// that makes it possible to unpack values from arrays, 
// or properties from objects,into distinct variable.

// -->Array Destructuring -->like usko tukdo me baat do

// const myBioData = ['vinod', 'thapa', 26,'bscit-mscit'];

// let myFname = myBioData[0];
// let myLname = myBioData[1];
// let myAge = myBioData[2];
// let [myFname, myLname, myAge] = myBioData //position matters in array destructuring


// we can add values too
// let [myFname, myLname, myAge,myDegree] = myBioData
// console.log(myDegree);

// ----->Object destructuring--->

// const myBioData ={
//     myFname:'V',
//     myLname:'K',
//     age:26
// }
// // let age = myBioData.age;
// let {myFname,myLname,age} = myBioData;//for object we have to use curly braces
// console.log(age);

// 5.---->Object Properties---
// -->We can now use Dynamic properties 
// let myName = 'Vaibhav';
// const myBio = {
//     [myName]: 'How you doin',
//     [20 + 4]: 'is my age'
// }
// console.log(myBio);
// -> no need to write key and value,if both are same

// --->No need to write key and value,if both are same

// let myName = 'Vaibhav Kabira';
// let myAge = 24;

// const myBio = {
//     myName ,
//     myAge
// }
// console.log(myBio);

// --->7.Spread Operator

// const color = ['red','green','blue','white','pink'];

// const myColors = ['red','green','blue','white','pink','yellow','black'];
// // // 2nd time add one more color on top and tell we need to write it again 
// // //on myColor array too

// const myFavColors = [...color,'yelloww','blackie'];
// console.log(myFavColors);

// ***************************************************************************** */

// ----->8.Rest Operator-----
// function addNumbers(a, b, c, ...other) {
//     console.log(other);
//     return a + b + c;
// }
// const res = addNumbers(2, 3, 4, 5, 67, 78, 9)
// console.log(res);

// ES7 features(2016)
// 1: array includes()
// 2: exponensiation op() **/
// console.log(3**3);

// ES8 features (2017)************

// 1.String padding //it add space at start and end
// 2.Object.values()
// 3.Object.entries()

// 1.String Padding

// const message = "MorningStar ";
// console.log(message);
// // console.log(message.padStart(5));
// console.log(message.padEnd(10));

// 2.Object.values()
// const person = {name:'MorningStar',age:24}

// console.log(Object.values(person));
// console.log(Object.entries(person));//convertes the objects value in array

// ES2019***************
// Array.prototype.flat() and flatMap()
// const arr = [
//     ['zone_1', 'zone_2'],
//     ['zone_3', 'zone_4'],
//     ['zone_4', 'zone_6'],
//     ['zone_7', ['zone_7', ['zone_8','zone 11']]],
// ]

// // let flatArr = arr.reduce((accum,currElm)=>{
// //     return accum.concat(currElm)
// // })
// console.log(arr.flat(Infinity));//to flatten all level array at once use this .flat(infinity) or by level by level flat(2) or 3 or 4


// =--->object.fromEnterie()
// const person = {name:'MorningStar',age:24}

// // console.log(Object.values(person));
// let arrObj = (Object.entries(person));
// console.log(Object.fromEntries(arrObj));//convert again it in object

// -->String.prototype.{trimStart,trimEnd} //it simply delete the space from start and end


// ---->ES2020*********
// 1)bigint
// let oldNum = Number.MAX_SAFE_INTEGER;//is number se agar isske uper koi operation perform karna chahte ho to have to add n at the end.and to ger correct output
// // console.log(oldNum);
// const newNum = 9007199254740991n + 12n;

// console.log(newNum);
// console.log(typeof (newNum));

// 2)Dynamic Import
// 3)Nullish Coalescing

// --->ES214**************
// "use strict";

// let x = 3.14;
// console.log(x);

