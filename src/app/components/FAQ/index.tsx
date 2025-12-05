"use client"
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function FAQ(){
    const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does ZapShift courier work?",
      answer: "We offer end-to-end logistics solutions. Simply book a pickup via our app or website, and our rider will collect your parcel. You can track it in real-time until it is safely delivered to your customer."
    },
    {
      question: "Is it suitable for all types of packages?",
      answer: "Yes! We handle everything from small documents to large parcels. Whether you are sending personal items or running an e-commerce business, we have a solution for you."
    },
    {
      question: "Does it really help with fast delivery?",
      answer: "Absolutely. With our optimized route planning and efficient sorting hubs, we ensure express delivery within Dhaka in 4-6 hours and nationwide within 24-72 hours."
    },
    {
      question: "Does it have real-time tracking?",
      answer: "Yes, our platform provides live tracking updates. You and your customer can see exactly where the package is at every step of the journey."
    },
    {
      question: "How will I be notified when delivery is done?",
      answer: "You will receive instant SMS and email notifications upon successful delivery. The status in your dashboard will also update to 'Delivered' immediately."
    }
  ];

  return (
    <section className="mt-20 w-full max-w-4xl mx-auto px-4 pb-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#003B46] mb-3">Frequently Asked Question (FAQ)</h2>
      <p className="text-gray-500 text-sm md:text-base mb-10 max-w-2xl mx-auto">
        Have questions? We have answers. Learn more about our delivery process, coverage, and services.
      </p>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              openIndex === index 
                ? 'bg-[#E0F2F1] border-[#3c8c9e] shadow-sm' 
                : 'bg-white border-gray-200 hover:border-gray-300'
            }`}
          >
            <button 
              onClick={() => setOpenIndex(index === openIndex ? null : index)}
              className="w-full p-5 flex items-center justify-between text-left focus:outline-none"
            >
              <span className={`font-bold text-lg ${openIndex === index ? 'text-[#003B46]' : 'text-gray-700'}`}>
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-[#003B46]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>
            
            <div 
              className={`text-left px-5 text-gray-600 leading-relaxed transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C6EA65] text-[#1a2b3b] font-bold hover:bg-[#b5d950] transition-colors shadow-sm group">
          See More FAQ's
          <div className="w-6 h-6 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
             <ArrowUpRight className="w-3 h-3" />
          </div>
        </button>
      </div>
    </section>
  );
}