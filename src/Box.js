import { useState } from 'react';

function Box() {
  const [color, setColor] = useState("#CCC");

  const rando = () => {
    return Math.floor(Math.random() * 256);
  }
  const handleHover = () => {
    const randomColor = `rgb(${rando()}, ${rando()}, ${rando()})`
    setColor(randomColor);
  }

  return (
    <div
      onMouseEnter={handleHover}
      className="box"
      style={{
        backgroundColor: color
      }}
    >
    </div>
  )
}

export default Box;