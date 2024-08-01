 import React from 'react';
import {BiLogOut} from "react-icons/bi"
import useLogout from '../../hooks/useLogout';


const Logout = () => {
  const {loading, logout} = useLogout();
  return (
    <div className='mt-auto '>
     
        <BiLogOut onClick ={logout} className='h-10 w-10 text-white cursor-pointer' />
     
     
    </div>
  )
}

export default Logout


// Starter Code
// const Logout = () => {
//     return (
//         <div className='mt-auto '>
//             <BiLogOut className='h-10 w-10 text-white cursor-pointer' />
//         </div>
//     )
// }

// export default Logout

