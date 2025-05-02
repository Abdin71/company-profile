import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface SectionProps {
  id: string;
}

export function HomeSection({ id }: SectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Welcome to Optitech Solutions
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Innovative technology solutions tailored for your business needs. Enhance efficiency, drive growth, and stay ahead of the curve with Optitech.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg hover:opacity-90 transition-opacity">
              <Link href="#services">Explore Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl opacity-75 border-4 border-blue-400">
           <Image
             src="https://picsum.photos/id/893/1280/720"
             alt="Modern technology abstract"
             layout="fill"
             objectFit="cover"
             priority
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
