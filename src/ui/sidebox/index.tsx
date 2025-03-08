import { ReactNode } from "react";

interface SideBoxProps {
  text: string;
  icon: ReactNode;
}

const SideBox = ({ text, icon }: SideBoxProps) => {
  return (
    <div className="w-[90%] text-left p-4 gap-4 bg-white rounded-lg flex justify-center shadow1">
      <div className="translate-y-[6px]">{icon}</div>
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default SideBox;
