import image from "@/../public/Webinar.png";
import ReviewBox from "@/ui/reviewBox";
import Image from "next/image";

const Review = () => {
  return (
    <div className="flex flex-col">
      <div className="w-[90%] mx-auto  rounded-md custom-shadow-blue ">
        <Image src={image} alt={"video"} priority />
      </div>
      <div className="flex flex-col">
        <ReviewBox
          name={"Aditi Verma"}
          age={21}
          review={
            "I always wanted to learn digital art, but tutorials were confusing. This course made everything so simple! Now, I m taking commissions online!"
          }
        />
        <ReviewBox
          name={"Rajesh Khanna"}
          age={55}
          review={
            "Switching from traditional art to digital felt overwhelming, but this course changed everything! The structured lessons helped me master Procreate in weeks!"
          }
        />
      </div>
    </div>
  );
};

export default Review;
