interface ReviewBoxType {
  review: string;
  name: string;
}

const ReviewBox = ({ review, name }: ReviewBoxType) => {
  return (
    <div className="relative p-[2px] w-[90%] mx-auto mt-4 rounded-lg bg-gradient-to-t from-[#4b00c8] via-[#6508ba] to-[#d50be4]">
      <div className="flex flex-col gap-3 items-center p-3 px-4 rounded-md bg-white text-black">
        <div className="flex justify-start w-full">
          <p className="text-xl font-semibold ">-{name}</p>
        </div>
        <p className="text-sm text-left">{review}</p>
      </div>
    </div>
  );
};

export default ReviewBox;
