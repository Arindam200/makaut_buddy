import logo from "../../../../public/Logo_sm.svg";
import Image from "next/image";
import React from "react";

const PersonLinks = React.memo(({ name, links }) => (
  <div>
    <h1 className="font-medium text-lg pb-2 text-white">{name}</h1>
    <ul className="space-y-2">
      {links.map(({ href, label }) => (
        <li key={href} className="text-md max-sm:hidden">
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  </div>
));

PersonLinks.displayName = "PersonLinks";

const Footer = React.memo(() => {
  const people = [
    {
      name: "Swapnoneel Saha",
      links: [
        { href: "https://swapnoneel.vercel.app", label: "Website" },
        { href: "https://github.com/Swpn0neel", label: "GitHub" },
        { href: "https://swapnoneel.hashnode.dev", label: "Blogs" },
        { href: "https://x.com/swapnoneel123", label: "Twitter" },
        {
          href: "https://www.linkedin.com/in/swapnoneel-saha-14a3161b6/",
          label: "LinkedIn",
        },
      ],
    },
    {
      name: "Arindam Majumder",
      links: [
        { href: "https://arindam-majumder.vercel.app", label: "Website" },
        { href: "https://github.com/Arindam200", label: "GitHub" },
        { href: "https://arindam1729.hashnode.dev", label: "Blogs" },
        { href: "https://x.com/Arindam_1729", label: "Twitter" },
        {
          href: "https://www.linkedin.com/in/arindam-majumder-021bb623b/",
          label: "LinkedIn",
        },
      ],
    },
    {
      name: "Samyabrata Maji",
      links: [
        { href: "https://sammaji.pages.dev", label: "Website" },
        { href: "https://github.com/samyabrata-maji", label: "GitHub" },
        { href: "https://sammaji.hashnode.dev", label: "Blogs" },
        { href: "https://twitter.com/sammaji15", label: "Twitter" },
        {
          href: "https://www.linkedin.com/in/samyabrata-maji/",
          label: "LinkedIn",
        },
      ],
    },
  ];

  return (
    <div className="font-sans w-full overflow-hidden sm:px-20 px-10 text-[#FFFFFF80] py-5 space-y-2 rounded-t-3xl bg-[#0E0E0E]">
      <div className="sm:flex sm:divide-x-2 max-sm:divide-y-2 divide-[#FFFFFF10]">
        <div className="logo sm:pr-10">
          <Image
            src={logo}
            className="sm:px-10 h-72 max-sm:pb-5 sm:w-80 sm:h-80"
            alt="Logo"
            priority
          />
        </div>
        <div className="sm:px-20 hidden max-sm:text-center sm:pt-16 pt-10 sm:flex sm:space-x-40">
          {people.map((person) => (
            <PersonLinks
              key={person.name}
              name={person.name}
              links={person.links}
            />
          ))}
        </div>
      </div>
      <p className="text-center text-[FFFFFF90] max-sm:text-xs">
        Created with love ❤️ by
        <a className="text-white ml-2" href="https://swapnoneel.vercel.app">
          Swapnoneel Saha
        </a>
        ,
        <a
          className="text-white ml-2 mr-2"
          href="https://arindam-majumder.vercel.app"
        >
          Arindam Majumder
        </a>
        and
        <a className="text-white ml-2" href="https://sammaji.pages.dev">
          Samyabrata Maji
        </a>
      </p>
    </div>
  );
});

Footer.displayName = "Footer";

export default Footer;
