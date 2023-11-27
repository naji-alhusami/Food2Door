import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { TbLetterX } from "react-icons/tb";

export default function ResponsiveButton() {
  const [showNavbarInResponsive, setShowNavbarInResponsive] = useState(false);

  return (
    <div className="flex justify-center items-center absolute top-2 left-6 text-black bg-[#ec4899] hover:bg-[#db2777] p-2 rounded-full rounded-4xl">
      <button
        type="button"
        
        onClick={() => {
          setShowNavbarInResponsive(!showNavbarInResponsive);
        }}
      >
        <div
          className={` transform transition-transform duration-500 ease-in-out ${
            showNavbarInResponsive ? "scale-150" : ""
          }`}
        >
          {showNavbarInResponsive ? (
            <TbLetterX className="w-6 h-6 text-white" />
          ) : (
            <IoMdMenu className="w-6 h-6 text-white" />
          )}
        </div>
      </button>
    </div>
  );
}
