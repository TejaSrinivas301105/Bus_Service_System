import React, { useEffect, useState } from "react";
import axios from "axios";

const Detail = ({ selectBusNumber }) => {
  const [busDetail, setBusDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchDetails() {
      try {
        setLoading(true);
        setError("");
        const res = await axios.get(
          `http://localhost:3000/getBuses/${selectBusNumber}`
        );

        if (res.data) {
          setBusDetail(res.data);
        } else {
          setError("No details found for this bus.");
        }
      } catch (err) {
        console.error("Error fetching bus details:", err);
        setError("Failed to load bus details.");
      } finally {
        setLoading(false);
      }
    }

    if (selectBusNumber) {
      fetchDetails();
    }
  }, [selectBusNumber]);

  if (loading) {
    return (
      <p className="text-center text-gray-500 animate-pulse">
        Loading bus details...
      </p>
    );
  }

  if (error) {
    return <p className="text-center text-red-600 font-medium">{error}</p>;
  }

  if (!busDetail) {
    return null;
  }

  return (
    <div className="mt-8 max-w-lg mx-auto bg-gradient-to-br from-white to-gray-50 shadow-xl rounded-2xl p-8 border w-full border-gray-100  overflow-hidden">
      <h2 className="text-2xl font-bold text-indigo-600 mb-6 text-center">
        🚌 Bus {busDetail.BusNumber} Details
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between border-b pb-2">
          <span className="font-semibold text-gray-700">From</span>
          <span className="text-gray-600">{busDetail.FromLocation}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="font-semibold text-gray-700">To</span>
          <span className="text-gray-600">{busDetail.ToLocation}</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="font-semibold text-gray-700">Total Passengers</span>
          <span className="text-gray-600">{busDetail.personCount}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold text-gray-700">Available Seats</span>
          <span
            className={`font-medium ${
              busDetail.No_of_seates - busDetail.personCount > 0
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {busDetail.No_of_seates - busDetail.personCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Detail;

