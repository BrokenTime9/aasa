const Button = ({ text }: { text: string }) => {
  return (
    <button className="bgcolor1-2 font-semibold text-white px-6 py-3 rounded-lg  w-full overflow-hidden text-ellipsis whitespace-nowrap shadow-md ">
      {text}
    </button>
  );
};

export default Button;
