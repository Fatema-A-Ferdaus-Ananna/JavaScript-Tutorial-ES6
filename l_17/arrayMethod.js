//find (callback, value) return the value of the first element that pass certain condition

let nuumber = [1,3,4,5,2,7,9,3];

document.write(`<br><br><br>Array: ${nuumber}`)
let firstEvenNum = nuumber.find((x) => { return x%2===0});
document.write(`<br>Find Method: <br>
                First Even Number: ${firstEvenNum}`);





//findIndex(callback, value) return the index of the first element that pass certain condition

let firstEvenNumIndex = nuumber.findIndex((x) => { return x%2===0});
document.write(`<br>FindIndex Method: <br>
                First Even Number Index: ${firstEvenNumIndex}`);



const students = [
    {
        name: "Ananna",
        id: 201,
        cgpa: 3.8    //first find
    },
    {
        name: "Fatema",
        id: 201,
        cgpa: 3.31
    },
    {
        name: "An An",
        id: 201,
        cgpa: 3.6
    },
    {
        name: "Ferdaus",
        id: 201,
        cgpa: 2.0
    }
]
 console.log("First find student base on condition : ")
console.log(students.find((x) => {
    return x.cgpa >3 ;
}))


console.log("Index : " )
console.log(students.findIndex((x) => {
    return x.cgpa >3 ;
}))