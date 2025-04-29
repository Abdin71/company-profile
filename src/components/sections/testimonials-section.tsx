import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface SectionProps {
  id: string;
}

const testimonials = [
  {
    name: "Alice Johnson",
    title: "CEO, Innovate Corp",
    image: "https://picsum.photos/seed/alice/100/100",
    quote: "Optitech's AI solution revolutionized our workflow. Efficiency is up by 40%! Their team was incredibly supportive throughout the process.",
    rating: 5,
  },
  {
    name: "Bob Williams",
    title: "CTO, Tech Forward",
    image: "https://picsum.photos/seed/bob/100/100",
    quote: "Migrating to the cloud was seamless with Optitech. Their expertise and proactive management have significantly reduced our IT overhead.",
    rating: 5,
  },
  {
    name: "Charlie Brown",
    title: "Head of Security, SecureNet",
    image: "https://picsum.photos/seed/charlie/100/100",
    quote: "The cybersecurity audit from Optitech was thorough and insightful. We feel much more confident in our defenses now.",
    rating: 4,
  },
];

export function TestimonialsSection({ id }: SectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Real feedback from businesses benefiting from Optitech solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-card">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <Avatar className="w-20 h-20 mb-4 border-2 border-primary">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                 <div className="flex mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/50'}`} />
                  ))}
                </div>
                <blockquote className="text-foreground italic mb-4">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
