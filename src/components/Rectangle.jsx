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

export default Rect;
