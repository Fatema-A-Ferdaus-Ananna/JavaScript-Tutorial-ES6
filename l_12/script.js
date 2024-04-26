//es6 - variable declare , string concatenation, function declare

// var x = 6;
// if(true){
//     var x = 7;
// }
// console.log(x); // x value will change inside the condition -- es5


let x = 8;
if(true){
    let x = 7; //let varibale work base on scope/ area
}
console.log(x); // x = 8 value will print


const y = 20;
if(true){
    //y = 90;
}
console.log(y); //it will show error. because const variable value can not be change


// var a = 45;
// var b = 50;

// var sum = a + b;
// console.log("sumation : " + sum);

let a = 45;
let b = 50;

let sum = a + b;
console.log(`Sumation is : ${sum}`);

let uname = "Ananna";
let msg = "Welcome to our Website !!";
let help = `How can i help you ${uname} ?<br><br>`;

document.write(`${uname} ${msg} <br><br>`);
document.write(help);


// normal
function add(m,n){
    var sum = m + n;
    document.write("Sumation: " +sum);
}
add(7,9);

//es6
const sub = (o,p) =>{
    var sub = o - p;
    document.write(`<br><br>Subtraction : ${sub}`);
}
sub(20,30);