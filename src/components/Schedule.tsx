import { Calendar, Clock } from 'lucide-react';

export default function Schedule() {
  const events = [
    {
      date: "16 มกราคม 2569",
      items: [
        { time: "15:00 - 17:00", activity: "พิธีปลงผมนาค", description: "ณ วัดบางโฉลงใน" }
      ]
    },
    {
      date: "17 มกราคม 2569",
      items: [
        { time: "07:00", activity: "แห่นาคเข้าโบสถ์", description: "" },
        { time: "08:00", activity: "พิธีอุปสมบท", description: "ณ พัทธสีมา วัดบางโฉลงใน" },
        { time: "11:00", activity: "ฉลองพระใหม่", description: "และถวายภัตตาหารเพล" }
      ]
    }
  ];

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-primary mb-12">กำหนดการ</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {events.map((day, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
            <div className="bg-primary/10 p-4 border-b border-primary/10 flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold text-primary-foreground/80 dark:text-primary">{day.date}</h3>
            </div>
            <div className="p-6 space-y-6">
              {day.items.map((item, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="mt-1 bg-primary/10 text-primary p-2 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-primary mb-1">{item.time}</span>
                    <h4 className="text-lg font-medium text-foreground">{item.activity}</h4>
                    {item.description && <p className="text-muted-foreground text-sm">{item.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
