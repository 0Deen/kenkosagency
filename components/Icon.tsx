import {
  ArrowRight, ArrowUpRight, BadgeCheck, Bike, Boxes, BookOpen, Briefcase, Building2, Camera, Car, Check, CheckCircle2,
  ChefHat, Circle, ClipboardCheck, Clock, Coffee, DoorOpen, Facebook, Factory, FileText, Fingerprint, Globe,
  GraduationCap, HardHat, HeartHandshake, Home, Handshake, Hotel, Instagram, Landmark, Languages, Link2, Luggage, Mail, MapPin,
  MessageCircle, Package, Phone, Plane, PlaneLanding, PlaneTakeoff, Receipt, Route, Search, Shield, ShieldCheck,
  SprayCan, Stamp, Stethoscope, Ticket, Truck, UtensilsCrossed, Users, Wheat, Wrench, TriangleAlert, Info, Wallet,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  ArrowRight, ArrowUpRight, BadgeCheck, Bike, Boxes, BookOpen, Briefcase, Building2, Camera, Car, Check, CheckCircle2,
  ChefHat, Circle, ClipboardCheck, Clock, Coffee, DoorOpen, Facebook, Factory, FileText, Fingerprint, Globe,
  GraduationCap, HardHat, HeartHandshake, Home, Handshake, Hotel, Instagram, Landmark, Languages, Link2, Luggage, Mail, MapPin,
  MessageCircle, Package, Phone, Plane, PlaneLanding, PlaneTakeoff, Receipt, Route, Search, Shield, ShieldCheck,
  SprayCan, Stamp, Stethoscope, Ticket, Truck, UtensilsCrossed, Users, Wheat, Wrench, TriangleAlert, Info, Wallet,
};

export function Icon({ name, className = "h-5 w-5", strokeWidth = 1.6 }: { name: string; className?: string; strokeWidth?: number }) {
  const Cmp = map[name] ?? Circle;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
