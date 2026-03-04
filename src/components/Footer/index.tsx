import Image from "next/image";

const openingHours = [
  { day: "MON – FRI", time: "5:00 – 23:00" },
  { day: "SATURDAYS", time: "8:00 – 16:00" },
  { day: "SUNDAYS", time: "8:00 – 13:00" },
  { day: "HOLIDAYS", time: "8:00 – 16:00" },
];

const socialLinks = ["Instagram", "X", "LinkedIn", "Spotify"];

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-lavender border-t border-black">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-10 md:py-16">
        {/* Top section: Logo + Brand name */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16 md:mb-32">
          <div className="w-[120px] md:w-[200px]">
            <Image
              src="/images/logo-primal-2.png"
              alt="Primal Training logo"
              width={200}
              height={200}
              className="w-full h-auto"
            />
          </div>
          <h2 className="font-heading font-bold text-[40px] md:text-[72px] lg:text-[96px] leading-none tracking-tight text-black">
            PrimalTraining
          </h2>
        </div>

        {/* Bottom section: Contact, Opening Hours, Social */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-bold text-[17px] md:text-[20px] text-black uppercase">
              Contact
            </h3>
            <div className="flex flex-col gap-1">
              <p className="font-sans text-[15px] text-black">
                Email: hello@figma.com
              </p>
              <p className="font-sans text-[15px] text-black">
                Phone: (203) 555-5555
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-bold text-[17px] md:text-[20px] text-black uppercase">
              Opening Hours
            </h3>
            <div className="flex flex-col gap-1">
              {openingHours.map((item) => (
                <div key={item.day} className="flex gap-6 md:gap-12">
                  <span className="font-sans text-[15px] text-black font-bold w-[120px] md:w-[140px]">
                    {item.day}
                  </span>
                  <span className="font-sans text-[15px] text-black">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-bold text-[17px] md:text-[20px] text-black uppercase">
              Social
            </h3>
            <div className="flex flex-col gap-1">
              {socialLinks.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="font-sans text-[15px] text-black underline hover:text-black/70 transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
