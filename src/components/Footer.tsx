const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg"></div>
              <span className="text-xl font-semibold">FrontierTech</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              Pioneering the future through frontier technology research and development consulting.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">AI & Machine Learning</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Quantum Computing</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Biotechnology</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Careers</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-smooth">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Twitter</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Research Portal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/70">
            © 2024 FrontierTech. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;