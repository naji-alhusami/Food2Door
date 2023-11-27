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
          backgroundImage: "url(/Images/homeBg.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className="flex flex-col items-start min-h-screen w-screen text-white font-bold z-20 shadow-md relative brightness-100"
      >
        <h1 className="font-pacifico">Tastify</h1>
        <h2>Home</h2>
        <h2>Home</h2>
      </div>
    </>
  );
}

export default Home;
