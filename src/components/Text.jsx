const Text = ({ word }) => {
  const { PositionX, PositionY, Text } = word;

  return (
    <text x={PositionX} y={PositionY} font="Arial" fontSize="40">
      {Text}
    </text>
  );
};

export default Text;
