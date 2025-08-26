import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "AI & Machine Learning",
    description: "Advanced AI research, neural network architectures, and ML implementation for breakthrough applications.",
    icon: "🧠"
  },
  {
    title: "Quantum Computing",
    description: "Quantum algorithm development, hardware research, and practical quantum solution implementation.",
    icon: "⚛️"
  },
  {
    title: "Biotechnology Innovation",
    description: "Cutting-edge biotech research, genetic engineering, and pharmaceutical development consulting.",
    icon: "🧬"
  },
  {
    title: "Advanced Materials",
    description: "Nanomaterials research, smart materials development, and next-generation manufacturing processes.",
    icon: "⚗️"
  },
  {
    title: "Energy Solutions",
    description: "Renewable energy research, fusion technology, and sustainable power system development.",
    icon: "⚡"
  },
  {
    title: "Space Technology",
    description: "Aerospace engineering, satellite systems, and space exploration technology development.",
    icon: "🚀"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in the most challenging frontiers of technology, bringing decades of research experience 
            to solve complex problems across multiple domains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;