import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CurrentSchedules from '@/components/CurrentSchedules';
import AllSchedules from '@/components/AllSchedules';

function SchedulingPage(){

    const navigate = useNavigate();
    // State to control form visibility
   

    // Function to handle button click and show the form
    const handleShowForm = () => {
        navigate('/addSchedule');
    };

    return(
        <div>
        <h2 className="text-center">Schedule management</h2>
        <div className="flex justify-center"></div>
        <button onClick={handleShowForm} className="bg-green-600 text-white p-3 rounded-md hover:bg-red-700 transition duration-300">
                Add New Schedule
            </button>
            
            <AllSchedules/>

        </div>
    );
}

export default SchedulingPage;