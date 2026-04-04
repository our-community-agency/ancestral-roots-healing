import { motion } from "framer-motion";
import massageImg from "@/assets/service-massage.jpg";
import aromatherapyImg from "@/assets/service-aromatherapy.jpg";
import energyImg from "@/assets/service-energy.jpg";

const services = [
  {
    title: "Therapeutic Massage",
    description: "Deep tissue, hot stone, and traditional techniques to release tension and restore flow.",
    image: massageImg,
    price: "From $120",
  },
  {
    title: "Aromatherapy",
    description: "Custom-blended botanical essences to calm the mind, uplift the spirit, and heal the body.",
    image: aromatherapyImg,
    price: "From $95",
  },
  {
    title: "Energy Healing",
    description: "Reiki, crystal therapy, and ancestral rituals to realign your body's natural energy centers.",
    image: energyImg,
    price: "From $110",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body">
            Our Offerings
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-foreground">
            Healing <span className="italic">Rituals</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-6 aspect-[4/5]">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  width={640}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-xl md:text-2xl font-medium text-foreground">
                    {service.title}
                  </h3>
                  <span className="text-sm tracking-wider text-accent font-medium font-body">
                    {service.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
