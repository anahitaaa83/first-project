// function WaitandSay(name,callback) {
//     console.log("منتظر باش...");

//     setTimeout(()=>{
//         console.log("سلام"+name);
//         callback();
        
//     },2000);
    
    
// }
// function finish() {
//     console.log("کار تموم شد");
    
    
// }
// WaitandSay("آناهیتا",finish)
// ----------------------------------------------------------------------
// function CheakeventOdd(number,callback) {
//     if (number%2===0) {
//         callback("زوج")
        
//     } else {
//         callback("فرد")
        
//     }
    
// }
// function ShowResult(result) {
//     console.log("جواب شما:"+result);
    
    
// }
// CheakeventOdd(3,ShowResult);
// CheakeventOdd(10,ShowResult);

// ---------------------------------------------------
// function sayHello(name,callback) {
//     console.log("hello"+name);
//     callback();
    
    
// }
// function sayBye() {
//     console.log("goodbye");
        
// }
// sayHello("anahita",sayBye);
// ---------------------------------------------
function getUser(id,callback) {
    console.log("در حال گرفتن اطلاعات...");

    setTimeout(() => {
        let user={is:id,name:"anahita"};
        callback(user);
    }, 2000);
    
    
}
function showUser(user) {
    console.log("کاربر پیدا شد",user);
    
    
}
getUser(1,showUser);

