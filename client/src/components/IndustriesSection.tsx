import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Factory, Wrench, Diamond, Building2 } from 'lucide-react';
import steelImage from '@assets/generated_images/Stainless_steel_facility_70487b7c.png';
import cementImage from '@assets/generated_images/Cement_production_facility_d56a7a7b.png';
import labImage from '@assets/generated_images/Chemical_laboratory_facility_b258f99f.png';

const IndustriesSection = () => {
  const industries = [
    {
      icon: <Factory className="h-12 w-12 text-steel-grey" />,
      title: "Carbon Steel",
      description: "Desulfurization solutions for carbon steel production with enhanced efficiency and reduced environmental impact.",
      image: steelImage,
      applications: ["Steel Production", "Desulfurization", "Quality Enhancement"]
    },
    {
      icon: <Wrench className="h-12 w-12 text-industrial-blue" />,
      title: "Stainless Steel", 
      description: "Specialized fluoride compounds for stainless steel manufacturing with superior performance characteristics.",
      image: steelImage,
      applications: ["Stainless Production", "Alloy Treatment", "Surface Finishing"]
    },
    {
      icon: <Diamond className="h-12 w-12 text-sustainability-green" />,
      title: "Abrasives",
      description: "High-performance fluoride solutions for abrasive manufacturing and surface treatment applications.",
      image: labImage,
      applications: ["Grinding Wheels", "Cutting Tools", "Surface Treatment"]
    },
    {
      icon: <Building2 className="h-12 w-12 text-alert-orange" />,
      title: "Cement",
      description: "Innovative additives for cement production that improve efficiency and reduce energy consumption.",
      image: cementImage,
      applications: ["Cement Production", "Energy Reduction", "Quality Improvement"]
    }
  ];

  return (
    <section id="industries" className="py-20 bg-muted/30" data-testid="section-industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-industries-title">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-industries-subtitle">
            Our specialized fluoride-based solutions serve critical industrial applications worldwide
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <Card 
              key={index}
              className="hover-elevate transition-all duration-300 group overflow-hidden"
              data-testid={`card-industry-${index}`}
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={industry.image}
                  alt={`${industry.title} facility`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-lg">
                  {industry.icon}
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-foreground">
                  {industry.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {industry.description}
                </p>
                
                {/* Applications */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.applications.map((app, appIndex) => (
                      <span 
                        key={appIndex}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div data-testid="stat-industry-steel">
            <div className="text-3xl font-bold text-industrial-blue">85%</div>
            <div className="text-sm text-muted-foreground">Steel Industry Coverage</div>
          </div>
          <div data-testid="stat-industry-efficiency">
            <div className="text-3xl font-bold text-sustainability-green">40%</div>
            <div className="text-sm text-muted-foreground">Energy Savings</div>
          </div>
          <div data-testid="stat-industry-reduction">
            <div className="text-3xl font-bold text-alert-orange">60%</div>
            <div className="text-sm text-muted-foreground">Cost Reduction</div>
          </div>
          <div data-testid="stat-industry-clients">
            <div className="text-3xl font-bold text-steel-grey">200+</div>
            <div className="text-sm text-muted-foreground">Global Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;