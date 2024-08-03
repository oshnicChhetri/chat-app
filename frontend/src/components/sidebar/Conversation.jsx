import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-slate-500 rounded p-2 py-1 cursor-pointer ${
          isSelected === true ? "bg-slate-200" : " "
        } `}
        onClick={() => {
          setSelectedConversation(conversation);
        }}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className=" font-bold text-white">{conversation.userName}</p>
            {/* <p className ="font-bold text-black">{`[${conversation.userName}]`}</p> */}
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;

// Starter Code
// const Conversation = () => {
//   return (
//     <>
//       <div className="flex gap-2 items-center hover:bg-slate-500 rounded p-2 py-1 cursor-pointer">

//         <div className="avatar online">
//           <div className="w-12 rounded-full">
//             <img src="" alt="user avatar" />
//           </div>

//         </div>

//         <div className='flex flex-col flex-1'
//         >
//           <div className="flex flex-col flex-1">
//             <p className="flex gap-3 justify-between">
//               <span className="test-A">
//                 Oshnic The God
//               </span>
//             </p>
//           </div>

//         </div>

//       </div>
//       <div className="divider my-0"> </div>
//     </>
//   )
// }

// export default Conversation
