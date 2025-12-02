import { useState } from "react";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Menu,
  X,
  ChevronDown,
  Instagram,
  Pin,
  UtensilsCrossed,
  Home,
  Info,
  Image as ImageIcon,
  Video,
  FileCheck,
  CalendarCheck,
  PhoneCall,
} from "lucide-react";

import logo from "../assets/images/golden-logo.png";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuDropdown, setMenuDropdown] = useState(false);

  const navLinks = [
    { label: "HOME", path: "/", icon: <Home size={18} /> },
    { label: "ABOUT", path: "/about", icon: <Info size={18} /> },
    { label: "MENU", path: "/menu", icon: <UtensilsCrossed size={18} />, hasDropdown: true },
    { label: "GALLERY", path: "/gallery", icon: <ImageIcon size={18} /> },
    { label: "VIDEO", path: "/video", icon: <Video size={18} /> },
    { label: "CERTIFICATES", path: "/certificates", icon: <FileCheck size={18} /> },
    { label: "BOOKING", path: "/booking", icon: <CalendarCheck size={18} /> },
    { label: "CONTACT US", path: "/contactus", icon: <PhoneCall size={18} /> },
  ];

  return (
    <header className="relative w-full z-50 bg-white shadow">

      {/* ----------------------------- TOP BAR ----------------------------- */}
      <div className="hidden md:flex justify-between items-center bg-white px-10 py-2 border-b border-gray-300">

        {/* CONTACT INFO */}
        <div className="flex items-center gap-8 text-sm font-medium text-gray-700">
          <span className="flex items-center gap-2">
            <Phone size={16} className="text-red-600" />
            +1 778 387 5749
          </span>

          <span className="flex items-center gap-2">
            <Mail size={16} className="text-red-600" />
            info@goldenleafcatering.com
          </span>
        </div>

        {/* SOCIAL ICONS */}
        <div className="hidden md:flex gap-3">
          {[ 
            { icon: <Instagram size={18} />, link: "https://www.instagram.com/goldenleafcatering7/" },
            { icon: <Linkedin size={18} />, link: "https://www.linkedin.com/in/goldenleafcatering7/" },
            { icon: <Pin size={18} />, link: "https://www.pinterest.com/goldenleafcatering7/" },
            { icon: <Youtube size={18} />, link: "https://www.youtube.com/@Goldenleafcatering7" },
            { icon: <Twitter size={18} />, link: "https://x.com/goldenleafcater/" },
            { icon: <Facebook size={18} />, link: "https://www.facebook.com/goldenleafcatering7/" }
          ].map((item, i) => (
            <a key={i} href={item.link} target="_blank"
              className="p-2 border border-gray-300 rounded-full hover:scale-110 transition">
              {item.icon}
            </a>
          ))}
        </div>

      </div>

      {/* --------------------------- MAIN NAVBAR ---------------------------- */}
      <div className="bg-white py-3 px-4 md:px-10 flex items-center justify-between relative">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Golden Leaf Catering" className="w-16 h-16" />
          <div className="hidden md:block">
            <h2 className="text-xl font-bold text-gray-800">Golden Leaf</h2>
            <p className="text-sm text-gray-500 -mt-1">Catering</p>
          </div>
        </div>

        {/* NAV LINKS — DESKTOP */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700 ml-auto">

          {navLinks.map(({ label, path, hasDropdown, icon }) =>
            hasDropdown ? (
              <div
                key={label}
                className="relative group"
                onMouseEnter={() => setMenuDropdown(true)}
                onMouseLeave={() => setMenuDropdown(false)}
              >

                <div className="flex items-center gap-1 cursor-pointer hover:text-red-600 transition">
                  {icon} {label}
                  <ChevronDown size={14} />
                </div>

                {/* Dropdown */}
                <div
                  className={`absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-md w-40 py-2 transition-all duration-300 ease-out z-50 
                  ${menuDropdown ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
                >
                  <Link to="/veg" className="block px-4 py-2 text-sm hover:bg-red-100 hover:text-red-600">Veg</Link>
                  <Link to="/nonveg" className="block px-4 py-2 text-sm hover:bg-red-100 hover:text-red-600">Non Veg</Link>
                </div>
              </div>
            ) : (
              <Link key={label} to={path} className="flex items-center gap-1 hover:text-red-600 transition">
                {icon} {label}
              </Link>
            )
          )}

        </nav>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} className="text-gray-800">
            <Menu size={30} />
          </button>
        </div>

      </div>

      {/* ---------------------------- MARQUEE -------------------------------- */}
      <div className="bock md:hidden bg-gray-100 border-t border-gray-300 overflow-hidden">
        <motion.div
          className="whitespace-nowrap py-2 text-red-600 font-semibold text-[15px]"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          Welcome to Golden Leaf Catering — Exceptional Taste • Premium Service • Signature Culinary Experience • Wedding Catering • Corporate Catering • Event Management • Authentic Flavours
        </motion.div>
      </div>

      {/* ------------------------- MOBILE LEFT MENU -------------------------- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-72 h-full bg-white shadow-2xl z-[100] p-6 overflow-y-auto"
          >

            {/* LOGO INSIDE SIDEBAR */}
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} className="w-12 h-12" alt="Golden Leaf Logo" />
              <h2 className="text-lg font-bold text-gray-800">Golden Leaf</h2>
            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-800"
            >
              <X size={28} />
            </button>

            {/* NAV LINKS — MOBILE */}
            <nav className="mt-6 flex flex-col gap-4 text-[15px] font-semibold text-gray-700">

              {navLinks.map(({ label, path, hasDropdown, icon }) =>
                hasDropdown ? (
                  <div key={label}>
                    <button
                      onClick={() => setMenuDropdown(!menuDropdown)}
                      className="w-full flex justify-between items-center hover:text-red-600"
                    >
                      <span className="flex items-center gap-2">{icon} {label}</span>
                      <ChevronDown size={16} />
                    </button>

                    {menuDropdown && (
                      <div className="mt-2 ml-4 flex flex-col gap-2 text-base">
                        <Link to="/veg" onClick={() => setIsOpen(false)} className="hover:text-red-600">Veg</Link>
                        <Link to="/nonveg" onClick={() => setIsOpen(false)} className="hover:text-red-600">Non Veg</Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={label}
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 hover:text-red-600"
                  >
                    {icon} {label}
                  </Link>
                )
              )}

              {/* SOCIAL ICONS MOBILE */}
              <div className="flex gap-2 mt-6 justify-start">

                {[
                  { icon: <Instagram size={16} />, link: "https://www.instagram.com/goldenleafcatering7/" },
                  { icon: <Linkedin size={16} />, link: "https://www.linkedin.com/in/goldenleafcatering7/" },
                  { icon: <Pin size={16} />, link: "https://www.pinterest.com/goldenleafcatering7/" },
                  { icon: <Youtube size={16} />, link: "https://www.youtube.com/@Goldenleafcatering7" },
                  { icon: <Twitter size={16} />, link: "https://x.com/goldenleafcater/" },
                  { icon: <Facebook size={16} />, link: "https://www.facebook.com/goldenleafcatering7/" }
                ].map((item, i) => (
                  <a key={i} href={item.link} className="border p-1.5 rounded-full">
                    {item.icon}
                  </a>
                ))}

              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
