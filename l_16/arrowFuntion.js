//traditional array vs array function

function traditionalFunction(){
    document.write("<br><br><br>Traditional Function <br>");
}

const arrowFunction = () =>{   //arrowfunction
    document.write("Arrow Function <br>");
}
traditionalFunction();
arrowFunction();


function tFunction(){
    return "Traditonal funtion return <br>";
}

const aFunction = (a, b) =>  `Arrow Function return : ${ a+b} <br><br><br>`; //return keyword no need to write also "{}"
   
document.write(tFunction());
document.write(aFunction(30, 54));


var student = [
    {
        name: "Ananna",
        id: 201,
        cgpa: 3.8
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


function studentName(){

    return student.filter(function(value){
        return value.cgpa > 3.5;           //traditional
    }).map(function(y){
        return y.name;
    })
}
console.log(studentName());

const studentId = () =>{
    return student.filter((gpa) => gpa.cgpa > 3.5).map((id) => id.id);
}

//const studentId = () => student.filter((gpa) => gpa.cgpa > 3.5).map((id) => id.id);
console.log(studentId());
