import { ReactNode } from "react";

interface SideBoxProps {
  text: string;
  icon: ReactNode;
}

const SideBox = ({ text, icon }: SideBoxProps) => {
  return (
    <div className="w-[80%] sm:w-[90%] p-4 gap-4 text-center bg-white rounded-lg flex flex-col justify-center custom-shadow">
      {icon}
      <p className="text-xl ">{text}</p>
    </div>
  );
};

export default SideBox;
