import "./App.css";

import Header from "./components/Header";

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Publish from "./pages/Publish";
import Pay from "./pages/Pay";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

const App = () => {
  const [isConnected, setIsConnected] = useState();
  const [search, setSearch] = useState("");
  const [priceFilters, setPriceFilters] = useState({ values: [0, 500] });
  const [priceSorters, setPriceSorters] = useState("no-sort");

  return (
    <Router>
      <Header setPriceSorters={setPriceSorters} priceSorters={priceSorters} search={search} setSearch={setSearch} priceFilters={priceFilters} setPriceFilters={setPriceFilters} isConnected={isConnected} setIsConnected={setIsConnected} />
      <Routes>
        <Route path="/" element={<Home priceSorters={priceSorters} priceFilters={priceFilters} search={search} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/login" element={<Login setIsConnected={setIsConnected} />} />
        <Route path="/register" element={<Register setIsConnected={setIsConnected} />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
    </Router>
  );
};

export default App;
