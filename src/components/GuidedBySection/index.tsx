import Image from "next/image";

const cards = [
  {
    title: "Guided by experts",
    description:
      "We believe in creating a positive environment where you can thrive. We're here to help you achieve your goals and unlock your full potential.",
  },
  {
    title: "DYNAMIC OPEN GYM",
    description:
      "Our facility is the optimal environment for strength training and performance, fully equipped with top-of-the-line tools, ample training areas, and a focus on functional movement.",
  },
];

export default function GuidedBySection() {
  return (
    <section className="w-full border-b border-black">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row">
        {/* Mobile: image on top */}
        <div className="md:hidden relative w-full h-[479px]">
          <Image
            src="/images/side-image-2.png"
            alt="Expert trainer guiding an athlete"
            fill
            className="object-cover"
          />
        </div>

        {/* Cards */}
        {cards.map((card, i) => (
          <div
            key={card.title}
            className={`w-full md:w-1/3 bg-lavender p-5 pb-5 md:pb-5 lg:pt-5 lg:pb-[66px] flex flex-col gap-1.5 md:gap-12 lg:gap-[220px] justify-between ${
              i === 1 ? "border-t md:border-t-0 md:border-l border-black" : ""
            }`}
          >
            <h3 className="font-heading font-bold text-[28px] md:text-[36px] lg:text-[45px] leading-tight">
              {card.title}
            </h3>
            <p className="font-sans text-[15px] lg:text-[17px] leading-relaxed text-black">
              {card.description}
            </p>
          </div>
        ))}

        {/* Desktop: image on the right */}
        <div className="hidden md:block relative md:w-1/3 md:min-h-[299px] lg:min-h-[479px]">
          <Image
            src="/images/side-image-2.png"
            alt="Expert trainer guiding an athlete"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
