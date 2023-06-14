const fs = require('fs');

fs.readFile('1-file-cleaner.md','utf-8',(err,data) => {

     console.log(data);
     let modifiedData = data.replace(/\s+/g, ' ');
    console.log(modifiedData);
    fs.writeFile('1-file-cleaner.md',modifiedData,(err) =>{
      console.log(err);
    });
});

