import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import logo from "../assets/logo.png"

export default function Navbar() {
  return (
    <nav className="bg-black/90 backdrop-blur-md border-b border-cyan-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="HETWEB Logo" className="h-20 w-auto object-contain" />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-gray-200 font-medium">
          <NavLink to="/">Home</NavLink>

          {/* Services Dropdown */}
          <div className="relative group">
            <span className="cursor-pointer hover:text-cyan-400 transition">Services</span>

            <div className="absolute left-0 mt-3 w-44 rounded-2xl bg-black/95 border border-cyan-500/20 shadow-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 backdrop-blur-lg">
              <DropdownItem to="/services/service1" label="Service 1" />
              <DropdownItem to="/services/service2" label="Service 2" />
              <DropdownItem to="/services/service3" label="Service 3" />
            </div>
          </div>

          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Mobile Icon */}
        <Menu className="md:hidden text-cyan-400" />
      </div>
    </nav>
  )
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="relative hover:text-cyan-400 transition duration-300"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-300 hover:w-full"></span>
    </Link>
  )
}

function DropdownItem({ to, label }) {
  return (
    <Link
      to={to}
      className="block px-4 py-2 text-sm text-gray-200 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 hover:text-cyan-300 transition rounded-xl m-1"
    >
      {label}
    </Link>
  )
}