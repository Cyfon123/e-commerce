import React from 'react'
import Admin from '../Admin/Admin'
import { Route, Routes } from 'react-router-dom'

const AdminRouters = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Admin/>}></Route>
      </Routes>
    </div>
  )
}

export default AdminRouters