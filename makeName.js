var fs = require('fs');
file = require('fs');

//Created a function expression that reads a given file, this way we can re-use this several times in our code if we want to

let readFile = (filename) =>{
    return new Promise(function(resolve, reject){
        file.readFile(filename, 'utf8', function(err, data){
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        });
    });
};

//Here first we solve all of the promises that are created when the files are read
//then we write the result returned from Promise.all to our fullName.txt file 

Promise.all([
    readFile('name.txt'),
    readFile('lastName.txt')
]).then((results) => {
    fs.writeFile("fullName.txt", results, (err) => {
        if (err) throw err;
        console.log('Full name created');
    });
});

