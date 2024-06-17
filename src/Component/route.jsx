import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Page/Home/Home'
import Login from '../Page/Auth/Auth'

function AllRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default AllRouter;
