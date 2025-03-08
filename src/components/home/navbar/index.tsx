import Button from "@/ui/button";

const Navbar = () => {
  return (
    <div className="p-3 mt-8 mx-2 flex justify-between">
      <h1 className="text-4xl font-semibold">AASA</h1>
      <Button text={"Get Started"} />
    </div>
  );
};

export default Navbar;
