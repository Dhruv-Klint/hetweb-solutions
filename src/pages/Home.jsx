import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowUp } from "lucide-react"
import Herosection from "../assets/Hero-section.avif"
import { ChevronDown } from "lucide-react";
import service1 from "../assets/SEO-Services.png"
import service2 from "../assets/Social-Media-Marketing.png"
import service3 from "../assets/Social-Media-Account-Creation.png"
import service4 from "../assets/Bookmarking-Websites.png"

const services = [
  {
    image: service1,
    title: "Search Engine Optimization (SEO) Services",
    desc: "We turn social media into a powerful growth channel with engaging content, clear branding, and targeted strategies that boost visibility, attract customers, and deliver measurable results.",
    link: "/services/seo-services",
  },
  {
    image: service2,
    title: "Social Media Marketing",
    desc: "We use social media to grow your brand with meaningful content, consistent voice, and targeted strategies that boost visibility, attract customers, and deliver measurable results.",
    link: "/services/social-media-marketing",
  },
  {
    image: service3,
    title: "Social Media Account Creation",
    desc: "We create and optimize professional social media profiles with consistent branding, secure handles, and fully configured details to give your business a strong, growth-ready first impression.",
    link: "/services/social-media-account-creation",
  },
  {
    image: service4,
    title: "Bookmarking Services",
    desc: "We use social bookmarking to boost your website's authority, speed up indexing, and build high-quality backlinks that drive traffic, visibility, and long-term SEO growth.",
    link: "/services/bookmarking-website-services",
  },
]

const testimonials = [
  {
    name: "Rahul Patel",
    text: "Amazing service! Our website traffic and leads increased significantly within just a few months.",
  },
  {
    name: "Priya Shah",
    text: "Professional team with clear strategy and real measurable results. Highly recommended!",
  },
  {
    name: "Amit Mehta",
    text: "They transformed our social media presence and helped us reach the right customers.",
  },
  {
    name: "Neha Desai",
    text: "Great communication, fast delivery, and excellent SEO improvements for our business.",
  },
  {
    name: "Karan Joshi",
    text: "Reliable digital marketing partner. We saw real growth in engagement and conversions.",
  },
  {
    name: "Sneha Trivedi",
    text: "Creative, strategic, and result‑focused. One of the best teams we’ve worked with.",
  },
];

const faq = [
  {
    question: 'How long does marketing take to show results?',
    answer: 'Results depend on the strategy and industry competition. Most clients begin seeing noticeable improvements within the first few months.'
  },
  {
    question: 'Do you work with startups?',
    answer: 'Yes, we collaborate with both startups and established businesses. Our strategies are tailored to match each stage of business growth.'
  },
  {
    question: 'What services do you provide?',
    answer: 'We offer comprehensive digital marketing services including SEO, social media marketing, and content creation. Additional solutions are customized based on your business needs.'
  },
  {
    question: 'How do you measure marketing success?',
    answer: 'Success is tracked using key performance indicators such as traffic, conversions, and engagement. We also evaluate overall return on investment for long-term impact.'
  },
  {
    question: 'Will I get regular updates on my campaigns?',
    answer: 'Yes, we share consistent progress reports and performance insights. This keeps you fully informed about campaign growth and results.'
  },
  {
    question: 'Can you customize a strategy for my business?',
    answer: 'Absolutely, every strategy is designed around your specific goals and audience. We focus on delivering measurable and sustainable business growth.'
  }
]

export default function Home() {

  const [index, setIndex] = useState(0);

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(testimonials[(index + i) % testimonials.length]);
    }
    return items;
  };

  const visible = getVisible();


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);


  const [openIndex, setOpenIndex] = useState(null);

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#services") {
      const section = document.getElementById("services");
      section?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);


  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <motion.div
      className="bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >

      {/* HERO SECTION */}
      <section className="min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="space-y-6 mt-10 md:mt-0"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
              Digital Marketing That Grows Your Business
            </h1>

            <p className="text-gray-300 text-lg max-w-xl text-justify">
              We deliver data-driven marketing solutions that help startups and growing businesses boost visibility, attract quality leads, and build strong brands for long-term success.
            </p>

            <motion.div>
              <Link
                to="/contact"
                className="theme-btn group inline-flex items-center mt-4 px-8 py-3 rounded-2xl font-semibold text-white shadow-xl transition duration-300 overflow-hidden"
              >
                <span className="inline-flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-20" />
                  <span className="transition-transform duration-300 group-hover:-translate-x-8">
                    Let's Talk
                  </span>
                </span>
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
        id="services"
        className="bg-gradient-to-b from-black via-gray-950 to-black"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Our Services
            </h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm md:text-base">
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
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-cyan-500/30 via-cyan-500/20 to-purple-500/30"
              >
                <Link to={service.link} className="block h-full">
                  <div className="h-full rounded-3xl bg-black p-7 flex flex-col justify-between shadow-xl transition-all duration-300">

                    {/* TOP CONTENT */}
                    <div>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[280px] object-cover rounded-2xl mb-5 hover:scale-[1.02] transition-transform duration-300"
                      />

                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                        {service.title}
                      </h3>

                      <p className="text-gray-300 text-sm leading-relaxed">
                        {service.desc}
                      </p>
                    </div>

                    <div className="flex justify-end mt-6">
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 group-hover:text-cyan-300 transition border border-cyan-500/30 rounded-full px-4 py-2 whitespace-nowrap">
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-[88px]" />
                        <span className="group-hover:-translate-x-6 transition duration-300">
                          Learn more
                        </span>
                      </span>
                    </div>

                  </div>
                </Link>
              </motion.div>

            ))}
          </div>
        </div>
      </motion.section>



      {/* TESTIMONIAL SECTION */}
      <motion.section
        className="py-28 bg-black"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >

        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              What Our Clients Say
            </h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Real feedback from businesses that trust our digital marketing
              expertise to grow their brand and increase results.
            </p>
          </div>


          {/* Slider */}
          <div className="relative overflow-hidden md:h-60">
            <motion.div
              className="flex gap-8 md:mt-8"
              animate={{ x: `-${(index * 100) / 3}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name + i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="min-w-[340px] p-7 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-cyan-300 shadow-lg flex flex-col justify-between"
                >
                  <p className="text-gray-300 leading-relaxed mb-5">"{t.text}"</p>
                  <h4 className="font-semibold text-cyan-400">{t.name}</h4>
                </motion.div>
              ))}
            </motion.div>
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
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Frequently Asked Queries
          </h2>

          <div className="space-y-4">
            {faq.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="p-5 rounded-xl bg-black border border-cyan-900 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {/* Question row */}
                <div className="flex items-center justify-between">
                  <p className="font-medium">{item.question}</p>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${openIndex === i ? "rotate-180" : ""
                      }`}
                  />
                </div>

                {/* Answer */}
                {openIndex === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300 text-sm mt-2"
                  >
                    {item.answer}
                  </motion.p>
                )}
              </motion.div>
            ))}

          </div>
        </div>
      </motion.section>

      {/* SCROLL TO TOP BUTTON */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full
                 bg-cyan-500 text-white hover:bg-white
                 hover:text-cyan-600
                 transition-all duration-300"
          >
            <ArrowUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>


    </motion.div>
  )
}