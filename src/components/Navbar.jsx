import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md">
      <div className="max-w-full mx-auto md:pl-40 md:pr-20 lg:pr-80 px-12">
        <div className="flex justify-between items-center h-16">
          <div className="text-4xl font-bold text-white">Portofolio</div>
          <div className="hidden md:flex space-x-6 text-2xl font-bold">
            <Link to='/' className="text-white hover:text-[var(--main-color)]">Home</Link>
            <Link to='/about' className="text-white hover:text-[var(--main-color)]">About</Link>
            <Link to='/services' className="text-white hover:text-[var(--main-color)]">Services</Link>
            <Link to='/contact' className="text-white hover:text-[var(--main-color)]">Contact</Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--main-color)] focus:outline-none cursor-pointer"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
            </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to='/' className="block text-white hover:text-[var(--main-color)]">Home</Link>
          <Link to='/about' className="block text-white hover:text-[var(--main-color)]">About</Link>
          <Link to='/services' className="block text-white hover:text-[var(--main-color)]">Services</Link>
          <Link to='/contact' className="block text-white hover:text-[var(--main-color)]">Contact</Link>
        </div>
      )}
    </nav>
    );
}
