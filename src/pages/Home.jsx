import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home() {
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
              src="src/assets/Hero-section.avif"
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
        className="py-20 bg-gradient-to-b from-black to-gray-900"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {['Service 1', 'Service 2', 'Service 3'].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -12, scale: 1.05 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="p-6 rounded-2xl bg-black border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/30 transition"
              >
                <h3 className="text-xl font-semibold mb-3">{service}</h3>
                <p className="text-gray-400 text-sm">
                  High-quality digital marketing solutions tailored to grow your
                  business and increase online visibility.
                </p>
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