const Button = ({ text }: { text: string }) => {
  return (
    <button className="bgcolor1 font-semibold text-white px-6 py-4 rounded-full min-w-[120px] max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-base sm:text-2xl md:text-xl">
      {text}
    </button>
  );
};

export default Button;
