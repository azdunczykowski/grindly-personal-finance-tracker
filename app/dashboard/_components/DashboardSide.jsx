"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  LayoutDashboard,
  Wallet,
  ArrowUpDown,
  BarChart,
  Target,
  Receipt,
  Settings,
  Menu,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <Button
    variant={active ? "secondary" : "ghost"}
    className={`w-full justify-start my-1 ${
      active
        ? "bg-primary/10 text-primary"
        : "text-muted-foreground hover:text-primary hover:bg-transparent"
    }`}
    onClick={onClick}
  >
    <Icon className="mr-3 h-5 w-5" />
    {label}
  </Button>
);

const Sidebar = ({ session }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: Wallet, label: "Wallets" },
    { icon: ArrowUpDown, label: "Transactions" },
    { icon: BarChart, label: "Investments" },
    { icon: Target, label: "Goals" },
    { icon: Receipt, label: "Bills" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <>
      {/* Mobile sidebar trigger */}
      <div className="block md:hidden">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="fixed top-4 left-4 z-40"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64 bg-background border-r">
            <SidebarContent
              menuItems={menuItems}
              activeItem={activeItem}
              setActiveItem={(item) => {
                setActiveItem(item);
                setMobileOpen(false);
              }}
              session={session}
            />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:block w-64 h-screen bg-background border-r">
        <SidebarContent
          menuItems={menuItems}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          session={session}
        />
      </div>
    </>
  );
};

// Extracted sidebar content to avoid duplication
const SidebarContent = ({ menuItems, activeItem, setActiveItem, session }) => (
  <div className="flex flex-col h-full dark">
    <div className="px-4 py-6">
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 rounded-md flex items-center justify-center">
          <Link href="/Public">
            <Image
              className="h-10 w-10 mr-2"
              src={logo}
              alt="logo"
              width={40}
              height={40}
            />
          </Link>
        </div>
        <h1 className="text-xl tracking-tight">Grindly</h1>
      </div>
    </div>

    {/* Navigation menu */}
    <div className="flex-1 px-4">
      <nav className="flex flex-col gap-1">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={activeItem === item.label}
            onClick={() => setActiveItem(item.label)}
          />
        ))}
      </nav>
    </div>

    {/* User profile at bottom */}
    <div className="mt-auto p-4 border-t">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-muted overflow-hidden">
          <img
            src={session?.user?.image}
            alt="User avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">{session?.user?.name}</p>
          <p className="text-xs text-muted-foreground truncate">
            {session?.user?.email}
          </p>
        </div>
        <Link href="/api/auth/signout?callbackUrl=/">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <LogOut className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default Sidebar;
