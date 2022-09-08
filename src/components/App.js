import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushiAry, setSushiAry] = useState([]);
  const [emptiesAry, setEmptiesAry] = useState([]);

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(getR => setSushiAry(getR))
  }, []);

  function handleEatSushi () {
    setEmptiesAry([...emptiesAry, '']);
  }

  return (
    <div className="app">
      <SushiContainer sushiAry={sushiAry} onEat={handleEatSushi} />
      <Table plates={emptiesAry} />
    </div>
  );
}

export default App;
