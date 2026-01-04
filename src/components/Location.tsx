"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function Location() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full text-primary mb-4">
            <MapPin size={32} />
          </div>

          <h2 className="text-3xl md:text-5xl font-serif text-foreground">
            วัดบางโฉลงใน
          </h2>

          <div className="space-y-2 text-lg md:text-xl text-muted-foreground">
            <p>Wat Bang Chalong Nai</p>
            <p>ต.บางโฉลง อ.บางพลี จ.สมุทรปราการ</p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="https://www.google.com/maps/search/?api=1&query=Wat+Bang+Chalong+Nai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MapPin size={20} />
              <span>Google Maps</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
