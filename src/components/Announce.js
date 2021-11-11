const Announce = ({ offer, index }) => {
  return (
    <div className="announce">
      <p>{offer.name}</p>
      <img src={offer.image} alt="" />
      <p>{offer.price} €</p>
    </div>
  );
};

export default Announce;
