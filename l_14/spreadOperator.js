document.write(`<br><br><br>Spread Operator!! <br><br>`);

const addNumber = (x, y, z) =>{
    return x+y+z;
}

let numbers = [10, 30, 90];
document.write(`Number Addition: ${addNumber(numbers[0], numbers[1], numbers[2])} <br>`); //normal

document.write(`Number Addition using spread operator: ${addNumber(...numbers)} <br>`);


let numbers1 = [3, 8, ...numbers];
document.write(`Push array value to other array using spread operator: ${numbers1}  <br>`);

//rest parameter pack the value and stor in array , and spread operator unpack the value

let numbers2 = [45, 34, 12];
let numConcat = numbers1.concat(numbers2);
document.write(`array 2: ${numbers2}<br>`);
document.write(`Concat two array: ${numConcat}<br>`);

numConcat = [...numbers1, ...numbers2];
document.write(`Concat two array using sperad operator: ${numConcat}<br><br>`);


let p1 = {
    uname: "Ananna",
    age: 24
}

let p2 = {
    nationality: "Bangladesh",
    occupation: "Jobless"
}

let person = {...p1, ...p2};
document.write(`Person Info: ${person} <br>`);
document.write(`Person Name: ${person.uname} <br>`);
document.write(`Person Name: ${person.age} <br>`);
document.write(`Person Name: ${person.nationality} <br>`);
document.write(`Person Name: ${person.occupation} <br>`);
console.log(person);