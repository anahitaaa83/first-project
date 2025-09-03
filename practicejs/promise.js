console.log("dodododooooooooo");

new Promise((resolve,reject)=>{
    let foodready=true;
    setTimeout(() => {
        if (foodready) {
        resolve("foodready");
        
        
    } else {
        reject("notready");
        
    }
        
    }, 2000);
})
.then((massage)=>{
    console.log("حاضره",massage);
    
})
.catch((err)=>{
    console.log("حاضر نیست",err);
    
});


console.log("heyyyyyyyyyyyyyyyyy");

