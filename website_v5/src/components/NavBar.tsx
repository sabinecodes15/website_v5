import GitHubLogo from "../assets/github.svg";
import LinkedInLogo from "../assets/linkedin.svg";
import EmailIcon from "../assets/email.svg";

const NavBar = () => {
  return (
    <div className="sticky top-0 w-full h-10 bg-teal-300 flex flex-row justify-between">
      <div className="flex flex-row text-white-100 font-mono font-medium">
        <a
          href="#about"
          className="flex h-full items-center hover:bg-teal-200 hover:text-white-200 p-3"
        >
          Who I am.
        </a>
        <a
          href="#experience"
          className="flex h-full items-center hover:bg-teal-200  hover:text-white-200 p-3"
        >
          Where I've Been.
        </a>
        <a
          href="#skills"
          className="flex h-full items-center hover:bg-teal-200 hover:text-white-200 p-3"
        >
          Skills.
        </a>
      </div>
      <div className="flex flex-row">
        <a
          href="mailto:sdsalnave@icloud.com"
          target="_blank"
          className="flex h-full items-center hover:bg-teal-200 p-2"
        >
          <img src={EmailIcon} alt="Email" className="h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/sabine-salnave-46716a169/"
          target="_blank"
          className="flex h-full items-center hover:bg-teal-200 p-2"
        >
          <img src={LinkedInLogo} alt="LinkedIn" className="h-6" />
        </a>
        <a
          href="https://github.com/sabinecodes15"
          target="_blank"
          className="flex h-full items-center hover:bg-teal-200 p-2"
        >
          <img src={GitHubLogo} alt="GitHub" className="h-6" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
