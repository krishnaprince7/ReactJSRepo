import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'

const App = () => {



  const [show, setShow] = useState()
 
  const [deleteId, setDeleteId] = useState(null)
  const qureyClient = useQueryClient

  const getApi = async ()=>{
    const res = await axios.get("http://localhost:5000/users")
    console.log("Data", res.data)
    return res.data
  }

  const {data} = useQuery({
    queryKey: ["users"],
    queryFn: getApi
  })




  //delete the Data   const [show, setShow] = useState()
  const handelDelete = (id)=>{
    setDeleteId(id)
    setShow(true)
  }

  const conformDelete = async ()=>{
   await axios.delete(`http://localhost:5000/users/${deleteId}`)
    setDeleteId(null)
    setShow(false)

    qureyClient.invalidateQueries()
    
  }



  return (
    <div className='flex items-center justify-center h-screen'>
    <div className='bg-black px-10 py-4'>
      {
        data?.map((items)=>(
          <div
          key={items.id}
           className='bg-red-300 flex gap-5 mt-2 px-2 py-2 rounded-md'>
          <h1 className='text-white font-bold'>{items.name}</h1>
          <h1 className='text-white font-bold'>{items.email}</h1>
          <button className='bg-red-400 px-4 py-2 rounded-md'
          onClick={()=>{
            handelDelete(items.id)
          }}
          >
            Delete  
          </button>
          </div> 
        ))
      }

     {
  show && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[300px] text-center">
        
        <h1 className="text-lg font-semibold text-gray-800 mb-4">
          Are you sure you want to delete this item?
        </h1>

        <div className="flex justify-center gap-4 mt-3">

          <button 
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            onClick={conformDelete}  
          >
            Delete
          </button>

          <button 
            className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400 transition"
            onClick={() => setShow(false)}
          >
            Cancel
          </button>

        </div>
      </div>
    </div>
  )
}

    </div>
     
    </div>
  )
}

export default App
