import logo from "../assets/img/Vinted-logo.svg.png";

const Header = () => {
  return (
    <header>
      <div className="container top-bar">
        <img className="logo" src={logo} alt="logo" />
        <input type="text" />
        <button>S'inscrire</button>
        <button>Se connecter</button>
        <button>Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
