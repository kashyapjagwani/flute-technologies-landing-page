import { useState } from "react";

const links = [
  { label: "Our Expertise", href: "/#expertise" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/work" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        <a href="/">
          <img src="/ft_logo.svg" alt="Flute Technologies" className="h-20" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-x-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-font text-lg font-light hover:text-primary transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-y-1.5 focus:outline-none"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`block h-0.5 w-6 bg-font transition-all duration-300 origin-center ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-font transition-all duration-300 ${
              open ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-font transition-all duration-300 origin-center ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 pb-6 gap-y-5">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="text-font text-lg font-light hover:text-primary transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
