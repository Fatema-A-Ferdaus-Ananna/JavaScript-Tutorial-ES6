//array destructure

let number = [2,4,5,9,7,20,21];

// document.write(number[0] + "<br>");
// document.write(number[1] + "<br>");

let [num1, num2, num3, num4, num5, ...num6] = number;  //destructure
document.write(num2 + "<br>");
document.write(num4 + "<br>");
document.write(num6 + "<br>");


//swapping using destructuring

let a = 40, b = 20;
document.write(`<br>Before Swapping :<br>a: ${a} , b: ${b}<br>`);

[a, b] = [b, a];
document.write(`After Swapping :<br>a: ${a} , b: ${b}<br>`);


// object destructuring

const student = {
    name: "Ananna",
    id: 201,
    cgpa: 3.8,
    language : {
        native : 'Bangla',
        beginner : 'English'
    }
} 

const {id, name, language} = student;
document.write(`<br><br>Student info:<br>
                Studen Name: ${name} <br> 
                Student Id: ${id}<br>
                Language: ${language.native}, ${language.beginner}<br><br>`);

// console.log(student.name);
// console.log(student.id);
// console.log(student.cgpa);


//destructuring funtion parameter
// const studentInfo = (student) =>{
//     console.log(`${student.name}, ${student.id}`);
// }
// studentInfo(student);

const studentInfo = ({name, id}) =>{  //destructuring
    document.write(`${name}, ${id}`);
}
studentInfo(student);
