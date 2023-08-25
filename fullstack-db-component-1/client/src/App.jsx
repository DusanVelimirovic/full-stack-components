import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../src/components/Card.jsx";

function App() {
  // Fetch data
  const [burgers, setBurgers] = useState(null);

  const fetchData = async () => {
    const burgerData = await axios.get("http://localhost:8800/api/burgers");

    // Make burgers array
    const data = Object.keys(burgerData.data.data).map(
      (burger) => burgerData.data.data[burger]
    );
    setBurgers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(burgers);

  return (
    <div className="App">
      <h1>My Favourite Burgers</h1>
      <div className="burger-feed">
        {burgers?.map((burger) => (
          <Card key={burger.id} burger={burger} />
        ))}
      </div>
    </div>
  );
}

export default App;
