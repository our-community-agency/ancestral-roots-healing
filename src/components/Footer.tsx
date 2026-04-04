const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-background/60">
      <div className="container px-4 flex flex-col items-center gap-3 text-center">
        <p className="font-heading text-lg text-background/80">Ancestral</p>
        <p className="text-xs tracking-wider font-body">
          © {new Date().getFullYear()} Ancestral Holistic Healing. All rights reserved.
        </p>
        <p className="text-xs text-background/40 font-body">
          Rooted in the Western Cape, South Africa · ancestralholistichealing.online
        </p>
      </div>
    </footer>
  );
};

export default Footer;
