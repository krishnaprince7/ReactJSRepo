import React from 'react'
import Home from './newww/Home'

import { Routes, Route } from 'react-router-dom'
import ViewData from './newww/viewData'
import AddUsers from './newww/AddUsers'
import Edit from './newww/Edit'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/view/:id" element={<ViewData/>} />
        <Route path="/add" element={<AddUsers/>} />
        <Route path="/edit/:id" element={<Edit/>} />
      </Routes>
    </div>
  )
}

export default App
