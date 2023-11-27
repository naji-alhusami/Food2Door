// import homeBg from "../../../public/Images/homeBg.jpg";
// import { useState } from "react";
// import Navbar from "../Navbar/Navbar";
// import greenx from "../../../public/Images/greenx.png";
// import responsiveNavbar from "../../../public/Images/responsiveNavbar.svg";
import Navbar from "../Navbar/Navbar";
import Button from "../Ui/Button";

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
        className=" min-h-screen w-screen text-white font-bold z-20 shadow-md relative brightness-100"
      >
        <div className="ml-4 pt-14 flex flex-col items-start gap-y-1 md:pt-24 md:gap-y-4 lg:ml-16 lg:pt-28 lg:gap-y-6 xl:pt-36">
          <h1 className="font-pacifico text-3xl md:text-5xl lg:text-6xl xl:text-7xl">Food-Delivary</h1>
          <h2 className=" text-sm md:text-xl">Locate your address</h2>
          <p className="hidden lg:flex">the best restaurant the best restaurantthe best restaurant</p>
          <Button
            element="button"
            className=" bg-[#ec4899] hover:bg-white hover:text-[#ec4899] px-2 py-1 rounded-full text-sm md:px-4"
          >
            Locate My Address
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;
