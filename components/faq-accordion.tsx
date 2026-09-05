"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FaqItem = {
  q: string;
  a: string;
};

const FaqAccordion = ({ items }: { items: FaqItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {items.map((faq, index) => (
        <div key={faq.q} className="border border-border bg-card overflow-hidden rounded-xl">
          <button
            type="button"
            onClick={() => setOpenIndex((current) => (current === index ? null : index))}
            className="w-full flex items-center justify-between p-5 text-left"
          >
            <span className="font-heading font-light text-foreground text-sm">{faq.q}</span>
            <ChevronDown
              className={`h-4 w-4 text-muted-foreground transition-transform ${openIndex === index ? "rotate-180" : ""}`}
            />
          </button>
          {openIndex === index && (
            <div className="px-5 pb-5">
              <p className="text-sm text-muted-foreground leading-relaxed font-light">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
