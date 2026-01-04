"use client";

import { motion } from "framer-motion";
import { Sun, Utensils } from "lucide-react";

interface TimelineItemProps {
  time: string;
  title: string;
  description?: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

function TimelineItem({ time, title, description, icon, isLast }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex gap-4 md:gap-8 relative"
    >
      {/* Line connecting dots */}
      {!isLast && (
        <div className="absolute left-[19px] md:left-[23px] top-12 bottom-[-48px] w-0.5 bg-border z-0"></div>
      )}

      {/* Icon Circle */}
      <div className="relative z-10 shrink-0">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 text-primary shadow-sm">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="pb-12 pt-1 flex-1">
        <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-2">
          {time}
        </span>
        <h3 className="text-xl md:text-2xl font-serif text-foreground mb-1">
          {title}
        </h3>
        {description && (
          <p className="text-muted-foreground text-sm md:text-base">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export function Timeline() {
  const events = [
    {
      time: "08:00 น.",
      title: "นำนาคเข้าอุปสมบท",
      description: "Procession of the Naga to the ordination hall",
      icon: <Sun size={20} />,
    },
    {
      time: "11:00 น.",
      title: "ถวายภัตตาหารเพล",
      description: "Offering lunch to the monks",
      icon: <Utensils size={20} />,
    },
    {
      time: "12:00 น.",
      title: "เชิญแขกรับประทานอาหาร",
      description: "Lunch for guests",
      icon: <Utensils size={20} />,
    },
  ];

  return (
    <section className="py-20 px-4 md:px-6 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
          กำหนดการ
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </motion.div>

      <div className="space-y-4">
        {events.map((event, index) => (
          <TimelineItem
            key={index}
            {...event}
            isLast={index === events.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
