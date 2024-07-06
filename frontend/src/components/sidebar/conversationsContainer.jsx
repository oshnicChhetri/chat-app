// import React from 'react';
import Conversation from "./Conversation.jsx"
const ConversationsContainer = () => {
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      <Conversation/>
      <Conversation />
      <Conversation />
      <Conversation />

    </div>
  )
}

export default ConversationsContainer;

// Starter Code
// const ConversationsContainer = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />

//     </div>
//   )
// }

// export default ConversationsContainer;