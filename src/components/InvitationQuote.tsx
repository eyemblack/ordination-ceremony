"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function InvitationQuote() {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute -top-10 left-1/2 -translate-x-1/2 text-primary/20"
        >
          <Quote size={64} fill="currentColor" />
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-serif italic text-foreground/80">
            "ขอเรียนเชิญไปร่วมอนุโมทนาในงานอุปสมบทครั้งนี้โดยพร้อมเพียงกัน
            กรรมใดที่ผู้อุปสมบทได้ล่วงเกินท่านด้วย กายกรรม วจีกรรม มโนกรรม
            ขอได้โปรดอโหสิกรรม ให้แก่ผู้อุปสมบทด้วยเถิด"
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
