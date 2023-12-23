

setInterval(()=>{
    const currentDate = new Date();
    console.log(`Current date > ${currentDate.toLocaleTimeString()}` );
    //console.log(`Current date > ${currentDate.getHours()} : ${currentDate.getMinutes()} : ${currentDate.getSeconds()}` );
},1000);