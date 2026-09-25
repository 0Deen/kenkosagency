"use client";

import { useState, type FormEvent } from "react";
import { whatsappLink } from "@/lib/contact";

const topics = ["Work Abroad", "Travel", "Visa", "Flight", "Relocation", "Logistics", "Partnership", "General Question"];
const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

const field = "mt-2 w-full min-h-[52px] rounded-card border border-navy/25 bg-white px-4 text-[16px] placeholder:text-navy/40";

export function ContactForm({ defaultTopic = "" }: { defaultTopic?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "whatsapp" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""), phone: String(fd.get("phone") || ""), email: String(fd.get("email") || ""),
      topic: String(fd.get("topic") || ""), message: String(fd.get("message") || ""),
    };
    if (endpoint) {
      setStatus("sending");
      try {
        const res = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) });
        setStatus(res.ok ? "sent" : "error");
      } catch { setStatus("error"); }
      return;
    }
    // No form service connected: open WhatsApp with the message ready to send.
    const text = `Hello Kenkos, my name is ${data.name}.\nPhone: ${data.phone}${data.email ? `\nEmail: ${data.email}` : ""}\nI need help with: ${data.topic}\n${data.message}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setStatus("whatsapp");
  }

  if (status === "sent") {
    return <div className="card p-8" role="status"><h3>Thank you.</h3><p className="mt-3 text-lg">Your message has been received. Our team will get back to you.</p></div>;
  }
  if (status === "whatsapp") {
    return (
      <div className="card p-8" role="status">
        <h3>Thank you. One last step.</h3>
        <p className="mt-3 text-lg">We opened WhatsApp with your message ready. Press send there so our team receives it. If WhatsApp did not open, call or message us on +254 702 925 132.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-5 p-6 sm:p-8" aria-label="Contact form">
      <div><label htmlFor="name" className="font-medium">Full name</label><input id="name" name="name" required autoComplete="name" className={field} /></div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="phone" className="font-medium">Phone</label><input id="phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={field} /></div>
        <div><label htmlFor="email" className="font-medium">Email <span className="font-normal text-navy/60">(optional)</span></label><input id="email" name="email" type="email" autoComplete="email" className={field} /></div>
      </div>
      <div>
        <label htmlFor="topic" className="font-medium">I need help with</label>
        <select id="topic" name="topic" required defaultValue={defaultTopic} className={field}>
          <option value="" disabled>Choose one</option>
          {topics.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      <div><label htmlFor="message" className="font-medium">Message</label><textarea id="message" name="message" rows={5} className={`${field} py-3`} placeholder="Tell us what you need. You do not need to know all the details." /></div>
      {status === "error" && <p role="alert" className="rounded-card bg-white p-3 text-[15px] text-red-800">Sorry, we could not send your message. Please call or WhatsApp +254 702 925 132.</p>}
      <button type="submit" disabled={status === "sending"} className="btn-primary w-full sm:w-auto">{status === "sending" ? "Sending..." : "Send My Question"}</button>
      <p className="text-sm text-navy/65">We only use your details to reply to you. Never send money because of a message from a personal number. Read our Safety page.</p>
    </form>
  );
}
