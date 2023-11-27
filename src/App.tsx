// import "./App.css";

// function App() {
//   return (
//     <div className="text-2xl font-bold underline">
//       <p>hello world!</p>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

// import ClipLoader from "react-spinners/ClipLoader";
// import spinnerLoading from "./components/Images/spinnerLoading.svg";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutContent />} />
        <Route element={<RequireAuth />}>
          <Route path="/addplace" element={<AddPlace />} />
        </Route>
        <Route path="/signup" element={<Singup />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/iconicplaces" element={<IconicPlaces />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
