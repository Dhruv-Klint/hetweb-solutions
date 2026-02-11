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
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <motion.img
                    src={logo}
                    alt="HETWEB Logo"
                    className="h-24 w-auto object-contain drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]"
                    initial={{ opacity: 0, y: -10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                />

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-14 text-gray-200 font-medium">
                    <NavLink to="/" active={location.pathname === '/'} delay={0}>Home</NavLink>

                    {/* Services Hover Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.1, delay: 0.1 }}
                            className={`relative flex items-center gap-1 transition duration-300 ${location.pathname.startsWith('/services') ? 'text-cyan-400' : 'hover:text-cyan-400'}`}
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
                        </motion.button>

                        <AnimatePresence>
                            {servicesOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.25, ease: 'easeOut' }}
                                    className="absolute -left-1/2 -translate-x-1/2 mt-2 w-fit whitespace-nowrap rounded-3xl bg-black/95 border border-cyan-500/20 shadow-2xl backdrop-blur-xl p-2"
                                >
                                    <DropdownItem to="/services/service1" label="SEO services" />
                                    <DropdownItem to="/services/service2" label="Social Media Marketing" />
                                    <DropdownItem to="/services/service3" label="Social Media Account Creation" />
                                    <DropdownItem to="/services/service4" label="Bookmarking Website Services" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <NavLink to="/about" active={location.pathname === '/about'} delay={0.2}>About</NavLink>
                    <NavLink to="/contact" active={location.pathname === '/contact'} delay={0.3}>Contact</NavLink>
                </div>

                {/* Mobile Icon */}
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

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden bg-black/95 border-t border-cyan-500/20 backdrop-blur-xl px-6 py-4 space-y-4"
                    >
                        <MobileLink to="/" label="Home" />
                        <MobileLink to="/services/service1" label="Web Development" />
                        <MobileLink to="/services/service2" label="UI/UX Design" />
                        <MobileLink to="/services/service3" label="SEO Optimization" />
                        <MobileLink to="/about" label="About" />
                        <MobileLink to="/contact" label="Contact" />
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

function NavLink({ to, children, active, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay }}
            whileHover={{ y: -2 }}
        >
            <Link
                to={to}
                className={`relative transition duration-300 ${active ? 'text-cyan-400' : 'hover:text-cyan-400'}`}
            >
                <motion.span
                    initial={{ letterSpacing: '0em' }}
                    animate={{ letterSpacing: '0.02em' }}
                    whileHover={{ letterSpacing: '0.06em' }}
                    transition={{ duration: 0.25 }}
                >
                    {children}
                </motion.span>

                {active ? (
                    <motion.span
                        layoutId="underline"
                        className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                    />
                ) : (
                    <motion.span
                        className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                    />
                )}
            </Link>
        </motion.div>
    )
}

function DropdownItem({ to, label }) {
    return (
        <motion.div whileHover={{ x: 8 }} transition={{ type: 'spring', stiffness: 220 }}>
            <Link
                to={to}
                className="flex items-center justify-between px-4 py-3 text-sm text-gray-200 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 hover:text-cyan-300 transition rounded-2xl"
            >
                {label}
            </Link>
        </motion.div>
    )
}

function MobileLink({ to, label }) {
    return (
        <motion.div whileTap={{ scale: 0.95 }} whileHover={{ x: 4 }}>
            <Link
                to={to}
                className="block text-gray-200 hover:text-cyan-400 transition text-lg"
            >
                {label}
            </Link>
        </motion.div>
    )
}