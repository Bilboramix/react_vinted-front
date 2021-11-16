import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const element = useElements();

  const [valid, setValid] = useState("");

  return (
    <main>
      {!valid ? (
        <form className="container">
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
