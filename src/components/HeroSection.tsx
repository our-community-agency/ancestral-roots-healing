import { motion } from "framer-motion";
import heroImage from "@/assets/hero-spa.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ancestral spa surrounded by lush tropical greenery"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase text-primary-foreground/70 mb-6 font-body"
        >
          Holistic Healing Spa
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-medium text-primary-foreground leading-tight mb-8"
        >
          Return to
          <br />
          <span className="italic">Your Roots</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-lg mx-auto text-primary-foreground/80 text-base md:text-lg font-light leading-relaxed mb-10 font-body"
        >
          Ancient wisdom meets modern wellness. Restore balance through
          nature-rooted therapies passed down through generations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#services"
            className="px-10 py-4 text-sm tracking-widest uppercase bg-primary-foreground text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-300 font-medium"
          >
            Explore Treatments
          </a>
          <a
            href="#contact"
            className="px-10 py-4 text-sm tracking-widest uppercase border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-colors duration-300 font-medium"
          >
            Book a Session
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-12 bg-primary-foreground/40"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
