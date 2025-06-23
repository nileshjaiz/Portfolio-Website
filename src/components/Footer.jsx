const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-sm py-4 sm:py-5 md:py-6 flex flex-col items-center gap-2 border-t border-gray-800 border-4 w-full">
      <p className="text-gray-500">@NileshJaiswal_2025</p>
      <p className="text-gray-500">
        Made with <span className="text-red-500">❤️</span> using React &
        Tailwind CSS
      </p>
      <p className="text-gray-600">
        © {new Date().getFullYear()} Nilesh Jaiswal. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
