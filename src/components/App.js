import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [budget, setBudget] = useState(100);
  const [emptiesAry, setEmptiesAry] = useState([]);
  const [sushiAry, setSushiAry] = useState([]);

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(getR => setSushiAry(getR))
  }, []);

  function handleEatSushi (price) {
    if (budget >= price) {
      setEmptiesAry([...emptiesAry, '']);
      setBudget(budget - price);
      return true;
    } else return false;
  }

  return (
    <div className="app">
      <SushiContainer sushiAry={sushiAry} onEat={handleEatSushi} />
      <Table plates={emptiesAry} budget={budget} />
    </div>
  );
}

export default App;
