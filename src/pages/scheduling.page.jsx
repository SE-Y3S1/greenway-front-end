import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CurrentSchedules from '@/components/CurrentSchedules';
import AllSchedules from '@/components/AllSchedules';
import jsPDF from "jspdf";
import axios from "axios";

function SchedulingPage(){
    const [schedules, setSchedules] = useState([]);
  
  // Fetch schedules data
  useEffect(() => {
    axios
      .get("http://localhost:5000/schedule")
      .then((res) => setSchedules(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

    const navigate = useNavigate();
    // State to control form visibility
   

    // Function to handle button click and show the form
    const handleShowForm = () => {
        navigate('/addSchedule');
    };
    const handleReport = () => {
        const doc = new jsPDF();
    
        // Add the title and general info
        doc.text("Garbage Collection Report", 10, 10);
        doc.text(`Number of Schedules: ${schedules.length}`, 10, 20);
        
        let startY = 30; // Starting Y position for schedule details
    
        // Iterate through the schedules and add them to the PDF
        schedules.forEach((schedule, index) => {
          doc.text(`Schedule ${index + 1}: ${schedule.name}`, 10, startY);
          doc.text(`  Date: ${schedule.date}`, 10, startY + 10);
          doc.text(`  Time: ${schedule.Time}`, 10, startY + 20);
          doc.text(`  Garbage Type: ${schedule.GarbageType}`, 10, startY + 30);
          doc.text(`  Collection Zone: ${schedule.collectionZone}`, 10, startY + 40);
          doc.text(`  Assigned Vehicle: ${schedule.AssignedVehicle}`, 10, startY + 50);
          doc.text(`  Frequency: ${schedule.frequancy}`, 10, startY + 60);
          startY += 70; // Move down for the next schedule
        });
    
        // Save the PDF
        doc.save("garbage_collection_report.pdf");
      };
    

    return(
        <div>
        <h2 className="text-center">Schedule management</h2>
        <div className="flex justify-center"></div>
        <button onClick={handleShowForm} className="bg-green-600 text-white p-3 rounded-md hover:bg-red-700 transition duration-300">
                Add New Schedule
            </button>
            
            <AllSchedules/>
            <div className="flex justify-center">
            <button onClick={handleReport} className="bg-green-600 text-white p-3 rounded-md hover:bg-red-700 transition duration-300">
                Generate Report
            </button>   
            </div> 

        </div>
    );
}

export default SchedulingPage;