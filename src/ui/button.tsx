const Button = ({ text }: { text: string }) => {
  return (
    <button className="bgcolor1 text-xl  font-semibold text-white px-8 py-3 rounded-full translate-y-[-6px]">
      {text}
    </button>
  );
};

export default Button;
