import { Fragment } from "react";
// import { Link } from "react-router-dom";
// import BasketButton from "./BasketButton";
// import appIcon from "../Images/appIcon.png";

import BasketButton from "./BasketButton";
import ResponsiveButton from "./ResponsiveButton";
// import homeBg from "../Images/homeBg.jpg";

export default function Navbar() {
  return (
    <Fragment>
      <nav className="z-10 relative">
        <ResponsiveButton />
        <BasketButton />
      </nav>
    </Fragment>
  );
}
