import { Hero } from "@/components/Hero";
import { InvitationQuote } from "@/components/InvitationQuote";
import { Timeline } from "@/components/Timeline";
import { Location } from "@/components/Location";
import { RSVP } from "@/components/RSVP";
import { Donation } from "@/components/Donation";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden selection:bg-primary/20 selection:text-foreground">
      <Hero />
      <InvitationQuote />
      <Timeline />
      <Location />
      <RSVP />
      <Donation />

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/40">
        <p>© 2026 Natwut Suntornroj Ordination Ceremony</p>
      </footer>
    </main>
  );
}
