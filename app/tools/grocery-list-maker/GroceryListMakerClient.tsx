"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  Copy,
  Plus,
  Trash2,
  Sparkles,
  ShoppingBag,
  ArrowRight,
  BookOpen,
} from "lucide-react";

interface CategoryGroup {
  id: string;
  name: string;
  defaultItems: string[];
}

const DEFAULT_CATEGORIES: CategoryGroup[] = [
  {
    id: "produce",
    name: "Fresh Produce",
    defaultItems: [
      "Bananas",
      "Baby Spinach",
      "Avocados",
      "Garlic & Onions",
      "Bell Peppers",
      "Lemons",
    ],
  },
  {
    id: "dairy",
    name: "Dairy & Refrigerated",
    defaultItems: ["Whole Milk / Oat Milk", "Greek Yogurt", "Eggs", "Block Cheddar", "Butter"],
  },
  {
    id: "pantry",
    name: "Pantry & Grains",
    defaultItems: [
      "Extra Virgin Olive Oil",
      "Rolled Oats",
      "Brown Rice / Quinoa",
      "Pasta",
      "Canned Crushed Tomatoes",
      "Coffee Beans",
    ],
  },
  {
    id: "proteins",
    name: "Proteins & Deli",
    defaultItems: ["Organic Tofu", "Black Beans", "Chickpeas", "Salmon / Turkey", "Whole Grain Bread"],
  },
  {
    id: "household",
    name: "Household & Cleaning",
    defaultItems: ["Dish Soap", "Paper Towels", "Trash Bags", "Laundry Pods"],
  },
];

export default function GroceryListMakerClient() {
  const [items, setItems] = useState<Record<string, string[]>>(() => {
    const initial: Record<string, string[]> = {};
    DEFAULT_CATEGORIES.forEach((cat) => {
      initial[cat.id] = [...cat.defaultItems];
    });
    return initial;
  });

  const [newInputs, setNewInputs] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  const addItem = (categoryId: string) => {
    const text = (newInputs[categoryId] || "").trim();
    if (!text) return;
    setItems((prev) => ({
      ...prev,
      [categoryId]: [...(prev[categoryId] || []), text],
    }));
    setNewInputs((prev) => ({ ...prev, [categoryId]: "" }));
  };

  const removeItem = (categoryId: string, index: number) => {
    setItems((prev) => ({
      ...prev,
      [categoryId]: prev[categoryId].filter((_, i) => i !== index),
    }));
  };

  const copyFormattedList = () => {
    let output = "Chores Nest Weekly Grocery List\n\n";
    DEFAULT_CATEGORIES.forEach((cat) => {
      const list = items[cat.id] || [];
      if (list.length > 0) {
        output += `[ ${cat.name} ]\n`;
        list.forEach((item) => {
          output += `- [ ] ${item}\n`;
        });
        output += "\n";
      }
    });

    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="max-w-[1050px] mx-auto">
      {/* Header */}
      <div className="text-left mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
          <ShoppingBag className="w-3.5 h-3.5" /> Free Interactive Tool
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-foreground leading-tight">
          Free Grocery List Maker &amp; Template Generator
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-muted-foreground font-light max-w-3xl leading-relaxed">
          Customize your grocery template organized by supermarket aisles. Add your household staples, delete what you do not need, and copy or sync your list instantly.
        </p>
      </div>

      {/* Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-secondary/50 border border-border rounded-xl p-4 sm:p-5 mb-8">
        <span className="text-sm font-medium text-foreground">
          Organized into {DEFAULT_CATEGORIES.length} supermarket departments
        </span>
        <button
          onClick={copyFormattedList}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all text-sm shadow-sm"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" /> Copied to Clipboard!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" /> Copy Formatted List
            </>
          )}
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {DEFAULT_CATEGORIES.map((cat) => {
          const catItems = items[cat.id] || [];
          return (
            <div
              key={cat.id}
              className="bg-card border border-border rounded-xl p-5 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-heading font-bold text-foreground border-b border-border pb-2.5 mb-3 flex items-center justify-between">
                  <span>{cat.name}</span>
                  <span className="text-xs font-normal text-muted-foreground">
                    {catItems.length} items
                  </span>
                </h3>

                <ul className="space-y-2 mb-4">
                  {catItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="group flex items-center justify-between py-1 px-2 rounded-md hover:bg-secondary/40 text-sm text-foreground transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary/40" />
                        {item}
                      </span>
                      <button
                        onClick={() => removeItem(cat.id, idx)}
                        className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition-opacity p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Add item input */}
              <div className="flex gap-2 mt-2 pt-2 border-t border-border/60">
                <input
                  type="text"
                  placeholder="Add item..."
                  value={newInputs[cat.id] || ""}
                  onChange={(e) =>
                    setNewInputs((prev) => ({ ...prev, [cat.id]: e.target.value }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addItem(cat.id);
                    }
                  }}
                  className="flex-1 bg-secondary/40 border border-border rounded-lg px-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                  onClick={() => addItem(cat.id)}
                  className="px-3 py-1.5 bg-secondary hover:bg-secondary/80 text-foreground font-medium rounded-lg text-xs transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Deep Dive Articles Linking */}
      <div className="bg-secondary/30 border border-border rounded-2xl p-8 mb-16">
        <h2 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" /> Learn the Science of Grocery Shopping
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/blog/the-grocery-list-that-actually-makes-weekly-shopping-easier"
            className="p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors"
          >
            <span className="text-xs font-semibold text-primary block mb-1">In-Depth Guide</span>
            <span className="text-sm font-bold text-foreground block mb-1">
              The Grocery List That Actually Makes Weekly Shopping Easier
            </span>
            <span className="text-xs text-muted-foreground font-light">
              Read how a structured routine prevents duplicate buying and saves hours.
            </span>
          </Link>
          <Link
            href="/blog/a-simple-grocery-list-template-for-stress-free-shopping"
            className="p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors"
          >
            <span className="text-xs font-semibold text-primary block mb-1">Template Strategy</span>
            <span className="text-sm font-bold text-foreground block mb-1">
              A Simple Grocery List Template for Stress-Free Shopping
            </span>
            <span className="text-xs text-muted-foreground font-light">
              Learn how the 5-zone supermarket framework cuts shopping time in half.
            </span>
          </Link>
        </div>
      </div>

      {/* App CTA */}
      <div className="text-center rounded-2xl border border-border bg-secondary/50 p-8 sm:p-10">
        <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
          Need real-time live sync with your household?
        </h3>
        <p className="text-muted-foreground font-light text-sm max-w-md mx-auto mb-6">
          Chores Nest lets everyone in your home add, check off, and organize grocery items simultaneously from Android.
        </p>
        <Link
          href="https://play.google.com/store/apps/details?id=com.choresnest"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 bg-[#01875f] hover:bg-[#01996d] text-white font-bold rounded-xl shadow-[0_4px_0_0_#016848] transition-all text-sm"
        >
          Get Chores Nest for Android →
        </Link>
      </div>
    </div>
  );
}
