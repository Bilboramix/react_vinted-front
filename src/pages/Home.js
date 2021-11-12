import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Announce from "../components/Announce";
import heroImg from "../assets/img/hero.jpg";

const Home = ({ search, priceFilters }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const homeDefaultQuerry = "https://vinted-bilbo.herokuapp.com/offers";
      const titleQuerry = `?title=${search}`;
      const priceMinQuerry = `?priceMin${priceFilters.values[0]}`;
      const priceMaxQuerry = `?priceMax${priceFilters.values[1]}`;
      let response = null;
      try {
        if (search !== "") {
          response = await axios.get(homeDefaultQuerry + titleQuerry);
        } else {
          response = await axios.get(homeDefaultQuerry);
        }
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [search]);

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
