import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-5">Lista de Items</h1>
        <ItemList items={items} />
      </div>
    </>
  );
}

export default App;
