import Button from "@/components/Button";

export default function CallToAction() {
  return (
    <section
      id="join"
      className="w-full bg-purple"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col items-center justify-center text-center px-5 md:px-[70px] py-[80px] md:py-[102px] gap-[18px]">
        <p className="font-sans text-[15px] lg:text-[17px] text-black uppercase tracking-wide">
          WHAT WE BELIEVE IN
        </p>
        <h2 className="font-heading font-bold text-[37px] md:text-[57px] leading-tight max-w-[780px]">
          Join the Primal Tribe Today!
        </h2>
        <Button href="#contact" variant="dark">
          Join Now
        </Button>
      </div>
    </section>
  );
}
