import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaStarOfLife } from "react-icons/fa";

export default function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [mobileNum, setMobileNum] = useState("");
    const [password, setPassword] = useState("");
    const [mail, setMail] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [radio, setRadio] = useState("");

    const result =
        name !== "" &&
        mobileNum !== "" &&
        password !== "" &&
        mail !== "" &&
        radio !== "";

    return (
        <div className="h-screen w-full flex flex-col items-center justify-between px-4 py-6 gap-4 font-[Rubik] bg-[#fcfbfb]">
            <div className="w-full max-w-md flex flex-col gap-4">
                <h1 className="text-2xl font-bold text-gray-900">Create your <br/> PopX account</h1>

                <div className="flex flex-col gap-2">
                    {/* Full Name */}
                    <div className="flex flex-col">
                        <label className="text-xs font-bold w-[23%] text-violet-600 bg-[#fcfbfb] px-1 relative z-10 left-2 top-2">
                            Full Name <FaStarOfLife className="inline-block text-[6px] text-red-600 mb-[3px]" />
                        </label>
                        <input
                            type="text"
                            placeholder="Enter full name"
                            className="w-full h-[40px] px-4 border border-gray-200 rounded-md text-md text-gray-800 outline-none transition-all duration-400 ease-in-out focus:border-violet-600 placeholder:text-gray-300"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>

                {/* Phone Number */}
                <div className="flex flex-col">
                    <label className="text-xs font-bold w-[32%] text-violet-600 bg-[#fcfbfb] px-1 relative z-10 left-2 top-2">
                        Phone Number <FaStarOfLife className="inline-block text-[6px] text-red-600 mb-[3px]" />
                    </label>
                    <input
                        type="text"
                        placeholder="Enter phone number"
                        className="w-full h-[40px] px-4 border border-gray-200 rounded-md text-md text-gray-800 outline-none transition-all duration-400 ease-in-out focus:border-violet-600 placeholder:text-gray-300"
                        onChange={(e) => setMobileNum(e.target.value)}
                        value={mobileNum}
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                    <label className="text-xs font-bold w-[16%] text-violet-600 bg-[#fcfbfb] px-1 relative z-10 left-2 top-2">
                        Email <FaStarOfLife className="inline-block text-[6px] text-red-600 mb-[3px]" />
                    </label>
                    <input
                        type="email"
                        placeholder="Enter email address"
                        className="w-full h-[40px] px-4 border border-gray-200 rounded-md text-md text-gray-800 outline-none transition-all duration-400 ease-in-out focus:border-violet-600 placeholder:text-gray-300"
                        onChange={(e) => setMail(e.target.value)}
                        value={mail}
                    />
                </div>

                {/* Password */}
                <div className="flex flex-col">
                    <label className="text-xs font-bold w-[23%] text-violet-600 bg-[#fcfbfb] px-1 relative z-10 left-2 top-2">
                        Password <FaStarOfLife className="inline-block text-[6px] text-red-600 mb-[3px]" />
                    </label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        className="w-full h-[40px] px-4 border border-gray-200 rounded-md text-md text-gray-800 outline-none transition-all duration-400 ease-in-out focus:border-violet-600 placeholder:text-gray-300"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                {/* Company Name */}
                <div className="flex flex-col">
                    <label className="text-xs font-bold w-[30%] text-violet-600 bg-[#fcfbfb] px-1 relative z-10 left-2 top-2">
                        Company Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter company name"
                        className="w-full h-[40px] px-4 border border-gray-200 rounded-md text-md text-gray-800 outline-none transition-all duration-400 ease-in-out focus:border-violet-600 placeholder:text-gray-300"
                        onChange={(e) => setCompanyName(e.target.value)}
                        value={companyName}
                    />
                </div>

                {/* Radio Buttons */}
                <div className="flex flex-col gap-3">
                    <p className="text-sm font-medium text-gray-800">
                        Are you an agency? <FaStarOfLife className="inline-block text-[6px] text-red-600 mb-[3px]" />
                    </p>
                    <div className="flex gap-6 text-sm">
                        <label className="flex items-center gap-2 cursor-pointer text-gray-800">
                            <input
                                type="radio"
                                name="choice"
                                value="yes"
                                className="accent-violet-600 w-4 h-4"
                                onChange={() => setRadio("yes")}
                            />
                            Yes
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer text-gray-800">
                            <input
                                type="radio"
                                name="choice"
                                value="no"
                                className="accent-violet-600 w-4 h-4"
                                onChange={() => setRadio("no")}
                            />
                            No
                        </label>
                    </div>
                </div>
                </div>
            </div>

            {/* Button */}
            <button className={`w-full max-w-md h-[45px] rounded-[6px] font-medium text-white transition-all duration-400 ease-in-out 
                ${result ? "bg-violet-600 hover:bg-violet-700 cursor-pointer" : "bg-gray-300 cursor-not-allowed" }`}
                onClick={() => navigate("/login")}>
                Create Account
            </button>
        </div>
    );
};


