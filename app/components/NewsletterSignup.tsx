import { Smartphone, MapPin, Coffee, MessageCircle, Users } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      stepNumber: 1,
      title: "Sign Up",
      description:
        "Create your profile in seconds, so other users can see who you are and start connecting.",
      proTip: "Pro Tip: Use a friendly photo to boost connections!",
      icon: Smartphone,
      image: "https://via.placeholder.com/500x350?text=Sign+Up+Screen",
    },
    {
      stepNumber: 2,
      title: "Enable Location",
      description:
        "Allow location access to discover people nearby wherever you are.",
      proTip: "Pro Tip: Turning on location gives you the best matches!",
      icon: MapPin,
      image: "https://via.placeholder.com/500x350?text=Location+Screen",
    },
    {
      stepNumber: 3,
      title: "Invite Others",
      description:
        "Easily send fun, casual invites to connect for coffee, drinks, and more!",
      icon: Coffee,
      image: "https://via.placeholder.com/500x350?text=Invite+Screen",
    },
    {
      stepNumber: 4,
      title: "Chat & Connect",
      description:
        "Start chatting as soon as your invite is accepted—build connections quickly!",
      icon: MessageCircle,
      image: "https://via.placeholder.com/500x350?text=Chat+Screen",
    },
    {
      stepNumber: 5,
      title: "Meet Up",
      description:
        "Enjoy face-to-face interactions—turn online connections into real-life experiences!",
      icon: Users,
      image: "https://via.placeholder.com/500x350?text=Meetup+Screen",
    },
  ];

  // Main palette
  const ivory = "#EAE6E0"; // Outer container background
  const onyx = "#31302B";  // Headings, CTA background
  const stone = "#888782"; // Body text
  const sage = "#B4B8AB";  // Step circle

  // First step is white, second step is a new color (#FFF8F2).
  const stepBackgrounds = ["bg-white", "bg-[#FFF8F2]"];

  return (
    <div
      className="py-16 px-4 md:px-16 rounded-3xl shadow-xl"
      style={{ backgroundColor: ivory }}
    >
      <h2
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        style={{ color: onyx }}
      >
        How It Works
      </h2>

      <div className="max-w-5xl mx-auto space-y-16">
        {steps.map(({ stepNumber, title, description, proTip, image }, index) => {
          // Alternate the background for each step
          const bgClass = stepBackgrounds[index % stepBackgrounds.length];

          return (
            <div
              key={index}
              className={`rounded-xl px-6 py-16 md:px-10 shadow-sm ${bgClass}`}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                {/* Left/Text Column */}
                <div className="md:w-1/2">
                  <div className="flex items-start gap-4 mb-6">
                    {/* Step Number Circle (Sage) */}
                    <div
                      className="flex items-center justify-center w-14 h-14 rounded-full text-lg font-bold"
                      style={{
                        backgroundColor: sage,
                        color: "#FFFFFF",
                      }}
                    >
                      {stepNumber}
                    </div>

                    {/* Step Title */}
                    <div>
                      <h3
                        className="text-2xl font-bold mb-1"
                        style={{ color: onyx }}
                      >
                        Step {stepNumber}: {title}
                      </h3>
                    </div>
                  </div>

                  {/* Description in Stone */}
                  <p className="text-lg leading-relaxed" style={{ color: stone }}>
                    {description}
                  </p>

                  {/* Optional Pro Tip in a smaller, italic Stone */}
                  {proTip && (
                    <p className="text-sm italic mt-3" style={{ color: stone }}>
                      {proTip}
                    </p>
                  )}
                </div>

                {/* Right/Image Column */}
                <div className="md:w-1/2">
                  <img
                    src={image}
                    alt={`${title} Screenshot`}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Button at the bottom */}
      <div className="mt-12 text-center">
        <button
          className="
            py-3 px-8
            rounded-full
            font-semibold
            shadow-md
            transition-colors
            duration-300
          "
          style={{
            backgroundColor: onyx, // Onyx button
            color: ivory,          // Ivory text
          }}
        >
          Join the Waitlist and Try Huntshake!
        </button>
      </div>
    </div>
  );
}
