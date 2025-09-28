import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Lightbulb, Globe2, Award, Mail, ArrowRight } from 'lucide-react';

const CareersSection = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-sustainability-green" />,
      title: "Innovation",
      description: "Pioneering sustainable chemical solutions for global industries"
    },
    {
      icon: <Globe2 className="h-8 w-8 text-industrial-blue" />,
      title: "Global Impact",
      description: "Working across continents to shape the future of industry"
    },
    {
      icon: <Users className="h-8 w-8 text-alert-orange" />,
      title: "Collaboration",
      description: "Diverse teams working together towards common sustainability goals"
    },
    {
      icon: <Award className="h-8 w-8 text-steel-grey" />,
      title: "Excellence",
      description: "Committed to the highest standards in everything we do"
    }
  ];

  const openPositions = [
    {
      title: "Chemical Engineer",
      department: "R&D",
      location: "Switzerland",
      type: "Full-time",
      experience: "3-5 years"
    },
    {
      title: "Sales Manager",
      department: "Commercial",
      location: "Germany",
      type: "Full-time", 
      experience: "5+ years"
    },
    {
      title: "Process Engineer",
      department: "Operations",
      location: "Brazil",
      type: "Full-time",
      experience: "2-4 years"
    },
    {
      title: "Sustainability Specialist",
      department: "Environmental",
      location: "India",
      type: "Full-time",
      experience: "4-6 years"
    },
    {
      title: "Quality Assurance Manager",
      department: "Quality",
      location: "South Africa",
      type: "Full-time",
      experience: "6+ years"
    },
    {
      title: "Research Scientist",
      department: "R&D",
      location: "China",
      type: "Full-time",
      experience: "PhD + 2 years"
    }
  ];

  const handleApply = (position: string) => {
    console.log(`Applying for ${position}`);
    // TODO: Implement job application functionality
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="careers" className="py-20 bg-background" data-testid="section-careers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-industrial-blue border-industrial-blue">
            Join Our Team
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-careers-title">
            Join Our Global Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-careers-subtitle">
            Be part of the sustainable chemical innovation that's shaping industries worldwide
          </p>
        </div>

        {/* Company Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="hover-elevate transition-all duration-300 text-center border-border"
              data-testid={`card-value-${index}`}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-muted/20 rounded-full">
                    {value.icon}
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Join Us */}
        <Card className="mb-16 bg-gradient-to-r from-industrial-blue/5 to-sustainability-green/5 border-industrial-blue/20" data-testid="card-why-join">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-foreground">
              Why Choose AF Chemicals?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-sustainability-green mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Years of Growth</div>
                <p className="text-xs text-muted-foreground mt-2">
                  Continuous expansion and innovation
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-industrial-blue mb-2">4</div>
                <div className="text-sm text-muted-foreground">Continents</div>
                <p className="text-xs text-muted-foreground mt-2">
                  Global opportunities for career growth
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-alert-orange mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
                <p className="text-xs text-muted-foreground mt-2">
                  Diverse, talented global workforce
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Open Positions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center" data-testid="text-open-positions">
            Current Openings
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openPositions.map((position, index) => (
              <Card 
                key={index}
                className="hover-elevate transition-all duration-300"
                data-testid={`card-position-${index}`}
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {position.department}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {position.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {position.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">Location:</span> {position.location}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">Experience:</span> {position.experience}
                    </div>
                  </div>
                  <Button 
                    size="sm"
                    onClick={() => handleApply(position.title)}
                    className="w-full bg-industrial-blue hover:bg-industrial-blue/90"
                    data-testid={`button-apply-${index}`}
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <Card className="text-center" data-testid="card-careers-contact">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground">
              Don't See Your Perfect Role?
            </CardTitle>
            <p className="text-muted-foreground">
              We're always looking for talented individuals to join our team
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-sustainability-green hover:bg-sustainability-green/90 px-8 py-4 text-lg"
                data-testid="button-contact-careers"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Your CV
              </Button>
              <div className="text-sm text-muted-foreground">
                or email directly to{' '}
                <a 
                  href="mailto:careers@afchemicals.com"
                  className="text-industrial-blue hover:underline"
                  data-testid="link-careers-email"
                >
                  careers@afchemicals.com
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CareersSection;