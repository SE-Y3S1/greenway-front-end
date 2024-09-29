import React, { useState } from "react";
import HeroPrediction from "./components/hero-prediction";
import CityRank from "./components/city-rank";
import CityChart from "./components/city-chart";
import { DatePickerDemo } from "@/components/ui/date-picker";
import { format } from "date-fns";

function PredictionPage() {
  const [date, setDate] = useState(null);
  const [predictionData, setPredictionData] = useState([]);

  const fetchPredictions = async (selectedDate) => {
    try {
      const res = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: selectedDate,
        }),
      });

      const data = await res.json();
      setPredictionData(data);
      console.log("Predictions fetched:", data);
    } catch (error) {
      console.error("Error fetching predictions:", error);
    }
  };

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    const formattedDate = format(selectedDate, "yyyy-MM-dd");
    fetchPredictions(formattedDate);
  };

  return (
    <main>
      <div>
        <HeroPrediction />
        <div className="mt-6">
          <DatePickerDemo onDateChange={handleDateChange} />
        </div>
        <div className="flex justify-center">
          <CityRank predictionData={predictionData} /></div>
      </div>
    </main>
  )
}

export default PredictionPage;