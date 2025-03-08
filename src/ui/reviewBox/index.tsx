interface ReviewBoxType {
  review: string;
  age: number;
  name: string;
}

const ReviewBox = ({ review, age, name }: ReviewBoxType) => {
  return (
    <div className="relative p-[2px] rounded-lg bg-gradient-to-t from-[#4b00c8] via-[#6508ba] to-[#d50be4]">
      <div className="flex flex-col gap-3 items-center p-3 rounded-md bg-white text-black">
        <p className="text-lg font-semibold ">{name}</p>
        <p className="text-md">{age}</p>
        <p className="text-md text-center">{review}</p>
      </div>
    </div>
  );
};

export default ReviewBox;
