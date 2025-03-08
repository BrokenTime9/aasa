import image from "@/../public/Webinar.png";
import ReviewBox from "@/ui/reviewBox";
import Image from "next/image";

const Review = () => {
  return (
    <div className="flex flex-col">
      <div className="w-[80%] mx-auto my-4  rounded-md custom-shadow ">
        <Image src={image} alt={"video"} />
      </div>
      <div className="flex flex-col gap-4">
        <ReviewBox
          name={"Aditi Verma"}
          age={21}
          review={
            "I always wanted to learn digital art, but tutorials were confusing. This course made everything so simple! Now, I m taking commissions online!"
          }
        />
        <ReviewBox
          name={"Rajesh Khanna"}
          age={56}
          review={
            "Switching from traditional art to digital felt overwhelming, but this course changed everything! The structured lessons helped me master Procreate in weeks!"
          }
        />
      </div>
    </div>
  );
};

export default Review;
