import Link from 'next/link';
import {
  Facebook, // Renamed from FacebookIcon
  Instagram, // Renamed from InstagramIcon
  Linkedin as LinkedInIcon, // Renamed from LinkedInIcon and aliased for consistency
  Twitter, // Renamed from TwitterIcon
  MailIcon,
  MapPinIcon,
  PhoneIcon
} from 'lucide-react'; // Import from lucide-react

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground mt-auto border-t py-8">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-sm">
        {/* Left Section: Logo, Description, Social Media */}
        <div className="flex flex-col space-y-4">
          <Link href="/" className="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor: 'hsl(var(--secondary))', stopOpacity:1}} />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" fill="url(#gradFooter)" />
                <text x="50" y="62" fontFamily="Arial, sans-serif" fontSize="40" fill="hsl(var(--primary-foreground))" textAnchor="middle" fontWeight="bold">O</text>
              </svg>
              <span className="text-lg font-bold text-foreground">Optitech</span>
           </Link>
          <p className="text-sm text-muted-foreground">
            Professional IT services to help identify, implement, and manage
            technology for your business.
          </p>
          {/* Social Media Links */}
          <div className="flex gap-4">
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>

        {/* Middle Section: Quick Links & Services */}
        <div className="grid grid-cols-2 gap-8">
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="#home" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-primary transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services (Simplified) */}
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Services</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">AI Solutions</Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">Cloud Computing</Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">Cybersecurity</Link>
              </li>
              {/* Add more links if needed */}
            </ul>
          </div>
        </div>

        {/* Right Section: Contact Info */}
        <div className="space-y-3">
          <h4 className="font-semibold mb-3 text-foreground">Contact Us</h4>
          <p className="flex items-center gap-2">
            <MailIcon className="w-4 h-4 text-primary flex-shrink-0" />
            <a href="mailto:info@optitech.com" className="hover:text-primary transition-colors">info@optitech.com</a>
          </p>
          <p className="flex items-center gap-2">
            <PhoneIcon className="w-4 h-4 text-primary flex-shrink-0" />
            <span>(512) 555-1234</span>
          </p>
          <p className="flex items-start gap-2"> {/* Changed items-center to items-start */}
            <MapPinIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> {/* Added mt-0.5 for alignment */}
            <span>123 Tech Parkway, Suite 456, Austin, TX 78701</span>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 md:px-6 border-t pt-6 mt-8 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Optitech Solutions. All rights reserved.</p>
      </div>

       {/* Botpress Scripts - Moved client-side rendering to a separate component */}
       {/* These script tags might cause issues in Next.js; consider BotpressChat component */}
      {/* <script src="https://cdn.botpress.cloud/webchat/v2.4/inject.js"></script>
      <script src="https://files.bpcontent.cloud/2025/04/28/10/20250428100413-HN7MUCN6.js"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.botpress.init({
            "botId": ${process.env.NEXT_PUBLIC_BOTPRESS_BOT_ID},
            "hostUrl": "https://cdn.botpress.cloud",
            "messagingUrl": "https://messaging.botpress.cloud",
            "clientId": ${process.env.NEXT_PUBLIC_BOTPRESS_CLIENT_ID},
            "lazySocket": true,
            "themeName": "prism",
            "botName": "OptiAssist",
            "avatarUrl": "/logo.png", // Example avatar URL
            "stylesheet": "https://webchat-styler-css.botpress.app/prod/code/your-css-code", // Replace with your actual stylesheet URL if you have one
            "frontendVersion": "v2.4"
            // Add other configuration options as needed
        });
          `,
        }}
      /> */}
    </footer>
  );
}
