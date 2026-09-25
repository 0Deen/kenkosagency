import { whatsappLink } from "@/lib/contact";

export function AnnouncementBar() {
  return (
    <div className="bg-navy-deep text-ivory-sand dark:bg-white/[0.04] dark:text-white/70">
      <div className="container-x flex flex-wrap items-center justify-center gap-x-5 gap-y-2 py-2.5 text-[13px] sm:text-sm">
        <p className="text-center">Need help with travel, overseas jobs or logistics? Our team is ready to guide you.</p>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="rounded-full bg-gold px-4 py-1 text-[13px] font-medium text-navy-deep hover:bg-[#c99f76]">
          WhatsApp Us
        </a>
      </div>
    </div>
  );
}
