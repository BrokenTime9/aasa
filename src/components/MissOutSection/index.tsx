import { PencilRuler, Book, DollarSign } from "lucide-react";
import Card from "@/ui/cards";

const MissOutSection = () => {
  return (
    <div className="flex flex-col gap-4 items-center text-center">
      <h3 className="text-xl py-3 font-semibold">
        Without Proper Training, You Might:
      </h3>
      <Card
        text={"Struggle with complex software tools"}
        icon={<PencilRuler size={36} className=" self-center" />}
      />
      <Card
        text={"Feel stuck without structured learning"}
        icon={<Book size={36} className="self-center" />}
      />
      <Card
        text={"Miss out on monetizing your skills"}
        icon={<DollarSign size={36} className="self-center" />}
      />
    </div>
  );
};

export default MissOutSection;
