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
    <section className="relative bg-black text-white min-h-screen">
      {/* ===== HERO IMAGE ===== */}
      {service.image && (
        <div className="relative h-[300px] md:h-[420px] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover scale-105"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Title on image */}
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
              {service.title}
            </motion.h1>
          </div>
        </div>
      )}

      {/* ===== CONTENT SECTION ===== */}
      <div className="relative max-w-4xl mx-auto py-16 px-4">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            to="/services"
            className="text-cyan-400 hover:text-cyan-300 transition"
          >
            ← Back to Services
          </Link>
        </motion.div>

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          {/* Description */}
          <div className="text-gray-300 text-lg leading-relaxed space-y-5">
            {Array.isArray(service.description) ? (
              service.description.map((para, index) => (
                <p key={index}>{para}</p>
              ))
            ) : (
              <p>{service.description}</p>
            )}
          </div>

          {/* Features */}
          {service.features && (
            <ul className="mt-10 space-y-4">
              {service.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span className="mt-2 w-2 h-2 rounded-full bg-cyan-400" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <Link
              to="/contact"
              className="inline-block px-10 py-3 rounded-2xl font-semibold text-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95 transition"
            >
              Get This Service
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
