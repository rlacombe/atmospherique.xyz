import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { number: "15+", label: "Years of Experience" },
  { number: "200+", label: "Projects Delivered" },
  { number: "50+", label: "Research Papers" },
  { number: "25+", label: "Patents Filed" }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Leading the <span className="bg-gradient-primary bg-clip-text text-transparent">Future</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our team of world-class researchers and engineers has been at the forefront of technological 
              innovation for over a decade. We bridge the gap between theoretical research and practical 
              implementation, delivering solutions that push the boundaries of what's possible.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From Fortune 500 companies to cutting-edge startups, we've helped organizations navigate 
              the complexities of emerging technologies and turn visionary ideas into reality.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center bg-gradient-card border-border shadow-card">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-elegant">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Our Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Research & Analysis</h4>
                    <p className="text-muted-foreground">Deep dive into your challenges with comprehensive research and feasibility analysis.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Innovation Design</h4>
                    <p className="text-muted-foreground">Develop cutting-edge solutions using the latest technological advances.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Implementation</h4>
                    <p className="text-muted-foreground">Seamless execution with ongoing support and optimization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;