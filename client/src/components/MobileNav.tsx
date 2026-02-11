import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-[#e0e7ff] hover:text-[#ff006e] transition-colors z-50"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 bg-[#0a0e27]/95 backdrop-blur-md z-40 md:hidden">
          <nav className="flex flex-col gap-6 p-6">
            <a
              href="#projects"
              onClick={closeMenu}
              className="text-[#a8b5d1] hover:text-[#ff006e] transition-colors text-lg font-mono"
            >
              &gt; PROJECTS
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="text-[#a8b5d1] hover:text-[#ff006e] transition-colors text-lg font-mono"
            >
              &gt; CONTACT
            </a>
            <a
              href="https://github.com/AboMagdy"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="text-[#a8b5d1] hover:text-[#ff006e] transition-colors text-lg font-mono"
            >
              &gt; GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-allam-862747a6"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="text-[#a8b5d1] hover:text-[#ff006e] transition-colors text-lg font-mono"
            >
              &gt; LINKEDIN
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
