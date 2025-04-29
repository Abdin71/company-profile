import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CheckCircle, Cpu, Cloud, ShieldCheck } from 'lucide-react';

interface SectionProps {
  id: string;
}

const services = [
  {
    icon: Cpu,
    title: "AI-Powered Solutions",
    description: "Leverage the power of artificial intelligence to automate processes, gain insights, and enhance decision-making.",
    features: ["Custom AI Models", "Process Automation", "Data Analytics"]
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Scalable and secure cloud infrastructure tailored to your needs. Migrate, manage, and optimize your cloud presence.",
    features: ["Cloud Migration", "Managed Services", "Cost Optimization"]
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Services",
    description: "Protect your digital assets with our comprehensive cybersecurity solutions and expert guidance.",
    features: ["Threat Detection", "Vulnerability Assessment", "Security Audits"]
  },
];

export function ServicesSection({ id }: SectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Services</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Delivering cutting-edge technology solutions to drive your business forward.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary/10 overflow-hidden flex flex-col">
               <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10">
                 <div className="flex items-center gap-4">
                   <service.icon className="w-10 h-10 text-primary" />
                   <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                 </div>
               </div>
              <CardContent className="pt-6 flex-grow flex flex-col justify-between">
                <CardDescription className="text-muted-foreground mb-6">{service.description}</CardDescription>
                <ul className="space-y-2 text-sm">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
