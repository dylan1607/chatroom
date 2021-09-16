const Chatbox = ({ message, username, currentUser }) => {
  return (
    <div className="w-screen">
      <div className={`${currentUser ? "mr-6 ml-auto" : "ml-6 mr-auto"} w-60`}>
        <p>{!currentUser && username}</p>
        <div
          className={`${currentUser ? "bg-box text-white" : "bg-tint"}
          p-3 rounded-lg break-words`}
        >
          {message}
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
