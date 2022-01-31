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

export default Circle;
