interface ReviewBoxType {
  review: string;
  age: number;
  name: string;
}

const ReviewBox = ({ review, age, name }: ReviewBoxType) => {
  return (
    <div className="flex flex-col border border-2">
      <p>{name}</p>
      <p>{age}</p>
      <p>{review}</p>
    </div>
  );
};

export default ReviewBox;
