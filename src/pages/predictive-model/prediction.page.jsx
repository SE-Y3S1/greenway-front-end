import React, { useState, useEffect } from "react";
import HeroPrediction from "./components/hero-prediction";
import CityRank from "./components/city-rank";
import CityChart from "./components/city-chart";
import { DatePickerDemo } from "@/components/ui/date-picker";
import { format, startOfWeek, endOfWeek } from 'date-fns';

function PredictionPage() {
  const [date, setDate] = useState(new Date());
  const [predictionData, setPredictionData] = useState([]);
  const [weekRange, setWeekRange] = useState("");

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

  useEffect(() => {
    const formattedDate = format(date, "yyyy-MM-dd");
    fetchPredictions(formattedDate);
  }, []);

  const calculateWeekRange = (selectedDate) => {
    const startOfTheWeek = startOfWeek(selectedDate, { weekStartsOn: 0 }); // Start on Sunday
    const endOfTheWeek = endOfWeek(selectedDate, { weekStartsOn: 0 }); // End on Saturday
    const formattedStart = format(startOfTheWeek, "yyyy-MM-dd");
    const formattedEnd = format(endOfTheWeek, "yyyy-MM-dd");
    setWeekRange(`${formattedStart} - ${formattedEnd}`);
  };

  useEffect(() => {
    const formattedDate = format(date, "yyyy-MM-dd");
    fetchPredictions(formattedDate);
    calculateWeekRange(date);
  }, [date]);

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    const formattedDate = format(selectedDate, "yyyy-MM-dd");
    fetchPredictions(formattedDate);
    calculateWeekRange(selectedDate);
  };

  return (
    <main>
      <div>
        <HeroPrediction />
        <div className="mt-6">
        <DatePickerDemo onDateChange={handleDateChange} selectedDate={date} />
        </div>
        <div className="mt-4">
          <h3>Week: {weekRange}</h3>
        </div>
        <div className="flex justify-center">
          <CityRank predictionData={predictionData} /></div>
      </div>
    </main>
  )
}

export default PredictionPage;