import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10 text-center md:text-left">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Hetweb Solutions
          </h2>
          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            We help startups and businesses grow with modern digital marketing
            solutions, creative branding, and powerful online strategies that
            deliver real results.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <div className="space-y-2 text-gray-400">
            <FooterLink to="/" label="Home" />
            <FooterLink to="/services" label="Services" />
            <FooterLink to="/about" label="About" />
            <FooterLink to="/contact" label="Contact" />
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <div className="space-y-2 text-gray-400">
            <p>SEO Optimization</p>
            <p>Social Media Marketing</p>
            <p>Website Development</p>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <div className="space-y-3 text-gray-400 text-sm">
            <p className="flex items-center justify-center md:justify-start gap-2">
              <MapPin size={16} /> Ahmedabad, India
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={16} /> +91 00000 00000
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <Mail size={16} /> info@hetweb.com
            </p>
          </div>

          {/* SOCIAL */}
          <div className="flex justify-center md:justify-start gap-4 mt-5">
            <SocialIcon href="#" icon={<Facebook size={18} />} />
            <SocialIcon href="#" icon={<Instagram size={18} />} />
            <SocialIcon href="#" icon={<Linkedin size={18} />} />
          </div>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-10 text-center">
          <h3 className="text-xl font-semibold mb-4">Subscribe to our newsletter</h3>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 focus:outline-none focus:border-cyan-400 text-sm w-full sm:w-auto"
            />
            <button className="px-6 py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 text-center py-5 text-gray-500 text-sm">
        © {new Date().getFullYear()} Hetweb Solutions. All rights reserved.
      </div>
    </footer>
  )
}

function FooterLink({ to, label }) {
  return (
    <Link
      to={to}
      className="block hover:text-cyan-400 transition duration-300"
    >
      {label}
    </Link>
  )
}

function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="p-2 rounded-full bg-gray-900 border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition duration-300"
    >
      {icon}
    </a>
  )
}