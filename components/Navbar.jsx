"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../constants";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Link href="/Public">
              <Image
                className="h-10 w-10 mr-2"
                src={logo}
                alt="logo"
                width={40}
                height={40}
              />
            </Link>
            <span className="text-xl tracking-tight">Grindly</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="ClientMember" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="/CreateUser"
              className="bg-gradient-to-r from-[#0f55da] to-[#0a3c9e] hover:from-[#0a3c9e] hover:to-[#0f55da] transition-all py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md-flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li className="py-4" key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-8">
              <a className="py-2 px-3 border rounded-md" href="#">
                Sign In
              </a>
              <a className="bg-gradient-to-r from-[#0f55da] to-[#0a3c9e] hover:from-[#0a3c9e] hover:to-[#0f55da] transition-all py-2 px-3 rounded-md">
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
