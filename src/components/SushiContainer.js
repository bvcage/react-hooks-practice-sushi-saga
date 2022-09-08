import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushiAry }) {

  const [displayIndex, setDisplayIndex] = useState(0);

  const sushiDisplay = sushiAry
    .slice(displayIndex, displayIndex + 4)
    .map(sushi => {
      return (
        <Sushi key={sushi.id} sushi={sushi} />
      )
    })

  function showMore () {
    let newIndex = displayIndex + 4;
    if (newIndex >= sushiAry.length) newIndex = 0;
    setDisplayIndex(newIndex);
  }

  return (
    <div className="belt">
      {sushiDisplay}
      <MoreButton onClick={showMore} />
    </div>
  );
}

export default SushiContainer;
