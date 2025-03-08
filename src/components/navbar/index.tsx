import Button from "@/ui/button";
import Image from "next/image";
import logo from "@/../public/214431212 (1).png";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[25%]">
        <Image src={logo} alt="logo" priority />
      </div>
      <div className="w-[50%]">
        <Button text={"Get Started"} />
      </div>
    </div>
  );
};

export default Navbar;
