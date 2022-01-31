import styled from "styled-components";
import shapes from "./shapes.js";
import "./App.css";

const Rect = ({ rect }) => {
  const { PositionX, PositionY, Width, Height } = rect;
  return (
    <rect
      x={PositionX}
      y={PositionY}
      width={Width}
      height={Height}
      stroke="#000"
      fill="#FFF"
    ></rect>
  );
};

// {
//   "Id": "A6C4D5C7-0DCB-4729-B592-15AEF12DD714",
//   "FormType": "Circle",
//   "PositionX": 220,
//   "PositionY": 240,
//   "Width": 40,
//   "Text": "",
//   "Order": 6
// },

const Circle = ({ circ }) => {
  const { PositionX, PositionY, Width } = circ;

  return (
    <circle
      cx={PositionX}
      cy={PositionY}
      r={Width / 2}
      stroke="#000"
      fill="#FFF"
    />
  );
};

function App() {
  const rectangles = shapes.filter((rect) => rect.FormType === "Rectangle");
  const circles = shapes.filter((circ) => circ.FormType === "Circle");

  return (
    <>
      <p>Hello Slow Sense!</p>

      <svg viewBox="0 0 600 800" xmlns="http://www.w3.org/2000/svg">
        {rectangles.map((r) => (
          <Rect rect={r} />
        ))}
        {circles.map((c) => (
          <Circle circ={c} />
        ))}
      </svg>
    </>
  );
}

export default App;
