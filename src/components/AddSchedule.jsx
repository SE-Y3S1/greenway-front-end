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

  

  function sendData(e){
    e.preventDefault();
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
        alert(err)
       })

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