"use client";
import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

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

const menuItems = ["Home", "Features", "FAQ"];

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
      className="text-white max-2xl:px-10 max-sm:px-0 2xl:px-32"
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

      {/* <NavbarContent
        className="sm:hidden pr-3"
        justify="center"
      ></NavbarContent> */}

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
            className="text-white max-sm:hidden sm:text-lg text-sm"
            color="white"
            variant="bordered"
            as={Link}
            href="https://github.com/Arindam200/makaut_buddy"
          >
            Give us a star ⭐️
          </Button>
        </NavbarItem>

        <NavbarItem>
          
            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
              <Button
                  radius="sm"
                  size="sm"
                  className="text-white px-[22px] py-[22px]  text-sm font-grenze"
                  color="white"
                  variant="bordered"
                  as={Link}
                  href="/join"
                >
                  Sign Up
                </Button>
            </SignedOut>
          
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="flex justify-between">
        <div className="">
        {menuItems.map((item, index) => {
          const isHome = item.toLowerCase() === "home";
          const isActive = isHome
            ? activeMenu === ""
            : activeMenu === item.trim().toLowerCase();
          return (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={`w-full pb-2 ${isActive && "font-bold"}`}
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
        </div>
        
        <div className="flex justify-center pb-16">
          <NavbarItem>
          <Button
            radius="sm"
            size="lg"
            className=" text-white sm:hidden text-lg"
            color="white"
            variant="bordered"
            as={Link}
            href="https://github.com/Arindam200/makaut_buddy"
          >
            Give us a star ⭐️
          </Button>
        </NavbarItem></div>
        
      </NavbarMenu>
    </Navbar>
  );
}
