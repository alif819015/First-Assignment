import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About Us", link: "/about" },
    { id: 3, name: "Products", link: "/products" },
    { id: 4, name: "Contact Us", link: "/contact" },
    { id: 5, name: "Log In", link: "/login" },
  ];

  return (
    <nav className="bg-purple-300">
      <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <span>
          {isOpen === true ? (
            <XMarkIcon className="h-6 w-6 text-fuchsia-700" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-fuchsia-700" />
          )}
        </span>
      </div>
      <ul className={`md:flex gap-5 absolute md:static bg-purple-400 duration-700 px-5 py-2 ${isOpen? 'top-6': '-top-36'}`}>
        {navItems.map((navItem) => (
          <Link key={navItem.id} navItem={navItem}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
