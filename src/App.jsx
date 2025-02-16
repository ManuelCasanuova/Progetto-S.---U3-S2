import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavBar from "./Components/CustomNavBar";
import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import CityDetails from "./Components/CityDetails";
import Hero from "./Components/Hero";
import SurfPage from "./Components/SurfPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hero/:place" element={<Hero />} />
          <Route path="/CityDetails/:lat/:lon" element={<CityDetails />} />
          <Route path="SurfPage" element={<SurfPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
