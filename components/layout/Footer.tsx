import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
            <Image
              src="/app_icon.png"
              alt="Chores Nest"
              width={72}
              height={72}
              className="h-18 w-18 object-contain"
            />
              <span className="text-lg font-heading font-light text-foreground tracking-tight">Chores Nest</span>
            </div>
            <p className="text-sm text-muted-foreground font-light">Organize family life, together.</p>
            <div className="flex items-center gap-1 mt-4 text-sm text-muted-foreground font-light">
              Made with <Heart className="h-3.5 w-3.5 text-destructive fill-destructive" /> for families
            </div>
          </div>

          <div>
            <h3 className="text-sm font-heading font-light text-foreground mb-4 uppercase tracking-widest">Product</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/features" className="text-sm text-muted-foreground font-light hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground font-light hover:text-primary transition-colors">
                  Blog &amp; Guides
                </Link>
              </li>
              <li>
                <Link href="/for-couples" className="text-sm text-muted-foreground font-light hover:text-primary transition-colors">
                  For Couples
                </Link>
              </li>
              <li>
                <Link href="/for-families" className="text-sm text-muted-foreground font-light hover:text-primary transition-colors">
                  For Families
                </Link>
              </li>
              <li>
                <Link href="/for-roommates" className="text-sm text-muted-foreground font-light hover:text-primary transition-colors">
                  For Roommates
                </Link>
              </li>
              <li>
                <Link href="/tools/grocery-list-maker" className="text-sm text-muted-foreground font-light hover:text-primary transition-colors">
                  Free Grocery List Tool
                </Link>
              </li>
              <li>
                <Link href="/tools/chore-chart-generator" className="text-sm text-muted-foreground font-light hover:text-primary transition-colors">
                  Free Chore Generator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-heading font-light text-foreground mb-4 uppercase tracking-widest">Company</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground font-light hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-muted-foreground font-light hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="text-sm text-muted-foreground font-light hover:text-primary transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/community-guidelines" className="text-sm text-muted-foreground font-light hover:text-primary transition-colors">
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link href="/delete-account" className="text-sm text-muted-foreground font-light hover:text-primary transition-colors">
                  Delete Account
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-heading font-light text-foreground mb-4 uppercase tracking-widest">Contact</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:support@choresnest.com" className="text-sm text-muted-foreground font-light hover:text-primary transition-colors">
                  support@choresnest.com
                </a>
              </li>
              <li>
                <span className="text-sm text-muted-foreground font-light">choresnest.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t text-center">
          <p className="text-xs text-muted-foreground font-light">&copy; {new Date().getFullYear()} Chores Nest. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
