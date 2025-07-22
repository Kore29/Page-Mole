import { useEffect, useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000')
      .then(res => res.json())
      .then(data => setMensaje(data.mensaje));
  }, []);

  return (
    <h1 className="text-blue-300">{mensaje}</h1>
  );
}

export default App;
