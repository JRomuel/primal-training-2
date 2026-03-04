import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: string;
  href?: string;
  variant?: "primary" | "dark";
}

export default function Button({
  children,
  href = "#",
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 font-heading font-bold text-[15px] md:text-[17px] transition-colors duration-200 border border-black";
  const variants = {
    primary: "bg-purple text-black hover:bg-purple/80",
    dark: "bg-black text-white hover:bg-black/80",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]}`}>
      {children}
      <ArrowRight className="w-4 h-4" />
    </a>
  );
}
