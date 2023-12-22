
const fs  =  require('fs');

// this is also an async operation so it will run late
fs.writeFile('./newFile.txt',' harkirat cohort',{flag:"a"},(err)=>{
    if(err){
        console.log(err);
    }
    else {
        console.log('written success');
    }
});

console.log('Asyn write operation');