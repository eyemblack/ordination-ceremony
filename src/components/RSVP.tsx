"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function RSVP() {
  const [formState, setFormState] = useState({
    name: "",
    guests: "1",
    attending: "yes",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`ขอบคุณครับ! (Simulated)\nName: ${formState.name}\nGuests: ${formState.guests}\nAttending: ${formState.attending}`);
  };

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-xl mx-auto border border-border p-8 md:p-12 rounded-2xl shadow-sm bg-card">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif text-foreground mb-4">ยืนยันการมาร่วมงาน</h2>
          <p className="text-muted-foreground">RSVP</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              ชื่อ-นามสกุล (Name)
            </label>
            <input
              type="text"
              id="name"
              required
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="Your Name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="guests" className="text-sm font-medium text-foreground">
              จำนวนผู้ติดตาม (Number of Guests)
            </label>
            <select
              id="guests"
              value={formState.guests}
              onChange={(e) => setFormState({ ...formState, guests: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground block">
              ท่านสามารถมาร่วมงานได้หรือไม่?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="attending"
                  value="yes"
                  checked={formState.attending === "yes"}
                  onChange={(e) => setFormState({ ...formState, attending: e.target.value })}
                  className="w-4 h-4 text-primary focus:ring-primary"
                />
                <span>มาร่วมงาน (Yes, I will attend)</span>
              </label>
            </div>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="attending"
                  value="no"
                  checked={formState.attending === "no"}
                  onChange={(e) => setFormState({ ...formState, attending: e.target.value })}
                  className="w-4 h-4 text-primary focus:ring-primary"
                />
                <span>ไม่สะดวกมาร่วมงาน (No)</span>
              </label>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 bg-primary text-primary-foreground font-medium rounded-lg shadow-md hover:bg-primary/90 transition-colors mt-4"
          >
            ส่งคำตอบ (Submit)
          </motion.button>
        </form>
      </div>
    </section>
  );
}
