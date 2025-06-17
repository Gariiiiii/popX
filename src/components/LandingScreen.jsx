import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LandingScreen() {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col justify-end h-full w-full'>
            <div className='mt-auto h-[30%] mb-[50px] p-5'>
                <div className='w-full'>
                    <h1 className='text-gray-900 text-3xl font-bold font-[Rubik] m-0'>
                        Welcome to PopX
                    </h1>
                    <p className='text-gray-400 text-md my-1 mb-3.5'>
                        Lorem ipsum dolor sit amet,<br />
                        consectetur adipiscing elit,
                    </p>
                </div>

                <div className="w-full flex flex-col items-center">
                    <button className="w-full h-[45px] rounded-md text-center my-1.5 bg-violet-600 hover:bg-violet-700 transition-all duration-400 ease-in-out text-white font-medium text-sm font-[Rubik] cursor-pointer" onClick={() => navigate('/sign-up')}>
                        Create Account
                    </button>
                    <button className="w-full h-[45px] rounded-md text-center my-1.5 bg-violet-600/20 hover:bg-violet-600/25 transition-all duration-400 ease-in-out text-gray-700 font-bold text-sm font-[Rubik] cursor-pointer" onClick={() => navigate('/login')} >
                        Already Registered? Login
                    </button>
                </div>
            </div>
        </div>
    )
}

