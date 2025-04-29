import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-6 mt-auto border-t">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} Optitech. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#contact" className="hover:text-foreground transition-colors">Contact Us</Link>
          {/* Add other footer links if needed */}
        </div>
      </div>
    </footer>
  );
}
