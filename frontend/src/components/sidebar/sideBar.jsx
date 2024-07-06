// import React from 'react';
import SearchInput from './SearchInput.jsx';
import ConversationsContainer from './conversationsContainer.jsx';
import Logout from './logout.jsx';

const SideBar = () => {
  return (
      <div className='border-r-3 border-r-slate-50  p-4 flex flex-col'>
          <SearchInput/>
          <div className='divider px-3'></div>
          <ConversationsContainer/>
       
          <Logout/>

      </div>
  )
}

export default SideBar


// Starter Coden

// const SideBar = () => {
//   return (
//     <div className='border-r-3 border-r-slate-50  p-4 flex flex-col'>
//       <SearchInput />
//       <div className='divider px-3'></div>
//       <ConversationsContainer />

//       <Logout />

//     </div>
//   )
// }

// export default SideBar