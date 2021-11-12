import logo from "../assets/img/Vinted-logo.svg.png";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      console.log("Connected true");
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, []);

  return isConnected ? (
    <header>
      <div className="top-bar">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>
      <button>Se déconnecter</button>
    </header>
  ) : (
    <header>
      <div className="container top-bar">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>

        <input type="text" />
        <Link to="/register">
          <button>S'inscrire</button>
        </Link>
        <Link to="/login">
          <button>Se connecter</button>
        </Link>

        <button>Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
