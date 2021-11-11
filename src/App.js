import "./App.css";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
      </Routes>
    </Router>
  );
};

export default App;
