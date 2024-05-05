// Section 3: Exressions and Oprators

// here 5 and 10 is Operand and 
// + is oprator combination of both is called expession
// console.log(5+10);

// 1. Assianment Oprators
// An assignment oprator assigns a value to its left operand
// based on the value of its right operand.
// The simple assignment operator is equal (=).

// var x = 5;
// var y = 5;

// console.log("is both the x and y are equal or not" + x == y); giving false 

// 2. Arithimatic oprator 
// An arithamatic operators takes numerical values 
// (either literals or variables) as their operands and 
// returns a signal numberical value.


// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*6);

// console.log("Reminder operator" + 81%8);

// 3. Increment and Decrement Oprator
// Operator: x++ or ++x or x-- or --x
// If used postfix,with operator after operand (for example,x++),
// the increment operator incremnets and returns the value before incrementing.

// If used prefix, with operator before operand (for examle,++x),
// the increment operator increments and returns the value after incrementing.

// var num = 12;
// var newNm= num++;
// console.log(num);
// console.log(num++);

// remained to undrstand better letter on

// 4.Comparison oprator
// A comparison operator compares its operands and 
// return a logical value based on whether the comparison is true or false.

// var a = 30;
// var b = 20;

// Equal Op (==)
// console.log(a == b);

// Not Equal op (!=)
// console.log(a != b);

// Greater than op (>)
// console.log(a>b);

// //Greater than or Equal (>=)
// console.log(a>=b);

// Less than (<)
// console.log(a<b);

// Less than or equal (<=)
// console.log(a<=b);

// 5. Logical operator

// Logical operator are typically used with boolean (logical) values;
// when they are,they return a boolean value

// var a = 30;
// var b = -20;

// 1.Logical AND (&&)
// The logical AND (&&) operator (logical conjuction) for a set of 
// operands is true if and if all of its expression are true.
// console.log(a > b && b < 0);//if both/all the expression are true than and than only && op will work otherwise if one of the expression is false than it will show false only.

// Logical OR (||)
// The logical OR (||) operator (logical disjunction) for a set of 
// operands is true if and only if one or more of its operands is true.

// console.log(a > b || b > 0) //if in the expression only one condition is satisfied or true it will show complete output true. one condition must be true.

// Logical NOT (!)
// The Logical not (!) operator (logical complement, negation)
// takes truth to falsity and vice versa

// console.log(!(a > 0 || b < 0));
// console.log(!(false)); //it will make true to false and false to true vice versa

// 6. String concatination operator
// the concatination operators (+) concatinates two string values togather,
// returning another string that is the union of the two operand strings.

// console.log("Hello morningstar");
// console.log('hello' + 'world');
// var myName = "Vaibhav"
// console.log(myName + " Kabira");

// 4. Challenge time
// What will be the output of 3**3?
// What will be the output,when we add a number and a String?
// Write a program to swap two numbers?
// Write a program to swap two numbers without using third variable?

// Solution 1:
// console.log(3**3); //(**) Exponentiation operator

// Solution 2:
// console.log(5 + "vaibhav");

// Solution 3:
// var a = 10
// var b = 20

// var c = b //c = 10
// b = a;
// a = c;
// console.log("value of a is :" + a);
// console.log("value of b is :" + b);

// Solution 4

// var a = 5
// var b = 10

// a = a + b; //a= 15
// b= a-b;//b=5
// a= a - b;//a 10

// console.log("value of a is :" + a);
// console.log("value of b is :" + b);

// -----Interview Question-------------//
// Differnce between == and ===?

// sol 1 (==)
// var n1 = 5;
// var n2 = '5'

// console.log(typeof(n1));
// console.log(typeof(n2));

// console.log(n1 == n2);

//  Here double equals checks only value where as in triple equals check value and data type of value

// var n1 = 5;
// var n2 = '5'

// console.log(typeof(n1));
// console.log(typeof(n2));

// console.log(n1 === n2);

