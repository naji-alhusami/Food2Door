// import homeBg from "../../../public/Images/homeBg.jpg";
// import { useState } from "react";
// import Navbar from "../Navbar/Navbar";
// import greenx from "../../../public/Images/greenx.png";
// import responsiveNavbar from "../../../public/Images/responsiveNavbar.svg";
import Navbar from "../Navbar/Navbar";

function Home() {
  // const [showNavbarInResponsive, setShowNavbarInResponsive] = useState(false);

  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundImage: "url(../../../public/Images/homeBg.jpg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className="flex flex-column min-h-screen w-screen text-black font-bold flex justify-between items-center shadow-md relative"
      >
        {/* Button for showing navbar in mobile screens */}
        {/* <div className="flex ml-[2rem] ">
        <button
          type="button"
          className="w-70 flex justify-end items-center"
          onClick={() => {
            setShowNavbarInResponsive(!showNavbarInResponsive);
          }}
        >
          <img
            src={showNavbarInResponsive ? greenx : responsiveNavbar}
            alt="x-button"
            className={`w-8 h-8 transform transition-transform duration-500 ease-in-out ${
              showNavbarInResponsive ? "transform scale-150" : ""
            }`}
          />
        </button>
      </div> */}
        {/* <div>
        <ul className="flex flex-row font-bold absolute left-10 inset-0 text-sm">
          <li className="mr-12">Home</li>
          <li className="mr-12">Contact</li>
          <li className="mr-12">About</li>
        </ul>
      </div> */}
      </div>
    </>
  );
}

export default Home;
