import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";

import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="0ef9569d-9943-4c53-a2a1-5bb7e3144dff"
      userName="saranshgupta"
      userSecret="123456"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
