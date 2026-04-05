import { motion } from "framer-motion";
import collectionImage from "@/assets/wellness-collection.jpg";

const WelcomeSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="grid gap-12 items-center lg:grid-cols-[1.1fr_0.9fr] max-w-6xl mx-auto">
          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body"
            >
              Welcome
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-3xl md:text-5xl font-medium text-foreground mb-8"
            >
              Welcome to <span className="italic">Ancestral</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-muted-foreground leading-relaxed font-body"
            >
              <p>
                Ancestral is more than a business; it is a sacred return. Rooted in the heritage
                of the Indigenous people, our work bridges ancient Indigenous wisdom with modern
                holistic healing.
              </p>
              <p>
                Through handcrafted products, ancestral herbal remedies, and intuitive massage
                therapy, we guide you to profound self-reconnection, rooting you deeply in your
                heritage and the healing embrace of the land.
              </p>
              <p className="text-foreground italic font-heading text-lg">
                🌀 Indigenous knowledge is medicine. Let it remember you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 text-sm font-body"
            >
              <a
                href="https://wa.me/27743288901"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-primary text-primary-foreground tracking-wider uppercase text-xs font-medium hover:bg-secondary transition-colors"
              >
                Book Now · 074 328 8901
              </a>
              <a
                href="mailto:info@ancestralholistichealing.online"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                📧 info@ancestralholistichealing.online
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="overflow-hidden border border-border bg-card shadow-xl"
          >
            <img
              src={collectionImage}
              alt="Ancestral wellness collection"
              loading="lazy"
              width={1408}
              height={768}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
