
const fs = require('fs');


fs.writeFile('4-write-to-file.md',`## Write to a file with fs.writeFile
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.`,(err) => {
 console.log(err);
});

fs.writeFileSync('4-write-to-file.md',`## Write to a file with fs.writeFile
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.`);

