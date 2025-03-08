import Navbar from "@/components/navbar";
import Intro from "@/components/Intro";
import MissOutSection from "@/components/MissOutSection";
import CourseSection from "@/components/CourseSection";
import Review from "@/components/Review";

export default function Home() {
  return (
    <div className="w-[98dvw] mx-auto flex flex-col gap-8 justify-around sm:p-2 mt-4">
      <Navbar />
      <Intro />
      <MissOutSection />
      <CourseSection />
      <Review />
    </div>
  );
}
