// import React from 'react';
import { TbMessageCircleSearch } from "react-icons/tb";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" palaceholder="Search" className='input input-bordered rounded-full' />
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

