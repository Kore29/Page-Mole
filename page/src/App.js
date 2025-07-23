import { useEffect, useState } from "react";
import Card from './Card'

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  return (
      <div className="flex gap-10 items-center m-5">
        {items.length === 0 
          ? <p>No hay items</p> 
          : items.map(item => <Card item={item}/>)}
      </div>
  );
}

export default App;
