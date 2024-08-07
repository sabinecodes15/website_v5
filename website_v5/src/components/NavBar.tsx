import MenuIcon from "../assets/menu.svg";
import GitHubLogo from "../assets/github.svg";
import LinkedInLogo from "../assets/linkedin.svg";
import EmailIcon from "../assets/email.svg";

const NavBar = () => {
  return (
    <div className="sticky top-0 w-full h-10 bg-teal-300 flex flex-row justify-between">
      <img
        src={MenuIcon}
        alt="menu icon"
        className="mx-2 hover:fill-light-blue-200"
      ></img>
      <div className="flex flex-row gap-x-3 justify-center items-center mx-2">
        <a href="mailto:sdsalnave@icloud.com" target="_blank">
          <img src={EmailIcon} alt="Email" className="h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/sabine-salnave-46716a169/"
          target="_blank"
        >
          <img src={LinkedInLogo} alt="LinkedIn" className="h-6" />
        </a>
        <a href="https://github.com/sabinecodes15" target="_blank">
          <img src={GitHubLogo} alt="GitHub" className="h-6" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
