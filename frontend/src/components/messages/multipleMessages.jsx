import useGetMessages from "../../hooks/useGetMessages.js";
import MessageSkeleton from "../skeletons/messageSkeleton.jsx";
import Message from "./message.jsx";
import { useEffect,useRef } from "react";

const MultipleMessages = () => {
  const { messages, loading } = useGetMessages();


  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}> 
          <Message message={message} /> 
            {/* // "return" curly braces in arrow functions will return the component inside without the "return" */}
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default MultipleMessages;
