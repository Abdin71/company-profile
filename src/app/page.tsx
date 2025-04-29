import { HomeSection } from '@/components/sections/home-section';
import { ServicesSection } from '@/components/sections/services-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Separator } from '@/components/ui/separator';
// Remove BotpressChat import from here if it's in the layout

export default function Home() {
  return (
    <>
      <HomeSection id="home" />
      <Separator />
      <ServicesSection id="services" />
      <Separator />
      <TestimonialsSection id="testimonials" />
      <Separator />
      <AboutSection id='about' />
      <Separator />
      <ContactSection id="contact" />
      {/* BotpressChat component is rendered in the layout */}
    </>
  );
}
