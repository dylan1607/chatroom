import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Home = ({ socket }) => {
  const [input, setInput] = useState({
    username: "",
    roomId: "",
  });
  const [error, setError] = useState();
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (input.username !== "" && input.roomId !== "") {
      socket.emit("joinRoom", input);
      socket.on("joined", (data) => {
        data.roomId
          ? history.push(`/chat/${data.roomId}/${data.username}`)
          : setError(data);
      });
    } else {
      alert("Username & RoomId not be empty");
    }
  };

  return (
    <div className="flex justify-center h-screen py-20">
      <form
        onSubmit={onSubmit}
        className="flex flex-col justify-between w-11/12 max-w-md"
      >
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="bg-tint p-3 rounded-md"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="RoomID"
            name="roomId"
            className="bg-tint p-3 rounded-md"
            onChange={handleChange}
          />
          {error && <p>{error}</p>}
        </div>
        <button type="submit" className="bg-box text-white p-3 rounded-full">
          JOIN
        </button>
      </form>
    </div>
  );
};

export default Home;
