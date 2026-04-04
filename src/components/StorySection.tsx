import { motion } from "framer-motion";
import { Leaf, Heart, Sparkles, Users } from "lucide-react";

const pillars = [
  { icon: Leaf, label: "Herbal wisdom" },
  { icon: Heart, label: "Touch therapy" },
  { icon: Sparkles, label: "Creative expression" },
  { icon: Users, label: "Community upliftment" },
];

const plants = [
  { name: "Khoegoed", desc: "For grounding, cleansing, and clarity" },
  { name: "Wilde Als", desc: "For fevers, flu, and energetic clearing" },
  { name: "Buchu", desc: "For detoxing, calming inflammation, and spiritual protection" },
  { name: "Lemongrass, Peppermint, Myrrh & Frankincense", desc: "To uplift and restore harmony" },
];

const StorySection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container px-4">
        {/* Our Story */}
        <div className="max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body text-center"
          >
            Our Story
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-8 text-center"
          >
            A Journey of <span className="italic">Remembrance</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-5 text-muted-foreground leading-relaxed font-body text-center"
          >
            <p>
              Founded by Marcia, a proud Indigenous wellness practitioner, Ancestral is a
              journey of remembrance, creation, and healing.
            </p>
            <p>
              We honour our foremothers, their songs, their medicines, and their
              resilience—reviving the traditional healing practices of the Indigenous
              people through:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
          >
            {pillars.map((p) => (
              <div key={p.label} className="flex flex-col items-center gap-2 py-4">
                <p.icon size={22} strokeWidth={1.5} className="text-primary" />
                <span className="text-sm text-foreground font-medium font-body">{p.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8 text-muted-foreground italic font-body"
          >
            We believe that wellness is ancestral, and every remedy, every massage, every
            handcrafted item is a prayer in motion.
          </motion.p>
        </div>

        {/* Herbal Legacy */}
        <div className="max-w-3xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-2xl md:text-3xl font-medium text-foreground mb-4 text-center"
          >
            🪶 The Indigenous People &amp; Their Herbal Legacy
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-center font-body leading-relaxed mb-8"
          >
            The Indigenous people are among Southern Africa's original cultures. Their deep
            connection with the land birthed a rich tradition of plant-based healing,
            spiritual ritual, and natural living.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {plants.map((plant) => (
              <div key={plant.name} className="flex gap-3 items-start p-4 bg-background/60 border border-border">
                <span className="text-primary mt-0.5">●</span>
                <div>
                  <span className="font-heading font-medium text-foreground">{plant.name}</span>
                  <span className="text-muted-foreground font-body"> – {plant.desc}</span>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-8 text-muted-foreground font-body leading-relaxed"
          >
            At Ancestral, we keep this knowledge alive, offering products and services
            that carry the ancient pulse of the land forward into the now.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
