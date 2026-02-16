import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "../data/services";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ServiceDetails() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service)
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h2 className="text-2xl">Service Not Found</h2>
      </div>
    );

  return (
    <section className="relative bg-black text-white min-h-screen overflow-hidden">

      {/* ===== CONTENT SECTION ===== */}
      <div className="relative max-w-7xl mx-auto py-10 px-4">

        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-500 transition"
          >
            <ArrowLeft size={16} />
            Back to All Services
          </Link>

        </motion.div>

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative backdrop-blur-2xl bg-white/5 rounded-[2rem] p-8 md:p-12 shadow-[0_0_60px_rgba(0,255,255,0.08)]"
        >
          {/* Decorative glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full" />

          {/* Title */}
          <h1 className="text-3xl md:text-4xl text-center font-extrabold mb-10 text-cyan-500">
            {service.title}
          </h1>

          {/* Description with images */}
          <div className="space-y-20">
            {Array.isArray(service.description) &&
              service.description.map((para, index) => {
                const isReverse = index % 2 !== 0

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className={`grid md:grid-cols-2 gap-10 items-center
    ${isReverse ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""}
  `}
                  >
                    {/* TEXT */}
                    <p className="text-gray-300 md:text-base leading-relaxed text-justify order-2 md:order-none">
                      {para}
                    </p>

                    {/* IMAGE */}
                    {service.images?.[index] && (
                      <motion.img
                        src={service.images[index]}
                        alt={`service-${index}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full rounded-2xl border border-white/10 shadow-lg order-1 md:order-none"
                      />
                    )}
                  </motion.div>

                )
              })}
          </div>



          {/* Features */}
          {service.features && (
            <ul className="relative mt-12 grid gap-4 md:grid-cols-2">
              {service.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07 }}
                  className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                >
                  <span className="mt-1 w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-sm text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-14 text-center"
          >
            <Link
              to="/contact"
              className="group inline-block px-12 py-4 rounded-2xl font-semibold text-white bg-cyan-500 shadow-xl transition"
            >
              <span className="inline-flex items-center gap-2">
                <ArrowRight className="w-5 h-5 inline-block mr-2 group-hover:translate-x-[88px] transition-transform duration-300" />
                <span className="group-hover:-translate-x-8 transition-transform duration-300">
                  Let's Talk
                </span>

              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
