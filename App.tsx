import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {
    setReply("AI is thinking...");
    setTimeout(() => {
      setReply("You said: " + message);
      if (navigator.vibrate) navigator.vibrate([30, 50, 30]);
    }, 1000);
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Fantastic AI</h1>
      <input
        type="text"
        placeholder="Type something..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ padding: 10, width: "70%" }}
      />
      <button onClick={sendMessage} style={{ padding: 10, marginLeft: 10 }}>
        Send
      </button>
      <p>{reply}</p>
    </div>
  );
}