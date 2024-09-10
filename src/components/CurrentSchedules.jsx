import React, {useState,useEffect} from "react";
import axios from "axios";

export default function CurrentSchedules(){

const [schedules, setSchedules] = useState([]);

    useEffect(()=>{
             function getSchedules(){
                axios.get("http://localhost:8070/schedule/").then((res) =>{
                    console.log(res.data);
                    setSchedules(res.data)
                }).catch((err)=>{
                    alert(err.message);
                })
             } 
getSchedules();

    },[])



    return(
        <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Current Schedules</h1>

      {schedules.length === 0 ? (
        <p>No schedules available</p>
      ) : (

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {schedules.map((schedule, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
            >
              <h2 className="text-black font-semibold mb-2">
                {schedule.name}
              </h2>
              <p className="text-gray-700">
                <strong>Date:</strong> {schedule.date}
              </p>
              <p className="text-gray-700">
                <strong>Time:</strong> {schedule.Time}
              </p>
              <p className="text-gray-700">
                <strong>Garbage Type:</strong> {schedule.GarbageType}
              </p>
              <p className="text-gray-700">
                <strong>Collection Zone:</strong> {schedule.collectionZone}
              </p>
              <p className="text-gray-700">
                <strong>Assigned Vehicle:</strong> {schedule.AssignedVehicle}
              </p>
              <p className="text-gray-700">
                <strong>Frequency:</strong> {schedule.frequancy}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );

        
      
}