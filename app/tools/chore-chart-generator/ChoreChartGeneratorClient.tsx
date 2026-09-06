"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  Copy,
  Users,
  CheckSquare,
  RefreshCw,
  BookOpen,
} from "lucide-react";

interface ChorePreset {
  id: string;
  name: string;
  cadence: "Daily" | "Weekly" | "Monthly";
  zone: string;
}

const BASE_CHORES: ChorePreset[] = [
  { id: "dishes", name: "Dishwasher & Sink Reset", cadence: "Daily", zone: "Kitchen" },
  { id: "counters", name: "Wipe Countertops & Dining Table", cadence: "Daily", zone: "Kitchen" },
  { id: "trash", name: "Trash & Recycling Bin Cycle", cadence: "Daily", zone: "Whole Home" },
  { id: "vacuum", name: "Vacuum Living Room & Hallways", cadence: "Weekly", zone: "Living Area" },
  { id: "bathrooms", name: "Deep Clean Sinks, Toilets & Mirrors", cadence: "Weekly", zone: "Bathrooms" },
  { id: "mop", name: "Mop Hardwood & Tile Floors", cadence: "Weekly", zone: "Whole Home" },
  { id: "sheets", name: "Wash Bedding & Pillowcases", cadence: "Weekly", zone: "Bedrooms" },
  { id: "fridge", name: "Clean Refrigerator Shelves & Expired Items", cadence: "Monthly", zone: "Kitchen" },
  { id: "filters", name: "Replace Air Filters & Dust Vents", cadence: "Monthly", zone: "HVAC" },
];

export default function ChoreChartGeneratorClient() {
  const [householdType, setHouseholdType] = useState<"couple" | "family" | "roommates">("couple");
  const [members, setMembers] = useState<string[]>(["Partner 1", "Partner 2"]);
  const [selectedChores, setSelectedChores] = useState<string[]>(
    BASE_CHORES.map((c) => c.id)
  );
  const [copied, setCopied] = useState(false);

  const handleHouseholdChange = (type: "couple" | "family" | "roommates") => {
    setHouseholdType(type);
    if (type === "couple") {
      setMembers(["Partner 1", "Partner 2"]);
    } else if (type === "family") {
      setMembers(["Parent 1", "Parent 2", "Kid 1", "Kid 2"]);
    } else {
      setMembers(["Roommate 1", "Roommate 2", "Roommate 3"]);
    }
  };

  const toggleChore = (id: string) => {
    setSelectedChores((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getAssignedSchedule = () => {
    const active = BASE_CHORES.filter((c) => selectedChores.includes(c.id));
    return active.map((chore, index) => {
      const assignedTo = members[index % members.length] || "Unassigned";
      return {
        ...chore,
        assignedTo,
      };
    });
  };

  const copySchedule = () => {
    const schedule = getAssignedSchedule();
    let text = `Chores Nest Household Schedule (${householdType.toUpperCase()})\n\n`;

    const grouped: Record<string, typeof schedule> = {
      Daily: schedule.filter((s) => s.cadence === "Daily"),
      Weekly: schedule.filter((s) => s.cadence === "Weekly"),
      Monthly: schedule.filter((s) => s.cadence === "Monthly"),
    };

    Object.entries(grouped).forEach(([cadence, list]) => {
      if (list.length > 0) {
        text += `[ ${cadence.toUpperCase()} ROUTINES ]\n`;
        list.forEach((item) => {
          text += `- ${item.name} (${item.zone}) -> Assigned to: ${item.assignedTo}\n`;
        });
        text += "\n";
      }
    });

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const schedule = getAssignedSchedule();

  return (
    <div className="max-w-[1050px] mx-auto">
      {/* Header */}
      <div className="text-left mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
          <CheckSquare className="w-3.5 h-3.5" /> Free Interactive Tool
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-foreground leading-tight">
          Free Household Chore Chart Generator
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-muted-foreground font-light max-w-3xl leading-relaxed">
          Create a fair, balanced, and sustainable chore schedule for your household in seconds. Customize members, toggle tasks, and eliminate daily nagging.
        </p>
      </div>

      {/* Household Selector */}
      <div className="bg-card border border-border rounded-2xl p-6 sm:p-7 mb-8">
        <label className="block text-sm font-semibold text-foreground mb-3">
          1. Select Your Household Setup
        </label>
        <div className="grid grid-cols-3 gap-3">
          {[
            { id: "couple", label: "Couples (2)" },
            { id: "family", label: "Families (4)" },
            { id: "roommates", label: "Roommates (3)" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => handleHouseholdChange(t.id as any)}
              className={`py-3 px-4 rounded-xl text-sm font-semibold border transition-all text-center ${
                householdType === t.id
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-secondary/40 border-border text-foreground hover:bg-secondary"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chore Customization */}
      <div className="bg-card border border-border rounded-2xl p-6 sm:p-7 mb-8">
        <label className="block text-sm font-semibold text-foreground mb-3">
          2. Toggle Household Tasks Included
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {BASE_CHORES.map((c) => {
            const isSelected = selectedChores.includes(c.id);
            return (
              <button
                key={c.id}
                onClick={() => toggleChore(c.id)}
                className={`flex items-start gap-2.5 p-3.5 rounded-xl border text-left text-xs transition-all ${
                  isSelected
                    ? "bg-primary/5 border-primary/40 text-foreground"
                    : "bg-secondary/20 border-border text-muted-foreground opacity-60"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center text-xs shrink-0 ${
                    isSelected ? "bg-primary text-white" : "border border-border"
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3" />}
                </div>
                <div>
                  <span className="font-semibold block text-sm">{c.name}</span>
                  <span className="text-muted-foreground">
                    {c.cadence} • {c.zone}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Generated Schedule Output */}
      <div className="bg-secondary/40 border border-border rounded-2xl p-6 sm:p-8 mb-16">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-border pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
              Generated Fair Schedule
            </h2>
            <p className="text-xs text-muted-foreground font-light mt-1">
              Distributed evenly across {members.length} members
            </p>
          </div>
          <button
            onClick={copySchedule}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all text-sm shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" /> Copied Schedule!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" /> Copy Schedule
              </>
            )}
          </button>
        </div>

        <div className="space-y-4">
          {schedule.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-card border border-border text-sm"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-secondary text-primary">
                  {item.cadence}
                </span>
                <span className="font-semibold text-foreground">{item.name}</span>
                <span className="text-xs text-muted-foreground">({item.zone})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Assigned to:</span>
                <span className="text-xs font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                  {item.assignedTo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep Dive Articles Linking */}
      <div className="bg-secondary/30 border border-border rounded-2xl p-8 mb-16">
        <h2 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" /> Recommended Chore Guides
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/blog/a-chore-chart-that-doesnt-feel-like-more-work"
            className="p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors"
          >
            <span className="text-xs font-semibold text-primary block mb-1">Chore Strategy</span>
            <span className="text-sm font-bold text-foreground block mb-1">
              A Chore Chart That Does Not Feel Like More Work
            </span>
            <span className="text-xs text-muted-foreground font-light">
              Why paper chore charts get abandoned and how to build lasting household routines.
            </span>
          </Link>
          <Link
            href="/blog/how-do-couples-fairly-split-household-chores"
            className="p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors"
          >
            <span className="text-xs font-semibold text-primary block mb-1">Relationship Advice</span>
            <span className="text-sm font-bold text-foreground block mb-1">
              How Couples Can Fairly Split Household Chores Without Resentment
            </span>
            <span className="text-xs text-muted-foreground font-light">
              Practical techniques to balance the mental load and divide chores seamlessly.
            </span>
          </Link>
        </div>
      </div>

      {/* App CTA */}
      <div className="text-center rounded-2xl border border-border bg-secondary/50 p-8 sm:p-10">
        <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
          Automate recurring chores on your phone
        </h3>
        <p className="text-muted-foreground font-light text-sm max-w-md mx-auto mb-6">
          Chores Nest rotates responsibilities, sends automatic notifications, and tracks completion with zero nagging.
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
