import { useState, useEffect } from "react";
import EmailSVG from "./svg/EmailSVG";
import GitHubSVG from "./svg/GitHubSVG";
import LinkedInSVG from "./svg/LinkedInSVG";
import MenuButtonSVG from "./svg/MenuButtonSVG";
import ExitButtonSVG from "./svg/ExitButtonSVG";

function NavBar() {
  const rootStyle = document.documentElement.style;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    rootStyle.touchAction = isMenuOpen ? "none" : "auto";
  }, [isMenuOpen, rootStyle]);

  function handleClick() {
    const menuState = !isMenuOpen;
    setIsMenuOpen(menuState);
  }
  return (
    <header className="sticky top-0 w-full h-12 lg:h-10 bg-teal-300 flex flex-row justify-between z-10">
      <nav className="hidden sm:flex sm:flex-row flex-none text-white-100 font-mono font-medium min-w-fit">
        <a
          href="#about"
          className="flex h-full min-w-fit items-center hover:bg-teal-200 hover:text-white-200 active:bg-teal-200 active:text-white-200 transition-colors p-3 sm:text-lg"
        >
          Who I am.
        </a>
        <a
          href="#experience"
          className="flex h-full min-w-fit items-center hover:bg-teal-200  hover:text-white-200 active:bg-teal-200 active:text-white-200 transition-colors p-3 sm:text-lg"
        >
          Where I've Been.
        </a>
        <a
          href="#skills"
          className="flex h-full min-w-fit items-center hover:bg-teal-200 hover:text-white-200 active:bg-teal-200 active:text-white-200 transition-colors p-3 sm:text-lg"
        >
          Skills.
        </a>
      </nav>
      <div className="flex sm:hidden items-center p-3 flex-none">
        <button
          className="active:bg-teal-200"
          aria-label="Open navigation menu"
          onClick={handleClick}
        >
          <MenuButtonSVG />
        </button>
      </div>
      <button
        className="w-full border-none bg-transparent"
        aria-label="Scroll to Top"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      ></button>
      <div className="flex flex-row flex-none">
        <a
          href="mailto:sdsalnave@icloud.com"
          target="_blank"
          className="flex h-full items-center hover:bg-teal-200 active:bg-teal-200 p-2 transition-colors"
          aria-label="Send an email to sdsalnave@icloud.com"
        >
          <EmailSVG
            classes="fill-white-100 hover:fill-white-200 active:fill-white-200"
            width="29"
            height="29"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/sabine-salnave-46716a169/"
          target="_blank"
          className="flex h-full items-center hover:bg-teal-200 active:bg-teal-200 p-2 transition-colors"
          aria-label="View Sabine Salnave's LinkedIn profile"
        >
          <LinkedInSVG classes="fill-white-100 hover:fill-white-200 active:fill-white-200 h-6" />
        </a>
        <a
          href="https://github.com/sabinecodes15"
          target="_blank"
          className="flex h-full items-center hover:bg-teal-200 active:bg-teal-200 p-2 transition-colors"
          aria-label="View Sabine Salnave's GitHub portfolio"
        >
          <GitHubSVG classes="fill-white-100 hover:fill-white-200 active:fill-white-200 h-6" />
        </a>
      </div>
      <div
        className={
          "fixed w-full h-full top-0 left-0 right-0 bottom-0 z-10 bg-opacity-75 bg-black " +
          (isMenuOpen ? "" : "hidden")
        }
      >
        <div className="h-full flex flex-col-reverse overflow-hidden">
          <div className="h-full w-full" onClick={handleClick}></div>
          <nav className="z-20 h-fit w-full flex flex-col rounded-t-xl bg-teal-300 fixed text-white-100 font-mono font-medium p-4">
            <div
              className="flex flex-row-reverse"
              aria-label="Exit navigation menu"
              onClick={handleClick}
            >
              <ExitButtonSVG />
            </div>
            <a
              href="#about"
              className="flex h-full items-center hover:bg-teal-200 hover:text-white-200 active:bg-teal-200 active:text-white-200 px-3 py-10 text-3xl sm:text-lg lg:text-sm"
            >
              Who I am.
            </a>
            <a
              href="#experience"
              className="flex h-full items-center hover:bg-teal-200  hover:text-white-200 active:bg-teal-200 active:text-white-200 px-3 py-10 text-3xl sm:text-lg lg:text-sm"
            >
              Where I've Been.
            </a>
            <a
              href="#skills"
              className="flex h-full items-center hover:bg-teal-200 hover:text-white-200 active:bg-teal-200 active:text-white-200 px-3 py-10 text-3xl sm:text-lg lg:text-sm"
            >
              Skills.
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
