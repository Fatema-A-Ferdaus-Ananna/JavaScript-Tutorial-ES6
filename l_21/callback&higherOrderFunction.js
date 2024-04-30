document.write(`<br><br><br>Callback  & Order Function <br><br>`);

const square = (x) =>{
    document.write(`Square of ${x} : ${x*x}<br>`);
}
square(5);

const y = square;
y(6);


const higherOrderFunction = (num, callback) =>{
    callback(num);
}
higherOrderFunction(10, square);



const task_1 = (callback) => {
    document.write(`<br><br>Task 1 done <br>`);
    console.log(`Task 1 done`);
    callback();
}

const task_2 = (callback) => {
    setTimeout(() =>{
        document.write(`<br>Data Loading complete!! Taks 2 Done <br>`);   
        console.log("Task 2 Done. Data Loading Finoshed") ;
        callback();
    }, 4000);  //asynchronus function.. will work background . 
    document.write(`Task 2 Doing. Dataloading <br>`);
    console.log(`Task 2 Doing. Dataloading `)
}

const task_3 = (callback) => {
    document.write(`Task 3 done <br>`);
    console.log(`Task 3 done`);
    callback();
}

const task_4 = (callback) => {
    document.write(`Task 4 done <br>`);
    console.log(`Task 4 done`);
    callback();
}

const task_5 = () => {
    document.write(`Task 5 done <br>`);
    console.log(`Task 5 done`);
}


const startTaskByClick = () =>{

    document.write(`hello you have clicked the button :<br><br>`);
    task_1(function f1(){
        task_2(()=>{
            task_3(()=>{
                task_4(()=>{
                    task_5();
                });
            });   
        });
    });
    
}

document.querySelector('.btn').addEventListener('click', startTaskByClick);



// task_2();
// task_3();
// task_4();
// task_5();