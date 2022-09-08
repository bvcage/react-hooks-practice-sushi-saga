import React, { useState } from "react";

function Sushi({ sushi, onEat }) {

  const { name, img_url, price } = sushi;

  const [wasEaten, setWasEaten] = useState(sushi.isEaten);

  function markWasEaten () {
    if (onEat(sushi)) setWasEaten(true)
    else console.log(`Oh no! You don't have enough money for this sushi.`);
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={markWasEaten}>
        {wasEaten ? null : (
          <img
            src={img_url}
            alt={name + "Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
