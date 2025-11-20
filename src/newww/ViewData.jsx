import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ViewData = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
  });

  const [loading, setLoading] = useState(false)

  const getApi = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`http://localhost:3000/users/${id}`);
      console.log("Data by Id:", res.data);
      setFormData(res.data);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getApi();
  }, []);


  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center h-screen">
    
      <div className="p-6 border rounded-lg shadow-md w-[400px]">
      {
        loading ? <h1>Loading..</h1> :
        <div>
 <h1 className="text-xl font-bold mb-4 text-center">User Details</h1>

        <button className="bg-blue-400 px-4 py-2 rounded-md text-white"
        onClick={(()=>{
          navigate(-1)
        })}
        >
          Back
        </button>

        <div className="flex flex-col gap-3">
          <input
          readOnly
            type="text"
            name="name"
            value={formData.id}

      
          />
          <input
          readOnly
            type="text"
            name="name"
            value={formData.name}
          />

          <input
          readOnly
            type="text"
            name="username"
            value={formData.username}
          />

          <input
          readOnly
            type="email"
            name="email"
            value={formData.email}
          />
          <input
          readOnly
            type="text"
            name="phone"
            value={formData.phone} 
          />
        </div>
        </div>

      }
       
      </div>
    </div>
  );
};

export default ViewData;
