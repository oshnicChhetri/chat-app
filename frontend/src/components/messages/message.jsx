import useConversation from "../../zustand/useConversation.js";
import { useAuthContext } from "../../../context/AuthContext.jsx";
import { time } from "../../utils/time.js"

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser._id;

  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;

  const bubbleBgColor = fromMe ? "bg-blue-500" : " ";

  const formattedTime = time(message.createdAt

  );
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avater">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="" />

        </div>

      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} `}>{message.message} </div>
      <div className="chat-footer pb-2 opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>

    </div>
  )
}

export default Message