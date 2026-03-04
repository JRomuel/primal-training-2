import Image from "next/image";
import Button from "@/components/Button";

const features = [
  {
    title: "Expert Coaching",
    description: "Trainers who are passionate about your progress.",
  },
  {
    title: "Results-Driven Programs",
    description: "Workouts that deliver tangible, measurable results.",
  },
  {
    title: "A Supportive Tribe",
    description: "A community that pushes you to be your best.",
  },
];

export default function DiscoverPotentialSection() {
  return (
    <section id="programs" className="w-full bg-lavender">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row">
        {/* Text panel */}
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col">
          {/* Headline */}
          <div className="border-b border-black px-5 py-5 md:py-[15px] flex items-center">
            <h2 className="font-heading font-bold text-[28px] md:text-[36px] lg:text-[45px] leading-tight">
              DISCOVER YOUR POTENTIAL
            </h2>
          </div>

          {/* Feature list */}
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border-b border-black px-5 py-5 flex flex-col gap-1.5"
            >
              <h3 className="font-heading font-bold text-[22px] md:text-[25px] leading-tight">
                {feature.title}
              </h3>
              <p className="font-sans text-[15px] lg:text-[17px] leading-relaxed text-black">
                {feature.description}
              </p>
            </div>
          ))}

          {/* Button row */}
          <div className="px-5 py-5 md:py-[30px]">
            <Button href="#join">Learn More</Button>
          </div>
        </div>

        {/* Image - mobile on top via order, desktop on right */}
        <div className="relative w-full md:w-1/2 lg:w-2/3 h-[225px] md:h-auto md:min-h-[470px] lg:min-h-[600px] order-first md:order-last">
          <Image
            src="/images/join-community-image-2.png"
            alt="Athletes discovering their potential through training"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
