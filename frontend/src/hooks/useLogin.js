
import React from "react";
import {useState} from "react";
import {toast} from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";


const useLogin = () => {
 
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const login = async({userName, password}) =>{
        const sucess = handleInputErrors({userName,password})



        if(!sucess) return;
        setLoading(true);

        try {
         const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({userName,password})
        });

        const data = await res.json();
    

            if(data.error){
                throw new Error(data.error);
            }

         localStorage.setItem("chat-app-user", JSON.stringify(data));
        setAuthUser(data);
        
            
        } catch (error) {
            toast.error(error.message);
        } finally{
            setLoading(false);
        }
    } 

    return {login, loading};
    
}

export default useLogin;

function handleInputErrors({userName, password}){
if(!userName || !password){
    toast.error("Please fill in all the fields")
    return false
} 
return true;
}


