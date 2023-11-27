import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { TbLetterX } from "react-icons/tb";

export default function ResponsiveButton() {
  const [showNavbarInResponsive, setShowNavbarInResponsive] = useState(false);

  return (
    <div className="absolute top-2 left-2 text-black bg-[#ec4899] hover:bg-[#db2777] p-2 rounded-full rounded-4xl">
      <button
        type="button"
        className="w-70"
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
            <TbLetterX className="w-5 h-5 text-white" />
          ) : (
            <IoMdMenu className="w-5 h-5 text-white" />
          )}
        </div>
      </button>
    </div>
  );
}
