"use client";
import React from "react";
import { NavbarMenu } from "../data/Nav-data";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import ResponsiveMenu from "./ResponsiveNav";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname(); // yahan se current URL milta hai

  return (
    <>
      <nav className="bg-[var(--primary)] sticky top-0 z-50">
        <div className="container max-w-full py-1">
          {/* logo section */}
          <div className="flex items-center max-w-6xl mx-auto px-4 justify-between py-2">
            <div className="flex items-center justify-between spacex-2">
              {/* <img src="/assets/images/logo.png" alt="logo" className="h-12 w-auto" /> */}
              <div className="flex items-center gap-2">
                <h2 className=" sm:text-xl text-2xl text-[var(--headingColor)] font-extrabold font-[var(--font-heading)]" style={{ fontFamily: "LostFish" }}>My Blog App</h2>
              </div>
            </div>

            {/* Menu section */}
            <div className="hidden md:flex items-center gap-7">
              <ul className="flex items-center gap-3 font-medium">
                {NavbarMenu.map((item) => {
                  const active = pathname === item.link;

                  return (
                    <li key={item.id}>
                      <Link
                        href={item.link}
                        className={`
                          inline-block text-base py-2 px-3 cursor-pointer
                          ${active ? "text-[var(--eBoxColor)] font-semibold border-b-2 border-primaryBlue" : "text-darkNavy"}
                        `}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Mobile hamburger menu section */}
            <div className="md:hidden flex items-center gap-4" onClick={() => setOpen(!open)}>
              <GiHamburgerMenu className="text-3xl cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile slidebar section */}
      <div>
        <ResponsiveMenu open={open} setOpen={setOpen} />
      </div>
    </>
  );
}
