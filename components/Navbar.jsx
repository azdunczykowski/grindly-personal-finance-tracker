"use client";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { navItems } from "../constants";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  const toggleNavbar = () => {
    setMobileOpen(!mobileOpen);
  };

  const linkClasses = "py-2 px-3 border rounded-md";
  const buttonClasses =
    "bg-gradient-to-r from-[#0f55da] to-[#0a3c9e] hover:from-[#0a3c9e] hover:to-[#0f55da] transition-all py-2 px-3 rounded-md text-sm";

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
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Link href="/sign-in" className={linkClasses}>
              Login
            </Link>
            <Link href="/sign-up" className={buttonClasses}>
              Create an account
            </Link>
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
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-8">
              <Link className={linkClasses} href="/sign-in">
                Login
              </Link>
              <Link className={buttonClasses} href="/sign-up">
                Create an account
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
