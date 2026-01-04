"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-background text-foreground">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-2"
        >
          <p className="text-secondary uppercase tracking-[0.2em] text-sm md:text-base font-medium">
            The Ordination Ceremony of
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary">
            พิธีอุปสมบท
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="py-6"
        >
          <h2 className="text-2xl md:text-4xl font-light text-foreground/90">
            นายณัฐวุฒิ สุนทรโรจน์
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-2 font-serif italic">
            Natwut Suntornroj
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center space-y-4"
        >
          <div className="w-16 h-px bg-primary/50"></div>
          <p className="text-xl md:text-2xl font-serif text-foreground">
            วันเสาร์ที่ 17 มกราคม 2569
          </p>
          <p className="text-base md:text-lg text-muted-foreground">
            Saturday, 17 January 2026
          </p>
          <div className="w-16 h-px bg-primary/50"></div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 z-10 animate-bounce text-primary/50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
