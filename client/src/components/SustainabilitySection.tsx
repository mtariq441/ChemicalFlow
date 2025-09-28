import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Recycle, Leaf, Droplets, Globe, TrendingDown, Factory } from 'lucide-react';

const SustainabilitySection = () => {
  const initiatives = [
    {
      icon: <Recycle className="h-8 w-8 text-sustainability-green" />,
      title: "Circular Economy",
      description: "Recovered fluorine compounds reduce waste and promote resource efficiency",
      impact: "90% Recovery Rate"
    },
    {
      icon: <Leaf className="h-8 w-8 text-sustainability-green" />,
      title: "Alternative to Mining",
      description: "Sustainable sourcing that reduces environmental impact from traditional mining",
      impact: "Zero Mining"
    },
    {
      icon: <Droplets className="h-8 w-8 text-sustainability-green" />,
      title: "Water & Energy Savings",
      description: "Significant reduction in water consumption and energy usage in production",
      impact: "40% Savings"
    },
    {
      icon: <Globe className="h-8 w-8 text-sustainability-green" />,
      title: "Lower CO₂ Emissions",
      description: "Carbon-free products contribute to global decarbonization efforts",
      impact: "Carbon-Free"
    },
    {
      icon: <TrendingDown className="h-8 w-8 text-sustainability-green" />,
      title: "Reduced Environmental Impact",
      description: "Minimized ecological footprint through innovative chemical processes",
      impact: "50% Reduction"
    },
    {
      icon: <Factory className="h-8 w-8 text-sustainability-green" />,
      title: "Green Steel Support",
      description: "Enabling the transition to sustainable steel production worldwide",
      impact: "Industry Leading"
    }
  ];

  return (
    <section id="sustainability" className="py-20 bg-background" data-testid="section-sustainability">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sustainability-green border-sustainability-green">
            Sustainable Innovation
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-sustainability-title">
            Sustainability is in Our DNA
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-sustainability-subtitle">
            Leading the chemical industry towards a more sustainable future through innovative fluoride-based solutions
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <Card 
              key={index}
              className="hover-elevate transition-all duration-300 text-center border-border"
              data-testid={`card-sustainability-${index}`}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-sustainability-green/10 rounded-full">
                    {initiative.icon}
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {initiative.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {initiative.description}
                </p>
                <div className="pt-2">
                  <Badge variant="secondary" className="bg-sustainability-green/10 text-sustainability-green border-sustainability-green/20">
                    {initiative.impact}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Case Study */}
        <Card className="bg-gradient-to-r from-sustainability-green/5 to-industrial-blue/5 border-sustainability-green/20" data-testid="card-case-study">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-foreground">
              Green Steel Initiative
            </CardTitle>
            <p className="text-muted-foreground">
              Supporting the global transition to carbon-free steel production
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div data-testid="stat-green-co2">
                <div className="text-3xl font-bold text-sustainability-green mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Carbon-Free Process</div>
              </div>
              <div data-testid="stat-green-efficiency">
                <div className="text-3xl font-bold text-sustainability-green mb-2">50%</div>
                <div className="text-sm text-muted-foreground">Energy Reduction</div>
              </div>
              <div data-testid="stat-green-adoption">
                <div className="text-3xl font-bold text-sustainability-green mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Partner Companies</div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-white/50 rounded-lg">
              <p className="text-center text-muted-foreground italic">
                "Our AF Series products are enabling steel manufacturers worldwide to achieve their 
                sustainability goals while maintaining operational efficiency and cost-effectiveness."
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Environmental Impact Numbers */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div data-testid="stat-env-water">
            <div className="text-3xl font-bold text-sustainability-green">2M+</div>
            <div className="text-sm text-muted-foreground">Liters Water Saved</div>
          </div>
          <div data-testid="stat-env-co2">
            <div className="text-3xl font-bold text-sustainability-green">50K+</div>
            <div className="text-sm text-muted-foreground">Tonnes CO₂ Avoided</div>
          </div>
          <div data-testid="stat-env-waste">
            <div className="text-3xl font-bold text-sustainability-green">80%</div>
            <div className="text-sm text-muted-foreground">Waste Reduction</div>
          </div>
          <div data-testid="stat-env-efficiency">
            <div className="text-3xl font-bold text-sustainability-green">45%</div>
            <div className="text-sm text-muted-foreground">Energy Efficiency Gain</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;