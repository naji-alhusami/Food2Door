import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import ClipLoader from "react-spinners/ClipLoader";
// import spinnerLoading from "./components/Images/spinnerLoading.svg";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
