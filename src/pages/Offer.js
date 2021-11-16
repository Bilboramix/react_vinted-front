import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Offer = ({ setChosenProduct }) => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [isLoading, setisLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    //TO DO : Changer la structure de la DB pour quand dans data.owner, l'username soit visible pour l'afficher sur l'annonce
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3001/offer/${id}`);
      setData(response.data);
      setisLoading(false);
      console.log(response.data);
    };
    fetchData();
  }, [id]);

  return isLoading === true ? (
    <span>Chargement...</span>
  ) : (
    <main className="container">
      <h2>{data.name}</h2>
      <img src={data.image} alt={data.name} />
      <ul>
        {data.details.map((elem, index) => {
          const keys = Object.keys(elem);
          //  à chaque tour du map, je créée un tableau avec les clefs de mon objet "elem"
          //  console.log("keys ==========> ", keys);
          //  Elem étant un objet je peux accéder à la valeur d'une clef avec cette syntaxe :
          //  console.log(elem[keys]);
          //  cela équivaut à écrire elem."keys" mais "keys" est une variable contenant le nom d'une clef et non pas une clef en soi
          //  On a donc besoin de la syntaxe ci-dessus
          //  console.log("______________");
          return (
            //return du .map
            elem[keys[0]] !== "" && (
              <li key={index}>
                <span>{keys[0]}</span>
                {/* Etant donné qu'il n'y a qu'une clef dans chaque objet (voir json), elle sera dans le cas présent à l'index 0 de mon tableau keys, vu que l'opération est répétée pour chaque éléments de mon tableau "details" dans le map */}
                <span>{elem[keys[0]]}</span>
                {/* Equivaut à elem.keys[0] */}
              </li>
            )
          );
        })}
      </ul>
      <button
        onClick={() => {
          navigate("/pay", { state: { name: data.name, price: data.price, description: data.description } });
        }}
      >
        Acheter
      </button>
    </main>
  );
};

export default Offer;
