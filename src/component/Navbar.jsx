import { useState } from "react";
import { User, Search, Gem, Bell, Menu, X } from "lucide-react";
// import "../css/Navbar.css";

const navLinks = [
  { name: "Films", path: "#" },
  { name: "Series", path: "#" },
  { name: "Movie Buffs", path: "#" },
  { name: "Lists", path: "#" },
  { name: "Artists", path: "#" },
  { name: "Blog", path: "#" },
  { name: "Sections", path: "#" },
];

const actions = [
  { name: "Search", icon: Search },
  { name: "Subscribe", icon: Gem },
  { name: "Notifications", icon: Bell },
  { name: "Log in", icon: User },
];

function Navlinks({ mobile = false }) {
  return (
    <>
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.path}
          className={
            mobile
              ? "transition-all duration-300 bg-black text-sm text-white p-2 rounded hover:bg-[rgba(255,196,0,0.833)] hover:text-black"
              : "whitespace-nowrap rounded px-[10px] py-[5px] text-white transition-all duration-300 hover:bg-[rgba(255,196,0,0.833)] hover:text-black"
          }
        >
          {link.name}
        </a>
      ))}
    </>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* desktop nav */}
      <nav className="flex justify-between items-center min-h-16 px-4 bg-black">
        <div className="flex gap-8">
          <a className="text-lg font-bold tracking-widest text-[rgba(255,196,0,0.833)]">
            LOGO
          </a>
          <div className="hidden lg:flex gap-2 text-sm items-center">
            <Navlinks />
          </div>
        </div>

        <div className="hidden lg:flex gap-2">
          {actions.map((action) => {
            return (
              <button
                key={action.name}
                className="group rounded border-2 bg-[#00000046] px-[10px] py-[5px] text-white transition-all duration-300 hover:border-[rgba(255,196,0,0.721)]"
              >
                {action.icon ? (
                  <action.icon
                    size={18}
                    className="transition-all duration-300 group-hover:text-[rgba(255,196,0,0.833)]"
                  />
                ) : (
                  action.name
                )}
              </button>
            );
          })}
          {/* mobile menu */}
        </div>
        <button
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          className="text-white lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>
      {/* mobile nav */}
      <nav>
        <div
          className={`flex flex-col gap-1.5 px-4 overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          } lg:hidden`}
        >
          <Navlinks mobile />
        </div>
      </nav>
    </>
  );
}
