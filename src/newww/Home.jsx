import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Home = () => {
  const [storeData, setStoreData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showPopup, setShowPopup] = useState(false)
    const [deleteId, setDeleteId] = useState(null);

  const getApi = async () => {
    try {
      setLoading(true);
      setError(false);
      const res = await axios.get("http://localhost:3000/users");
      console.log("Data:", res.data);
      setStoreData(res.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  const openPopup = (id)=>{
    setDeleteId(id)
    setShowPopup(true)

  }
  const navigate = useNavigate();

  const deletUser = async (deleteId)=>{
    try {
      const res = await axios.delete(`http://localhost:3000/users/${deleteId}`)
      console.log(res.data)
      const updatateData = storeData.filter((user)=>{
        return user.id !== deleteId
      })

      setStoreData(updatateData)
      setShowPopup(false)
    } catch (error) {
      console.log("Error", error)
    }
  }

  return (

    <div className="flex flex-col items-center justify-center h-screen">

      {!loading && !error && (
        <div className="mb-4">
          <button
            onClick={() => navigate("/add")}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            + Add User
          </button>
        </div>
      )}

      {loading ? 
        <h1>Loading...</h1>
       : error ? <h1>Something Went Wrong</h1> 
      : <div className="flex justify-center">
          <table style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid black", padding: "8px" }}>S.NO</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>Username</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>Email</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {storeData.map((items, index) => (
                <tr key={items.id}>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{index + 1  }</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{items.name}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{items.username}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{items.email}</td>
                  <td style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}
                  className="flex flex-row  gap-3"
                  >
                    <FaEye
                      onClick={() => navigate(`/view/${items.id}`)}
                      style={{ cursor: "pointer" }}
                    />
                     <FaEdit
                      onClick={() => navigate(`/edit/${items.id}`)}
                      style={{ cursor: "pointer" }}
                    />
                     <MdDelete
                      onClick={()=>{
                        openPopup(items.id)
                      }}
                      style={{ cursor: "pointer" }}
                    />
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
        {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-semibold mb-4">
              Are you sure you want to delete this user?
            </h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  deletUser(deleteId)
                  setShowPopup(false);
                }}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};




export default Home;
