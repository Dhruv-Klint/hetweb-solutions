import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from "lucide-react"
import Herosection from "../assets/Hero-section.avif"

export default function Home() {

  const services = [
    {
      title: "Search Engine Optimization (SEO) Services",
      desc: "Our company transforms social media into a strong growth channel for your brand. We create engaging content, maintain a clear brand voice, and connect your project with the right audience. Through smart strategy and targeted advertising, we increase visibility, attract customers, and deliver measurable results.",
      link: "/services/service1",
    },
    {
      title: "Social Media Marketing",
      desc: "Our company uses social media as a powerful tool to grow your brand and connect with the right audience. We create meaningful content, maintain a consistent brand voice, and actively engage with your community. Through creative strategy and targeted advertising, we help your website or project gain visibility, attract customers, and deliver measurable results.",
      link: "/services/service2",
    },
    {
      title: "Social Media Account Creation",
      desc: "Our company creates and sets up professional social media profiles that give your brand a strong first impression from day one. We secure consistent handles, write optimized bios, and design branded visuals that reflect your business identity. Every account is fully configured with proper links, contact details, and discovery settings. This ensures your project starts with a polished, ready-to-engage social presence that supports real business growth.",
      link: "/services/service3",
    },
    {
      title: "Bookmarking Website Services",
      desc: "Our company uses social bookmarking to strengthen your website’s authority and improve faster search engine indexing. We manually submit your content to trusted, high-quality platforms with relevant tags and descriptions to reach the right audience. This process builds strong backlinks, drives referral traffic, and increases online visibility. As a result, your project gains better rankings, credibility, and long-term SEO growth.",
      link: "/services/service4",
    },
  ]

  return (
    <motion.div
      className="bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Digital Marketing That Grows Your Business
            </h1>

            <p className="text-gray-400 text-lg max-w-xl">
              We provide modern marketing solutions for startups and companies to
              boost visibility, generate leads, and scale faster than ever.
            </p>

            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/services"
                className="inline-block mt-4 px-8 py-3 rounded-2xl font-semibold text-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-lg hover:shadow-cyan-500/40 transition duration-300"
              >
                View Services
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="flex justify-center"
          >
            <motion.img
              src={Herosection}
              alt="Digital Marketing"
              className="w-full max-w-2xl drop-shadow-2xl rounded-xl"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </section>


      {/* SERVICES SECTION */}
      <motion.section
        className="py-24 bg-gradient-to-b from-black via-gray-950 to-black"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
              We provide result-driven digital solutions designed to grow your
              brand, increase visibility, and convert visitors into customers.
            </p>
          </div>


          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-purple-500/30"
              >
                <div className="h-full rounded-3xl bg-black p-7 flex flex-col justify-between shadow-xl transition-all duration-300 group-hover:shadow-cyan-500/20">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>


                  {/* Navigation Button */}
                  <a
                    href={service.link}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition border border-cyan-500/30 rounded-full px-4 py-2 w-fit"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>



      {/* TESTIMONIAL SECTION */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            What Clients Say
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((t, i) => (
              <motion.div
                key={t}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="p-6 rounded-2xl bg-gray-900 border border-cyan-500/20"
              >
                <p className="text-gray-300 mb-4">
                  "Amazing service! Our business traffic increased massively
                  after working with this team."
                </p>
                <h4 className="font-semibold text-cyan-400">Client {t}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>


      {/* FAQ SECTION */}
      <motion.section
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              'How long does marketing take to show results?',
              'Do you work with startups?',
              'What services do you provide?'
            ].map((q, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="p-5 rounded-xl bg-black border border-cyan-500/20"
              >
                <p className="font-medium">{q}</p>
                <p className="text-gray-400 text-sm mt-2">
                  Results depend on the strategy, but most clients start seeing
                  improvement within the first few months.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

    </motion.div>
  )
}