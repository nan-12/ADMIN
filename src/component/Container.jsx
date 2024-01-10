import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from "./Login"
import Header from "./Header"
import SignUp from "./SignUp"
export default function Container() {
  return (
    <>
<div className='container-fluid px-0'>
    <div className='row mx-0'>
        <div className='col-md-12 px-0'>
            <Header></Header>
        </div>
       <div className='col-md-12'>
       <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
       </div>
    </div>
</div>
   
    </>
  )
}
