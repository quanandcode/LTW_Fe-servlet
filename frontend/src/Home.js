import React, { useState } from "react";
import "./App.css";

function Home() {
  const [leftColor, setLeftColor] = useState("#FF0000");
  const [rightColor, setRightColor] = useState("#00FF00");

  const handleChangeLeftColor = (event) => {
    setLeftColor(event.target.value);
  };

  const handleChangeRightColor = (event) => {
    setRightColor(event.target.value);
  };

  const handleRandom = () => {
    setLeftColor(getRandomColor());
    setRightColor(getRandomColor());
  };

  const getRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const style = {
    background: `linear-gradient(to right, ${leftColor}, ${rightColor})`,
    height: "100vh",
  };

  return (
    <div style={style}>
      <div className="container">
        <div className="form-group">
          <label htmlFor="leftColor">Left Color:</label>
          <input
            type="color"
            id="leftColor"
            name="leftColor"
            value={leftColor}
            onChange={handleChangeLeftColor}
          />
          <span className="color-value">{leftColor}</span>
        </div>
        <div className="form-group">
          <label htmlFor="rightColor">Right Color:</label>
          <input
            type="color"
            id="rightColor"
            name="rightColor"
            value={rightColor}
            onChange={handleChangeRightColor}
          />
          <span className="color-value">{rightColor}</span>
        </div>
        <button onClick={handleRandom}>Random</button>
      </div>
      <div className="text">
        <h3>This is the background</h3>
      </div>
    </div>
  );
}

export default Home;
