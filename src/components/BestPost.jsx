import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    Address: "",
    phone_no: "",
  });

  const [error, seterror] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    seterror(false);
    try {
      const res = await axios.post("https://example.com/api/data", formData);
      console.log("Data Post", res.data);
      setFormData({
        name: "",
        Address: "",
        phone_no: "",
      });
    } catch (error) {
      seterror(true);
      console.log("Error frond while posting the data", error);
    }
  };
  return (
    <div className="bg-black/80 h-screen flex items-center justify-center">
      <form onSubmit={handelSubmit} className="flex flex-col ">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {error && <h1>Error Found</h1>}

        <label>Addresh:</label>
        <input
          type="text"
          name="Address"
          value={formData.Address}
          onChange={handleChange}
        />
        <label>phone No:</label>
        <input
          type="text"
          name="phone_no"
          value={formData.phone_no}
          onChange={handleChange}
        />
        <button type="submit" className="bg-red-300 mt-5 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
