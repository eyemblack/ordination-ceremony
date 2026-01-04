import { EVENT_DETAILS } from "@/data/event";

interface ScheduleItemProps {
  time: string;
  title: string;
  description: string;
  icon: string;
  isLast?: boolean;
}

export const ScheduleItem = ({ time, title, description, icon, isLast }: ScheduleItemProps) => (
  <>
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center size-10 min-h-10 rounded-full bg-primary/10 text-primary">
        <span className="material-symbols-outlined text-[20px]">{icon}</span>
      </div>
      {!isLast && <div className="w-[2px] bg-[#e5e1dc] h-full min-h-[40px]"></div>}
    </div>
    <div className={`flex flex-col ${!isLast ? 'pb-8' : ''} pt-1`}>
      <span className="text-primary font-bold text-sm uppercase tracking-wide font-display">{time}</span>
      <h3 className="text-[#181511] text-lg font-bold font-thai">{title}</h3>
      <p className="text-gray-500 text-sm mt-1 font-thai">{description}</p>
    </div>
  </>
);

const scheduleItems = [
  {
    time: EVENT_DETAILS.schedule.ceremony,
    title: "นำนาคเข้าอุปสมบท",
    description: "ณ พัทธสีมา วัดบางโฉลงใน",
    icon: "self_improvement",
  },
  {
    time: EVENT_DETAILS.schedule.lunch,
    title: "ถวายภัตตาหารเพลแด่พระภิกษุสงฆ์",
    description: "ร่วมถวายภัตตาหารและจตุปัจจัย",
    icon: "rice_bowl",
  },
  {
    time: EVENT_DETAILS.schedule.reception,
    title: "เชิญแขกรับประทานอาหาร",
    description: "ร่วมรับประทานอาหารโต๊ะจีน",
    icon: "restaurant",
  },
];

export const Schedule = () => {
  return (
    <section id="schedule" className="bg-white rounded-xl shadow-sm border border-[#e5e1dc] p-6 md:p-8 mb-8">
      <div className="flex items-center gap-3 mb-8 border-b border-[#f0ebe6] pb-4">
        <span className="material-symbols-outlined text-primary text-2xl">schedule</span>
        <h2 className="text-[#181511] text-2xl font-bold font-thai">กำหนดการ</h2>
      </div>

      <div className="grid grid-cols-[48px_1fr] gap-x-4">
        {scheduleItems.map((item, index) => (
          <ScheduleItem
            key={index}
            time={item.time}
            title={item.title}
            description={item.description}
            icon={item.icon}
            isLast={index === scheduleItems.length - 1}
          />
        ))}
      </div>
    </section>
  );
};