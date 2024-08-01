// import React from 'react';
import useGetConversation from "../../hooks/useGetConversation.js";
import Conversation from "./Conversation.jsx";

const ConversationsContainer = ({}) => {
  const {loading, conversations} = useGetConversation();

  
  

  return (
    
    <div className='py-2 flex flex-col overflow-auto'>

      {conversations.map((conversation, idx) => (

          <Conversation
            key={conversation._id}
            conversation={conversation}
            lastIdx={idx === conversations.length - 1}
           
          />
        
      ))}

    {loading ? <span className="loading loading-spinner mx-auto"></span> : null}

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