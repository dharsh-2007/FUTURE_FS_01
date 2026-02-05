

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} P. Dharshini | Web Developer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
