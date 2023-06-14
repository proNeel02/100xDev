/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
   
    return new Promise((resolve,reject) => {setTimeout(() => resolve("promise 1 resolved"),1000);});
}

function waitTwoSecond() {
    return new Promise((resolve,reject) => {setTimeout(() => resolve("promise 2 resolved"),2000);});
}

function waitThreeSecond() {
    return new Promise((resolve,reject) => {setTimeout(() => resolve("promise 3 resolved"),3000);});
}

function calculateTime() {
    const start = new Date();
    console.log("start")

    const promises = [
        waitOneSecond(),
        waitTwoSecond(),
        waitThreeSecond()
    ];

    Promise.all(promises).then((results) => {
        console.log(results);

        const end = new Date();
        console.log("Time Taken :",(end - start)/1000);
        console.log("end");
    });
  
}


calculateTime();
