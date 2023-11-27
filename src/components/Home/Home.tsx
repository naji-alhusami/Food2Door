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
          backgroundImage: "url(/Images/homeBg.jpg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className="flex flex-col justify-start items-center min-h-screen w-screen text-black font-bold z-20 shadow-md relative brightness-100"
      >
        <h1>Welcome To Burger Restaurant</h1>
        <h1>Home</h1>
        <h1>Home</h1>
      </div>
    </>
  );
}

export default Home;
