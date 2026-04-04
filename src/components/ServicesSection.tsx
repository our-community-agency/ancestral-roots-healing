import { motion } from "framer-motion";
import massageImg from "@/assets/service-massage.jpg";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body">
            ✨ Holistic Healing
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-medium text-foreground mb-4">
            Massage <span className="italic">Therapy</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground font-body leading-relaxed">
            Our massages transcend mere relaxation, becoming sacred rituals of renewal.
            Using Indigenous oils and ancestral techniques, we restore your innate balance,
            release deep-seated tension, and awaken profound inner peace.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden aspect-[4/5] max-h-[600px]"
          >
            <img
              src={massageImg}
              alt="Hot stones on a green leaf"
              loading="lazy"
              width={640}
              height={800}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Pricing */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-10"
          >
            {/* Swedish */}
            <div>
              <h3 className="font-heading text-2xl font-medium text-foreground mb-1">
                🌸 Swedish Massage
              </h3>
              <div className="space-y-2 mt-4">
                {[
                  { time: "90 Minutes", price: "R700" },
                  { time: "60 Minutes", price: "R500" },
                  { time: "30 Minutes", price: "R250" },
                ].map((item) => (
                  <div key={item.time} className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground font-body">{item.time}</span>
                    <span className="text-accent font-heading font-semibold text-lg">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deep Tissue */}
            <div>
              <h3 className="font-heading text-2xl font-medium text-foreground mb-1">
                🌿 Deep Tissue Massage
              </h3>
              <div className="space-y-2 mt-4">
                {[
                  { time: "90 Minutes", price: "R800" },
                  { time: "60 Minutes", price: "R600" },
                  { time: "30 Minutes", price: "R300" },
                ].map((item) => (
                  <div key={item.time} className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground font-body">{item.time}</span>
                    <span className="text-accent font-heading font-semibold text-lg">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Packages */}
            <div>
              <h3 className="font-heading text-2xl font-medium text-foreground mb-1">
                🌞 Monthly Wellness Packages
              </h3>
              <p className="text-sm text-muted-foreground font-body mb-4">
                Unlock consistent well-being and savings with our accessible packages (on contract basis):
              </p>
              <div className="space-y-2">
                {[
                  { desc: "4 × 60 min massages", price: "R1,400/month" },
                  { desc: "2 × 60 min massages", price: "R900/month" },
                ].map((item) => (
                  <div key={item.desc} className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground font-body">{item.desc}</span>
                    <span className="text-accent font-heading font-semibold text-lg">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground font-body mt-4 italic">
                All treatments are done using sacred Indigenous oils &amp; balms.
              </p>
            </div>

            <a
              href="https://wa.me/27743288901"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 text-sm tracking-widest uppercase bg-primary text-primary-foreground hover:bg-secondary transition-colors duration-300 font-medium"
            >
              Book with Marcia · 074 328 8901
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
