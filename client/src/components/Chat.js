import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import { ArrowUpIcon } from "@heroicons/react/outline";
import Chatbox from "./Chatbox";

const Chat = ({ username, roomId, socket }) => {
  const [message, setMessage] = useState([]);
  const [input, setInput] = useState("");

  // First render to fetch all room's messages
  useEffect(() => {
    socket.on("oldmessage", ({ messages }) => {
      setMessage(messages);
    });
  }, []);

  // Call every socket change
  useEffect(() => {
    socket.on("message", ({ messages }) => {
      setMessage((item) => [...item, messages]);
    });
    return socket.off("messsage");
  }, [socket]);

  // Trigger when user push the button
  const sendMessage = () => {
    if (input !== "") {
      socket.emit("chat", input);
      setInput("");
    } else alert("Input something");
  };

  // Scroll to Bottom Process
  const lastMessage = useRef(null);
  const scrollToBottom = () => {
    lastMessage.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [message]);

  return (
    <>
      <Header title={roomId} socket={socket} />
      <div className="flex flex-1 justify-center py-20">
        <div className="flex flex-col overflow-scroll space-y-6">
          {/* show messages from user */}
          {message?.map((item, index) => {
            if (item?.username === username) {
              return (
                <Chatbox
                  key={index}
                  message={item?.content}
                  username={item?.username}
                  currentUser
                />
              );
            } else {
              return (
                <Chatbox
                  key={index}
                  message={item?.content}
                  username={item?.username}
                />
              );
            }
          })}

          {/* Scroll to bottom */}
          <div ref={lastMessage} />
        </div>
        <div className="fixed bottom-8 w-screen">
          <div className="flex justify-between bg-tint rounded-full p-2 mx-3">
            <input
              type="text"
              placeholder="Message here..."
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="outline-none bg-tint px-2 w-screen"
            />
            <button
              onClick={sendMessage}
              className="rounded-full bg-box text-white p-2"
            >
              <ArrowUpIcon width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
