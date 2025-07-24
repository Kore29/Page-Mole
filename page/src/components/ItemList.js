import React from "react";

const Cards = ({ item }) => {
  const date = new Date(item.createdAt).toLocaleDateString();

  return (
    <div className="bg-amber-100 p-5 rounded-md shadow-md w-60 h-64 flex flex-col justify-between hover:shadow-lg transition-shadow">
      <div>
        <h2 className="text-lg font-bold">{item.name}</h2>
        <p className="text-xs text-gray-600 italic">{item.category}</p>
        <p className="text-sm text-gray-800 mt-2">{item.description}</p>
      </div>

      <div>
        <div className="flex justify-between text-sm font-semibold text-gray-800 mt-4">
          <span>Cant: {item.quantity}</span>
          <span>{item.price}$</span>
        </div>
        <div className="flex justify-between text-xs text-gray-700 mt-2">
          <span>{item.isAvailable ? 'Disponible' : 'No disponible'}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

const ItemList = ({ items }) => {
  return (
    <div className="flex flex-wrap gap-6">
      {items.length === 0 
        ? <p>No hay items</p> 
        : items.map(item => <Cards key={item.id} item={item} />)}
    </div>
  );
};

export default ItemList;
