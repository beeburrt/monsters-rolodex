import "./card.css";

const Card = ({ monster }) => {
  const { name, id, email, website } = monster;

  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{website}</p>
    </div>
  );
};

export default Card;
