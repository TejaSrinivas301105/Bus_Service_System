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
    <div className="flex w-full items-center space-x-2">
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          onTextChange(e.target.value);  
        }}
        placeholder="Speak or type here"
        className="px-4 py-2 rounded-lg bg-white/40 text-gray-900 placeholder-gray-700 
                   focus:ring-2 focus:ring-blue-500 outline-none flex-1"
      />
      <button
        type="button"
        onClick={startListening}
        className={`px-4 py-2 rounded-lg text-white font-semibold transition-all
          ${listening ? "bg-red-500 animate-pulse" : "bg-blue-600 hover:bg-blue-800"}`}
      >
        <Mic className="inline-block mr-1" />
        {listening ? "Listening..." : "Speak"}
      </button>
    </div>
  );
}
