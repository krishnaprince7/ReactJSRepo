import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddUsers = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ 
        ...formData, 
        [name]: value 
    })
  }


  const postData = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:3000/users", formData)
      console.log("Post Data:", res.data)

      setFormData({ name: "", username: "", email: "" })
      navigate("/")
    } catch (error) {
      console.log("Error:", error)
    }
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <form onSubmit={postData} className="flex flex-col gap-3 border p-4 rounded">
        <label>Name:</label>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Enter your name'
          style={{ border: "1px solid black", paddingLeft: "5px" }}
        />
        <label>Username:</label>
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
          placeholder='Enter username'
          style={{ border: "1px solid black", paddingLeft: "5px" }}
        />
        <label>Email:</label>
        <input
          type='text'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter email'
          style={{ border: "1px solid black", paddingLeft: "5px" }}
        />
        <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddUsers
