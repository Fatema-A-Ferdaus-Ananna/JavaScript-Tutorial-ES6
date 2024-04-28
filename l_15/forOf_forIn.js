//for...of

const studentName = ["Ananna", "Fatema", "Trisha"];

document.write("<br><br><br>for...of : <br><br>");
for(let sName of studentName){
    document.write(sName + ",");
}


//for...in [important]--we can iterate object using for..in

let students = {
    name: "Ananna",
    id: 201,
    cgpa: 3.80
}

document.write("<br><br><br>for...in : <br>");
for(let sInfo in students){
    console.log(sInfo + " : " + students[sInfo]);
    document.write(`<br>${sInfo} :  ${students[sInfo]} `);
    //document.write(`${students[sInfo]}`); //value
}

