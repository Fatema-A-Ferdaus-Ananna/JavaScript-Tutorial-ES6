class Student{

    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    set studentName(name){
        this.name = name;
    }

    get studentInfo(){
        return this.id + " , " + this.name;
    }
}

let s1 = new Student(201, "Fatema-A-Ferdaus");
console.log(s1);
document.write(`Student Name: ${s1.name}<br>
                Student ID:  ${s1.id}<br><br>`);

s1.studentName = "Ananna";
console.log(s1);
document.write(`Student Name: ${s1.name}<br>
                Student ID:  ${s1.id}<br><br>`);

console.log(s1.studentInfo);
document.write(`Student Info: ${s1.studentInfo}<br>`);
