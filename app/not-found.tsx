import { LinkButton } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-x text-center">
        <h1>We could not find that page.</h1>
        <p className="mx-auto mt-5 max-w-md text-lg">Don't worry. Go back home or ask our team and we will point you to the right place.</p>
        <div className="mt-8 flex justify-center gap-3"><LinkButton href="/">Go home</LinkButton><LinkButton href="/contact" variant="outline">Talk to us</LinkButton></div>
      </div>
    </section>
  );
}
