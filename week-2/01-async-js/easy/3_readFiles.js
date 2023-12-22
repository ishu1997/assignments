

const fs  =  require('fs');

// this is the sync way of reading the file but it will stop other requests from executing
const data = fs.readFileSync('./file.txt','utf-8');
console.log(data);


//async way

fs.readFile('./file.txt','utf-8',(error,data)=>{

    if(error){
        console.log(error);
    }
    else{
        console.log(`Async ${data}`);
    }

});

console.log('waiting');