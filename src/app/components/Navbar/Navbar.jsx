"use client";

import {
  Button,
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

const menuItems = ["Home", "Features", "Dashboard", "FAQ"];

export default function App() {
  const [activeMenu, setActiveMenu] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleActiveMenu = () => {
    if (window.location.hash) {
      const hash = window.location.hash.split("#")[1];
      setActiveMenu(hash);
    } else {
      setActiveMenu("");
    }
  };

  useEffect(() => {
    window.addEventListener("hashchange", handleActiveMenu, false);

    return () => {
      window.removeEventListener("hashchange", handleActiveMenu);
    };
  }, []);

  return (
    <Navbar
      className="text-white"
      height="5rem"
      isBordered
      isBlurred
      maxWidth="xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent
        className="sm:hidden pr-3"
        justify="center"
      ></NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        {menuItems.map((menu) => {
          const isHome = menu.toLowerCase() === "home";
          return (
            <NavbarItem
              key={menu}
              isActive={
                isHome
                  ? activeMenu === ""
                  : activeMenu === menu.trim().toLowerCase()
              }
              className="text-white"
            >
              <Link
                className="text-white text-lg"
                color="foreground"
                href={isHome ? "#" : `#${menu.toLowerCase().trim()}`}
              >
                {menu}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            radius="sm"
            size="lg"
            className=" text-white max-sm:hidden sm:text-lg text-sm"
            color="white"
            variant="bordered"
            as={Link}
            href="/join"
          >
            Sign up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            radius="sm"
            size="sm"
            className="text-white sm:hidden text-sm"
            color="white"
            variant="bordered"
            as={Link}
            href="/join"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="">
        {menuItems.map((item, index) => {
          const isHome = item.toLowerCase() === "home";
          const isActive = isHome
            ? activeMenu === ""
            : activeMenu === item.trim().toLowerCase();
          return (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={`w-full ${isActive && "font-bold"}`}
                color="foreground"
                href={isHome ? "#" : `#${item.toLowerCase().trim()}`}
                onClick={() => setIsMenuOpen(false)}
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
}
