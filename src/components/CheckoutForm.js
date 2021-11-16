import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router";

const CheckoutForm = ({ price }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const element = useElements();

  const [valid, setValid] = useState(false);

  const userId = Cookies.get("userid");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!userId) {
        navigate("/login");
      }
      const cardElements = element.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElements, { name: userId });
      const response = await axios.post("http://localhost:3001/payment", {
        stripeToken: stripeResponse.token.id,
        productPrice: price,
      });
      console.log(response.data);
      if (response.status === 200) {
        setValid(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main>
      {!valid ? (
        <form onSubmit={handleSubmit} className="container">
          <CardElement />
          <button type="submit">Valider</button>
        </form>
      ) : (
        <span>Paiement effectué avec succès</span>
      )}
    </main>
  );
};

export default CheckoutForm;
