const HollowBox = ({ text }: { text: string }) => {
  return (
    <div className="flex w-[90%] mx-auto justify-center border border-1 border-blue-100 rounded-full p-2 text-center">
      <p>{text}</p>
    </div>
  );
};

export default HollowBox;
