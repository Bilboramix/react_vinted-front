import { useParams } from "react-router";
import axios from "axios";

const Offer = () => {
  const { id } = useParams();
  console.log("ID =========>", id);

  return (
    <main>
      <section></section>
    </main>
  );
};

export default Offer;
