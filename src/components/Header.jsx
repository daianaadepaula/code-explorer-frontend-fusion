import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../constants";

const Header = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-400/80">
      <div className="px-4 mx-auto relative">
        <div className="flex justify-between items-center">
          <span className="bg-gradient-to-r from-indigo-500 to-cyan-800 text-transparent bg-clip-text text-2xl tracking-tight">
            Daiana
          </span>
          <ul className="hidden md:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-indigo-300"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="md:hidden sm:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-[#444299] w-full p-12 flex flex-col justify-center items-center md:hidden">
            <ul className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    className="text-neutral-300 hover:text-indigo-300"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
