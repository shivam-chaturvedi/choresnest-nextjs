"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface DropdownItem {
  label: string;
  to: string;
  description?: string;
}

interface NavItem {
  label: string;
  to: string;
  children?: DropdownItem[];
}

const navItems: NavItem[] = [
  {
    label: "Features",
    to: "/features",
    children: [
      { label: "Overview", to: "/features", description: "All-in-one family workspace" },
      { label: "Family Calendar", to: "/features/calendar", description: "Shared color-coded schedules" },
      { label: "Tasks & Chores", to: "/features/tasks", description: "Recurring chore assignments" },
      { label: "Shopping Lists", to: "/features/lists", description: "Live-synced categorized lists" },
      { label: "Vault & Documents", to: "/features/vault", description: "Encrypted family storage" },
      { label: "Finance Tracker", to: "/features/finance", description: "Household budgets and expenses" },
      { label: "Notes & Journals", to: "/features/notes", description: "Shared notes and memories" },
    ],
  },
  {
    label: "Solutions",
    to: "/for-couples",
    children: [
      { label: "For Couples", to: "/for-couples", description: "Shared chores, groceries & finances" },
      { label: "For Families", to: "/for-families", description: "Kid routines, school schedules & vault" },
      { label: "For Roommates", to: "/for-roommates", description: "Rotations, communal supplies & splits" },
    ],
  },
  {
    label: "Tools",
    to: "/tools/grocery-list-maker",
    children: [
      { label: "Grocery List Maker", to: "/tools/grocery-list-maker", description: "Free interactive list generator" },
      { label: "Chore Chart Generator", to: "/tools/chore-chart-generator", description: "Free fair schedule creator" },
    ],
  },
  {
    label: "Blog",
    to: "/blog",
  },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Our Mission", to: "/about", description: "Why we built Chores Nest" },
      { label: "How It Works", to: "/how-it-works", description: "Architecture and sync system" },
      { label: "Privacy First Design", to: "/privacy-policy", description: "Your family data ownership" },
      { label: "Community Guidelines", to: "/community-guidelines", description: "Respectful family collaboration" },
      { label: "Contact Support", to: "/support", description: "Get in touch with our team" },
    ],
  },
];

const DesktopDropdown = ({ item, isActive }: { item: NavItem; isActive: boolean }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (timeout.current) clearTimeout(timeout.current);
    if (item.children) setOpen(true);
  };

  const handleLeave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => () => clearTimeout(timeout.current ?? undefined), []);

  if (!item.children) {
    return (
      <Link
        href={item.to}
        className={`flex items-center text-[15px] font-medium transition-colors px-3.5 py-2 rounded-lg hover:text-foreground ${
          isActive ? "text-primary font-semibold" : "text-muted-foreground"
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Link
        href={item.to}
        className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors px-3.5 py-2 rounded-lg hover:text-foreground ${
          isActive ? "text-primary font-semibold" : "text-muted-foreground"
        }`}
      >
        {item.label}
        <ChevronDown
          className={`h-3.5 w-3.5 opacity-70 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </Link>
      {open && item.children && (
        <div className="absolute left-0 top-full z-50 mt-1.5 min-w-[270px] rounded-2xl border border-slate-200 bg-white p-2.5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
          {item.children.map((child) => (
            <Link
              key={child.to}
              href={child.to}
              className="group block px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <div className="text-sm font-semibold text-slate-900 group-hover:text-primary transition-colors">
                {child.label}
              </div>
              {child.description && (
                <div className="text-xs text-slate-500 font-normal line-clamp-1 mt-0.5">
                  {child.description}
                </div>
              )}
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
    <header className="sticky top-0 z-50 border-b border-border bg-white shadow-xs">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/app_icon.png"
            alt="Chores Nest"
            width={52}
            height={52}
            className="h-12 w-12 object-contain"
            priority
          />
          <span className="text-xl font-heading font-bold text-foreground tracking-tight">
            Chores Nest
          </span>
        </Link>

        {/* Clean, Uncluttered Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5 ml-auto mr-4">
          {navItems.map((item) => {
            const isActive =
              pathname === item.to ||
              (item.children && item.children.some((child) => child.to === pathname));

            return <DesktopDropdown key={item.label} item={item} isActive={Boolean(isActive)} />;
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="https://play.google.com/store/apps/details?id=com.choresnest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-[#01875f] hover:bg-[#01996d] text-white font-bold rounded-xl shadow-[0_4px_0_0_#016848,0_10px_15px_-3px_rgba(1,135,95,0.4)] hover:-translate-y-0.5 transition-all text-sm"
          >
            Try Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-foreground rounded-lg hover:bg-secondary"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white shadow-xl">
          <nav className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 py-4 flex flex-col gap-1 bg-white">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-border/50 pb-1 mb-1 last:border-b-0">
                <div className="flex items-center justify-between py-2.5 px-3">
                  <Link
                    href={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="text-base font-semibold text-foreground hover:text-primary"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() =>
                        setMobileExpanded((current) => (current === item.label ? null : item.label))
                      }
                      aria-expanded={mobileExpanded === item.label}
                      className="p-1.5 text-muted-foreground hover:text-foreground"
                      type="button"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          mobileExpanded === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.children && mobileExpanded === item.label && (
                  <div className="pl-4 pb-2 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        href={child.to}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-lg"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 pb-2">
              <Link
                href="https://play.google.com/store/apps/details?id=com.choresnest"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center py-3 bg-[#01875f] text-white font-bold rounded-xl"
              >
                Try Chores Nest Free
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
