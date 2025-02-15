import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavBar from "./Components/CustomNavBar";
import { BrowserRouter, Route, Routes } from "react-router";
/* import Footer from "./Components/Footer"; */
import Home from "./Components/Home";
import CityDetails from "./Components/CityDetails";
import Hero from "./Components/Hero";
import SurfPage from "./Components/SurfPage";
import NotFound from "./Components/NotFoud";

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/searched/:place" element={<Hero />} />
          <Route path="/searched/:place/CityDetails/:lat/:lon" element={<CityDetails />} />
          <Route path="/SurfPage/CityDetails/:lat/:lon" element={<CityDetails />} />
          <Route path="/CityDetails/:lat/:lon" element={<CityDetails />} />
          <Route path="/SurfPage" element={<SurfPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/*  <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
