import MultipleMessages from "./multipleMessages.jsx";
import MessageInput from "./messageInput.jsx";
import {TiMessages} from "react-icons/ti"


const MessageContainer = () => {
    const noChat = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
       {
        noChat ? (<NochatSelected/>) 
        :
        (    <>
                  <div className="bg-slate-400 px-4 py-2 mb-2">
                      <span className=" text-black font-bold mb-8">To:</span>
                      <span className="text-gray-900 font-bold mt-4"> Oshnic </span>
                      <MultipleMessages />
                      <MessageInput />

                  </div >
                  </>)
       }
        <>
        

        
      </>
    </div>
  )
}

const NochatSelected = () =>{
    return(
        <div className="flex items-center justify-center w-full h-full">
        <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
            <p>
            Welcome 
            </p>
            <p>Select a chat to start messaging</p>
            <TiMessages className="text-3x1 md:text-6x1 text-center"/>
        </div>

        </div>
    )
}

export default MessageContainer
