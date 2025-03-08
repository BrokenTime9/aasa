import Button from "@/ui/button";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-[70%]">
        <Button text={"Let s get started"} />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">
          Ready to Start Your Digital Art Journey?
        </h2>
        <p>Click below to secure your spot & start creating!</p>
      </div>
      <div className="w-[70%]">
        <Button text={"Enroll Now"} />
      </div>
    </div>
  );
};
export default Footer;
