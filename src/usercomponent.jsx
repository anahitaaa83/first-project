/* eslint-disable react-hooks/rules-of-hooks */

import { useEffect, useState } from "react"

const usercomponent=()=>{
    const[age,setage]=useState(20);
    useEffect(()=>{
        //mount
        alert("send a request to the server");
        // اینا همگی side-Effect عملیات های این چنینی
        // document.title="User component";
        // fetch("jkdbckjcbkwjvvfbeb")
        // .then((Response)=>Response.json)
        // .then((json)=>console.log(json)
        // )
       //unmount
    
    
       const handleClick=()=>{
        console.log("age is 20");

        
       };
       const element=document.getElementById("age");
       element?.addEventListener("click",handleClick);
         //  cleanup
       return()=>{
        element?.removeEventListener("click",handleClick);
       alert("hoping to meet you");
       
       }
    },[]);
    //updating
    useEffect(()=>{
     if (age===30) {
        alert("age is 30")
        
     }
    },[age])
    return(
      <div>
          <h1>usercomponent</h1>
        <button onClick={()=>setage((perev)=>perev+1)}>
            change Age
        </button>
         <ul>
            <li>Name:anahita</li>
            <li>Age:{age}</li>
            <li>Email:anahita@gmail.com</li>
         </ul>
      </div>
    );
};
export default usercomponent;