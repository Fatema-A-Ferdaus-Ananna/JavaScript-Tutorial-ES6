// ES6 feature -ES6 stands for ECMAScript 6.ECMAScript was created to standardize JavaScript
// and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known 
// as ECMAScript 2015.

//     1. ES6 syntax
//         ES6 variable --> let, const (scope, redeclaration, value assigning)
//         template literal -->Template literals are enclosed by backtick (`) 
//                             characters instead of double or single quotes.
//         default & strict mode
//         spread operator
//         for...of
//     2. Arrow function
//     3. Destructuring
//         array and object Destructuring


//hoisting --> Hoisting is JavaScript's default behavior of moving declarations to the top.
                // In JavaScript, a variable can be declared after it has been used.



"use strict"

try{
    x = 30;
    console.log(x);
    document.write(x + "<br><br>"); //hoisting --> we can use a variable before declaration
    var x;  //for var their will be hoisting

    y = 90;
    console.log(y);
    document.write(y + "<br><br>"); //reference error 
    //let y; 

    z = 70;
    console.log(z);
    document.write(z + "<br><br>"); 
    //const z; // syntax error
}
catch(err){
    document.write(`Error :  ${err} `); 
}


//strict --
//"use strict" // -->"use strict"; Defines that JavaScript code should be executed
                // in "strict mode". With strict mode, you can not use undeclared variables.
                //"use strict" is just a string, so IE 9 [Internet Explorer 9]
                //will not throw an error even if it does not understand it.