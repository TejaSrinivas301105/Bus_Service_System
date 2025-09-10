
import React, { useState } from "react";
import axios from "axios";
import { ArrowDownUp,Mic } from "lucide-react";
import VoiceSearch from "./VoiceSearch.jsx";
import Detail from "../Pages/Detail.jsx";

const  Card = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [Buses, setBuses] = useState([]);
  const [selectbus, setSeleted] = useState(null);
  
  
  async function handlesubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:3000/getBuses/${from}/${to}`);
      if(res.data && res.data.buses && res.data.buses.length > 0){
        setBuses(res.data.buses);
      }else{
        setBuses([]);
      }
      console.log("Buses:", res.data.buses);
    } catch (e) {
      console.log("Error while fetching data!", e);
      setBuses([]);
    }
  }

  return (
    <div className="relative flex  flex-col items-center h-full justify-center m-10">
      {/* Card container */}
      <div className="relative bg-white/20 border border-white/30 shadow-xl p-6 rounded-2xl w-full max-w-5xl overflow-hidden">
        {/* Background image inside card */}
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/040/171/979/small/ai-generated-luxury-coach-bus-on-highway-at-sunset-road-trip-travel-concept-photo.jpeg"
          alt="bus background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

        {/* Foreground content */}
        <div className="relative z-10">
          <h1 className="text-xl font-bold text-white text-center mb-6">
            Plan your Journey
          </h1>

          <form className="space-y-5" onSubmit={handlesubmit}>
            {/* From Field */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-white mb-1">From</label>
              <VoiceSearch onTextChange={setFrom}/>
            </div>

            {/* Icon Divider */}
            <div className="flex justify-center">
              <div className="p-2 bg-white/50 rounded-full shadow">
                <ArrowDownUp className="w-5 h-5 text-blue-700" />
              </div>
            </div>

            {/* To Field */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-white mb-1">To</label>
              <VoiceSearch onTextChange={setTo}/>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600/80 text-white font-semibold py-2 rounded-lg hover:bg-blue-700/90 transition-all active:scale-99"
            >
              Find my Bus
            </button>
          </form>          
        </div>
      </div>

      <div className="relative shadow-xl p-6 rounded-2xl w-full max-w-5xl overflow-hidden">
        {Array.isArray(Buses) && Buses.length > 0 ? (
          <div className="mt-6 bg-amber-600 rounded-lg p-4">
            <h2 className="font-bold mb-2">Available Buses</h2>
            <ul className="space-y-2">
              {Buses.map((bus, index) => (
                <li key={index}>
                  <button
                    className="w-full px-4 py-3 rounded-lg bg-black text-white font-semibold shadow-md hover:bg-amber-800 transition-all active:scale-95 cursor-pointer"
                    onClick={() => setSeleted(bus.BusNumber)}
                  >
                    {console.log(bus.BusNumber)}
                    {bus.BusNumber} – {bus.FromLocation} → {bus.ToLocation}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="mt-6 bg-amber-600 rounded-lg p-4">
            <h2 className="font-bold mb-2">Available Buses</h2>
            <ul>
              <li className="border-b pb-2">No bus found</li>
            </ul>
          </div>
        )}
      </div>
      {selectbus && <Detail selectBusNumber = {selectbus}/>}
    </div>
  );
};

export default Card;




