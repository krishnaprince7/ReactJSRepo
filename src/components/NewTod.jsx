import React, { useState } from 'react'

const App = () => {
  // let arr = [1, 2, 3]
  const [input, setInput] = useState("")
  const [store, setStore] = useState([])

  const handelChange = (e)=>{
    setInput(e.target.value)
    console.log(e.target.value)
  }

  const addItems = ()=>{
    setStore([input, ...store])
    console.log([...store])
    setInput("")
     n

  }

  const  handelDelete = ()=>{
    const newArr = [...store]
    newArr.pop()
    setStore(newArr)
    console.log("Deleted")
    console.log(store)
  }


  return (
    <div className='bg-black/80 h-screen flex items-center justify-center'>
    <input type="text"
      value={input}
      onChange={handelChange}
    />
    <button
    onClick={addItems}
     className='bg-green-600 text-white px-4 py-2 rounded-md ml-2'>
      Add item
    </button>
      <div>
        {
          store.map((items)=>(
            <div>
            <ul>
              <li>{items}</li>
            </ul>
            </div>
          ))
        }
<button 
onClick={handelDelete}
className='bg-red-200 px-4 py-2 rounded-md ml-10'>Delete</button>
      </div>
    </div>

  )
}

export default App
