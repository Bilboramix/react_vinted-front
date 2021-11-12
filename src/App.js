import "./App.css";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [search, setSearch] = useState("");
  const [priceFilters, setPriceFilters] = useState({ values: [50, 60] });
  /*   const [priceSorters, setPriceSorters] = useState(""); */

  return (
    <Router>
      <Header search={search} setSearch={setSearch} priceFilters={priceFilters} setPriceFilters={setPriceFilters} isConnected={isConnected} setIsConnected={setIsConnected} />
      <Routes>
        <Route path="/" element={<Home priceFilters={priceFilters} search={search} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/login" element={<Login setIsConnected={setIsConnected} />} />
        <Route path="/register" element={<Register setIsConnected={setIsConnected} />} />
      </Routes>
    </Router>
  );
};

export default App;
