import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Announce from "../components/Announce";
import heroImg from "../assets/img/hero.jpg";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://vinted-bilbo.herokuapp.com/offers");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return isLoading === true ? (
    <span>Loading ...</span>
  ) : (
    <main>
      <img className="hero-img" src={heroImg} alt="lobby" />
      <section className="container offer-list">
        {data.offers.map((offer, index) => {
          return (
            <Link key={offer._id} to={`/offer/${offer._id}`}>
              <Announce index={index} offer={offer} />
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export default Home;
