import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
// import BasketButton from "./BasketButton";
import greenx from "../Images/greenx.png";
import appIcon from "../Images/appIcon.png";
import responsiveNavbar from "../Images/responsiveNavbar.svg";

export default function Navbar() {
  const [showNavbarInResponsive, setShowNavbarInResponsive] = useState(false);

  return (
    <Fragment>
      <nav className="w-full h-20 bg-white text-white flex justify-between items-center shadow-md z-10 relative">
        {/* Button for showing navbar in mobile screens */}
        <div className="flex ml-[2rem] md:hidden">
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
        </div>

        {/* Mobile Screens */}
        <div
        //   className={`${classes.navbarSmallScreen} ${
        //     showNavbarInResponsive ? classes.show : ""
        //   }`}
        >
          {showNavbarInResponsive && (
            <ul>
              <Link
                to="/"
                onClick={() => {
                  setShowNavbarInResponsive(!showNavbarInResponsive);
                }}
              >
                <li>HOME</li>
              </Link>
              <Link
                to="/iconicplaces"
                onClick={() => {
                  setShowNavbarInResponsive(!showNavbarInResponsive);
                }}
              >
                <li>CONTACT</li>
              </Link>
              <Link
                to="/about"
                onClick={() => {
                  setShowNavbarInResponsive(!showNavbarInResponsive);
                }}
              >
                <li>ABOUT</li>
              </Link>
            </ul>
          )}
        </div>

        {/* Large Screens */}
        <div
        // className={classes.navbarContent}
        >
          <ul
          //   className={classes.navbarList}
          >
            <Link to="/standings">
              <li>HOME</li>
            </Link>
            <Link to="/standings">
              <li>CONTACT</li>
            </Link>
            <Link to="/standings">
              <li>ABOUT</li>
            </Link>
          </ul>
        </div>
        <div
        // className={classes["icon-title"]}
        >
          <img
            src={appIcon}
            alt="logo"
            //    className={classes.icon}
          />
          <h1
          //   className={classes.header}
          >
            Food2Door
          </h1>
        </div>
        {/* <div className={classes.navbarButton}>
          <BasketButton />
        </div> */}
      </nav>
    </Fragment>
  );
}
