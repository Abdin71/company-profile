import Image from 'next/image';

interface SectionProps {
  id: string;
}

export function AboutSection({ id }: SectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
         <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl order-last md:order-first">
           <Image
             src="https://picsum.photos/seed/teamwork/800/800"
             alt="Diverse team collaborating"
             layout="fill"
             objectFit="cover"
           />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Optitech</h2>
          <p className="text-lg text-muted-foreground">
            Founded in 2010, Optitech has been at the forefront of technological innovation, helping businesses navigate the complexities of the digital landscape. Our mission is to empower organizations with smart, efficient, and secure technology solutions.
          </p>
          <p className="text-muted-foreground">
            Our team of experts brings years of experience across various domains, including artificial intelligence, cloud computing, and cybersecurity. We believe in building strong partnerships with our clients, understanding their unique challenges, and delivering tailored solutions that drive tangible results.
          </p>
           <ul className="space-y-2 text-muted-foreground">
             <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span>Commitment to Innovation</span>
             </li>
             <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                <span>Client-Centric Approach</span>
             </li>
             <li className="flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                <span>Focus on Results</span>
             </li>
           </ul>
        </div>
      </div>
    </section>
  );
}
