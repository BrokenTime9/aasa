import Button from "@/ui/button";
import SideBox from "@/ui/sidebox";
import {
  Award,
  Brush,
  FileText,
  MessageCircle,
  MousePointerClick,
  Package,
  Users,
} from "lucide-react";

const CourseSection = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl py-3 font-semibold bg-gradient-to-r from-[#4b00c8] via-[#6508ba] to-[#d50be4] bg-clip-text text-transparent inline-block">
        With This Course, You Get:
      </h2>

      <SideBox
        text={
          "Hands-on Lessons – Learn digital painting, shading & composition."
        }
        icon={<MousePointerClick size={36} className="self-center" />}
      />
      <SideBox
        text={"Tool Mastery – Master Procreate, Photoshop, & Illustrator."}
        icon={<Brush size={36} className="self-center" />}
      />
      <SideBox
        text={"Exclusive Resource Pack – Brushes, templates & textures."}
        icon={<Package size={36} className="self-center" />}
      />
      <SideBox
        text={"Live Mentorship – Weekly Q&A sessions with industry pros."}
        icon={<Users size={36} className="self-center" />}
      />
      <SideBox
        text={"Project-Based Learning – Build a stunning portfolio."}
        icon={<FileText size={36} className="self-center" />}
      />
      <SideBox
        text={"Certificate of Completion – Boost your creative career."}
        icon={<Award size={36} className="self-center" />}
      />
      <SideBox
        text={"Community Access – Network with fellow artists."}
        icon={<MessageCircle size={36} className="self-center" />}
      />
      <div className="w-[80%]">
        <Button text={"Book Now at ₹49"} />
      </div>
    </div>
  );
};

export default CourseSection;
