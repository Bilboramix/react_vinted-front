import logo from "../assets/img/Vinted-logo.svg.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Slider from "./Slider";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const Header = ({ setPriceSorters, isConnected, setIsConnected, priceFilters, setPriceFilters, priceSorters, search, setSearch }) => {
  const token = Cookies.get("token");
  useEffect(() => {
    if (token) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, [token, setIsConnected]);

  const navigate = useNavigate();

  return (
    <header>
      <div className="top-bar container">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>

        <div className="search">
          <FontAwesomeIcon icon="search" />
          <input
            className="search"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            type="text"
            value={search}
          />
        </div>
        <div className="filters">
          <div
            onChange={(event) => {
              setPriceSorters(event.target.value);
            }}
          >
            <input defaultChecked name="sorter" value="no-sort" type="radio" /> <span>Sans tri</span>
            <input name="sorter" value="price-asc" type="radio" /> <span>Tri par prix croissant</span>
            <input name="sorter" value="price-desc" type="radio" /> <span>Tri par prix décroissant</span>
          </div>
          {priceSorters !== "no-sort" && (
            <div className="slider">
              <Slider priceFilters={priceFilters} setPriceFilters={setPriceFilters} />
            </div>
          )}
        </div>
        {isConnected ? (
          <nav>
            <button
              onClick={() => {
                Cookies.remove("token");
                Cookies.remove("userid");
                Cookies.remove("username");
                setIsConnected(false);
                navigate("/");
              }}
            >
              Se déconnecter
            </button>
            <button
              onClick={() => {
                navigate("/publish");
              }}
            >
              Vendre des articles
            </button>
          </nav>
        ) : (
          <nav>
            <Link to="/register">
              <button>S'inscrire</button>
            </Link>
            <Link to="/login">
              <button>Se connecter</button>
            </Link>

            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              Vendre des articles
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
