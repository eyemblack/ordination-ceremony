import { Zap } from 'lucide-react'; // Placeholder icon, we might use something more traditional or just text

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center p-6 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[url('/pattern-gold.svg')] opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[50vh] bg-gradient-to-b from-primary/10 to-transparent blur-3xl rounded-full pointer-events-none"></div>

      <div className="z-10 animate-in fade-in zoom-in duration-1000 space-y-6">
        <p className="text-secondary-foreground/80 text-lg md:text-xl tracking-widest uppercase font-light">
          ขอเชิญร่วมอนุโมทนาบุญ
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-primary drop-shadow-sm tracking-tight">
          นาคแบล็ค
        </h1>

        <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full my-6"></div>

        <p className="text-xl md:text-2xl text-foreground font-light">
          พิธีอุปสมบท
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-secondary-foreground/70 mt-4">
          <span className="text-lg">16 - 17 มกราคม 2569</span>
        </div>
      </div>
    </section>
  );
}
