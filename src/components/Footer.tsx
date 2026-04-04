const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-background/60">
      <div className="container px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading text-lg text-background/80">Ancestral</p>
        <p className="text-xs tracking-wider uppercase font-body">
          © {new Date().getFullYear()} Ancestral Holistic Spa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
