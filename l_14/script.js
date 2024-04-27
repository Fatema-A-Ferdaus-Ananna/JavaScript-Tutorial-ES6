

"use strict"

const message = (text = `This is default value ~~~~`) =>{ //default parameter
    document.write(`Wecome to my page!! <br> ${text}`);
}

message(`How can I help You?`);
message();


//rest para
const printNumber = (a, b, ...z) =>{
    document.write(`<br><br>a value = ${a}  ,  b value =  ${b}   ,   z value = ${z}`);
}
printNumber(30, 78, 45, 67, 45);