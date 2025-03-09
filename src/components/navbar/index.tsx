import Image from "next/image";
import logo from "@/../public/214431212 (1).png";

const Navbar = () => {
  return (
    <div className="flex justify-between pt-4">
      <div className="w-[22%]">
        <Image src={logo} alt="logo" priority />
      </div>
      <div className="w-[50%]">
        <button className="bgcolor1 font-semibold text-white px-6 py-3 rounded-full  w-full overflow-hidden text-ellipsis whitespace-nowrap shadow-md ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
