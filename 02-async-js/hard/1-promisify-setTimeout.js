/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
   return new Promise((resolve,reject) => {
    setTimeout(() => resolve("promise resolved"),n);
   })
   
}
// const promise = () => {
//     return new Promise( (resolve,reject) => {
//      console.log("promise is resolved!");
//     });
// }

wait(3000).then(data => console.log(data));