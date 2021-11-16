import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe("pk_test_51JwPsLHvlUKww2d9fNQSn8oxwH52199nAkwlfRABE21AULsUgehaQVuU7YOJ9jspA7LeeZn3bbHaudm3W9JcCYgJ00luPrHSSI");

const Pay = (chosenProduct, setChosenProduct) => {
  console.log(chosenProduct);
  console.log(chosenProduct.chosenProduct);
  const shippingFees = 0.2;
  const protectionFees = 0.1;

  return (
    <main className="container">
      <h2>Résumé de la commande</h2>
      <div>
        <label>Commande</label>
        <span>{chosenProduct.price}</span>
        <label>Frais de protection acheteurs</label>
        <span>{protectionFees.toFixed(2)} €</span>
        <label>Frais de port</label>
        <span>{shippingFees.toFixed(2)} €</span>
      </div>
      <div>
        <label htmlFor=""></label>
        <span></span>
        <p></p>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
        <button>Payer</button>
        <button>Annuler</button>
      </div>
    </main>
  );
};

export default Pay;
