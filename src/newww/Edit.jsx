import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const [storedData, setStoredData] = useState({
        name: "",
        username: "",
        email: ""
    })

    const getData = async ()=>{
        try {
            const res = await axios.get(`http://localhost:3000/users/${id}`)
            console.log("Data", res.data)
            setStoredData(res.data)
        } catch (error) {
            console.log("Error", error)
        }
    }

    const updateUser = async (e)=>{
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:3000/users/${id}`, storedData)
            console.log("Updated users", res.data)
            setStoredData({
                  name: "",
        username: "",
        email: ""
            })

            navigate("/")
        } catch (error) {
            console.log("Error", error)
        }
    }

    const handelChange = (e)=>{
        const {name, value} = e.target
        setStoredData({
            ...storedData,
            [name]: value
        })
    }

    useEffect(()=>{
       getData() 
    }, [])
  return (
    <div className='flex items-center justify-center h-screen'>
      <form onSubmit={updateUser}>
        <label>Name</label>
        <input 
        style={{border: "1px solid black"}}
            type='text'
            name= "name"
            onChange={handelChange}
            value={storedData.name}
        />
        <label>Username</label>
        <input 
        style={{border: "1px solid black"}}
            type='text'
            name= "username"
               onChange={handelChange}
            value={storedData.username}
        />
        <label>Email</label>
        <input 
        style={{border: "1px solid black"}}
            type='text'
            name= "email"
               onChange={handelChange}
            value={storedData.email}
        />

        <button type='submit'
        className='text-white bg-green-300 px-4 py-2 rounded-md mt-2'
        >submit</button>
      </form>
    </div>
  )
}

export default Edit
