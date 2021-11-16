import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const element = useElements();

  const userId = "truc"; // aller chercher l'ID de l'user qui paye

  const [valid, setValid] = useState("");

  return (
    <main>
      <form className="container">
        <CardElement />
        <button type="submit">Valider</button>
        <span>{valid}</span>
      </form>
    </main>
  );
};

export default CheckoutForm;
