//how to create promise -- pending, sesolve[successful], reject

const promise1 = new Promise((resolve, reject)=>{  //asynchronous

    let completedPromise = true;

        if(completedPromise){
            resolve("Promise 1 Completed"); //call resolve function, we an pass anything[variable, obj, string as parameter]
        }
        else{
            reject("Promise 1 not completed");
        }
 
})

const promise2 = new Promise((resolve, reject)=>{

        resolve("Promise 2 Completed"); //also can call only resolve or reject

})

const promise3 = new Promise((resolve, reject)=>{

        reject("Promise 3 not completed");
})


const promise4 = new Promise((resolve, reject)=>{

    reject("Promise 4 not completed");
})


const promise5 = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        resolve("Promise 5 Completed"); //also can call only resolve or reject
    }, 6000);
   

})

const promise6 = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        resolve("Promise 6 Completed"); //also can call only resolve or reject
    }, 5000);

})
// console.log(promise1);

promise1
    .then(( result )=>{
    document.write(`${result}<br><br>`);
    })
    .catch((error) => {
    document.write(`${error}<br><br>`);
    })

promise2
    .then(( result )=>{
    document.write(`${result}<br><br>`);
    })

promise3
    .catch(( result )=>{
    document.write(`${result}<br><br>`);
    })


Promise.all([promise1, promise2])
    .then((result)=>{
        document.write(`${result}<br><br>`);  
    })

Promise.all([promise1, promise2])
    .then(([result1, result2])=>{    //we can also dstructure and show them single
        document.write(`${result1}<br><br>`);  
        console.log(result1)
    })

Promise.all([promise3, promise4])
    .catch(([error1, error2])=>{    //we can also dstructure and show them single
        document.write(`${error1}, ${error2}<br><br>`);  
        console.log(error1, error2);
    })

Promise.race([promise5, promise6])
    .then((response)=>{
        //document.write(`${response}<br><br>`);  
        console.log(`${response}`);    
    })


//catch -- when propise rejected
//then -- when promise cpmpleted
//finaly -- a task must be done that thing we can write inside it



//how to use promise
//how to run multiple promise - all()
//race()
//promise chaining

