"use client";

const words = [
  "Event Planners & Wedding Services",
  "Gyms & Fitness Trainers",
  "Doctors & Clinics",
  "Lawyers & Legal Services",
  "Hotels & Travel Agencies",
  "Photographers & Home-Based Businesses",
  "Videographers",
  "Bakeries",
  "Real Estate Agents",
  "Artists",
  "Freelancers & Solopreneurs",
  "Local Shops & Retail Stores",
  "Startups & Small Tech Businesses",
  "Accountants",
  "Salons & Beauty Parlors",
  "Financial Advisors",
  "Vet Clinics",
  "Musicians",
  "Restaurants & Cafés",
  "Coaching Centers & Tutors",
  "NGOs & Social",
  "Interior Designers & Architects",
  "Enterprises",
  "Bands",
  "Automobile Dealerships",
  "Home Services",
];

const colors = [
  "text-red-500",
  "text-green-500",
  "text-blue-500",
  "text-yellow-500",
  "text-purple-500",
  "text-pink-500",
  "text-orange-500",
  "text-teal-500",
  "text-cyan-500",
  "text-lime-500",
];

const fontSizes = ["text-lg", "text-xl", "text-2xl"];

const WordGrid = () => {
  return (
    <div className="w-full flex flex-wrap justify-center">
      {words.map((word, index) => (
        <span
          key={index}
          className={`font-semibold ${colors[index % colors.length]} ${fontSizes[index % fontSizes.length]} p-2`}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default WordGrid;
