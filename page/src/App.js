import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";
import SearchInput from "./components/SearchInput";

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-5">Lista de Items</h1>
        <SearchInput search={search} setSearch={setSearch} />
        <ItemList items={filteredItems} />
      </div>
    </>
  );
}

export default App;
