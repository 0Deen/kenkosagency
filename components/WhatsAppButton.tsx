import { MessageCircle, Phone } from "lucide-react";
import { contact, whatsappLink } from "@/lib/contact";

/** Sticky contact buttons: always one tap away on a phone. */
export function WhatsAppButton() {
  return (
    <div className="fixed bottom-24 right-4 z-30 flex flex-col items-end gap-3 md:bottom-4">
      <a href={contact.phoneHref} aria-label={`Call ${contact.phone}`} className="grid h-12 w-12 place-items-center rounded-full bg-navy text-white shadow-lg hover:bg-navy-deep dark:bg-white/10 dark:hover:bg-white/20">
        <Phone className="h-5 w-5" aria-hidden="true" />
      </a>
      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat with Kenkos on WhatsApp"
        className="flex h-14 items-center gap-2 rounded-full bg-[#25D366] px-5 font-medium text-[#0b3d1e] shadow-lg hover:bg-[#1fbd5a]">
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
