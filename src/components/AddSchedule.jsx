import React,{useState} from "react"
import axios from "axios";



export default function AddSchedule(){
   
  const[name, setName] = useState("");
  const[date,setDate] = useState("");
  const[Time,setTime] = useState("");
  const[GarbageType,setGarbagetype] = useState("");
  const[collectionZone,setcollectionZone] = useState("");
  const[AssignedVehicle,setVehicle] = useState("");
  const[frequancy,setFrequancy] = useState("");

  // State for validation errors
  const [errors, setErrors] = useState({});

  function validateForm() {
    let formErrors = {};
  
    // Schedule name validation
    if (!name) formErrors.name = "Schedule name is required.";
  
    // Schedule date validation
    if (!date) formErrors.date = "Schedule date is required.";
  
    // Scheduled time validation
    const timePattern = /^(0[0-9]|1[0-2])\.[0-5][0-9](AM|PM)$/; // Time format HH.MMAM/PM
    if (!Time) {
      formErrors.Time = "Scheduled time is required.";
    } else if (!timePattern.test(Time)) {
      formErrors.Time = "Scheduled time must be in the format HH.MMAM/PM (e.g., 10.30AM).";
    }
  
    // Garbage type validation
    if (!GarbageType) {
      formErrors.GarbageType = "Garbage type is required.";
    } else if (/\d/.test(GarbageType)) { // Check for digits
      formErrors.GarbageType = "Garbage type cannot contain numbers.";
    }
  
    // Collection zone validation
    if (!collectionZone) {
      formErrors.collectionZone = "Collection zone is required.";
    } else if (/\d/.test(collectionZone)) { // Check for digits
      formErrors.collectionZone = "Collection zone cannot contain numbers.";
    }
  
    // Assigned vehicle validation for the format WP-QW-1545
    const vehiclePattern = /^[A-Z]{2}-[A-Z]{2}-\d{4}$/; // Format: WP-QW-1545
    if (!AssignedVehicle) {
      formErrors.AssignedVehicle = "Assigned vehicle is required.";
    } else if (!vehiclePattern.test(AssignedVehicle)) {
      formErrors.AssignedVehicle = "Assigned vehicle must be in the format WP-QW-1545.";
    }
  
    // Frequency validation
    if (!frequancy) {
      formErrors.frequancy = "Frequency is required.";
    } else if (/\d/.test(frequancy)) { // Check for digits in frequency
      formErrors.frequancy = "Frequency cannot contain numbers.";
    }
  
    return formErrors;
  }
  

  function sendData(e){
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

       const newSchedule ={
            name,
            date,
            Time,
            GarbageType,
            collectionZone,
            AssignedVehicle,
            frequancy


       }

       axios.post("http://localhost:5000/schedule/add",newSchedule).then(()=> {
        alert("Schedule added")
       }).catch((err)=>{
        alert(err);
       });

  }


  return (
    <div className="flex justify-center items-center min-h-screen bg-green-100">
      <div className="w-full max-w-lg p-15">
        <form className="space-y-6 bg-gray p-8 rounded-lg shadow-lg" onSubmit={sendData}>
          <div className="form-group">
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Schedule name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Schedule name"
              className="form-control w-full p-3 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>{
                setName(e.target.value);
              }}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="date" className="block text-gray-700 font-semibold">
              Schedule date
            </label>
            <input
              type="date"
              id="date"
              placeholder="Enter Scheduled date"
              className="form-control w-full p-3 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>{
                setDate(e.target.value);
              }}
            />
             {errors.date && <p className="text-red-500">{errors.date}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="Time" className="block text-gray-700 font-semibold">
              Scheduled time
            </label>
            <input
              type="text"
              id="Time"
              placeholder="Enter Scheduled time"
              className="form-control w-full p-3 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>{
                setTime(e.target.value);
              }}
            />
             {errors.Time && <p className="text-red-500">{errors.Time}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="GarbageType" className="block text-gray-700 font-semibold">
              Garbage type
            </label>
            <input
              type="text"
              id="GarbageType"
              placeholder="Enter Garbage type"
              className="form-control w-full p-3 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>{
                setGarbagetype(e.target.value);
              }}
            />
            {errors.GarbageType && <p className="text-red-500">{errors.GarbageType}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="collectionZone" className="block text-gray-700 font-semibold">
              Collection Zone
            </label>
            <input
              type="text"
              id="collectionZone"
              placeholder="Enter collection zone"
              className="form-control w-full p-3 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>{
                setcollectionZone(e.target.value);
              }}
            />
            {errors.collectionZone && <p className="text-red-500">{errors.collectionZone}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="AssignedVehical" className="block text-gray-700 font-semibold">
              Assigned Vehicle
            </label>
            <input
              type="text"
              id="AssignedVehical"
              placeholder="Enter Assigned Vehicle"
              className="form-control w-full p-3 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>{
                setVehicle(e.target.value);
              }}
            />
             {errors.AssignedVehicle && <p className="text-red-500">{errors.AssignedVehicle}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="frequancy" className="block text-gray-700 font-semibold">
              Schedule frequency
            </label>
            <input
              type="text"
              id="frequancy"
              placeholder="Enter Schedule frequency"
              className="form-control w-full p-3 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>{
                setFrequancy(e.target.value);
              }}
            />
             {errors.frequancy && <p className="text-red-500">{errors.frequancy}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-black p-3 rounded-md hover:bg-red-700 transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );


}