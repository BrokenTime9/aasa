import { ReactNode } from "react";

interface CardProps {
  text: string;
  icon: ReactNode;
}

const Card = ({ text, icon }: CardProps) => {
  return (
    <div className="w-[80%] sm:w-[90%] p-2 m-2 gap-2 text-center bg-white rounded-lg flex flex-col justify-center shadow2">
      <div className="self-center">{icon}</div>
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default Card;
