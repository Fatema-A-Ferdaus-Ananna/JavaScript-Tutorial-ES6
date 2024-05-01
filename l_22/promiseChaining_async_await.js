const taskOne = ()=>{
    return new Promise((resolve, reject)=>{
        resolve('Task 1 is completed <br>')
    });
}

const taskTwo = ()=>{
    return new Promise((resolve, reject)=>{
        resolve('Task 2 is completed <br>')
    });
}

const taskThree = ()=>{
    flag = true;
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!flag){
                resolve('Task 3 is completed <br>');
            }
            else{
                reject(`Task 3 is not completed <br>`);
            }
        },3000)
        
    });
}

const taskFour = ()=>{
    return new Promise((resolve, reject)=>{
        resolve('Task 4 is completed <br>')
    });
}

const taskFive = ()=>{
    return new Promise((resolve, reject)=>{
        resolve('Task 5 is completed <br>')
    });
}


document.write(`<br><br><br>Promise Chaining: <br><br>`);

taskOne()
    .then((res)=>{
        document.write(`${res}`);
    })
    .then(taskTwo)
    .then((res)=>{
        document.write(`${res}`);
    })
    .then(taskThree)
    .then((res)=>{
        document.write(`${res}`);
    })
    .then(taskFour)
    .then((res)=>document.write(`${res}`))  //only one statement so we can write 
    .then(taskFive)
    .then((res)=>document.write(`${res}`))
    .catch((err)=>document.write(`${err}`)) //even there is multiple promise, only one catch is enough
                                            //to show "reject";



async function cllAllTask(){
   try{
    const t1 = await taskOne();
    console.log(`${t1}`);
    const t2 = await taskTwo();
    console.log(`${t2}`);
    const t4 = await taskFour();
    console.log(`${t4}`);
    const t5 = await taskFive();
    console.log(`${t5}`);
    const t3 = await taskThree();
    console.log(`${t3}`);
   }
   catch(err){
    console.log(`${err}`);
   }
}

cllAllTask();
                                            

document.write(`Promise Chaining End <br><br>`); //promiise is asynchronous function 
                                                    // therefore they are running 
                                                    //background even this statemant is 
                                                    //called last, it printed before  finishing promisse