//synchronous programming

document.write(`Task 1 <br>`);
document.write(`Task 2 <br>`);
document.write(`Task 3 <br>`);
document.write(`Task 4 <br>`);
document.write(`Task 5 <br>`);

const task1 = () => {
    document.write(`Task 1 done <br>`);
    console.log(`Task 1 done`);
}

const task2 = () => {
    setTimeout(dataLoading, 3000);  //asynchronus function.. will work background . 
    //document.write(`Task 2 Doing. Dataloading <br>`); // task3 function don't have to wait 3000 second
    console.log(`Task 2 Doing. Dataloading `)
}

const task3 = () => {
    document.write(`Task 3 done <br>`);
    console.log(`Task 3 done`);
}

const task4 = () => {
    document.write(`Task 4 done <br>`);
    console.log(`Task 4 done`);
}

const task5 = () => {
    document.write(`Task 5 done <br>`);
    console.log(`Task 5 done`);
}


const dataLoading = () =>{
    //document.write(`Data Loading!! <br>`);   
    console.log("Task 2 Done. Data Loading Finoshed") ;
}

task1();
task2();
task3();
task4();
task5();