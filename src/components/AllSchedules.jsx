import React, {useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AllSchedules(){

    const navigate = useNavigate();
   
    const [schedules, setSchedules] = useState([]);

    useEffect(()=>{
             function getSchedules(){
                axios.get("http://localhost:5000/schedule/").then((res) =>{
                    console.log(res.data);
                    setSchedules(res.data)
                }).catch((err)=>{
                    alert(err.message);
                })
             } 
getSchedules();
},[])

// Function to handle the delete request
const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this schedule?")) {
      axios
        .delete(`http://localhost:5000/schedule/delete/${id}`)
        .then(() => {
          alert("Schedule deleted successfully");
          // Remove the deleted schedule from state
          setSchedules(schedules.filter((schedule) => schedule._id !== id));
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

// Update button handler
const handleUpdate = (id) => {
    navigate(`/update/${id}`); // Redirect to the update page with the schedule ID
  };


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

              {/* Add buttons for Update and Delete */}
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => handleUpdate(schedule._id)}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(schedule._id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>


);

        
      
}
