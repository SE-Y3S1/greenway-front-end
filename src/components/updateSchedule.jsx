import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateSchedule() {
  const { id } = useParams(); // Get the schedule ID from the URL
  const [schedule, setSchedule] = useState({
    name: "",
    date: "",
    Time: "",
    GarbageType: "",
    collectionZone: "",
    AssignedVehicle: "",
    frequancy: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the schedule data by ID
    axios.get(`http://localhost:5000/schedule/${id}`)
      .then((res) => setSchedule(res.data))
      .catch((err) => alert(err.message));
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchedule((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission for update
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/schedule/update/${id}`, schedule)
      .then(() => {
        alert("Schedule updated successfully");
        navigate("/current"); // Navigate back to the schedule listing page
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Update Schedule</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
        <div className="form-group">
          <label htmlFor="name" className="block text-gray-700 font-semibold">Schedule Name</label>
          <input
            type="text"
            name="name"
            value={schedule.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
          />
        </div>
        <div className="form-group">
          <label htmlFor="date" className="block text-gray-700 font-semibold">Schedule Date</label>
          <input
            type="date"
            name="date"
            value={schedule.date}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Time" className="block text-gray-700 font-semibold">Scheduled Time</label>
          <input
            type="text"
            name="Time"
            value={schedule.Time}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
          />
        </div>
        <div className="form-group">
          <label htmlFor="GarbageType" className="block text-gray-700 font-semibold">Garbage Type</label>
          <input
            type="text"
            name="GarbageType"
            value={schedule.GarbageType}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
          />
        </div>
        <div className="form-group">
          <label htmlFor="collectionZone" className="block text-gray-700 font-semibold">Collection Zone</label>
          <input
            type="text"
            name="collectionZone"
            value={schedule.collectionZone}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
          />
        </div>
        <div className="form-group">
          <label htmlFor="AssignedVehicle" className="block text-gray-700 font-semibold">Assigned Vehicle</label>
          <input
            type="text"
            name="AssignedVehicle"
            value={schedule.AssignedVehicle}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
          />
        </div>
        <div className="form-group">
          <label htmlFor="frequancy" className="block text-gray-700 font-semibold">Frequency</label>
          <input
            type="text"
            name="frequancy"
            value={schedule.frequancy}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Update Schedule
        </button>
      </form>
    </div>
  );
}
