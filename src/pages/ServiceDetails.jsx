import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "../data/services";

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
      {/* ===== HERO IMAGE WITH PREMIUM OVERLAY ===== */}
      {service.image && (
        <div className="relative h-[320px] md:h-[350px] overflow-hidden">
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover scale-110"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          {/* Glow effect */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-cyan-500/20 blur-3xl rounded-full" />

          {/* Title content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="uppercase tracking-[0.3em] text-cyan-400 text-xs md:text-sm mb-4"
            >
              Our Service
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-3xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-xl"
            >
              {service.title}
            </motion.h1>
          </div>
        </div>
      )}

      {/* ===== CONTENT SECTION ===== */}
      <div className="relative max-w-4xl mx-auto py-20 px-4">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
          >
            ← Back to Services
          </Link>
        </motion.div>

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-[0_0_60px_rgba(0,255,255,0.08)]"
        >
          {/* Decorative glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full" />

          {/* Description */}
          <div className="relative text-gray-300 text-lg leading-relaxed space-y-6">
            {Array.isArray(service.description) ? (
              service.description.map((para, index) => (
                <p key={index} className="text-gray-300/90">
                  {para}
                </p>
              ))
            ) : (
              <p>{service.description}</p>
            )}
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
              className="inline-block px-12 py-4 rounded-2xl font-semibold text-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-xl shadow-cyan-500/20 hover:scale-105 active:scale-95 transition"
            >
              Get This Service
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
