import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import logo from '../assets/logowhite.png';
import shareVideo from '../assets/share.mp4';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin, googleLogout } from '@react-oauth/google';

const Login = () => {
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
            src={shareVideo}
            type="video/mp4"
            loop
            autoPlay
            muted
            className="w-full h-full object-cover"
        />
        
      </div>
    </div>
  )
}

export default Login
