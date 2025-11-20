import axios from "axios";
import React, { useEffect, useState } from "react";
import Loadier from "./components/Loadier";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);
      setProducts(res.data);

      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(true);
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-black/60 h-screen">
      {isLoading && (
        <div className="h-screen flex items-center justify-center">
          <Loadier />
        </div>
      )}
      {error && <h1>Errror</h1>}
      {products.map((items, i) => (
        <div key={items.id}>
          <h1>{items.title}</h1>
          <img src={items.image} />
        </div>
      ))}
      
    </div>
  );
};

export default App;
