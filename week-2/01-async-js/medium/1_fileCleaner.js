const fs  =  require('fs');


function ReadFile(){
    const rPromise = new Promise(function(resolve,reject){

        let fileContent = fs.readFile('./cleanFile.txt','utf-8',(err,data)=>{
            if(err){
                console.log(err);
                reject(err);
            }
            else{
                console.log(`data readed ${data}`);
                resolve(data);
            }
        });


    });

    return rPromise
}

function WriteFile(readedContent){

const wPromise = new Promise(function(resolve,reject){

        console.log(`readed content ${readedContent}`);

        //data manipulation
        readedContent = readedContent.replace(/\s\s+/g, ' ')
        fs.writeFile('./cleanFile.txt',readedContent,(err)=>{
            if(err){
                console.log(err);
                reject(err);
            }
            else {               
                resolve(readedContent);
            }
        });


})
return wPromise;
}

function log(data){
    console.log(data)
}


// calling async flow to read and then write data
ReadFile().then((data) => WriteFile(data))
            .then((data)=> log(`written data ${data}`));



