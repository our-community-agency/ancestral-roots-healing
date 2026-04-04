import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-earth text-earth-foreground">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-earth-foreground/60 mb-4 font-body">
            Get in Touch
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-medium">
            Let's Connect. Heal. <span className="italic">Remember.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: Phone,
              title: "Call / WhatsApp",
              lines: ["074 328 8901"],
              href: "https://wa.me/27743288901",
            },
            {
              icon: Mail,
              title: "Email",
              lines: ["info@ancestralholistichealing.online"],
              href: "mailto:info@ancestralholistichealing.online",
            },
            {
              icon: Globe,
              title: "Website",
              lines: ["ancestralholistichealing.online"],
              href: "https://ancestralholistichealing.online",
            },
            {
              icon: MapPin,
              title: "Location",
              lines: ["Western Cape", "South Africa"],
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="text-center"
            >
              <item.icon size={22} strokeWidth={1.5} className="mx-auto mb-3 text-earth-foreground/70" />
              <h3 className="font-heading text-base font-medium mb-2">{item.title}</h3>
              {item.lines.map((line) =>
                item.href ? (
                  <a
                    key={line}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-earth-foreground/70 font-body hover:text-earth-foreground transition-colors"
                  >
                    {line}
                  </a>
                ) : (
                  <p key={line} className="text-sm text-earth-foreground/70 font-body">
                    {line}
                  </p>
                )
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
