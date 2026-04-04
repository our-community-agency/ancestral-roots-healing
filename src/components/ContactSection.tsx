import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/60 mb-4 font-body">
            Get in Touch
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium">
            Begin Your <span className="italic">Healing</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {[
            { icon: MapPin, title: "Visit Us", lines: ["123 Serenity Lane", "Santa Fe, NM 87501"] },
            { icon: Phone, title: "Call Us", lines: ["(505) 555-0142", "hello@ancestral.spa"] },
            { icon: Clock, title: "Hours", lines: ["Mon – Sat: 9am – 7pm", "Sun: 10am – 5pm"] },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <item.icon size={24} strokeWidth={1.5} className="mx-auto mb-4 text-primary-foreground/70" />
              <h3 className="font-heading text-lg font-medium mb-2">{item.title}</h3>
              {item.lines.map((line) => (
                <p key={line} className="text-sm text-primary-foreground/70 font-body">
                  {line}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
