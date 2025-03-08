import Button from "@/ui/button";
import SideBox from "@/ui/sidebox";
import {
  Award,
  Brush,
  DollarSign,
  FileText,
  Layers,
  Palette,
  Pencil,
  User,
  Users,
} from "lucide-react";

const Extras = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="text-3xl font-semibold">Not Satisfied Yet?</h2>
      <h3 className="text-lg">We got you! Here are few extra features</h3>
      <SideBox
        text={"Sketching Basics – Shape, form, and proportion fundamentals."}
        icon={<Pencil size={36} className="self-center" />}
      />
      <SideBox
        text={
          "Digital Painting – Master shading, blending & coloring techniques."
        }
        icon={<Palette size={36} className="self-center" />}
      />
      <SideBox
        text={
          "Tool Mastery – Hands-on with Procreate, Photoshop & Illustrator."
        }
        icon={<Brush size={36} className="self-center" />}
      />
      <SideBox
        text={"Character & Concept Art – Create professional-grade designs."}
        icon={<User size={36} className="self-center" />}
      />
      <SideBox
        text={
          "Portfolio Building – Craft stunning pieces to showcase your skills."
        }
        icon={<FileText size={36} className="self-center" />}
      />
      <SideBox
        text={
          "Bonus: Monetization Guide – How to sell your art & get freelance gigs."
        }
        icon={<DollarSign size={36} className="self-center" />}
      />
      <SideBox
        text={"Certificate of Completion – Boost your creative career."}
        icon={<Award size={36} className="self-center" />}
      />
      <SideBox
        text={"Project-Based Learning – Build a stunning portfolio."}
        icon={<Layers size={36} className="self-center" />}
      />
      <SideBox
        text={"Live Mentorship – Weekly Q&A sessions with industry pros."}
        icon={<Users size={36} className="self-center" />}
      />
      <div className="w-[70%]">
        <Button text={"Book Now for ₹79"} />
      </div>
    </div>
  );
};

export default Extras;
