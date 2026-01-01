import { MapPin, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto text-center space-y-8">
      <h2 className="text-3xl font-bold text-primary">สถานที่จัดงาน</h2>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-border inline-flex flex-col items-center gap-6 w-full md:w-auto hover:shadow-md transition-shadow duration-300">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
          <MapPin className="w-8 h-8" />
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">วัดบางโฉลงใน</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            ตำบลบางโฉลง อำเภอบางพลี สมุทรปราการ
          </p>
        </div>

        <a
          href="https://maps.app.goo.gl/CmUbqqiRmYk63iwr6"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/20"
        >
          <Navigation className="w-4 h-4" />
          <span>นำทางไปยังวัด</span>
        </a>
      </div>
    </section>
  );
}
