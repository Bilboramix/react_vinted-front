import logo from "../assets/img/Vinted-logo.svg.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
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
