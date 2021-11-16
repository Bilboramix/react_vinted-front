import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useLocation, useNavigate } from "react-router";
import Cookies from "js-cookie";

const Pay = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, price, description } = location.state;

  const stripePromise = loadStripe("pk_test_51JwPsLHvlUKww2d9fNQSn8oxwH52199nAkwlfRABE21AULsUgehaQVuU7YOJ9jspA7LeeZn3bbHaudm3W9JcCYgJ00luPrHSSI");

  const shippingFees = 0.2;
  const protectionFees = price / 10;
  const total = (Number(price) + Number(protectionFees) + Number(shippingFees)).toFixed(2);
  const token = Cookies.get("token");
  if (!token || !name || !price) {
    navigate("/");
  }

  return (
    <main className="container">
      <h2>Résumé de la commande</h2>
      <div>
        <label>Commande</label>
        <span>{price}</span>
        <label>Frais de protection acheteurs</label>
        <span>{protectionFees.toFixed(2)} €</span>
        <label>Frais de port</label>
        <span>{shippingFees.toFixed(2)} €</span>
      </div>
      <div>
        <label>Total</label>
        <span>{total}</span>
        <p>
          Il ne vous reste plus qu'une étape pour vous offrir {name}. Vous allez payer {total} € (frais de protection et frais de port inclus).
        </p>
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price} name={name} description={description} />
        </Elements>
        <button>Annuler</button>
      </div>
    </main>
  );
};

export default Pay;
