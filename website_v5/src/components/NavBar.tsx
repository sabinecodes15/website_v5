import { useState } from "react";
import EmailSVG from "./svg/EmailSVG";
import GitHubSVG from "./svg/GitHubSVG";
import LinkedInSVG from "./svg/LinkedInSVG";
import MenuButtonSVG from "./svg/MenuButtonSVG";
import ExitButtonSVG from "./svg/ExitButtonSVG";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick() {
    const menuState = !isMenuOpen;
    setIsMenuOpen(menuState);
  }
  return (
    <div className="sticky top-0 w-full h-12 lg:h-10 bg-teal-300 flex flex-row justify-between">
      <div className="hidden sm:flex sm:flex-row text-white-100 font-mono font-medium">
        <a
          href="#about"
          className="flex h-full items-center hover:bg-teal-200 hover:text-white-200 p-3 sm:text-lg lg:text-sm"
        >
          Who I am.
        </a>
        <a
          href="#experience"
          className="flex h-full items-center hover:bg-teal-200  hover:text-white-200 p-3 sm:text-lg lg:text-sm"
        >
          Where I've Been.
        </a>
        <a
          href="#skills"
          className="flex h-full items-center hover:bg-teal-200 hover:text-white-200 p-3 sm:text-lg lg:text-sm"
        >
          Skills.
        </a>
      </div>
      <div className="flex sm:hidden items-center p-3">
        <button className="active:bg-teal-200" onClick={handleClick}>
          <MenuButtonSVG classes="" />
        </button>
      </div>
      <div className="flex flex-row">
        <a
          href="mailto:sdsalnave@icloud.com"
          target="_blank"
          className="flex h-full items-center hover:bg-teal-200 p-2"
        >
          <EmailSVG
            classes="fill-white-100 hover:fill-white-200"
            width="29"
            height="29"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/sabine-salnave-46716a169/"
          target="_blank"
          className="flex h-full items-center hover:bg-teal-200 p-2"
        >
          <LinkedInSVG classes="fill-white-100 hover:fill-white-200 h-6" />
        </a>
        <a
          href="https://github.com/sabinecodes15"
          target="_blank"
          className="flex h-full items-center hover:bg-teal-200 p-2"
        >
          <GitHubSVG classes="fill-white-100 hover:fill-white-200 h-6" />
        </a>
      </div>
      <div
        className={
          "fixed w-full h-full top-0 left-0 right-0 bottom-0 z-10 bg-opacity-75 bg-black " +
          (isMenuOpen ? "" : "hidden")
        }
      >
        <div className="h-full flex flex-col-reverse">
          <div className="h-full w-full" onClick={handleClick}></div>
          <div className="z-20 h-fit w-full flex flex-col rounded-t-xl bg-teal-300 fixed text-white-100 font-mono font-medium p-4">
            <div className="flex flex-row-reverse" onClick={handleClick}>
              <ExitButtonSVG classes="" />
            </div>
            <a
              href="#about"
              className="flex h-full items-center hover:bg-teal-200 hover:text-white-200 px-3 py-10 text-3xl sm:text-lg lg:text-sm"
            >
              Who I am.
            </a>
            <a
              href="#experience"
              className="flex h-full items-center hover:bg-teal-200  hover:text-white-200 px-3 py-10 text-3xl sm:text-lg lg:text-sm"
            >
              Where I've Been.
            </a>
            <a
              href="#skills"
              className="flex h-full items-center hover:bg-teal-200 hover:text-white-200 px-3 py-10 text-3xl sm:text-lg lg:text-sm"
            >
              Skills.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
