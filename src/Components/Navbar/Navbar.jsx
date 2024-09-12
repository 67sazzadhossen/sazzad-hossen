import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
    { name: "Start a project", path: "/start-a-project" },
  ];

  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="flex gap-16 ">
          {navLinks.map((link, idx) => (
            <li
              className="font-semibold tracking-wider hover:scale-[135%]  duration-200"
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
        <div className="ml-20">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
