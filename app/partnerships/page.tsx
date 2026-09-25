import { ServicePage } from "@/components/ServicePage";
import { getService } from "@/lib/services";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Partnerships | Kenkos", "Employers, agencies, training institutions, travel partners and logistics companies can partner with Kenkos.", "/partnerships");

export default function Page() {
  return <ServicePage service={getService("partnerships")!} />;
}
