import React from "react";
import { User, Search, Gem, Bell } from "lucide-react";
// import "../css/Navbar.css";

export default function Navbar() {
  const navLinks = [
    "Films",
    "Series",
    "Movie Buffs",
    "Lists",
    "Artist",
    "Blog",
    "Sections",
  ];

  const actions = [
    { name: "Search", icon: Search },
    { name: "Subscribe", icon: Gem },
    { name: "Notifications", icon: Bell },
    { name: "Log in", icon: User },
  ];

  return (
    <div className="flex justify-between items-center min-h-16 px-4 bg-black">
      <div className="flex gap-8">
        <a className="text-lg font-bold text-white tracking-widest">LOGO</a>
        <nav className="flex gap-2 text-sm items-center">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="rounded px-[10px] py-[5px] text-white transition-all duration-300 hover:bg-[rgba(255,196,0,0.833)] hover:text-black"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex gap-2">
        {actions.map((action) => {
          return (
            <button
              key={action.name}
              href="#"
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
      </div>
    </div>
  );
}
