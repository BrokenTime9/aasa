import { ReactNode } from "react";

interface SideBoxProps {
  text: string;
  icon: ReactNode;
}

const SideBox = ({ text, icon }: SideBoxProps) => {
  return (
    <div className="w-[80%] sm:w-[90%] p-4 gap-4 text-center bg-white rounded-lg flex justify-center shadow1">
      <div>{icon}</div>
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default SideBox;
