import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Zap, Flame, Shield, Leaf, ArrowRight } from 'lucide-react';

const ProductsSection = () => {
  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-sustainability-green" />,
      title: "Powerful Efficiency",
      description: "50% less material needed compared to traditional solutions",
      stat: "50%"
    },
    {
      icon: <Flame className="h-8 w-8 text-alert-orange" />,
      title: "Lower Melting Point",
      description: "Reduces energy consumption during processing",
      stat: "Lower"
    },
    {
      icon: <Shield className="h-8 w-8 text-industrial-blue" />,
      title: "Longer Refractory Lifespan",
      description: "Extended equipment life and reduced maintenance costs",
      stat: "Extended"
    },
    {
      icon: <Leaf className="h-8 w-8 text-sustainability-green" />,
      title: "Carbon-Free Solution",
      description: "Supports Green Steel transition and sustainability goals",
      stat: "Carbon-Free"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" className="py-20 bg-background" data-testid="section-products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-industrial-blue border-industrial-blue">
            AF Series Products
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-products-title">
            Innovative Fluoride-Based Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-products-subtitle">
            Our AF Series delivers superior performance with sustainable solutions for modern industrial applications
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="hover-elevate transition-all duration-300 text-center border-border"
              data-testid={`card-benefit-${index}`}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-industrial-blue mb-2">
                  {benefit.stat}
                </div>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Chart */}
        <Card className="mb-12" data-testid="card-comparison">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-foreground">
              AF Series vs Traditional Fluorspar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-4 text-foreground font-semibold">Feature</th>
                    <th className="pb-4 text-sustainability-green font-semibold">AF Series</th>
                    <th className="pb-4 text-muted-foreground font-semibold">Traditional Fluorspar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-4 font-medium">Material Usage</td>
                    <td className="py-4 text-sustainability-green">50% Less</td>
                    <td className="py-4 text-muted-foreground">Standard</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">Energy Efficiency</td>
                    <td className="py-4 text-sustainability-green">High</td>
                    <td className="py-4 text-muted-foreground">Moderate</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">Environmental Impact</td>
                    <td className="py-4 text-sustainability-green">Carbon-Free</td>
                    <td className="py-4 text-muted-foreground">Carbon Emissions</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">Cost Effectiveness</td>
                    <td className="py-4 text-sustainability-green">Superior</td>
                    <td className="py-4 text-muted-foreground">Standard</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="bg-industrial-blue hover:bg-industrial-blue/90 px-8 py-4 text-lg"
            data-testid="button-learn-more-af"
          >
            Learn More About Our AF Series
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;