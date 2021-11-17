import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import PublishInput from "../components/PublishInput";

const Publish = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  if (!token) {
    navigate("/login");
  }

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [picture, setPicture] = useState();
  const [condition, setCondition] = useState("");
  const [size, setSize] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("picture", picture);
      formData.append("condition", condition);
      formData.append("size", size);
      formData.append("brand", brand);
      formData.append("color", color);
      formData.append("city", city);
      const response = await axios.post("https://vinted-bilbo.herokuapp.com/offer/publish", formData, { headers: { authorization: `Bearer ${token}` } });
      //rediriger vers la page de l'offre
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main className="container">
      <h2>Publier une annonce</h2>
      <form onSubmit={handleSubmit}>
        <div className="publish-form product-info">
          <label>Nom de l'objet *</label>
          <PublishInput state={name} set={setName} ex={"ex : Chemise grise Lacoste"} />

          <label>Description *</label>
          <textarea
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            placeholder={"ex : Très peu portée, achetée il y a 1 an"}
          />

          <label>Prix *</label>
          <PublishInput state={price} set={setPrice} ex={"ex : 25€"} />

          <label>Photo de l'article</label>
          <img src={picture} alt="" />
          <input
            onChange={(e) => {
              setPicture(e.target.files[0]);
            }}
            type="file"
          />
        </div>
        <div className="publish-form product-details">
          <label>Etat</label>
          <PublishInput state={condition} set={setCondition} ex={"ex : Occasion, très bon état"} />

          <label>Taille</label>
          <PublishInput state={size} set={setSize} ex={"ex : S/M/L/XL"} />

          <label>Marque</label>
          <PublishInput state={brand} set={setBrand} ex={"ex : Lacoste"} />

          <label>Couleur</label>
          <PublishInput state={color} set={setColor} ex={"ex : Gris"} />

          <label>Ville</label>
          <PublishInput state={city} set={setCity} ex={"ex : Strasbourg"} />
        </div>

        <button>Publier</button>
      </form>
    </main>
  );
};

export default Publish;
