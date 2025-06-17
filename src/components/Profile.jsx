import { FaCamera } from "react-icons/fa";

export default function Profile() {
    return (
        <div className="w-full h-full flex flex-col gap-4 font-[Rubik]">
      
        {/* Heading */}
        <h1 className="text-lg font-medium text-gray-900 text-left pl-3 py-3 bg-white w-full">
            Account Settings
        </h1>

        {/* Profile Info */}
        <div className="flex flex-col items-center px-3 py-2 w-full gap-6">

            <div className="flex items-center w-full gap-4">
            
                {/* Profile Picture */}
                <div className="relative w-[80px] h-[80px] flex flex-col items-start justify-center">
                    <img src="/Ellipse 114@2x.png"
                        alt="Profile"
                        className="w-[80px] h-[80px] object-cover rounded-full border border-gray-300"/>
                    <div className="absolute bottom-0 left-[55px] bg-[oklch(0.541_0.281_293.009)] rounded-full h-[20px] w-[20px] flex items-center justify-center">
                        <FaCamera className="fas fa-camera text-white text-[10px]" />
                    </div>
                </div>

                {/* Name & Email */}
                <div className="flex flex-col justify-center items-start">
                    <h1 className="text-md font-bold text-gray-800">Marry Doe</h1>
                    <p className="text-sm text-gray-500 lowercase">Marry@Gmail.com</p>
                </div>
            </div>

            {/* Description */}
            <div className="w-full text-sm text-gray-600 leading-6">
                <p className='text-sm'>
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
                    Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                </p>
            </div>
        </div>
    </div>
  );
}
