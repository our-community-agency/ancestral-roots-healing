import { motion } from "framer-motion";
import salveImg from "@/assets/product-salve-real.jpeg";
import teaImg from "@/assets/wellness-collection.jpg";
import merchImg from "@/assets/hero-ancestral-healing.jpg";

const products = [
  {
    title: "Indigenous Medicinal Salve",
    image: salveImg,
    description:
      "A sacred blend of Khoegoed, Wilde Als, Buchu, and more. Carries the essence of traditional African plant medicine. Benefits include antimicrobial, anti-inflammatory, and muscle relaxation properties.",
    price: "R120 (small) · R200 (medium) · R300 (large)",
    cta: "Order Now",
    link: "https://wa.me/27743288901?text=Hi%20Marcia%2C%20I'd%20like%20to%20order%20the%20Indigenous%20Medicinal%20Salve",
  },
  {
    title: "Herbal Tea Blends",
    image: teaImg,
    description:
      "Crafted from Indigenous herbs for wellness and balance.",
    price: "Contact for details",
    cta: "Inquire Now",
    link: "https://wa.me/27743288901?text=Hi%20Marcia%2C%20I'd%20like%20to%20know%20more%20about%20the%20Herbal%20Tea%20Blends",
  },
  {
    title: "Handcrafted Cultural Merchandise",
    image: merchImg,
    description:
      "Unique items celebrating Indigenous heritage. Support Indigenous artisans and heal with purpose.",
    price: "Contact for details",
    cta: "Inquire Now",
    link: "https://wa.me/27743288901?text=Hi%20Marcia%2C%20I'd%20like%20to%20know%20more%20about%20the%20Handcrafted%20Merchandise",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-card">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body">
            🌿 Shop
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-medium text-foreground">
            Our <span className="italic">Products</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group bg-background border border-border overflow-hidden"
            >
              <div className="overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-heading text-xl font-medium text-foreground">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {product.description}
                </p>
                <p className="text-sm font-medium text-accent font-body">
                  {product.price}
                </p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-6 py-2.5 text-xs tracking-wider uppercase bg-primary text-primary-foreground hover:bg-secondary transition-colors font-medium"
                >
                  {product.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 text-sm text-muted-foreground font-body"
        >
          📦 Shipping available nationwide.
        </motion.p>
      </div>
    </section>
  );
};

export default ProductsSection;
