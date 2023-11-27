import { useState } from "react";

import greenx from "../../../public/Images/greenx.png";
import responsiveNavbar from "../../../public/Images/responsiveNavbar.svg";

export default function ResponsiveButton() {
  const [showNavbarInResponsive, setShowNavbarInResponsive] = useState(false);

  return (
    <div className="absolute text-black bg-white p-4 rounded-full rounded-t-xl rounded-bl-xl">
      <button
        type="button"
        className="w-70"
        onClick={() => {
          setShowNavbarInResponsive(!showNavbarInResponsive);
        }}
      >
        <img
          src={showNavbarInResponsive ? greenx : responsiveNavbar}
          alt="x-button"
          className={`w-6 h-6 transform transition-transform duration-500 ease-in-out ${
            showNavbarInResponsive ? "transform scale-150" : ""
          }`}
        />
      </button>
    </div>
  );
}
