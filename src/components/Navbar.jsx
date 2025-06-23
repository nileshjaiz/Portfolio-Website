import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/10 backdrop-blur-sm border-b border-white/20 fixed w-full z-20 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white underline">
              <img src="/sign.png" alt="Nilesh Jaiswal" />
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="text-gray-300 hover:bg-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:bg-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                About Me
              </a>
              {/* <a
                href="#projects"
                className="text-gray-300 hover:bg-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Projects
              </a> */}
              <a
                href="#contact"
                className="text-gray-300 hover:bg-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/50 backdrop-blur-sm border-t border-white/20">
          <a
            href="#home"
            className="text-gray-300 hover:bg-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:bg-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            About Me
          </a>
          {/* <a
            href="#projects"
            className="text-gray-300 hover:bg-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            Projects
          </a> */}
          <a
            href="#contact"
            className="text-gray-300 hover:bg-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
