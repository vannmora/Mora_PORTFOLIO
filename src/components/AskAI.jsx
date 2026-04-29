import { useState, useRef, useEffect } from "react";
import axios from "axios";

function AskAI() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  const formatAIResponse = (text) => {
  return text
    .replace(/\*\*/g, "") // remove markdown **
    .split("\n")
    .map((line, index) => {
      const trimmed = line.trim();

      if (!trimmed) {
        return <div key={index} className="h-2" />;
      }

      return (
        <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {trimmed}
        </p>
      );
    });
};

  const sendMessage = async (customMessage) => {
    const text = customMessage || message;
    if (!text.trim()) return;

    const userMsg = { sender: "user", text };

    setChat((prev) => [...prev, userMsg]);
    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post(
        "https://vanmora.onrender.com/api/ask",
        { message: text }
      );

      const aiMsg = {
        sender: "ai",
        text: res.data.reply,
      };

      setChat((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
      setChat((prev) => [
        ...prev,
        { sender: "ai", text: "⚠️ Server error. Please try again." },
      ]);
    }

    setLoading(false);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 px-4 py-2 text-sm bg-black text-white rounded-full border border-gray-800 hover:bg-gray-900 transition"
      >
        💬 Chat with Van
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-[420px] h-[600px] bg-[#0b0b0c] border border-[#1f1f1f] rounded-xl flex flex-col overflow-hidden">

          {/* HEADER */}
          <div className="px-4 py-3 border-b border-[#1f1f1f] flex justify-between items-center">
            <span className="text-sm font-medium text-white">
              Chat with Van
            </span>

            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* SUGGESTIONS */}
          {chat.length === 0 && (
            <div className="px-4 py-3 border-b border-[#1f1f1f]">
              <p className="text-xs text-gray-500 mb-3">
                Try asking:
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Who is Van?",
                  "What are his skills?",
                  "Show me his projects",
                  "What experience does he have?",
                  "What does he do outside development?",
                  "How can I contact him?",
                ].map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-xs px-3 py-2 rounded-md bg-[#121212] border border-[#2a2a2a] text-gray-400 hover:text-white hover:bg-[#1a1a1a] transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* CHAT AREA */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">

            {chat.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] text-sm px-4 py-3 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-white text-black"
                      : "bg-[#121212] border border-[#2a2a2a] text-gray-300"
                  }`}
                >
                  {msg.sender === "ai"
                    ? formatAIResponse(msg.text)
                    : msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="text-gray-500 text-xs">
                Van is typing...
              </div>
            )}

            <div ref={chatEndRef}></div>
          </div>

          {/* INPUT */}
          <div className="border-t border-[#1f1f1f] p-3 flex gap-2">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Ask Van anything..."
              className="flex-1 bg-transparent border border-[#2a2a2a] rounded-md px-3 py-2 text-sm text-white outline-none focus:border-gray-500"
            />

            <button
              onClick={() => sendMessage()}
              className="px-4 text-sm bg-white text-black rounded-md hover:opacity-80 transition"
            >
              Send
            </button>
          </div>

        </div>
      )}
    </>
  );
}

export default AskAI;