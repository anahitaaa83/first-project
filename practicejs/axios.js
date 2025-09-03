import axios from 'axios';
function getuser() {
    axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then(function (respons) {
        console.log(respons);
        
        
    })
    .catch(function (err) {
        console.error("خطا در گرفتن اطلاعات",err)
        
        
    });
   
    
}
getuser();