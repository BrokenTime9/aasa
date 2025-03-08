"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import faqs from "@/data/faqs.json";

const Questions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300 mb-2">
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center w-full py-3 text-left text-lg font-semibold text-gray-800"
          >
            {faq.question}
            {openIndex === index ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>
          {openIndex === index && (
            <p className="p-3 text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </>
  );
};
export default Questions;
