import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useLocation } from "react-router";

const Pay = () => {
  const location = useLocation();
  const { name, price } = location.state;

  const stripePromise = loadStripe(toString(process.env.PAY_API_PUBLIC));

  const shippingFees = 0.2;
  const protectionFees = price / 10;
  const total = (Number(price) + Number(protectionFees) + Number(shippingFees)).toFixed(2);

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
          <CheckoutForm />
        </Elements>
        <button>Annuler</button>
      </div>
    </main>
  );
};

export default Pay;
