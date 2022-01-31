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
  const radius = Width / 2;

  return (
    <circle
      cx={PositionX + radius}
      cy={PositionY + radius}
      r={radius}
      stroke="#000"
      fill="#FFF"
    />
  );
};

function App() {
  // const rectangles = shapes.filter((rect) => rect.FormType === "Rectangle");
  // const circles = shapes.filter((circ) => circ.FormType === "Circle");

  const formes = shapes
    .sort((s1, s2) => parseInt(s1.Order) - parseInt(s2.Order))
    .map((el) => {
      if (el.FormType === "Rectangle") {
        return <Rect rect={el} />;
      }
      if (el.FormType === "Circle") {
        return <Circle circ={el} />;
      }
    });

  return (
    <>
      <p>Hello Slow Sense!</p>

      <svg width="600" height="800" xmlns="http://www.w3.org/2000/svg">
        {formes}
      </svg>
    </>
  );
}

export default App;
