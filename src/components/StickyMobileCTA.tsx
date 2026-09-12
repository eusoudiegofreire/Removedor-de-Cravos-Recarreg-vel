import Link from "next/link";
import { CTA_LABEL, CTA_LINK } from "@/config/site";

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-rose-light bg-white/95 p-3 backdrop-blur-md sm:hidden">
      <Link
        href={CTA_LINK}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-bold text-white shadow-card"
      >
        {CTA_LABEL}
      </Link>
    </div>
  );
}
