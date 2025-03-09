import Button from "@/ui/button";

const Footer = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="w-[70%] py-8 pb-10">
        <Button text={"Let s get started"} />
      </div>
      <div className="my-4">
        <h2 className="text-2xl font-semibold py-2">
          Ready to Start Your Digital Art Journey?
        </h2>
        <p>Click below to secure your spot & start creating!</p>
      </div>
      <div className="w-[70%] pb-6">
        <Button text={"Enroll Now"} />
      </div>
    </div>
  );
};
export default Footer;
