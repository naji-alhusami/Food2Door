import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { TbLetterX } from "react-icons/tb";
// import Button from "../Ui/Button";

export default function ResponsiveButton() {
  const [showNavbarInResponsive, setShowNavbarInResponsive] = useState(false);

  return (
    <div className="flex justify-center items-center fixed top-2 ml-4 text-black bg-[#ec4899] hover:bg-[#db2777] p-2 rounded-full rounded-4xl lg:ml-12">
      {/* <Button
        element="button"
        onClick={() => {
          setShowNavbarInResponsive(!showNavbarInResponsive);
        }}
      > */}
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
      {/* </Button> */}
    </div>
  );
}
