var number = [10,20,30,40];
var squareNumber = [];
document.write("<br><br><br>For: <br>");

for(var i = 0; i<number.length; i++){
    document.write(number[i] + "<br>");
}


document.write("<br><br><br>For each : <br>");
// number.forEach(printValue)

// function printValue(value){
//     document.write(value + "<br>");
// }


number.forEach(function(value){
    document.write(value + "<br>");
    squareNumber.push(value*value);
})

document.write(`Array of Number : ${number} <br>`);
document.write("Array of Square Number : " + squareNumber + "<br>");

number.forEach(function(value, index, updateArray){
    updateArray[index] = value + 5;
})
document.write(`Array of Number [Update]: ${number} <br>`);