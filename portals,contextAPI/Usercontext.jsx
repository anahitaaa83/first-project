import { Children, createContext, useState } from "react";


const initialUsers=[
    {id:1,name:"anahita",email:"anahita83@gmail.com"},
    {id:2,name:"ana",email:"anahita83@gmail.com"},
    {id:3,name:"aryan",email:"aryan@gmail.com"},
    {id:4,name:"anahita",email:"anahita83@gmail.com"},
    {id:5,name:"ana",email:"anahita83@gmail.com"},
    {id:6,name:"aryan",email:"aryan@gmail.com"},

]
// eslint-disable-next-line react-refresh/only-export-components
export const Usercontext=createContext();
//یه کامپوننت تعریف میکنیم که بتونیم همه stateهارو یه جا نعریف کنیم
const UsercontextProvider=({children})=>{
    const[users,setusers]=useState(initialUsers);
    const addUsers=(user)=>{
        setusers([...users,user ])
    }
    const deleteUsers=(id)=>{
        setusers(users.filter((user)=>user.id !==id))
    }
    return(
        <Usercontext.Provider value={{users,setusers,addUsers,deleteUsers}}>{children}</Usercontext.Provider>
    )
}
export default UsercontextProvider;