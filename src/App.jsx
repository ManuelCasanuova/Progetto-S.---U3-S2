import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavBar from "./Components/CustomNavBar";
import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import CityDetails from "./Components/CityDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CityDetails/:lat/:lon" element={<CityDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
