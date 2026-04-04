import { motion } from "framer-motion";

const reviews = [
  {
    quote:
      "The massage I had from Marcia was unlike anything I've ever experienced. I felt like I left with my spirit reset.",
    author: "A. Daniels",
    tag: "Spirit Reset",
  },
  {
    quote:
      "The salve helped with my daughter's eczema and worked better than anything from the pharmacy. I will be buying again!",
    author: "L. Fredericks",
    tag: "Eczema Relief",
  },
  {
    quote:
      "Truly authentic healing products. You can feel the love and intention that goes into them. The herbal tea is my new daily ritual.",
    author: "J. Peters",
    tag: "Daily Ritual",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-4 font-body">
            Testimonials
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-medium">
            What Our Community <span className="italic">Says</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={review.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="border border-primary-foreground/15 p-8 text-center"
            >
              <blockquote className="text-primary-foreground/85 font-body italic leading-relaxed mb-6">
                "{review.quote}"
              </blockquote>
              <div className="w-8 h-px bg-primary-foreground/30 mx-auto mb-4" />
              <p className="font-heading font-medium text-sm">– {review.author}</p>
              <p className="text-xs text-primary-foreground/50 font-body mt-1">
                {review.tag}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
