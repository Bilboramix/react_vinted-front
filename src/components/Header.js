import logo from "../assets/img/Vinted-logo.svg.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Slider from "./Slider";

const Header = ({ isConnected, setIsConnected, priceFilters, setPriceFilters, search, setSearch }) => {
  return (
    <header>
      <div className="top-bar">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <form>
          <input
            className="search"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            type="text"
            value={search}
          />
          <Slider priceFilters={priceFilters} setPriceFilters={setPriceFilters} />
          <div>
            <input type="radio" /> <span>Sans tri</span>
            <input type="radio" /> <span>Tri par prix croissant</span>
            <input type="radio" /> <span>Tri par prix décroissant</span>
          </div>
          <button>Recherche</button>
        </form>
        {isConnected ? (
          <div>
            <button
              onClick={() => {
                Cookies.remove("token");
                setIsConnected(false);
              }}
            >
              Se déconnecter
            </button>
            <button>Vends tes articles</button>
          </div>
        ) : (
          <div>
            <Link to="/register">
              <button>S'inscrire</button>
            </Link>
            <Link to="/login">
              <button>Se connecter</button>
            </Link>

            <button>Vends tes articles</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
