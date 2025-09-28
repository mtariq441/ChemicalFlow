import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Globe, Truck, Users } from 'lucide-react';

const GlobalReachSection = () => {
  const facilities = [
    {
      region: "Europe",
      locations: ["Switzerland (HQ)", "Germany", "Netherlands"],
      icon: "🇪🇺",
      established: "2010"
    },
    {
      region: "Latin America",
      locations: ["Brazil", "Argentina", "Mexico"],
      icon: "🌎",
      established: "2015"
    },
    {
      region: "Africa",
      locations: ["South Africa", "Morocco", "Nigeria"],
      icon: "🌍",
      established: "2018"
    },
    {
      region: "Asia",
      locations: ["India", "China", "Japan"],
      icon: "🌏",
      established: "2020"
    }
  ];

  const capabilities = [
    {
      icon: <Globe className="h-8 w-8 text-industrial-blue" />,
      title: "Global Network",
      description: "Strategically located facilities ensure reliable supply chains",
      stat: "4 Continents"
    },
    {
      icon: <Truck className="h-8 w-8 text-sustainability-green" />,
      title: "Logistics Excellence",
      description: "Cost-effective delivery solutions adapted to local markets",
      stat: "30+ Countries"
    },
    {
      icon: <Users className="h-8 w-8 text-alert-orange" />,
      title: "Local Expertise",
      description: "Regional teams with deep market knowledge and support",
      stat: "500+ Employees"
    },
    {
      icon: <MapPin className="h-8 w-8 text-steel-grey" />,
      title: "Market Presence",
      description: "Active operations across diverse industrial markets",
      stat: "200+ Clients"
    }
  ];

  return (
    <section id="global-reach" className="py-20 bg-muted/30" data-testid="section-global-reach">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-industrial-blue border-industrial-blue">
            Global Operations
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-global-title">
            Global Reach & Logistics
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-global-subtitle">
            Flexible, cost-effective solutions delivered worldwide through our strategic network of facilities
          </p>
        </div>

        {/* World Map Visualization */}
        <Card className="mb-16 bg-gradient-to-r from-industrial-blue/5 to-sustainability-green/5" data-testid="card-world-map">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-foreground">
              Our Global Facilities
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Simplified World Map Representation */}
            <div className="relative h-64 bg-muted/20 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl md:text-8xl text-muted-foreground/30">🌍</div>
              </div>
              
              {/* Regional Markers */}
              <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-industrial-blue rounded-full animate-pulse"></div>
                  <span className="text-xs text-muted-foreground mt-1 hidden md:block">Europe</span>
                </div>
              </div>
              
              <div className="absolute top-3/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-sustainability-green rounded-full animate-pulse"></div>
                  <span className="text-xs text-muted-foreground mt-1 hidden md:block">Latin America</span>
                </div>
              </div>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-alert-orange rounded-full animate-pulse"></div>
                  <span className="text-xs text-muted-foreground mt-1 hidden md:block">Africa</span>
                </div>
              </div>
              
              <div className="absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-steel-grey rounded-full animate-pulse"></div>
                  <span className="text-xs text-muted-foreground mt-1 hidden md:block">Asia</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                Click on any region to learn more about our local operations and capabilities
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Regional Facilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <Card 
              key={index}
              className="hover-elevate transition-all duration-300 text-center"
              data-testid={`card-facility-${index}`}
            >
              <CardHeader className="pb-4">
                <div className="text-4xl mb-2">{facility.icon}</div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {facility.region}
                </CardTitle>
                <Badge variant="secondary" className="text-xs">
                  Est. {facility.established}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {facility.locations.map((location, locationIndex) => (
                    <div 
                      key={locationIndex}
                      className="text-sm text-muted-foreground flex items-center justify-center gap-1"
                    >
                      <MapPin className="h-3 w-3" />
                      {location}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <Card 
              key={index}
              className="hover-elevate transition-all duration-300 text-center border-border"
              data-testid={`card-capability-${index}`}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-muted/20 rounded-full">
                    {capability.icon}
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {capability.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
                <div className="text-2xl font-bold text-industrial-blue">
                  {capability.stat}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div data-testid="stat-global-countries">
            <div className="text-3xl font-bold text-industrial-blue">30+</div>
            <div className="text-sm text-muted-foreground">Countries Served</div>
          </div>
          <div data-testid="stat-global-facilities">
            <div className="text-3xl font-bold text-sustainability-green">12</div>
            <div className="text-sm text-muted-foreground">Production Facilities</div>
          </div>
          <div data-testid="stat-global-shipments">
            <div className="text-3xl font-bold text-alert-orange">500+</div>
            <div className="text-sm text-muted-foreground">Monthly Shipments</div>
          </div>
          <div data-testid="stat-global-experience">
            <div className="text-3xl font-bold text-steel-grey">10+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;