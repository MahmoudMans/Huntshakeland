import { useState } from "react";

export default function FAQ() {
  // Type openIndex as number or null
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What is a Catchzone?",
      answer:
        "A Catchzone is a location-based social environment where you can connect with people around you in real time. It transforms everyday spaces like coffee shops, coworking spaces, or gyms into social hubs for networking, friendships, and collaborations.",
    },
    {
      question: "How do I find a Catchzone near me?",
      answer:
        "Simply open our app or website to view a map of active Catchzones in your area. Select one you’d like to join, head to the venue, and you’ll be able to see who’s around and ready to connect.",
    },
    {
      question: "Is Catchzone free to use?",
      answer:
        "Yes! Catchzone is completely free to join and explore. You can find nearby Catchzones, meet new people, and send invitations without any cost.",
    },
    {
      question: "Can I create my own Catchzone at my location or event?",
      answer:
        "Absolutely! If you’d like to host your own Catchzone—for example, at your café, office, or conference—just sign up as a host. We’ll help you get set up so visitors can connect in real time.",
    },
    {
      question: "What if I’m shy about meeting new people in real life?",
      answer:
        "That’s natural! Catchzone helps break the ice by showing you who’s there and open to chat. You can choose who to connect with, send a symbolic invitation, and gradually ease into real-life conversations.",
    },
    {
      question: "Does Catchzone store my personal data or location?",
      answer:
        "We only gather the minimal information needed to help you connect in real time and respect all privacy regulations. Once you leave a Catchzone, your location isn’t tracked or stored.",
    },
  ];

  // Explicitly type `index` to fix 'implicitly has an any type' error
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Frequently Asked Questions
        </h2>
        {/* Optional Sub-Title for context */}
        <p className="text-center text-gray-600 mt-3 mb-8">
          Find answers to the most common queries
        </p>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-sm border border-gray-200"
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => handleToggle(idx)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left 
                             font-medium text-gray-900 rounded-t-lg hover:bg-gray-50 
                             transition-colors duration-200"
                >
                  <span className="text-base md:text-lg">{item.question}</span>
                  <span
                    className={`text-2xl font-bold transform transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Answer with smooth show/hide */}
                <div
                  className={`px-4 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 py-2" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
