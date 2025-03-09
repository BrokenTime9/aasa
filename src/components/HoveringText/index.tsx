import FloatingText from "@/ui/floatingtext";

const HoveringText = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="py-8 pt-10">
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#4b00c8] via-[#6508ba] to-[#d50be4] bg-clip-text text-transparent inline-block">
          Is This Right for You?
        </h2>
        <h3 className="text-lg">
          Everybody is fond of Digital Art! You need it too.
        </h3>
      </div>
      <FloatingText />
    </div>
  );
};

export default HoveringText;
