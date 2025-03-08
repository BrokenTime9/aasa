import { ReactNode } from "react";

interface CardProps {
  text: string;
  icon: ReactNode;
}

const Card = ({ text, icon }: CardProps) => {
  return (
    <div className="w-[90%] text-left p-4 gap-4 bg-white rounded-lg flex justify-center shadow2">
      <div className="translate-y-[6px]">{icon}</div>
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default Card;
