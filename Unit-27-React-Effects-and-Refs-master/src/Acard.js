import React, { useState } from "react";



function Acard({ name, image }) {


//   Modify here with a Math.sqrt method w/ angle @ 90...
  const [{ angle, horizontalPosition, VerticalPosition }] = useState({
    angle: Math.cbrt(Math.pow(8, 7)) * Math.random(Math.round),
    horizontalPosition: Math.floor(Math.pow(3,2) * Math.random(3)),
    VerticalPosition: Math.floor(Math.pow(3,4) * Math.random(1.75)),
  });

//   modify here, size in vh or em's with maybe inline
  const transform = `translate(${horizontalPosition}px, 
                               ${VerticalPosition}px) 
                               rotate(${angle}deg)`;

  return <img
      className="Card"
      alt={name}
      src={image}
      style={{ transform }} />;
}

export default Acard;
