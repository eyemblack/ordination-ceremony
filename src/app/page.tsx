import Hero from "@/components/Hero";
import Invitation from "@/components/Invitation";
import Schedule from "@/components/Schedule";
import Location from "@/components/Location";

export default function Home() {
  return (
    <main className="min-h-screen pb-20 selection:bg-primary/20">
      <Hero />
      <Invitation />
      <Schedule />
      <Location />

      <footer className="text-center text-muted-foreground text-sm py-8 mt-12 border-t border-border/50">
        <p>© 2569 งานบวชนาคแบล็ค | วัดบางโฉลงใน</p>
      </footer>
    </main>
  );
}
