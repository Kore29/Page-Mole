function Card({ item }) {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">{item.name}</h2>
      <p>ID: {item._id}</p>
    </div>
  );
}

export default Card;