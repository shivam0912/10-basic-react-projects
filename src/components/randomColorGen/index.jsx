/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./style.css";
function RandomColorGen() {
  const [color, setColor] = useState("#000");
  const [typeOfColor, setType] = useState("hex");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function generateHexColor() {
    // const col = '#'+Math.floor(Math.random()*16777215).toString(16);
    // setColor(col);

    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }
  function generateRGBColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g}, ${b})`);
  
  }

  useEffect(() => {
    if (typeOfColor === "rgb") generateRGBColor();
    else generateHexColor();
  }, [typeOfColor]);


  return (
    <div
      className="main-div"
      style={{
        width: "100vw",
        height: "100vh",
        padding:"20px",
        background: color,
      }}
    >
      <div className="buttons">
      <button className="generate-button" onClick={() => setType("hex")}>
        Create Hex Color
      </button>
      <button className="generate-button" onClick={() => setType("rgb")}>
        Create RGB Color
      </button>
      <button
        className="generate-button"
        onClick={typeOfColor === "hex" ? generateHexColor : generateRGBColor}
      >
        Generate Random Color
      </button>
      </div>
      <div className="container">
        <h2>{typeOfColor} Color</h2>
        <h1 id="color-code">{color}</h1>
      </div>
    </div>
  );
}
export default RandomColorGen;
