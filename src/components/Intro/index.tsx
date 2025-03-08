import Button from "@/ui/button";
import Image from "next/image";
import hero1 from "@/../public/4505770.jpg";

const Intro = () => {
  return (
    <div className="flex flex-col text-center gap-4">
      <h1 className="text-3xl font-semibold bg-gradient-to-r from-[#4b00c8] via-[#6508ba] to-[#d50be4] bg-clip-text text-transparent inline-block">
        Master the Art of Digital Illustration
      </h1>
      <h2 className="text-2xl font-semibold text-gray-600">
        A 4-Week Course Designed for Beginners & Enthusiasts!
      </h2>
      <div className="w-[99%] mx-auto py-6">
        <Image src={hero1} alt="art image" />
      </div>
      <p className="text-lg font-semibold">
        Learn to create stunning digital artwork with step-by-step guidance from
        industry experts.{" "}
      </p>
      <p className="text-lg font-semibold">
        No prior experience required. Just your creativity! Enroll now for
        ₹7,999
      </p>
      <div className="flex justify-center p-2">
        <Button text={"Secure Your Spot for Just ₹79"} />
      </div>
      <p className="text-xl font-semibold">
        Use a coupon code within 15 minutes to unlock a special bonus pack!
      </p>
    </div>
  );
};

export default Intro;
