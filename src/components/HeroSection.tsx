import { motion } from "framer-motion";
import heroImage from "@/assets/hero-landscape.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Western Cape fynbos landscape at golden hour"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-foreground/55" />
      </div>

      <div className="relative z-10 container text-center px-4 py-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs md:text-sm tracking-[0.35em] uppercase text-primary-foreground/60 mb-4 font-body"
        >
          Indigenous Healing &amp; Creative Wellness · Western Cape, South Africa
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-medium text-primary-foreground leading-tight mb-8"
        >
          Ancestral
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="w-16 h-px bg-primary-foreground/30 mx-auto mb-8"
        />

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl mx-auto text-primary-foreground/80 text-base md:text-lg font-light leading-relaxed mb-10 font-body italic"
        >
          "We are the memory of the land, and the land remembers us. Through plants, touch, and story—we heal."
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/27743288901"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 text-sm tracking-widest uppercase bg-primary-foreground text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-300 font-medium"
          >
            Book Now
          </a>
          <a
            href="#services"
            className="px-10 py-4 text-sm tracking-widest uppercase border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-colors duration-300 font-medium"
          >
            Our Services
          </a>
        </motion.div>
      </div>

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
