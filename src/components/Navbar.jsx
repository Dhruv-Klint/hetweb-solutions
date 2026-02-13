import { Link, useLocation } from 'react-router-dom'
import { Menu, ChevronDown, ArrowRight } from 'lucide-react'
import logo from "../assets/logo.png"
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [servicesOpen, setServicesOpen] = useState(false)
    const location = useLocation()

    return (
        <nav className="sticky top-0 z-50 bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-2xl border-b border-cyan-500/20 shadow-[0_8px_30px_rgb(0,0,0,0.4)]">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

                {/* LEFT LINKS */}
                <div className="hidden md:flex items-center space-x-10 text-gray-100 font-medium md:text-lg">
                    <NavLink to="/" active={location.pathname === '/'} delay={0}>Home</NavLink>

                    {/* Services Dropdown (unchanged) */}
                    <div
                        className="relative"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.1, delay: 0.1 }}
                        >
                            <Link
                                to="/services"
                                className={`relative flex items-center gap-1 transition duration-300 ${location.pathname.startsWith('/services')
                                    ? 'text-cyan-400'
                                    : 'hover:text-cyan-400'
                                    }`}
                            >
                                <motion.span whileHover={{ y: -1 }}>Services</motion.span>

                                <motion.span
                                    animate={{ rotate: servicesOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="w-4 h-4" />
                                </motion.span>

                                {location.pathname.startsWith('/services') && (
                                    <motion.span
                                        layoutId="underline"
                                        className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                                    />
                                )}
                            </Link>
                        </motion.div>

                        <AnimatePresence>
                            {servicesOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.25, ease: 'easeOut' }}
                                    className="absolute -left-1/2 -translate-x-1/2 mt-2 w-fit whitespace-nowrap rounded-3xl bg-black/95 border border-cyan-500/20 shadow-2xl backdrop-blur-xl p-2"
                                >
                                    <DropdownItem to="/services/seo-services" label="SEO services" />
                                    <DropdownItem to="/services/social-media-marketing" label="Social Media Marketing" />
                                    <DropdownItem to="/services/social-media-account-creation" label="Social Media Account Creation" />
                                    <DropdownItem to="/services/bookmarking-website-services" label="Bookmarking Website Services" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <NavLink to="/blog" active={location.pathname === '/blog'} delay={0.2}>Blog</NavLink>
                    <NavLink to="/about" active={location.pathname === '/about'} delay={0.3}>About</NavLink>
                </div>


                {/* CENTER LOGO */}
                <motion.img
                    src={logo}
                    alt="HETWEB Logo"
                    className="h-28 w-auto object-contain drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]"
                    initial={{ opacity: 0, y: -10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                />


                {/* RIGHT SIDE */}
                <div className="hidden md:flex items-center space-x-6 text-gray-200 font-medium">

                    {/* Phone number (new but styled same) */}
                    <span className="font-semibold text-white">
                        +91 99999 99999
                    </span>

                    <NavLink
                        to="/contact"
                        active={location.pathname === '/contact'}
                        delay={0.4}
                        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl 
             bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 !text-black font-semibold shadow-lg shadow-cyan-500/20
             transition-all duration-300 hover:text-white"
                    >

                        <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-24"
                        />

                        <span className="group-hover:-translate-x-5 transition-transform duration-300">
                            Contact Us
                        </span>


                    </NavLink>

                </div>


                {/* Mobile Icon (unchanged) */}
                <motion.button
                    whileTap={{ scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-cyan-400"
                >
                    <Menu />
                </motion.button>
            </div>
        </nav>

    )
}

function NavLink({ to, children, active, className, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay }}
            whileHover={{ y: -2 }}
        >
            <Link
                to={to}
                className={`relative transition duration-300 ${active ? 'text-cyan-400' : 'hover:text-cyan-400'
                    } ${className || ''}`}
            >
                {children}
            </Link>
        </motion.div>
    )
}


function DropdownItem({ to, label }) {
    return (
        <Link
            to={to}
            className="block px-4 py-2 text-md text-gray-200 hover:bg-cyan-500/10 hover:text-cyan-300 transition rounded-xl"
        >
            {label}
        </Link>
    )
}

function MobileLink({ to, label }) {
    return (
        <Link
            to={to}
            className="block text-gray-200 hover:text-cyan-400 transition text-md"
        >
            {label}
        </Link>
    )
}
