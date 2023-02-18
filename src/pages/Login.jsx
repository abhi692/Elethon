import React from 'react';
import loginBackground from "../assests/loginBackground.jpg";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
            <img className='w-full h-full object-cover' src="background for elethon.png" alt=""/>
        </div>

        <div className='bg-purple-700 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-purple-800 p-8 px-8 rounded-lg'>
                <h2 className='text-4xl dark:text-white font-bold text-center'>Sign In</h2>
                <div className='flex flex-col text-black-800 py-2'>
                    <label>Email ID</label>
                    <input className='p-2 rounded-lg bg-purple-100 mt-2 p-2 focus:border-blue-500 focus:bg-black-1000 focus:outline-none' type="text"/>
                </div>
                <div className='flex flex-col text-black-800 py-2'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg bg-purple-100 mt-2 p-2 focus:border-blue-500 focus:bg-black-1000 focus:outline-none' type="password"/>
                </div>
                <div className='flex justify-between text-black-800 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox"/>Remember Me</p>
                    <p>Forgot Password</p>
                </div>
                <button className='w-full my-5 py-2 bg-teal-400 shadow-lg shadow-teal-600/100 hover:shadow-teal-600/40 text-white font-semibold rounded-lg'>Sign In</button>
            </form>
        </div>
    </div>
  )
}

export default Login;