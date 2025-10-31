import React, { useState } from "react";
import { Mic } from "lucide-react";

export default function VoiceSearch({ onTextChange }) {
  const [text, setText] = useState("");        
  const [listening, setListening] = useState(false);

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser 😔");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();
    setListening(true);

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      setText(spokenText);              
      onTextChange(spokenText);        
      setListening(false);
    };

    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
  };

  return (
    <div className="flex w-full items-center space-x-3 bg-white/50 backdrop-blur-md rounded-xl p-2 border border-white/30 shadow-inner">
  <input
    type="text"
    value={text}
    onChange={(e) => {
      setText(e.target.value);
      onTextChange(e.target.value);
    }}
    placeholder="Speak or type here..."
    className="px-4 py-2 rounded-lg bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 flex-1"
  />
  <button
    type="button"
    onClick={startListening}
    className={`px-4 py-2 rounded-xl text-white font-semibold transition-all duration-300 shadow-md
      ${listening ? "bg-red-500 animate-pulse" : "bg-gradient-to-r from-blue-600 to-amber-600 hover:scale-105 hover:shadow-lg"}`}
  >
    <Mic className="inline-block mr-1" />
    {listening ? "Listening..." : "Speak"}
  </button>
</div>

  );
}
