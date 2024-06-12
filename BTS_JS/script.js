'use strict';

//Scoping in Practice
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);//firstName is not part of this function however it is a global variable which we have defined through scop chain we can access it in this function.

  function printAge() {
    const output = `${firstName},you are ${age},born in ${birthYear}`
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1995) {
      var millennial = true;
      const firstName  = 'John'//js try to look in its current scope
      const str = (`Oh! You are a millennial, ${firstName}`);
      console.log(str);

      //Function are also blocked scope starting in ES6;
      function add(a, b) {
        return a + b;
      }

      console.log(add(2, 3))

    }//created block scop
    // str();//cannot access outside of the function
    console.log(millennial);
  }
  printAge();
  return age;
}

const firstName = 'Roman';
calcAge(1991);
