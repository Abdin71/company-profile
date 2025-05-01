"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Clock } from 'lucide-react';

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      let currentSection = 'home';
      navLinks.forEach(link => {
        const sectionId = link.href.substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the section is mostly in view
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderNavLinks = (isMobile = false) => navLinks.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className={`transition-colors hover:text-blue-500 ${activeSection === link.href.substring(1) ? 'text-blue-500 font-semibold' : 'text-foreground/80'} ${isMobile ? 'block py-2 text-lg' : 'text-sm font-medium'}`}
      onClick={(e) => {
         // Close mobile menu if open
         if (isMobile) {
            const closeButton = document.querySelector('[data-radix-dialog-close]');
            if (closeButton instanceof HTMLElement) {
               closeButton.click();
            }
         }
      }}
    >
      {link.label.toUpperCase()}
    </Link>
  ));

  return (
    <header className={`sticky top-0 z-50 w-full border-b backdrop-blur transition-all duration-300 ${isScrolled ? 'bg-background/90 shadow-md' : 'bg-background'}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor: 'hsl(var(--secondary))', stopOpacity:1}} />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#grad1)" />
            <text x="50" y="62" fontFamily="Arial, sans-serif" fontSize="40" fill="hsl(var(--primary-foreground))" textAnchor="middle" fontWeight="bold">O</text>
          </svg>
          <span className="text-lg font-bold text-primary">Optitech</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {renderNavLinks()}

        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
             <div className="flex flex-col h-full">
               <div className="flex items-center justify-between p-4 border-b">
                  <Link href="#home" className="flex items-center gap-2">
                    <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                       <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity:1}} />
                          <stop offset="100%" style={{stopColor: 'hsl(var(--secondary))', stopOpacity:1}} />
                        </linearGradient>
                      </defs>
                      <circle cx="50" cy="50" r="45" fill="url(#grad1)" />
                      <text x="50" y="62" fontFamily="Arial, sans-serif" fontSize="40" fill="hsl(var(--primary-foreground))" textAnchor="middle" fontWeight="bold">O</text>
                    </svg>
                    <span className="text-lg font-bold text-primary">Optitech</span>
                  </Link>
                  {/* Close button is part of SheetContent */}
               </div>
               <nav className="flex flex-col gap-4 p-4">
                 {renderNavLinks(true)}
               </nav>
             </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
