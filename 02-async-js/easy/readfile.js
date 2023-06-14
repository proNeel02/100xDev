const fs = require('fs');

const start = new Date();
fs.readFile('3-read-from-file.md','utf-8',(err,data) => {
    console.log("file async : ",data);
});


// console.log("file sync : ",fs.readFileSync('3-read-from-file.md','utf-8'));
let sum = 0;
for(let i = 0; i < 10000000000; i++){
    sum+=i;
}
console.log(sum);

const end = new Date();

console.log("Time Taken : ", (end-start)/1000);

