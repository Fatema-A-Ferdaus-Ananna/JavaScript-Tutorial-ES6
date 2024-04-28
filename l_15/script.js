//object literals


function studentInfo1(name, age){
    return {
        name : name, // normal 
        age : age
    }
}
console.log(studentInfo1("Fatema", 24));


function studentInfo2(name, age){
    return {
        name, // ES6 ---elimination of duplication
        age
    }
}
console.log(studentInfo2("Ananna", 24));


let message1 = {
    body : function(){ //normal
        return `Hello! Welcome to the Student Profile - msg1 <br>`
    }
}
document.write(message1.body());

let message2 = {
    body(){  //no need to write funtion keyword --> more concise
        return `Hello! Welcome to the Student Profile - msg2 <br>`
    }
}
document.write(message2.body());

let message3 = {
    'body name'(){  //it allows to write a method name with space but have to give single quotaion
        return `Hello! Welcome to the Student Profile - msg3 <br>`
    }
}
document.write(message3['body name']()); //call