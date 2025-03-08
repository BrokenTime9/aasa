import Navbar from "@/components/navbar";
import Intro from "@/components/Intro";
import MissOutSection from "@/components/MissOutSection";
import CourseSection from "@/components/CourseSection";
import Review from "@/components/Review";
import HoveringText from "@/components/HoveringText";
import Extras from "@/components/Extras";
import EnrollSection from "@/components/EnrollSection";
import Fnq from "@/components/Fnq";

export default function Home() {
  return (
    <div className="w-[98dvw] text-center mx-auto flex flex-col gap-8 justify-around p-3">
      <Navbar />
      <Intro />
      <MissOutSection />
      <CourseSection />
      <Review />
      <HoveringText />
      <Extras />
      <EnrollSection />
      <Fnq />
    </div>
  );
}
