import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/logo.png";
import { paragraphFont } from "@/lib/Font";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
    { name: "Start a project", path: "/start-a-project" },
  ];

  return (
    <div
      className={`navbar lg:px-10 justify-between sm:py-4 fixed  z-50  backdrop-blur-sm ${paragraphFont.className}`}
    >
      <div className="navbar-start hidden lg:flex blur-none">
        <ul className="flex gap-24 ">
          {navLinks.map((link, idx) => (
            <li
              className=" tracking-wider hover:scale-[135%]  duration-200"
              key={idx}
            >
              <Link
                className="rounded-none relative py-2 after:content-[''] after:absolute after:h-[3px] after:bg-gray-800 after:left-0 after:bottom-0 after:origin-left after:w-0 hover:after:w-full after:duration-300"
                href={link.path}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-center ">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-xs btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow uppercase"
          >
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href={"/"} className=" flex flex-col items-center ">
          <div className="border-[6px] border-black p-1 rounded-full">
            {" "}
            <Image alt="logo" height={35} width={35} src={logo}></Image>
          </div>
          {/* <h1 className="font-bold">SAZZAD</h1> */}
        </Link>
      </div>

      <div className="lg:navbar-end flex">
        <ul className="flex lg:gap-16 gap-4">
          <li className="tracking-wider hover:scale-[135%]  duration-200">
            <Link
              className="rounded-none relative py-2 after:content-[''] after:absolute after:h-[3px] after:bg-gray-800 after:left-0 after:bottom-0 after:origin-left after:w-0 hover:after:w-full after:duration-300"
              href={"/login"}
            >
              Login
            </Link>
          </li>
          <li className="tracking-wider hover:scale-[135%]  duration-200">
            <Link
              className="rounded-none relative py-2 after:content-[''] after:absolute after:h-[3px] after:bg-gray-800 after:left-0 after:bottom-0 after:origin-left after:w-0 hover:after:w-full after:duration-300"
              href={"/sign-up"}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
