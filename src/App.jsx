import shapes from "./shapes.js";
import "./App.css";
import Rect from "./components/Rectangle.jsx";
import Circle from "./components/Circle.jsx";
import Text from "./components/Text.jsx";

function App() {
  const formes = shapes
    .sort((s1, s2) => parseInt(s1.Order) - parseInt(s2.Order))
    .map((el) => {
      if (el.FormType === "Rectangle") {
        return <Rect key={el.Id} rect={el} />;
      }
      if (el.FormType === "Circle") {
        return <Circle key={el.Id} circ={el} />;
      }
      if (el.FormType === "Text") {
        return <Text key={el.Id} word={el} />;
      }
    });

  return (
    <>
      <h1>Hello Slow Sense!</h1>

      <svg width="600" height="800" xmlns="http://www.w3.org/2000/svg">
        {formes}
      </svg>
    </>
  );
}

export default App;
