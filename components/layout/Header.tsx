"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface DropdownItem {
  label: string;
  to: string;
}

interface NavItem {
  label: string;
  to: string;
  children?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Features",
    to: "/features",
    children: [
      { label: "Overview", to: "/features" },
      { label: "Family Calendar", to: "/features/calendar" },
      { label: "Tasks & Chores", to: "/features/tasks" },
      { label: "Shopping Lists", to: "/features/lists" },
      { label: "Vault & Documents", to: "/features/vault" },
      { label: "Finance Tracker", to: "/features/finance" },
      { label: "Notes & Journals", to: "/features/notes" },
    ],
  },
  { label: "Getting Started", to: "/getting-started" },
  {
    label: "Support",
    to: "/support",
    children: [
      { label: "Help Center", to: "/help" },
      { label: "FAQ", to: "/faq" },
      { label: "Getting Started", to: "/getting-started" },
      { label: "Contact Support", to: "/support" },
    ],
  },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Our Mission", to: "/about" },
      { label: "How It Works", to: "/how-it-works" },
      { label: "Privacy First Design", to: "/privacy-policy" },
      { label: "Community Guidelines", to: "/community-guidelines" },
    ],
  },
];

const DesktopDropdown = ({ item, isActive }: { item: NavItem; isActive: boolean }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setOpen(true);
  };

  const handleLeave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => () => clearTimeout(timeout.current ?? undefined), []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Link
        href={item.to}
        className={`flex items-center gap-1 text-base font-light transition px-2 ${
          isActive ? "text-primary" : "text-muted-foreground"
        }`}
      >
        {item.label}
        <ChevronDown
          className={`h-3 w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </Link>
      {open && item.children && (
        <div className="absolute right-0 top-full z-50 mt-1 min-w-[220px] rounded-2xl border border-border bg-white p-2 shadow-[0_20px_45px_rgba(15,23,42,0.15)]">
          {item.children.map((child) => (
            <Link
              key={child.to}
              href={child.to}
              className="block px-5 py-2.5 text-sm font-light text-muted-foreground hover:text-primary transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const pathname = usePathname() ?? "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/app_icon.png"
            alt="Chores Nest"
            width={72}
            height={72}
            className="h-18 w-18 object-contain"
          />
          <span className="text-xl font-heading font-light text-foreground tracking-tight">Chores Nest</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-4 ml-auto">
          {navItems.map((item) => {
            if (!item.children) {
              const isActive = pathname === item.to;
              return (
                <Link
                  key={item.label}
                  href={item.to}
                  className={`px-4 py-2 text-base font-light transition-colors ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            const isActive = pathname === item.to || item.children.some((child) => child.to === pathname);

            return <DesktopDropdown key={item.label} item={item} isActive={isActive} />;
          })}
        </nav>

        <div className="hidden lg:flex items-center ml-4">
          <Link
            href="https://play.google.com/store/apps/details?id=com.choresnest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-[#01875f] hover:bg-[#01996d] text-white font-bold rounded-xl shadow-[0_4px_0_0_#016848,0_10px_15px_-3px_rgba(1,135,95,0.4)] hover:-translate-y-1 hover:shadow-[0_6px_0_0_#016848,0_15px_20px_-3px_rgba(1,135,95,0.5)] active:translate-y-1 active:shadow-[0_0px_0_0_#016848,0_5px_10px_-3px_rgba(1,135,95,0.4)] transition-all text-sm"
          >
            Try Now
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col py-4 gap-1 bg-white">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <div className="flex items-center justify-between px-3 py-3">
                      <Link
                        href={item.to}
                        onClick={() => setMobileOpen(false)}
                        className="text-base font-light text-muted-foreground hover:text-primary"
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={() => setMobileExpanded((current) => (current === item.label ? null : item.label))}
                        aria-expanded={mobileExpanded === item.label}
                        className="p-2 text-muted-foreground hover:text-primary"
                        type="button"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                    {mobileExpanded === item.label && (
                      <div className="pl-4 pb-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.to}
                            href={child.to}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 text-sm font-light text-muted-foreground hover:text-primary"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-3 text-base font-light text-muted-foreground hover:text-primary"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
