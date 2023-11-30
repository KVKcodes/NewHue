import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AuthProvider } from './components/auth';
import Gallery from './components/Gallery';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/LandingComponents/ForgotPassword';
import { useAuth } from "./components/auth";

function App() {
  
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/ForgotPassword' element={<ForgotPassword />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;