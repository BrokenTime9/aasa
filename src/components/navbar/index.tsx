import Button from "@/ui/button";

const Navbar = () => {
  return (
    <div className=" mt-6 mx-2 flex justify-between">
      <h1 className="text-3xl font-semibold">AASA</h1>
      <Button text={"Get Started"} />
    </div>
  );
};

export default Navbar;
