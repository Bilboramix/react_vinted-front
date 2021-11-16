import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Announce from "../components/Announce";
import heroImg from "../assets/img/hero.jpg";

const Home = ({ priceSorters, search, priceFilters }) => {
  const priceMin = priceFilters.values[0];
  const priceMax = priceFilters.values[1];
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const homeUrl = "https://vinted-bilbo.herokuapp.com/offers?";
      const querries = {};
      let url = homeUrl;

      if (search !== "") {
        querries.title = `title=${search}`;
      }
      if (priceSorters === "price-asc" || priceSorters === "price-desc") {
        querries.priceMin = `priceMin=${priceMin}`;
        querries.priceMax = `priceMax=${priceMax}`;
        querries.sort = `sort=${priceSorters}`;
      }
      const keys = Object.keys(querries);
      for (let i = 0; i < keys.length; i++) {
        const querry = querries[keys[i]];
        url += querry;
        if (i !== keys.length - 1) {
          url += "&";
        }
      }
      console.log(priceSorters);
      console.log(querries);
      console.log(url);

      try {
        const response = await axios.get(url);

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [search, priceSorters, priceMin, priceMax]);

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
