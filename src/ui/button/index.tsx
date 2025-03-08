const Button = ({ text }: { text: string }) => {
  return (
    <button className="bgcolor1 font-semibold text-white px-6 py-3 mt-4 rounded-full  w-full overflow-hidden text-ellipsis whitespace-nowrap md:text-2xl shadow-md ">
      {text}
    </button>
  );
};

export default Button;
