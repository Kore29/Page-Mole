import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="">
      <h2 className="text-lg font-bold">{item.name}</h2>
      <p>{item.description}</p>
    </div>
  );
};

const ItemList = ({ items }) => {
  return (
    <div className="flex gap-10 items-center m-5">
      {items.length === 0 
        ? <p>No hay items</p> 
        : items.map(item => <Cards key={item.id} item={item} />)}
    </div>
  );
};

export default ItemList;
