import { ReactNode } from "react";

interface CardProps {
  text: string;
  icon: ReactNode;
}

const Card = ({ text, icon }: CardProps) => {
  return (
    <div className="w-[80%] sm:w-[90%] p-4 gap-4 text-center bg-white rounded-lg flex  flex-col justify-center custom-shadow">
      {icon}
      <p className="text-xl">{text}</p>
    </div>
  );
};

export default Card;
