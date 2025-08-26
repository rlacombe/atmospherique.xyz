import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">Innovate</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let's discuss how we can help you unlock the potential of frontier technologies 
            and accelerate your research and development goals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-8 text-center">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Email Us</h3>
                <p className="text-muted-foreground">hello@frontiertech.co</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-8 text-center">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-light text-primary-foreground px-8 py-3 text-lg shadow-elegant"
            >
              Schedule Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;