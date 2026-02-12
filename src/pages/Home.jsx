import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from "lucide-react"
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
    link: "/services/service1",
  },
  {
    image: service2,
    title: "Social Media Marketing",
    desc: "We use social media to grow your brand with meaningful content, consistent voice, and targeted strategies that boost visibility, attract customers, and deliver measurable results.",
    link: "/services/service2",
  },
  {
    image: service3,
    title: "Social Media Account Creation",
    desc: "We create and optimize professional social media profiles with consistent branding, secure handles, and fully configured details to give your business a strong, growth-ready first impression.",
    link: "/services/service3",
  },
  {
    image: service4,
    title: "Bookmarking Website Services",
    desc: "We use social bookmarking to boost your website’s authority, speed up indexing, and build high-quality backlinks that drive traffic, visibility, and long-term SEO growth.",
    link: "/services/service4",
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
    answer: 'Results depend on the strategy, but most clients start seeing improvement within the first few months.'
  },
  {
    question: 'Do you work with startups?',
    answer: 'Yes, we work with startups and established businesses alike.'
  },
  {
    question: 'What services do you provide?',
    answer: 'We provide a wide range of digital marketing services including SEO, social media marketing, content creation, and more.'
  },
  {
    question: 'How do you measure marketing success?',
    answer: 'We measure success through key performance indicators like website traffic, conversion rates, engagement metrics, and ROI.'
  },
  {
    question: 'Will I get regular updates on my campaigns?',
    answer: 'Yes, we provide regular progress reports and updates to keep you informed of campaign performance.'
  },
  {
    question: 'Can you customize a strategy for my business?',
    answer: 'Absolutely! We tailor our marketing strategies to fit your specific business goals and target audience.'
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
        className="bg-gradient-to-b from-black via-gray-950 to-black"
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
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[380px] object-cover rounded-2xl mb-5"
                    />

                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-xl md:text-2xl font-semibold text-white">
                        {service.title}
                      </h3>

                      {/* Navigation Button */}
                      <a
                        href={service.link}
                        className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition border border-cyan-500/30 rounded-full px-4 py-2 whitespace-nowrap"
                      >
                        Learn more
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>



      {/* TESTIMONIAL SECTION */}
      <motion.section
        className="py-24 bg-black"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >

        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Real feedback from businesses that trust our digital marketing
              expertise to grow their brand and increase results.
            </p>
          </div>


          {/* Slider */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{ x: `-${(index * 100) / 3}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={t.name + i}
                  className="min-w-[340px] p-7 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/20 transition justify-between flex flex-col"
                >
                  <p className="text-gray-300 leading-relaxed mb-5">"{t.text}"</p>
                  <h4 className="font-semibold text-cyan-400">{t.name}</h4>
                </div>
              ))}
            </motion.div>


            {/* Navigation Buttons */}
            {/* <div className="flex justify-center gap-4 mt-10">
              <button
                onClick={() => setIndex((prev) => (prev - 3 < 0 ? testimonials.length - 3 : prev - 1))}
                className="p-3 rounded-full bg-gray-900 border border-cyan-500/30 hover:bg-cyan-500/10 transition"
              >
                <ChevronLeft className="w-5 h-5 text-cyan-400" />
              </button>


              <button
                onClick={() => setIndex((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 1))}
                className="p-3 rounded-full bg-gray-900 border border-cyan-500/30 hover:bg-cyan-500/10 transition"
              >
                <ChevronRight className="w-5 h-5 text-cyan-400" />
              </button>
            </div> */}
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
            {faq.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="p-5 rounded-xl bg-black border border-cyan-500/20 cursor-pointer"
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
                    className="text-gray-400 text-sm mt-2"
                  >
                    {item.answer}
                  </motion.p>
                )}
              </motion.div>
            ))}

          </div>
        </div>
      </motion.section>

    </motion.div>
  )
}