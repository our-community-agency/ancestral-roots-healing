import { motion } from "framer-motion";
import { Leaf, Heart, Sun } from "lucide-react";

const pillars = [
  { icon: Leaf, title: "Nature-Rooted", text: "Every treatment draws from the earth's purest botanicals and ancient plant wisdom." },
  { icon: Heart, title: "Deeply Personal", text: "Tailored rituals that honor your body's unique needs and healing journey." },
  { icon: Sun, title: "Restorative", text: "We don't just treat symptoms — we awaken your body's innate ability to heal." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body">
              Our Philosophy
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-6 leading-tight">
              Healing is a return <br />
              <span className="italic">to wholeness</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 font-body max-w-lg">
              At Ancestral, we believe true wellness lives at the intersection of ancient
              tradition and mindful presence. Our practitioners are trained in time-honored
              modalities, creating a sanctuary where body, mind, and spirit can reconnect.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3.5 text-sm tracking-widest uppercase bg-primary text-primary-foreground hover:bg-secondary transition-colors duration-300 font-medium"
            >
              Begin Your Journey
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex gap-5"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-border text-primary">
                  <pillar.icon size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-medium text-foreground mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body">
                    {pillar.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
