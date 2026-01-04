"use client";

import { motion } from "framer-motion";
import { QrCode } from "lucide-react";

export function Donation() {
  return (
    <section className="py-24 px-4 bg-muted/20">
      <div className="container mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            ร่วมอนุโมทนาบุญ
          </h2>
          <p className="text-muted-foreground mb-12">
            สำหรับผู้ที่ไม่สามารถมาร่วมงานได้ สามารถร่วมทำบุญได้ตามกำลังศรัทธา
          </p>

          <div className="bg-card p-8 rounded-2xl shadow-sm inline-block border border-border">
            <div className="w-48 h-48 bg-muted flex items-center justify-center rounded-lg mb-6 mx-auto">
              {/* Visual Placeholder for actual QR Code */}
              <div className="text-muted-foreground flex flex-col items-center gap-2">
                <QrCode size={48} />
                <span className="text-xs">QR Code Placeholder</span>
              </div>
            </div>

            <div className="space-y-1">
              <p className="font-medium text-lg">ธนาคารกสิกรไทย (KBank)</p>
              <p className="text-2xl font-serif text-primary tracking-wider">
                XXX-X-XXXXX-X
              </p>
              <p className="text-sm text-muted-foreground">นายณัฐวุฒิ สุนทรโรจน์</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
