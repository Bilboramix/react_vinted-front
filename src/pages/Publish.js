import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

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

      console.log("data =>>>>>>>>>>>>>>> ", response);
      console.log("PICTURE ========> ", picture);
      console.log("FORMDATA ===========> ", formData);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <p>Nom de l'objet</p>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Que vendez vous ?"
        />

        <p>Description de l'objet</p>
        <input
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          type="text"
          placeholder="Décrivez au mieux votre article"
        />

        <p>A quel prix vendez vous ?</p>
        <input
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          type="text"
        />

        <p>Photos de l'article</p>
        <img src={picture} alt="" />
        <input
          onChange={(e) => {
            setPicture(e.target.files[0]);
          }}
          type="file"
        />

        <p>Détails</p>

        <span>Etat</span>
        <input
          value={condition}
          onChange={(e) => {
            setCondition(e.target.value);
          }}
          type="text"
        />

        <span>Taille</span>
        <input
          value={size}
          onChange={(e) => {
            setSize(e.target.value);
          }}
          type="text"
        />

        <span>Marque</span>
        <input
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
          }}
          type="text"
        />

        <span>Couleur</span>
        <input
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
          type="text"
        />

        <span>Ville</span>
        <input
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          type="text"
          placeholder="Où vendez vous ?"
        />

        <button>Publier</button>
      </form>
    </main>
  );
};

export default Publish;
