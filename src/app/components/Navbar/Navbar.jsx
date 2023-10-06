// "use client";
// import React from "react";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarMenuToggle,
//   NavbarContent,
//   NavbarItem,
//   NavbarMenu,
//   NavbarMenuItem,
//   Link,
//   Button,
// } from "@nextui-org/react";
// // import { AcmeLogo } from "./AcmeLogo.jsx";

// export default function App({ featureRef }) {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const menuItems = ["Home", "Features", "Dashboard", "FAQ"];

//   const handleFeatureClick = () => {
//     featureRef.current.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <Navbar
//       className="text-white "
//       height="5rem"
//       isBordered
//       isBlurred
//       maxWidth="xl"
//       isMenuOpen={isMenuOpen}
//       onMenuOpenChange={setIsMenuOpen}
//     >
//       <NavbarContent className="sm:hidden" justify="start">
//         <NavbarMenuToggle
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//         />
//       </NavbarContent>

//       <NavbarContent
//         className="sm:hidden pr-3"
//         justify="center"
//       ></NavbarContent>

//       <NavbarContent className="hidden sm:flex gap-10" justify="center">
//         <NavbarItem className="text-white ">
//           <Link className="text-white text-lg" color="foreground" href="#">
//             Home
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link
//             className="text-white text-lg"
//             onClick={handleFeatureClick}
//             aria-current="page"
//           >
//             Features
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link className="text-white text-lg" color="foreground" href="#">
//             Dashboard
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link className="text-white text-lg" color="foreground" href="#">
//             FAQ
//           </Link>
//         </NavbarItem>
//       </NavbarContent>

//       <NavbarContent justify="end">
//         {/* <NavbarItem className="hidden lg:flex">
//           <Link href="#">Login</Link>
//         </NavbarItem> */}
//         <NavbarItem>
//           <Button
//             radius="sm"
//             size="lg"
//             className=" text-white max-sm:hidden sm:text-lg text-sm"
//             color="white"
//             variant="bordered"
//             as={Link}
//             href="/login"
//           >
//             Sign In
//           </Button>
//         </NavbarItem>
//         <NavbarItem>
//           <Button
//             radius="sm"
//             size="sm"
//             className="text-white sm:hidden text-sm"
//             color="white"
//             variant="bordered"
//             as={Link}
//             href="/login"
//           >
//             Sign Up
//           </Button>
//         </NavbarItem>
//       </NavbarContent>

//       <NavbarMenu className="">
//         {menuItems.map((item, index) => (
//           <NavbarMenuItem key={`${item}-${index}`}>
//             <Link
//               className="w-full text-white"
//               color={
//                 index === 2
//                   ? "warning"
//                   : index === menuItems.length - 1
//                   ? "danger"
//                   : "foreground"
//               }
//               href="#"
//               size="lg"
//             >
//               {item}
//             </Link>
//           </NavbarMenuItem>
//         ))}
//       </NavbarMenu>
//     </Navbar>
//   );
// }

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function App({ featureRef }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Features", "Dashboard", "FAQ"];

  const handleFeatureClick = () => {
    featureRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Navbar
      className="bg-blue-900 text-slate-950 shadow-md"
      height="5rem"
      isBordered
      isBlurred
      maxWidth="xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden " justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent
        className="sm:hidden pr-3 text-slate-950"
        justify="center"
      ></NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10 text-slate-950" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link className="text-lg text-white font-bold" color="foreground" href="#">
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            radius="sm"
            size="lg"
            className="text-lg text-white font-bold"
            color="black"
            variant="bordered"
            as={Link}
            href="/login"
          >
            Sign In
          </Button>
        </NavbarItem>
        {/* <NavbarItem>
          <Button
            radius="sm"
            size="sm"
            className="text-lg"
            color="white"
            variant="bordered"
            as={Link}
            href="/signup"
          >
            Sign Up
          </Button>
        </NavbarItem> */}
      </NavbarContent>

      <NavbarMenu className="text-white">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-lg"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
