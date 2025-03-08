const HollowBox = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-center border border-1 border-gray-600">
      <p>{text}</p>
    </div>
  );
};

export default HollowBox;
