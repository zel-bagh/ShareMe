import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './containers/Login';
import Home from './containers/Home';
import { GoogleOAuthProvider } from '@react-oauth/google';



import React from 'react'

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  )
}

export default App
