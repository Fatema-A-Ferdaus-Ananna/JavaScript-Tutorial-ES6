// foreach, map, filter

// var number = [10,20,30,40];
// var squareNumber = [];

// number.forEach(function(value){
//     document.write(value + "<br>");
//     squareNumber.push(value*value);
// })
// document.write(`Array of Number : ${number} <br>`);
// document.write("Array of Square Number : " + squareNumber + "<br>");


var number = [10,20,30,40];

document.write(`Array of Number : ${number} <br>`);
var squareNumber = number.map(function(value){    //map return array unlike foreach
    document.write(value + "<br>");
    return value*value;
}); 

document.write("Array of Square Number : " + squareNumber + "<br>");

//filter -- > The filter() method is an ES6 method that provides a cleaner syntax
//  to filter through an array. It returns new elements in a new array 
// without altering the original array.

var number1 = [10,20,30,40, 5, 9, 4, 60, 43];
document.write(`Array of Number : ${number1} <br>`);
var filterArray = number1.filter(function(value){   
    document.write(value + "<br>");
    return value > 20;  //filter condition
});
document.write("Array of Square Number : " + filterArray + "<br>"); 