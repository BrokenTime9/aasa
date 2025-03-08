import Button from "@/ui/button";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-3xl mt-4 font-semibold">AASA</h1>
      <div className="w-[50%]">
        <Button text={"Get Started"} />
      </div>
    </div>
  );
};

export default Navbar;
