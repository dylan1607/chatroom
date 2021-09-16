import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import io from "socket.io-client";
import Header from "./components/Header";
import Home from "./components/Home";
import Chat from "./components/Chat";

const App = () => {
  const socket = io.connect("/");
  const MainChat = (props) => {
    return (
      <Chat
        username={props.match.params.username}
        roomId={props.match.params.roomId}
        socket={socket}
      />
    );
  };
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home socket={socket} />
        </Route>
        <Route path="/chat/:roomId/:username" component={MainChat} />
      </Switch>
    </Router>
  );
};

export default App;
