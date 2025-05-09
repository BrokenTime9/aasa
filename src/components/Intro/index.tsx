import Image from "next/image";
import hero1 from "@/../public/4505770.jpg";

const Intro = () => {
  return (
    <div className="flex flex-col text-center gap-4 items-center pt-4">
      <h1 className="text-3xl font-semibold bg-gradient-to-r from-[#4b00c8] via-[#6508ba] to-[#d50be4] bg-clip-text text-transparent inline-block">
        Master the Art of Digital Illustration
      </h1>
      <h2 className="text-xl font-semibold text-gray-600">
        A 4-Week Course Designed for Beginners & Enthusiasts!
      </h2>
      <div className="w-[99%] mx-auto pt-4">
        <Image src={hero1} alt="art image" priority />
      </div>
      <div className="">
        <p className="text-md font-semibold">
          Learn to create stunning digital artwork with step-by-step guidance
          from industry experts.{" "}
        </p>
        <p className="text-md font-semibold">
          No prior experience required. Just your creativity! Enroll now for
          ₹7,999
        </p>

        <div className="w-[80%] mx-auto pt-8">
          <button className="bgcolor1 font-semibold text-white px-6 py-3 rounded-full  w-full overflow-hidden text-ellipsis whitespace-nowrap shadow-md ">
            Secure Your Spot for Just ₹79
          </button>
        </div>
        <p className="text-md pt-2">
          Use a coupon code within 15 minutes to unlock a special bonus pack!
        </p>
      </div>
    </div>
  );
};

export default Intro;
