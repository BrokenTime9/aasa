import Button from "@/ui/button";
import HollowBox from "@/ui/hollowBox";

const EnrollSection = () => {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h1>Enroll Now for ₹7,999</h1>
      <div className="flex flex-col gap-2">
        <HollowBox text={"Secure Your Spot for Just ₹79"} />

        <HollowBox
          text={"Bonus Offer: Apply a coupon code within 15 minutes to unlock:"}
        />

        <HollowBox text={"Exclusive Brush & Texture Pack"} />

        <HollowBox text={"Extra Live Q&A Session with Mentors"} />
      </div>
      <p>We offer everything you need at ₹7,999 but wait… &#x1F440;</p>
      <p className="bg-gradient-to-r  from-[#fce5cd]  via-[#e9d5ff] to-[#bae6fd] p-2 rounded-md text-center">
        Use a Special Code & Unlock a Game-Changing Discount to avail same
        course in a discounted price!
      </p>
      <div className="w-[70%]">
        <Button text={"Book Now for ₹79"} />
      </div>
    </div>
  );
};
export default EnrollSection;
