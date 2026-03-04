import Image from "next/image";
import Button from "@/components/Button";

export default function HeroSection() {
  return (
    <section className="w-full bg-lavender">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row">
        {/* Image */}
        <div className="relative w-full md:w-2/3 h-[225px] md:h-[300px] lg:h-[480px]">
          <Image
            src="/images/hero-image-2.png"
            alt="Athletes training with intensity in the gym"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Text panel */}
        <div className="w-full md:w-1/3 flex flex-col justify-between p-5 pb-8 md:pb-5 lg:pt-5 lg:pb-[66px] gap-1.5 md:gap-5">
          <h2 className="font-heading font-bold text-[28px] md:text-[36px] lg:text-[45px] leading-tight">
            FOR THE COMMITTED
          </h2>

          <div className="flex flex-col justify-end gap-5 flex-1">
            <p className="font-sans text-[15px] md:text-[15px] lg:text-[17px] leading-relaxed text-black">
              Train like an athlete with top-tier equipment and expert
              programming. Whether you&apos;re building muscle or breaking PRs,
              we help you push past limits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
