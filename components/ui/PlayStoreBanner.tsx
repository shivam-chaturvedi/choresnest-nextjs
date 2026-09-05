import Image from "next/image";
import Link from "next/link";

export default function PlayStoreBanner() {
  return (
    <div className="w-full max-w-3xl mx-auto border border-border bg-card rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6 transition-shadow hover:shadow-md">
      <div className="flex-shrink-0">
        <Image
          src="/app_icon.png"
          alt="Chores Nest App Icon"
          width={100}
          height={100}
          className="rounded-2xl shadow-sm"
        />
      </div>
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-2xl font-semibold text-foreground">Chores Nest: Family Organizer</h3>
        <p className="text-muted-foreground mt-1 text-sm">Chores Nest</p>
        <p className="text-sm text-foreground mt-3 leading-relaxed">
          The ultimate shared workspace for families. Sync schedules, track chores, share grocery lists, manage finances, and organize documents all in one secure place.
        </p>
      </div>
      <div className="flex-shrink-0 flex flex-col items-center sm:items-end justify-center pt-2">
        <Link
          href="https://play.google.com/store/apps/details?id=com.choresnest"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 bg-[#01875f] hover:bg-[#016848] text-white font-medium rounded-full transition-colors w-full sm:w-auto min-w-[140px]"
        >
          Install
        </Link>
        <p className="text-[10px] text-muted-foreground mt-2">Available on Google Play</p>
      </div>
    </div>
  );
}
