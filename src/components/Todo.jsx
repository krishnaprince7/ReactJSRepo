import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/oprationFolder/Home'
import ViewData from './components/oprationFolder/ViewData'
import AddUsers from './components/oprationFolder/AddUsers'
import EditUser from './components/oprationFolder/EditUser'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/users/:id" element={<ViewData/>} />
        <Route path="/add-user" element={<AddUsers/>} />
        <Route path="/users-edit/:id" element={<EditUser/>} />
       
      </Routes>
      </BrowserRouter>
  )
}

export default App
