"use client";

import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";


import { useAuth } from "@clerk/nextjs";

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
  const [userExists , setUserExists] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {  userId } = useAuth();

  const handleActiveMenu = () => {
    if (window.location.hash) {
      const hash = window.location.hash.split("#")[1];
      setActiveMenu(hash);
    } else {
      setActiveMenu("");
    }
  };

    
  useEffect(() => {
    if (userId ) {
        localStorage.setItem('userExists', true);
    }
  
  } , [])

  useEffect(() => {
    
    const userExists = localStorage.getItem("userExists")
    setUserExists(userExists);

  } , [])

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
                  <UserButton 
                    appearance={{
                      layout: { shimmer: true },
                      variables: {
                        borderRadius: "0.5",
                        colorBackground: "#d9d9d9",
                        colorInputBackground: "#d9d9d9",
                        colorPrimary: "#171717",
                      },
                      elements:{
                        avatarBox:"h-12 w-12 ",
                        userButtonPopoverFooter:"hidden"
                      }
                    }}
                  />            
            </SignedIn>
            <SignedOut>
            {userExists ? 
              <Button
                radius="sm"
                size="sm"
                className="bg-white text-black hover:bg-white/90 px-[22px] py-[22px] text-sm"
                color="white"
                variant="solid"
                as={Link}
                href="/login"
              >
              
                Sign In
              </Button>
              : 
              <section className="flex flex-row gap-2">
                  {/* <Button
                  radius="sm"
                  size="sm"
                  className="text-white px-[22px] py-[22px] text-sm"
                  color="white"
                  variant="bordered"
                  as={Link}
                  href="/login"
                >
                
                  Sign In
                </Button> */}
                <Button
                    radius="sm"
                    size="sm"
                    className="bg-white text-black hover:bg-white/90 px-[22px] py-[22px] text-sm"
                    color="white"
                    variant="solid"
                    as={Link}
                    href="/join"
                  >
                  
                    Sign Up
                </Button>
                  
              </section>
            
              }
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
