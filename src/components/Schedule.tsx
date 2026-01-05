import { EVENT_DETAILS } from "@/data/event";
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import ScheduleIcon from '@mui/icons-material/Schedule';
import FaceIcon from '@mui/icons-material/Face';

interface ScheduleItemProps {
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

const ScheduleItem = ({ time, title, description, icon, isLast }: ScheduleItemProps) => (
  <>
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center size-10 min-h-10 rounded-full bg-primary/10 text-primary">
        {icon}
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

const scheduleData = [
  {
    date: '16 มกราคม 2569',
    items: [
      {
        time: '13:00 น.',
        title: 'พิธีปลงผมนาค',
        description: 'ณ พัทธสีมา วัดบางโฉลงใน',
        icon: <FaceIcon className="material-symbols-outlined text-[20px]" />,
      }
    ]
  },
  {
    date: '17 มกราคม 2569',
    items: [
      {
        time: EVENT_DETAILS.schedule.ceremony,
        title: "นำนาคเข้าอุปสมบท",
        description: "ณ พัทธสีมา วัดบางโฉลงใน",
        icon: <SelfImprovementIcon className="material-symbols-outlined text-[20px]" />,
      },
      {
        time: EVENT_DETAILS.schedule.lunch,
        title: "ถวายภัตตาหารเพลแด่พระภิกษุสงฆ์",
        description: "ร่วมถวายภัตตาหารและจตุปัจจัย",
        icon: <RiceBowlIcon className="material-symbols-outlined text-[20px]" />,
      },
      {
        time: EVENT_DETAILS.schedule.reception,
        title: "เชิญแขกรับประทานอาหาร",
        description: "ร่วมรับประทานอาหารโต๊ะจีน",
        icon: <RestaurantIcon className="material-symbols-outlined text-[20px]" />,
      },
    ]
  }
];

export const Schedule = () => {
  return (
    <section id="schedule" className="bg-white rounded-xl shadow-sm border border-[#e5e1dc] p-6 md:p-8 mb-8">
      <div className="flex items-center gap-3 mb-8 border-b border-[#f0ebe6] pb-4">
        <ScheduleIcon className="material-symbols-outlined text-primary text-2xl" />
        <h2 className="text-[#181511] text-2xl font-bold font-thai">กำหนดการ</h2>
      </div>

      <div className="flex flex-col gap-8">
        {scheduleData.map((day, dayIndex) => (
          <div key={dayIndex}>
            <div className="bg-primary/5 text-primary-dark px-6 py-2 rounded-full text-sm font-semibold border border-primary/20 backdrop-blur-sm z-10 shadow-sm max-w-[210px] mb-6 justify-self-center font-thai">
              {day.date}
            </div>

            <div className="grid grid-cols-[48px_1fr] gap-x-4">
              {day.items.map((item, index) => (
                <ScheduleItem
                  key={index}
                  time={item.time}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  isLast={index === day.items.length - 1}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};