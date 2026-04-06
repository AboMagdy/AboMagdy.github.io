import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-[#ff006e] hover:text-[#ff1a7f] transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#0a0e27]/95 backdrop-blur-md border-b border-[#ff006e]/20 z-40">
          <div className="flex flex-col gap-4 p-4">
            <a
              href="#projects"
              className="text-[#a8b5d1] hover:text-[#ff006e] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#case-studies"
              className="text-[#a8b5d1] hover:text-[#ff006e] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Case Studies
            </a>
            <a
              href="#contact"
              className="text-[#a8b5d1] hover:text-[#ff006e] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
