import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/account');
  };

  const isFormValid = email !== '' && password !== '';

    
  return (
        <div className=" w-full min-h-screen bg-gray-50 p-6 font-[Rubik]">

            <div className="w-full max-w-md flex flex-col gap-3">
                <div className="flex flex-col gap-2">

                    <h1 className="text-2xl font-bold text-gray-800">
                        Signin to your <br/>PopX account
                    </h1>
                    <p className="text-md text-gray-400">
                        Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,
                    </p>
              </div>
              
                <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold w-[29%] text-violet-600 bg-[#fcfbfb] px-1 relative z-10 left-2 top-4">
                        Email Address
                    </label>
                    <input
                        type="email"
                        placeholder="Enter email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-[45px] px-4 py-2 border border-gray-200 rounded-md text-md text-gray-800 outline-none transition-all duration-400 ease-in-out focus:border-violet-600 placeholder:text-gray-300"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold w-[20%] text-violet-600 bg-[#fcfbfb] px-1 relative z-10 left-2 top-4">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full h-[45px] px-4 py-2 border border-gray-300 rounded-md text-md text-gray-800 outline-none transition-all duration-400 ease-in-out focus:border-violet-600 placeholder:text-gray-300"
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={!isFormValid}
                    className={`w-full h-[45px] rounded-md font-semibold transition-all ease-in-out duration-400 ${
                        isFormValid
                        ? 'bg-violet-600 text-white hover:bg-violet-700 cursor-pointer'
                        : 'bg-gray-300 text-white cursor-not-allowed'
                    }`}>
                    Login
                </button>
            </div>
        </div>
    );
};
