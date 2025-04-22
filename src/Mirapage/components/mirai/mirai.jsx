import React, { useState } from "react";
import "./mirai.css";
import { useUserMode } from "../../../context/userModeContext.jsx";
import { FaMicrophone } from "react-icons/fa";

const Mirai = () => {
  const { mode } = useUserMode();

  const [messages, setMessages] = useState([
    { sender: "bot", text: "How can I help you today?" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [childResponse, setChildResponse] = useState("Hi, how can I help you?");

  const handleInputChange = (e) => setUserInput(e.target.value);

  const handleUserSubmit = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newMessages = [...messages, { sender: "user", text: userInput }];
    setMessages(newMessages);
    setUserInput("");

    // Fake bot response logic
    const simulatedResponse = "Okay! Let me help with that.";
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: simulatedResponse },
      ]);
      setChildResponse(simulatedResponse); // update child view
    }, 1000);
  };

  return (
    <div className="mirai">
      <div className="mirai-container">
        {mode === "adult" && (
          <div className="adult-mode">
            <div className="chat-response-box">
              {messages.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.sender}`}>
                  <p>{msg.text}</p>
                </div>
              ))}
            </div>
            <form className="chat-box" onSubmit={handleUserSubmit}>
              <button type="button" className="mic-button">
                <FaMicrophone />
              </button>
              <input
                type="text"
                placeholder="Type your question..."
                className="input-bar"
                value={userInput}
                onChange={handleInputChange}
              />
            </form>
          </div>
        )}

        {mode === "child" && (
          <div className="child-mode">
            <button className="mic-button big-mic">
              <FaMicrophone />
            </button>
            <div className="chat-response child-response">
              <p>{childResponse}</p>
            </div>
          </div>
        )}

        {mode === "senior" && (
          <div className="senior-mode">
            <div className="senior-mic">
              <button className="mic-button big-mic">
                <FaMicrophone />
              </button>
            </div>
            <div className="senior-chat">
              <div className="chat-response-box">
                {messages.map((msg, index) => (
                  <div key={index} className={`chat-message ${msg.sender}`}>
                    <p>{msg.text}</p>
                  </div>
                ))}
              </div>
              <form className="chat-box" onSubmit={handleUserSubmit}>
                <input
                  type="text"
                  placeholder="Type here..."
                  className="input-bar"
                  value={userInput}
                  onChange={handleInputChange}
                />
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mirai;
