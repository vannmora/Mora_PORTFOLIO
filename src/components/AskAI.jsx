import { useState, useRef, useEffect } from "react";
import axios from "axios";

function AskAI() {

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  const sendMessage = async (customMessage) => {

    const text = customMessage || message;

    if (!text.trim()) return;

    const userMsg = {
      sender: "user",
      text
    };

    setChat((prev) => [...prev, userMsg]);
    setMessage("");
    setLoading(true);

    try {

      const res = await axios.post(
      "https://vanmora.onrender.com/",
      { message: text }
    );

      const aiMsg = {
        sender: "ai",
        text: res.data.reply
      };

      setChat((prev) => [...prev, aiMsg]);

    } catch (error) {

      console.error(error);

      setChat((prev) => [
        ...prev,
        { sender: "ai", text: "⚠️ Server error. Please try again." }
      ]);

    }

    setLoading(false);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-black text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        🤖 Ask Van
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-[420px] h-[560px]
        backdrop-blur-xl
        bg-white/70
        dark:bg-zinc-900/80
        border border-white/20
        shadow-2xl
        rounded-2xl
        flex flex-col
        overflow-hidden">

          {/* Header */}
          <div className="p-4 border-b border-gray-200 dark:border-zinc-700 flex justify-between items-center">

            <div className="font-semibold flex items-center gap-2">
              🤖 Ask Van AI
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-red-500"
            >
              ✕
            </button>

          </div>

          {/* Suggestions (only before conversation) */}
          {chat.length === 0 && (
            <div className="p-4 border-b border-gray-200 dark:border-zinc-700">

              <p className="text-xs text-gray-400 mb-3">
                Ask about Van:
              </p>

              <div className="grid grid-cols-2 gap-2">

                <button
                  onClick={() => sendMessage("Who is Van?")}
                  className="p-3 text-left text-xs rounded-xl bg-zinc-800 text-white hover:bg-zinc-700 transition"
                >
                  👨‍💻 Who is Van?
                </button>

                <button
                  onClick={() => sendMessage("What are his skills?")}
                  className="p-3 text-left text-xs rounded-xl bg-zinc-800 text-white hover:bg-zinc-700 transition"
                >
                  ⚡ Skills & Tech
                </button>

                <button
                  onClick={() => sendMessage("Show me his projects")}
                  className="p-3 text-left text-xs rounded-xl bg-zinc-800 text-white hover:bg-zinc-700 transition"
                >
                  🚀 Projects
                </button>

                <button
                  onClick={() => sendMessage("What experience does he have?")}
                  className="p-3 text-left text-xs rounded-xl bg-zinc-800 text-white hover:bg-zinc-700 transition"
                >
                  💼 Experience
                </button>

                <button
                  onClick={() => sendMessage("What does he do outside development?")}
                  className="p-3 text-left text-xs rounded-xl bg-zinc-800 text-white hover:bg-zinc-700 transition"
                >
                  🏀 Life Outside Dev
                </button>

                <button
                  onClick={() => sendMessage("How can I contact him?")}
                  className="p-3 text-left text-xs rounded-xl bg-zinc-800 text-white hover:bg-zinc-700 transition"
                >
                  📩 Contact
                </button>

              </div>

            </div>
          )}

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">

            {chat.map((msg, i) => (

              <div
                key={i}
                className={`flex items-end gap-2 ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                {msg.sender === "ai" && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white text-xs">
                    AI
                  </div>
                )}

                <div
                  className={`px-4 py-3 rounded-2xl max-w-[75%] text-sm shadow ${
                    msg.sender === "user"
                      ? "bg-black text-white"
                      : "bg-gradient-to-r from-zinc-800 to-zinc-900 text-white"
                  }`}
                >
                  {msg.text}
                </div>

                {msg.sender === "user" && (
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-xs">
                    You
                  </div>
                )}

              </div>

            ))}

            {loading && (
              <div className="flex items-center gap-2 text-gray-400 text-xs">

                <div className="flex gap-1">

                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>

                </div>

                Van AI is thinking...

              </div>
            )}

            <div ref={chatEndRef}></div>

          </div>

          {/* Input */}
          <div className="flex border-t border-gray-200 dark:border-zinc-700">

            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Ask about Van Mora..."
              className="flex-1 p-3 text-sm outline-none bg-transparent"
            />

            <button
              onClick={() => sendMessage()}
              className="px-4 bg-black text-white text-sm hover:bg-gray-800"
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