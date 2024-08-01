// import React from 'react';
import { useState } from "react";
import toast from "react-hot-toast";
import { TbMessageCircleSearch } from "react-icons/tb";
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversation";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const{setSelectedConversation} = useConversation();
  const {conversations} = useGetConversation();
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!search) return ;
    if(search < 3){
      return toast.error("Search term must be atleast 3 characters long")
    }
 const conversation = conversations.find((c)=> c.userName.toLowerCase().includes(search.toLocaleLowerCase()));
 if(conversation){
  setSelectedConversation(conversation);
  setSearch(" ");
 }else{
  toast.error("No such user found")
 }
  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type="text" palaceholder="Search" className='input input-bordered rounded-full' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
        <button  type="submit" className="btn btn-circle bg-slate-600 text-white">
              <TbMessageCircleSearch className='w-6 h-6 outline-none' />

        </button>
        
    </form>
  )
}

export default SearchInput

// Starter Code 
// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2'>
//       <input type="text" palaceholder="Search" className='input input-bordered rounded-full' />
//       <button type="submit" className="btn btn-circle bg-slate-600 text-white">
//         <TbMessageCircleSearch className='w-6 h-6 outline-none' />

//       </button>

//     </form>
//   )
// }

// export default SearchInput

