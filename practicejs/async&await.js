console.log("dodododooooooooo");

const mypromis = (delay,target)=>{
    return new Promise((resolve,reject)=>{
    let foodready=true;
    setTimeout(() => {
        if (foodready) {
        resolve(`${target}حاضر شد بعد از ${delay}`);
        
        
    } else {
        reject(`بعد از ${delay}ثانیه ناموفق`);
        
    }
        
    },(delay*1000));
})
.then((massage)=>{
    console.log("حاضره",massage);
    
})
.catch((err)=>{
    console.log("حاضر نیست",err);
    
});

}
// mypromis(2,"دسر").then((massage)=>{
//     console.log(massage);
//     mypromis(2,"غذا").then((mess)=>{
//         console.log(mess);
        
//     }); 
    
// })
// .catch((err)=>{
//     console.log(err);
    
// })

async function processFood() {
    try{
       const desert=await mypromis(2,"دسر");
       console.log(desert);

       const Food=await mypromis(3,"غذا");
       console.log(Food);

       const drink=await mypromis(4,"نوشیدنی");
       console.log(drink);
       
       
       
    }catch(err){
        console.log(err);
        
    }
    
}
processFood();
console.log("heyyyyyyyyyyyyyyyyy");
